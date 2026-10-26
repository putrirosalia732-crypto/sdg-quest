<?php
/**
 * Fungsi bersama untuk halaman admin dan API soal SDG Quest:
 * penyimpanan JSON, sesi login, token CSRF, validasi soal, dan kerangka halaman admin.
 */
declare(strict_types=1);

if (!defined('SDG_QUEST')) {
    http_response_code(403);
    exit;
}

const DIR_DATA   = __DIR__ . '/../data';
const FILE_SOAL  = DIR_DATA . '/soal.json';
const FILE_ADMIN = DIR_DATA . '/admin.php';      // file PHP supaya isinya tidak tampil walau dibuka dari browser
const ADMIN_BAWAAN_USER  = 'admin';
const ADMIN_BAWAAN_SANDI = 'admin123';
const SANDI_MIN = 8;

const SDG_DAFTAR = [
    1 => ['Tanpa Kemiskinan', '#E5243B'],
    2 => ['Tanpa Kelaparan', '#DDA63A'],
    3 => ['Kehidupan Sehat dan Sejahtera', '#4C9F38'],
    4 => ['Pendidikan Berkualitas', '#C5192D'],
    5 => ['Kesetaraan Gender', '#FF3A21'],
    6 => ['Air Bersih dan Sanitasi Layak', '#26BDE2'],
    7 => ['Energi Bersih dan Terjangkau', '#FCC30B'],
    8 => ['Pekerjaan Layak dan Pertumbuhan Ekonomi', '#A21942'],
    9 => ['Industri, Inovasi, dan Infrastruktur', '#FD6925'],
    10 => ['Berkurangnya Kesenjangan', '#DD1367'],
    11 => ['Kota dan Permukiman yang Berkelanjutan', '#FD9D24'],
    12 => ['Konsumsi dan Produksi yang Bertanggung Jawab', '#BF8B2E'],
    13 => ['Penanganan Perubahan Iklim', '#3F7E44'],
    14 => ['Ekosistem Lautan', '#0A97D9'],
    15 => ['Ekosistem Daratan', '#56C02B'],
    16 => ['Perdamaian, Keadilan, dan Kelembagaan yang Tangguh', '#00689D'],
    17 => ['Kemitraan untuk Mencapai Tujuan', '#19486A'],
];
const JENIS_SAMPAH = ['org' => 'Organik', 'anorg' => 'Anorganik', 'b3' => 'B3', 'res' => 'Residu'];

/* Jumlah minimal supaya permainan tetap bisa berjalan */
const MIN_QUEST_PER_SDG    = 5;    // SDG Quiz per kategori mengambil 5 soal
const MIN_KEPUTUSAN        = 5;    // SDG Decision mengambil 5 situasi
const MIN_SAMPAH_PER_JENIS = 2;    // Waste Sorting mengambil 2 sampah dari setiap jenis
const MIN_SAMPAH           = 10;   // dan total 10 sampah

/* Panjang maksimal isian */
const PANJANG = ['pertanyaan' => 300, 'jawaban' => 150, 'penjelasan' => 400, 'situasi' => 300, 'nama' => 60];

const JENIS_SOAL = [
    'quest'     => ['Kartu Quest', 'soal', 'Dipakai di kartu Quest ular tangga dan SDG Quiz.'],
    'keputusan' => ['SDG Decision', 'situasi', 'Dipakai di permainan SDG Decision pada Mode Quiz.'],
    'sampah'    => ['Waste Sorting', 'sampah', 'Dipakai di permainan Waste Sorting pada Mode Quiz.'],
];

date_default_timezone_set('Asia/Jakarta');

/* =================== teks =================== */
function e($teks): string
{
    return htmlspecialchars((string) $teks, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function panjang(string $teks): int
{
    return function_exists('mb_strlen') ? mb_strlen($teks, 'UTF-8') : strlen($teks);
}

function kecil(string $teks): string
{
    return function_exists('mb_strtolower') ? mb_strtolower($teks, 'UTF-8') : strtolower($teks);
}

/** Rapikan isian: buang karakter kontrol, satukan spasi berlebih, buang spasi di ujung. */
function rapikan($nilai): string
{
    $teks = is_string($nilai) ? $nilai : '';
    $teks = preg_replace('/[\p{Cc}\p{Cf}]+/u', ' ', $teks) ?? '';
    return trim(preg_replace('/\s+/u', ' ', $teks) ?? '');
}

/* =================== penyimpanan JSON =================== */
function bacaJson(string $file, array $bawaan): array
{
    if (!is_file($file)) {
        return $bawaan;
    }
    $berkas = fopen($file, 'r');
    if ($berkas === false) {
        return $bawaan;
    }
    flock($berkas, LOCK_SH);
    $data = json_decode((string) stream_get_contents($berkas), true);
    flock($berkas, LOCK_UN);
    fclose($berkas);
    return is_array($data) ? $data + $bawaan : $bawaan;
}

/**
 * Ubah file JSON dengan kunci eksklusif.
 * $ubah menerima data lewat referensi dan mengembalikan true kalau berhasil,
 * atau teks pesan kesalahan kalau perubahan dibatalkan (file tidak ditulis).
 *
 * @return true|string
 */
function ubahJson(string $file, array $bawaan, callable $ubah)
{
    if (!is_dir(dirname($file)) && !mkdir(dirname($file), 0775, true)) {
        return 'Folder data tidak bisa dibuat.';
    }
    $berkas = @fopen($file, 'c+');
    if ($berkas === false) {
        return 'File data tidak bisa ditulis. Pastikan folder data boleh ditulisi oleh server.';
    }
    flock($berkas, LOCK_EX);
    $data = json_decode((string) stream_get_contents($berkas), true);
    $data = is_array($data) ? $data + $bawaan : $bawaan;
    $hasil = $ubah($data);
    if ($hasil === true) {
        rewind($berkas);
        ftruncate($berkas, 0);
        fwrite($berkas, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . "\n");
        fflush($berkas);
    }
    flock($berkas, LOCK_UN);
    fclose($berkas);
    return $hasil;
}

/* =================== bank soal =================== */
function bankKosong(): array
{
    return ['versi' => 0, 'diubah' => null, 'quest' => [], 'keputusan' => [], 'sampah' => []];
}

function bacaSoal(): array
{
    return bacaJson(FILE_SOAL, bankKosong());
}

function idBaru(string $jenis): string
{
    return substr($jenis, 0, 1) . bin2hex(random_bytes(5));
}

/** Cari indeks soal berdasarkan id, -1 kalau tidak ada. */
function cariIndeks(array $daftar, string $id): int
{
    foreach ($daftar as $i => $baris) {
        if (($baris['id'] ?? '') === $id) {
            return (int) $i;
        }
    }
    return -1;
}

/** Hitung jumlah per kelompok: per SDG untuk kartu Quest, per jenis untuk sampah. */
function hitungKelompok(array $bank, string $jenis): array
{
    $hasil = [];
    foreach ($bank[$jenis] as $baris) {
        $kunci = $jenis === 'sampah' ? (string) $baris['jenis'] : (string) $baris['sdg'];
        $hasil[$kunci] = ($hasil[$kunci] ?? 0) + 1;
    }
    return $hasil;
}

/**
 * Pastikan perubahan tidak membuat jumlah soal turun di bawah batas minimal permainan.
 * Hanya kelompok yang jumlahnya berkurang yang diperiksa.
 */
function cekMinimum(array $lama, array $baru, string $jenis): ?string
{
    if ($jenis === 'keputusan') {
        $n = count($baru['keputusan']);
        if ($n < MIN_KEPUTUSAN && $n < count($lama['keputusan'])) {
            return 'SDG Decision butuh minimal ' . MIN_KEPUTUSAN . ' situasi, jadi situasi ini tidak bisa dihapus.';
        }
        return null;
    }
    $sebelum = hitungKelompok($lama, $jenis);
    $sesudah = hitungKelompok($baru, $jenis);
    foreach ($sebelum as $kunci => $n) {
        $m = $sesudah[$kunci] ?? 0;
        if ($jenis === 'quest' && $m < MIN_QUEST_PER_SDG && $m < $n) {
            return 'SDG ' . $kunci . ' butuh minimal ' . MIN_QUEST_PER_SDG . ' soal supaya SDG Quiz tetap bisa dimainkan. Tambahkan soal baru dulu sebelum menghapus atau memindahkan soal ini.';
        }
        if ($jenis === 'sampah' && $m < MIN_SAMPAH_PER_JENIS && $m < $n) {
            return 'Jenis ' . JENIS_SAMPAH[$kunci] . ' butuh minimal ' . MIN_SAMPAH_PER_JENIS . ' sampah supaya Waste Sorting tetap bisa dimainkan.';
        }
    }
    if ($jenis === 'sampah' && count($baru['sampah']) < MIN_SAMPAH && count($baru['sampah']) < count($lama['sampah'])) {
        return 'Waste Sorting butuh minimal ' . MIN_SAMPAH . ' sampah.';
    }
    return null;
}

/**
 * Periksa isian formulir dan ubah menjadi satu baris soal.
 * @return array{0: array, 1: string[]}  [baris yang sudah rapi, daftar kesalahan]
 */
function periksaSoal(string $jenis, array $in, array $bank, string $idSendiri = ''): array
{
    $galat = [];
    $wajib = function (string $nilai, string $label, int $maks) use (&$galat): string {
        if ($nilai === '') {
            $galat[] = "$label wajib diisi.";
        } elseif (panjang($nilai) > $maks) {
            $galat[] = "$label maksimal $maks karakter (sekarang " . panjang($nilai) . ').';
        }
        return $nilai;
    };
    $sdg = is_string($in['sdg'] ?? null) || is_int($in['sdg'] ?? null) ? (int) $in['sdg'] : 0;
    if ($jenis !== 'sampah' && !isset(SDG_DAFTAR[$sdg])) {
        $galat[] = 'Pilih kategori SDG.';
    }

    if ($jenis === 'quest') {
        $baris = [
            'sdg'        => $sdg,
            'pertanyaan' => $wajib(rapikan($in['pertanyaan'] ?? ''), 'Pertanyaan', PANJANG['pertanyaan']),
            'benar'      => $wajib(rapikan($in['benar'] ?? ''), 'Jawaban benar', PANJANG['jawaban']),
            'pengecoh'   => [],
            'penjelasan' => $wajib(rapikan($in['penjelasan'] ?? ''), 'Penjelasan', PANJANG['penjelasan']),
        ];
        $pengecoh = is_array($in['pengecoh'] ?? null) ? $in['pengecoh'] : [];
        for ($i = 0; $i < 3; $i++) {
            $baris['pengecoh'][] = $wajib(rapikan($pengecoh[$i] ?? ''), 'Pilihan salah ' . ($i + 1), PANJANG['jawaban']);
        }
        $semua = array_filter(array_merge([$baris['benar']], $baris['pengecoh']), 'strlen');
        if (count(array_unique(array_map('kecil', $semua))) < count($semua)) {
            $galat[] = 'Keempat pilihan jawaban harus berbeda satu sama lain.';
        }
        foreach ($bank['quest'] as $lain) {
            if ($lain['id'] !== $idSendiri && (int) $lain['sdg'] === $sdg && kecil($lain['pertanyaan']) === kecil($baris['pertanyaan'])) {
                $galat[] = 'Pertanyaan yang sama sudah ada di SDG ' . $sdg . '.';
                break;
            }
        }
        return [$baris, $galat];
    }

    if ($jenis === 'keputusan') {
        $pilihan = is_array($in['pilihan'] ?? null) ? $in['pilihan'] : [];
        $label = ['Pilihan terbaik (+10)', 'Pilihan cukup baik (+5)', 'Pilihan kurang tepat (0)'];
        $baris = [
            'sdg'        => $sdg,
            'situasi'    => $wajib(rapikan($in['situasi'] ?? ''), 'Situasi', PANJANG['situasi']),
            'pilihan'    => [],
            'penjelasan' => $wajib(rapikan($in['penjelasan'] ?? ''), 'Penjelasan', PANJANG['penjelasan']),
        ];
        for ($i = 0; $i < 3; $i++) {
            $baris['pilihan'][] = $wajib(rapikan($pilihan[$i] ?? ''), $label[$i], PANJANG['jawaban']);
        }
        $isi = array_filter($baris['pilihan'], 'strlen');
        if (count(array_unique(array_map('kecil', $isi))) < count($isi)) {
            $galat[] = 'Ketiga pilihan harus berbeda satu sama lain.';
        }
        return [$baris, $galat];
    }

    // sampah (nama isian jenis_sampah supaya tidak tertukar dengan jenis soal)
    $jenisSampah = is_string($in['jenis_sampah'] ?? null) ? $in['jenis_sampah'] : '';
    $baris = [
        'nama'  => $wajib(rapikan($in['nama'] ?? ''), 'Nama sampah', PANJANG['nama']),
        'jenis' => $jenisSampah,
    ];
    if (!isset(JENIS_SAMPAH[$jenisSampah])) {
        $galat[] = 'Pilih jenis sampah.';
    }
    foreach ($bank['sampah'] as $lain) {
        if ($lain['id'] !== $idSendiri && kecil($lain['nama']) === kecil($baris['nama'])) {
            $galat[] = 'Sampah dengan nama ini sudah ada.';
            break;
        }
    }
    return [$baris, $galat];
}

/* =================== sesi, login, dan CSRF =================== */
function mulaiSesi(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }
    session_name('sdgquest_admin');
    session_set_cookie_params([
        'lifetime' => 0,
        'path'     => '/',
        'httponly' => true,
        'samesite' => 'Lax',
        'secure'   => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
    ]);
    session_start();
}

/** Akun admin tersimpan. Sebelum login pertama, file belum ada dan akun bawaan dipakai. */
function akunAdmin(): ?array
{
    if (!is_file(FILE_ADMIN)) {
        return null;
    }
    $akun = include FILE_ADMIN;
    return is_array($akun) && isset($akun['username'], $akun['hash']) ? $akun : null;
}

/** @return true|string */
function simpanAkun(string $username, string $sandi, bool $wajibGanti)
{
    $isi = "<?php\n// Akun admin SDG Quest. Hapus file ini untuk kembali ke akun bawaan (admin / admin123).\nreturn "
        . var_export([
            'username'    => $username,
            'hash'        => password_hash($sandi, PASSWORD_DEFAULT),
            'wajib_ganti' => $wajibGanti,
            'diubah'      => date(DATE_ATOM),
        ], true) . ";\n";
    if (!is_dir(DIR_DATA) || @file_put_contents(FILE_ADMIN, $isi, LOCK_EX) === false) {
        return 'Akun tidak bisa disimpan. Pastikan folder data boleh ditulisi oleh server.';
    }
    if (function_exists('opcache_invalidate')) {
        opcache_invalidate(FILE_ADMIN, true);
    }
    return true;
}

/** @return true|string */
function cobaMasuk(string $username, string $sandi)
{
    $kunci = $_SESSION['kunci_sampai'] ?? 0;
    if ($kunci > time()) {
        return 'Terlalu banyak percobaan. Coba lagi dalam ' . ($kunci - time()) . ' detik.';
    }
    $akun = akunAdmin();
    if ($akun === null) {
        $cocok = hash_equals(ADMIN_BAWAAN_USER, $username) && hash_equals(ADMIN_BAWAAN_SANDI, $sandi);
        if ($cocok) {
            $hasil = simpanAkun(ADMIN_BAWAAN_USER, ADMIN_BAWAAN_SANDI, true);
            if ($hasil !== true) {
                return $hasil;
            }
            $akun = akunAdmin();
        }
    } else {
        $cocok = hash_equals($akun['username'], $username) && password_verify($sandi, $akun['hash']);
    }
    if (!$cocok || $akun === null) {
        $_SESSION['gagal'] = ($_SESSION['gagal'] ?? 0) + 1;
        if ($_SESSION['gagal'] >= 5) {
            $_SESSION['gagal'] = 0;
            $_SESSION['kunci_sampai'] = time() + 60;
        }
        usleep(400000);
        return 'Username atau kata sandi salah.';
    }
    session_regenerate_id(true);
    $_SESSION['admin'] = $akun['username'];
    $_SESSION['gagal'] = 0;
    unset($_SESSION['kunci_sampai']);
    return true;
}

function sudahMasuk(): bool
{
    $akun = akunAdmin();
    return isset($_SESSION['admin']) && $akun !== null && $_SESSION['admin'] === $akun['username'];
}

/** Dipanggil di awal setiap halaman admin. */
function wajibMasuk(bool $bolehSaatWajibGanti = false): array
{
    mulaiSesi();
    kepalaKeamanan();
    if (!sudahMasuk()) {
        arahkan('index.php');
    }
    $akun = akunAdmin();
    if (!empty($akun['wajib_ganti']) && !$bolehSaatWajibGanti) {
        arahkan('akun.php');   // halaman akun menjelaskan bahwa kata sandi bawaan harus diganti
    }
    return $akun;
}

function kepalaKeamanan(): void
{
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Frame-Options: DENY');
    header('X-Content-Type-Options: nosniff');
    header('Referrer-Policy: same-origin');
}

function token(): string
{
    if (empty($_SESSION['token'])) {
        $_SESSION['token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['token'];
}

function inputToken(): string
{
    return '<input type="hidden" name="token" value="' . e(token()) . '">';
}

/** Tolak permintaan POST yang tidak membawa token yang benar. */
function cekToken(): void
{
    $dikirim = $_POST['token'] ?? '';
    if (!is_string($dikirim) || empty($_SESSION['token']) || !hash_equals($_SESSION['token'], $dikirim)) {
        http_response_code(400);
        pesan('galat', 'Sesi formulir sudah kedaluwarsa. Silakan ulangi.');
        arahkan($_SERVER['HTTP_REFERER'] ?? 'index.php', false);
    }
}

function arahkan(string $tujuan, bool $lokal = true): void
{
    // hanya arahkan ke halaman di situs ini
    if (!$lokal) {
        $bagian = parse_url($tujuan);
        $tujuan = ($bagian['path'] ?? 'index.php') . (isset($bagian['query']) ? '?' . $bagian['query'] : '');
    }
    header('Location: ' . $tujuan, true, 303);
    exit;
}

function pesan(string $jenis, string $teks): void
{
    $_SESSION['pesan'] = [$jenis, $teks];
}

function ambilPesan(): ?array
{
    $p = $_SESSION['pesan'] ?? null;
    unset($_SESSION['pesan']);
    return $p;
}

/* =================== kerangka halaman admin =================== */
function kepala(string $judul, string $aktif = ''): void
{
    $menu = $aktif === '' ? '' : '
    <nav class="adm-nav" aria-label="Menu admin">
      <a href="soal.php"' . ($aktif === 'soal' ? ' aria-current="page"' : '') . '>Bank soal</a>
      <a href="akun.php"' . ($aktif === 'akun' ? ' aria-current="page"' : '') . '>Akun</a>
      <a href="../">Lihat permainan</a>
      <form method="post" action="keluar.php">' . inputToken() . '<button type="submit" class="btn ghost sm">Keluar</button></form>
    </nav>';
    echo '<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>' . e($judul) . ' · Admin SDG Quest</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700;800&display=swap">
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/admin.css">
</head>
<body class="adm">
<div class="wrap">
  <header class="top">
    <div class="brand">
      <div class="wheel" aria-hidden="true"></div>
      <div><h1>SDG Quest</h1><p>Halaman admin · kelola bank soal</p></div>
    </div>' . $menu . '
  </header>
';
    $p = ambilPesan();
    if ($p) {
        echo '  <div class="alert ' . e($p[0]) . '" role="status">' . e($p[1]) . "</div>\n";
    }
}

function kaki(): void
{
    echo '  <p class="foot">SDG Quest · halaman admin</p>
</div>
<script src="../js/admin.js"></script>
</body>
</html>
';
}
