<?php
/**
 * API papan peringkat SDG Quest
 *
 * GET  skor.php?mode=quiz&paket=semua   10 skor tertinggi Mode Quiz (paket: semua, quiz, sort, dec)
 * GET  skor.php?mode=ular               10 hasil permainan ular tangga terbaru
 * POST skor.php                         simpan skor baru, isi body berupa JSON
 *
 * Contoh body POST Mode Quiz:
 *   {"mode":"quiz","paket":"semua","nama":"Ani","skor":120,"kategori":0}
 * Contoh body POST ular tangga:
 *   {"mode":"ular","kategori":4,"durasi":10,"kartu":6,
 *    "pemain":[{"nama":"Ani","poin":8,"benar":4,"kartu":3},{"nama":"Budi","poin":5,"benar":3,"kartu":3}]}
 *
 * Data disimpan di ../data/skor.json sehingga tidak perlu database.
 * Bisa dijalankan di PHP 7.4 ke atas (XAMPP, Laragon, atau hosting biasa).
 */
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const FILE_DATA   = __DIR__ . '/../data/skor.json';
const TAMPIL      = 10;    // jumlah baris yang dikirim ke halaman
const SIMPAN_QUIZ = 100;   // skor terbaik yang disimpan untuk setiap paket
const SIMPAN_ULAR = 100;   // hasil ular tangga terbaru yang disimpan
const PAKET       = ['semua' => 150, 'quiz' => 50, 'sort' => 50, 'dec' => 50];   // skor maksimal tiap paket
const DURASI      = [5, 10, 20];

date_default_timezone_set('Asia/Jakarta');

// kesalahan tak terduga tetap dibalas dalam bentuk JSON
set_exception_handler(function (Throwable $e) {
    error_log('SDG Quest skor.php: ' . $e->getMessage());
    kirim(500, ['ok' => false, 'pesan' => 'Terjadi kesalahan di server.']);
});

/* ---------- fungsi bantu ---------- */
function kirim(int $kode, array $isi): void
{
    http_response_code($kode);
    echo json_encode($isi, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function gagal(int $kode, string $pesan): void
{
    kirim($kode, ['ok' => false, 'pesan' => $pesan]);
}

/** Nama pemain: tanpa tag HTML dan karakter kontrol, maksimal 16 karakter. */
function bersihkanNama($nilai, string $cadangan): string
{
    $teks = is_string($nilai) ? strip_tags($nilai) : '';
    $teks = preg_replace('/[\p{C}]+/u', '', $teks) ?? '';
    $teks = trim(preg_replace('/\s+/u', ' ', $teks) ?? '');
    $teks = function_exists('mb_substr') ? mb_substr($teks, 0, 16) : substr($teks, 0, 16);
    return $teks === '' ? $cadangan : $teks;
}

/** Bilangan bulat dalam rentang tertentu, selain itu permintaan ditolak. */
function bilangan($nilai, int $min, int $max, string $nama): int
{
    if (!is_int($nilai) || $nilai < $min || $nilai > $max) {
        gagal(422, "Nilai $nama harus bilangan bulat $min sampai $max.");
    }
    return $nilai;
}

/** Urutan papan peringkat: skor tertinggi dulu, kalau sama yang lebih dulu tercatat di atas. */
function urutkanSkor(array $daftar): array
{
    usort($daftar, function ($a, $b) {
        return [$b['skor'], $a['ts']] <=> [$a['skor'], $b['ts']];
    });
    return $daftar;
}

/** Hapus kolom internal sebelum dikirim ke halaman. */
function publik(array $baris): array
{
    unset($baris['ts']);
    return $baris;
}

function dataKosong(): array
{
    return ['quiz' => [], 'ular' => []];
}

function bacaIsi($berkas): array
{
    rewind($berkas);
    $data = json_decode((string) stream_get_contents($berkas), true);
    if (!is_array($data)) {
        $data = [];
    }
    return $data + dataKosong();
}

/** Baca data dengan kunci bersama, aman dipakai banyak pengunjung sekaligus. */
function bacaData(): array
{
    if (!is_file(FILE_DATA)) {
        return dataKosong();
    }
    $berkas = fopen(FILE_DATA, 'r');
    if ($berkas === false) {
        gagal(500, 'File data tidak bisa dibaca.');
    }
    flock($berkas, LOCK_SH);
    $data = bacaIsi($berkas);
    flock($berkas, LOCK_UN);
    fclose($berkas);
    return $data;
}

/** Ubah data dengan kunci eksklusif supaya dua penyimpanan bersamaan tidak saling menimpa. */
function ubahData(callable $ubah)
{
    $folder = dirname(FILE_DATA);
    if (!is_dir($folder) && !mkdir($folder, 0775, true)) {
        gagal(500, 'Folder data tidak bisa dibuat.');
    }
    $berkas = @fopen(FILE_DATA, 'c+');
    if ($berkas === false) {
        gagal(500, 'File data tidak bisa ditulis. Pastikan folder data boleh ditulisi oleh server.');
    }
    flock($berkas, LOCK_EX);
    $data = bacaIsi($berkas);
    $hasil = $ubah($data);
    rewind($berkas);
    ftruncate($berkas, 0);
    fwrite($berkas, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    fflush($berkas);
    flock($berkas, LOCK_UN);
    fclose($berkas);
    return $hasil;
}

/* ---------- GET: ambil papan peringkat atau riwayat ---------- */
function ambil(): void
{
    $mode = $_GET['mode'] ?? '';
    $data = bacaData();

    if ($mode === 'quiz') {
        $paket = $_GET['paket'] ?? 'semua';
        if (!is_string($paket) || !isset(PAKET[$paket])) {
            gagal(400, 'Paket permainan tidak dikenal.');
        }
        $daftar = array_filter($data['quiz'], function ($r) use ($paket) {
            return ($r['paket'] ?? '') === $paket;
        });
        $daftar = array_slice(urutkanSkor(array_values($daftar)), 0, TAMPIL);
        kirim(200, ['ok' => true, 'data' => array_map('publik', $daftar)]);
    }

    if ($mode === 'ular') {
        $daftar = array_reverse(array_slice($data['ular'], -TAMPIL));
        kirim(200, ['ok' => true, 'data' => array_map('publik', $daftar)]);
    }

    gagal(400, 'Parameter mode harus quiz atau ular.');
}

/* ---------- POST: simpan skor baru ---------- */
function simpan(): void
{
    $mentah = file_get_contents('php://input', false, null, 0, 8192);
    $masuk = json_decode($mentah === false ? '' : $mentah, true);
    if (!is_array($masuk)) {
        gagal(400, 'Data harus dikirim dalam format JSON.');
    }
    $mode = $masuk['mode'] ?? '';
    $id = bin2hex(random_bytes(6));

    if ($mode === 'quiz') {
        $paket = $masuk['paket'] ?? '';
        if (!is_string($paket) || !isset(PAKET[$paket])) {
            gagal(422, 'Paket permainan tidak dikenal.');
        }
        $skor = bilangan($masuk['skor'] ?? null, 0, PAKET[$paket], 'skor');
        if ($skor % 5 !== 0) {
            gagal(422, 'Skor Mode Quiz selalu kelipatan 5.');
        }
        $baris = [
            'id'       => $id,
            'paket'    => $paket,
            'nama'     => bersihkanNama($masuk['nama'] ?? '', 'Pemain 1'),
            'skor'     => $skor,
            'maks'     => PAKET[$paket],
            'kategori' => bilangan($masuk['kategori'] ?? 0, 0, 17, 'kategori'),
            'waktu'    => date(DATE_ATOM),
            'ts'       => microtime(true),
        ];

        $hasil = ubahData(function (array &$data) use ($baris, $paket) {
            $sama = [];
            $lain = [];
            foreach ($data['quiz'] as $r) {
                if (($r['paket'] ?? '') === $paket) {
                    $sama[] = $r;
                } else {
                    $lain[] = $r;
                }
            }
            $sama[] = $baris;
            $sama = urutkanSkor($sama);
            $posisi = array_search($baris['id'], array_column($sama, 'id'), true);
            $total = count($sama);
            $sama = array_slice($sama, 0, SIMPAN_QUIZ);
            $data['quiz'] = array_merge($lain, $sama);
            return [
                'peringkat' => $posisi + 1,
                'total'     => $total,
                'data'      => array_map('publik', array_slice($sama, 0, TAMPIL)),
            ];
        });
        kirim(201, ['ok' => true, 'id' => $id] + $hasil);
    }

    if ($mode === 'ular') {
        $daftar = $masuk['pemain'] ?? null;
        if (!is_array($daftar) || count($daftar) < 2 || count($daftar) > 4) {
            gagal(422, 'Data pemain harus berisi 2 sampai 4 orang.');
        }
        $durasi = bilangan($masuk['durasi'] ?? null, 1, 60, 'durasi');
        if (!in_array($durasi, DURASI, true)) {
            gagal(422, 'Durasi permainan tidak dikenal.');
        }
        $pemain = [];
        foreach (array_values($daftar) as $i => $p) {
            if (!is_array($p)) {
                gagal(422, 'Format data pemain tidak valid.');
            }
            $pemain[] = [
                'nama'  => bersihkanNama($p['nama'] ?? '', 'Pemain ' . ($i + 1)),
                'poin'  => bilangan($p['poin'] ?? null, 0, 9999, 'poin'),
                'benar' => bilangan($p['benar'] ?? null, 0, 999, 'benar'),
                'kartu' => bilangan($p['kartu'] ?? null, 0, 999, 'kartu'),
            ];
        }
        usort($pemain, function ($a, $b) {
            return [$b['poin'], $b['benar']] <=> [$a['poin'], $a['benar']];
        });
        $baris = [
            'id'       => $id,
            'kategori' => bilangan($masuk['kategori'] ?? null, 1, 17, 'kategori'),
            'durasi'   => $durasi,
            'kartu'    => bilangan($masuk['kartu'] ?? null, 0, 9999, 'kartu'),
            'pemain'   => $pemain,
            'waktu'    => date(DATE_ATOM),
            'ts'       => microtime(true),
        ];
        ubahData(function (array &$data) use ($baris) {
            $data['ular'][] = $baris;
            $data['ular'] = array_slice($data['ular'], -SIMPAN_ULAR);
            return null;
        });
        kirim(201, ['ok' => true, 'id' => $id]);
    }

    gagal(422, 'Mode harus quiz atau ular.');
}

/* ---------- arahkan permintaan ---------- */
$metode = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($metode === 'GET') {
    ambil();
} elseif ($metode === 'POST') {
    simpan();
} else {
    header('Allow: GET, POST');
    gagal(405, 'Metode tidak didukung.');
}
