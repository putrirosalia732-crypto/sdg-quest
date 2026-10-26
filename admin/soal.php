<?php
/**
 * Bank soal SDG Quest: daftar, tambah, edit, dan hapus soal untuk ketiga jenis permainan.
 *   Kartu Quest   dipakai kartu Quest ular tangga dan SDG Quiz
 *   SDG Decision  situasi dengan tiga pilihan bertingkat
 *   Waste Sorting nama sampah beserta jenisnya
 */
declare(strict_types=1);

define('SDG_QUEST', true);
require __DIR__ . '/../inc/inti.php';

wajibMasuk();

const WARNA_SAMPAH = ['org' => '#2B8A3E', 'anorg' => '#1864AB', 'b3' => '#C92A2A', 'res' => '#495057'];
const BULAN = [1 => 'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

/* ---------- fungsi tampilan ---------- */
function ambil(array $sumber, string $kunci, string $bawaan = ''): string
{
    $nilai = $sumber[$kunci] ?? $bawaan;
    return is_string($nilai) ? $nilai : $bawaan;
}

/** Warna teks yang tetap terbaca di atas warna latar (sama seperti fungsi ink di permainan). */
function warnaTeks(string $hex): string
{
    $n = (int) hexdec(ltrim($hex, '#'));
    $terang = (0.299 * ($n >> 16) + 0.587 * (($n >> 8) & 255) + 0.114 * ($n & 255)) / 255;
    return $terang > 0.62 ? '#14213D' : '#FFFFFF';
}

function chip(string $teks, string $warna, string $judul, string $kelas = 'chip-sdg'): string
{
    return '<span class="' . $kelas . '" style="--c:' . $warna . ';--t:' . warnaTeks($warna) . '" title="' . e($judul) . '">' . e($teks) . '</span>';
}

function chipSdg(int $n, string $kelas = 'chip-sdg'): string
{
    return chip('SDG ' . $n, SDG_DAFTAR[$n][1] ?? '#14213D', SDG_DAFTAR[$n][0] ?? '', $kelas);
}

function chipSampah(string $j, string $kelas = 'chip-sdg'): string
{
    return chip(JENIS_SAMPAH[$j] ?? $j, WARNA_SAMPAH[$j] ?? '#495057', JENIS_SAMPAH[$j] ?? '', $kelas);
}

function tanggal(?string $iso): string
{
    $t = $iso ? strtotime($iso) : false;
    return $t ? date('j', $t) . ' ' . BULAN[(int) date('n', $t)] . ' ' . date('Y, H.i', $t) : 'belum pernah';
}

/** Satu isian formulir. $dikirim menandai isian kosong atau terlalu panjang setelah formulir dikirim. */
function isian(string $nama, string $label, string $nilai, int $maks, bool $dikirim, array $opsi = []): string
{
    $salah = $dikirim && ($nilai === '' || panjang($nilai) > $maks);
    $atribut = 'name="' . e($nama) . '" maxlength="' . $maks . '" required' . ($salah ? ' aria-invalid="true"' : '');
    $kontrol = !empty($opsi['area'])
        ? '<textarea ' . $atribut . ' rows="' . ($opsi['baris'] ?? 3) . '">' . e($nilai) . '</textarea>'
        : '<input ' . $atribut . ' value="' . e($nilai) . '">';
    return '<label class="f' . (!empty($opsi['penuh']) ? ' full' : '') . '"><span>' . $label . '</span>'
        . (!empty($opsi['ket']) ? ' <span class="ket">' . e($opsi['ket']) . '</span>' : '') . $kontrol . '</label>';
}

function pilihSdg(int $terpilih, array $jumlah, bool $semua): string
{
    $h = '';
    if ($semua) {
        $h .= '<option value="0"' . ($terpilih === 0 ? ' selected' : '') . '>Semua SDG (' . array_sum($jumlah) . ')</option>';
    }
    foreach (SDG_DAFTAR as $n => [$nama]) {
        $h .= '<option value="' . $n . '"' . ($n === $terpilih ? ' selected' : '') . '>SDG ' . $n . ' · ' . e($nama) . ' (' . ($jumlah[(string) $n] ?? 0) . ')</option>';
    }
    return $h;
}

function pilihJenisSampah(string $terpilih, array $jumlah, bool $semua): string
{
    $h = $semua ? '<option value=""' . ($terpilih === '' ? ' selected' : '') . '>Semua jenis (' . array_sum($jumlah) . ')</option>' : '';
    $ket = ['org' => 'mudah terurai', 'anorg' => 'bisa didaur ulang', 'b3' => 'berbahaya dan beracun', 'res' => 'sulit didaur ulang'];
    foreach (JENIS_SAMPAH as $k => $nama) {
        $h .= '<option value="' . $k . '"' . ($k === $terpilih ? ' selected' : '') . '>' . $nama . ' · ' . $ket[$k] . ' (' . ($jumlah[$k] ?? 0) . ')</option>';
    }
    return $h;
}

/* ---------- parameter halaman ---------- */
$jenis = ambil($_POST, 'jenis', ambil($_GET, 'jenis', 'quest'));
if (!isset(JENIS_SOAL[$jenis])) {
    $jenis = 'quest';
}
$filterSdg = (int) ambil($_GET, 'sdg', '0');
if (!isset(SDG_DAFTAR[$filterSdg])) {
    $filterSdg = 0;
}
$filterJenis = ambil($_GET, 'js');
if (!isset(JENIS_SAMPAH[$filterJenis])) {
    $filterJenis = '';
}
$cari = rapikan(ambil($_GET, 'cari'));
$aksi = ambil($_GET, 'aksi');
$idForm = ambil($_GET, 'id');

$alamat = function (array $ubah = []) use (&$jenis, &$filterSdg, &$filterJenis, &$cari): string {
    $q = array_merge(['jenis' => $jenis, 'sdg' => $filterSdg, 'js' => $filterJenis, 'cari' => $cari], $ubah);
    $q = array_filter($q, function ($v) {
        return $v !== null && $v !== '' && $v !== 0;
    });
    return 'soal.php' . ($q ? '?' . http_build_query($q) : '');
};

[$namaJenis, $satuan] = JENIS_SOAL[$jenis];
$bank = bacaSoal();
$galat = [];
$nilai = null;      // isi formulir yang sedang dibuka
$dikirim = false;

/* ---------- simpan dan hapus (POST) ---------- */
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    cekToken();
    $aksiPost = ambil($_POST, 'aksi');
    $idPost = ambil($_POST, 'id');

    if ($aksiPost === 'hapus') {
        $hasil = ubahJson(FILE_SOAL, bankKosong(), function (array &$data) use ($jenis, $idPost) {
            $i = cariIndeks($data[$jenis], $idPost);
            if ($i < 0) {
                return 'Data tidak ditemukan. Mungkin sudah dihapus.';
            }
            $lama = $data;
            array_splice($data[$jenis], $i, 1);
            $cek = cekMinimum($lama, $data, $jenis);
            if ($cek !== null) {
                return $cek;
            }
            $data['versi'] = (int) $data['versi'] + 1;
            $data['diubah'] = date(DATE_ATOM);
            return true;
        });
        pesan($hasil === true ? 'ok' : 'galat', $hasil === true ? ucfirst($satuan) . ' berhasil dihapus.' : $hasil);
        arahkan($alamat());
    }

    if ($aksiPost === 'simpan') {
        $dikirim = true;
        [$baris, $galat] = periksaSoal($jenis, $_POST, $bank, $idPost);
        if (!$galat) {
            $id = $idPost !== '' ? $idPost : idBaru($jenis);
            $hasil = ubahJson(FILE_SOAL, bankKosong(), function (array &$data) use ($jenis, $idPost, $id, $baris) {
                $lama = $data;
                $baris = ['id' => $id] + $baris;
                if ($idPost !== '') {
                    $i = cariIndeks($data[$jenis], $idPost);
                    if ($i < 0) {
                        return 'Data yang diedit tidak ditemukan. Mungkin sudah dihapus.';
                    }
                    $data[$jenis][$i] = $baris;
                } else {
                    $data[$jenis][] = $baris;
                }
                $cek = cekMinimum($lama, $data, $jenis);
                if ($cek !== null) {
                    return $cek;
                }
                $data['versi'] = (int) $data['versi'] + 1;
                $data['diubah'] = date(DATE_ATOM);
                return true;
            });
            if ($hasil === true) {
                pesan('ok', ucfirst($satuan) . ($idPost !== '' ? ' berhasil diperbarui.' : ' berhasil ditambahkan.'));
                // pastikan baris yang baru disimpan terlihat di daftar
                $ke = ['cari' => null];
                if ($jenis !== 'sampah' && $filterSdg !== 0) {
                    $ke['sdg'] = $baris['sdg'];
                }
                if ($jenis === 'sampah' && $filterJenis !== '') {
                    $ke['js'] = $baris['jenis'];
                }
                arahkan($alamat($ke) . '#baris-' . $id);
            }
            $galat[] = $hasil;
        }
        $nilai = $baris + ['id' => $idPost];
        $aksi = $idPost !== '' ? 'edit' : 'tambah';
    }
}

/* ---------- formulir tambah atau edit (GET) ---------- */
if ($nilai === null && $aksi === 'edit') {
    $i = cariIndeks($bank[$jenis], $idForm);
    if ($i < 0) {
        pesan('galat', 'Data yang ingin diedit tidak ditemukan.');
        arahkan($alamat());
    }
    $nilai = $bank[$jenis][$i];
} elseif ($nilai === null && $aksi === 'tambah') {
    $nilai = [
        'id' => '', 'sdg' => $filterSdg ?: 1, 'pertanyaan' => '', 'benar' => '', 'pengecoh' => ['', '', ''],
        'situasi' => '', 'pilihan' => ['', '', ''], 'penjelasan' => '', 'nama' => '', 'jenis' => $filterJenis ?: 'org',
    ];
}

/* ---------- daftar yang ditampilkan ---------- */
$jumlahSdg = hitungKelompok($bank, $jenis === 'sampah' ? 'quest' : $jenis);
$jumlahSampah = hitungKelompok($bank, 'sampah');
$daftar = array_values(array_filter($bank[$jenis], function (array $r) use ($jenis, $filterSdg, $filterJenis, $cari) {
    if ($jenis !== 'sampah' && $filterSdg !== 0 && (int) $r['sdg'] !== $filterSdg) {
        return false;
    }
    if ($jenis === 'sampah' && $filterJenis !== '' && $r['jenis'] !== $filterJenis) {
        return false;
    }
    if ($cari === '') {
        return true;
    }
    $teks = [];
    array_walk_recursive($r, function ($v, $k) use (&$teks) {
        if ($k !== 'id' && is_string($v)) {
            $teks[] = $v;
        }
    });
    return strpos(kecil(implode(' ', $teks)), kecil($cari)) !== false;
}));

kepala('Bank soal', 'soal');
?>
  <nav class="adm-tabs" aria-label="Jenis soal">
<?php foreach (JENIS_SOAL as $k => [$judul, $sat]): ?>
    <a href="soal.php?jenis=<?= $k ?>"<?= $k === $jenis ? ' aria-current="page"' : '' ?>><b><?= e($judul) ?></b><span><?= count($bank[$k]) ?> <?= e($sat) ?></span></a>
<?php endforeach; ?>
  </nav>

<?php if ($nilai !== null): ?>
  <section class="card" id="formSoal" aria-labelledby="h-form">
    <div><p class="eyebrow"><?= e($namaJenis) ?></p><h2 id="h-form"><?= $nilai['id'] !== '' ? 'Edit ' . e($satuan) : 'Tambah ' . e($satuan) . ' baru' ?></h2></div>
<?php if ($galat): ?>
    <div class="alert galat" role="alert"><?= ucfirst(e($satuan)) ?> belum tersimpan:<ul><?php foreach ($galat as $g): ?><li><?= e($g) ?></li><?php endforeach; ?></ul></div>
<?php endif; ?>
    <form method="post" action="<?= e($alamat(['aksi' => null, 'id' => null])) ?>">
      <?= inputToken() ?>
      <input type="hidden" name="aksi" value="simpan">
      <input type="hidden" name="jenis" value="<?= e($jenis) ?>">
      <input type="hidden" name="id" value="<?= e($nilai['id']) ?>">
      <div class="f-grid">
<?php if ($jenis === 'quest'): ?>
        <label class="f full">Kategori SDG <select name="sdg"><?= pilihSdg((int) $nilai['sdg'], $jumlahSdg, false) ?></select></label>
        <?= isian('pertanyaan', 'Pertanyaan', $nilai['pertanyaan'], PANJANG['pertanyaan'], $dikirim, ['area' => true, 'penuh' => true]) ?>
        <?= isian('benar', 'Jawaban benar <span class="f-tag ok">benar</span>', $nilai['benar'], PANJANG['jawaban'], $dikirim) ?>
<?php for ($i = 0; $i < 3; $i++): ?>
        <?= isian('pengecoh[]', 'Pilihan salah ' . ($i + 1), $nilai['pengecoh'][$i] ?? '', PANJANG['jawaban'], $dikirim) ?>
<?php endfor; ?>
        <?= isian('penjelasan', 'Penjelasan', $nilai['penjelasan'], PANJANG['penjelasan'], $dikirim, ['area' => true, 'penuh' => true, 'ket' => 'muncul setelah pemain menjawab']) ?>
<?php elseif ($jenis === 'keputusan'): ?>
        <label class="f full">Kategori SDG <select name="sdg"><?= pilihSdg((int) $nilai['sdg'], $jumlahSdg, false) ?></select></label>
        <?= isian('situasi', 'Situasi', $nilai['situasi'], PANJANG['situasi'], $dikirim, ['area' => true, 'penuh' => true, 'ket' => 'biasanya diakhiri dengan “Kamu…”']) ?>
<?php foreach (['Pilihan terbaik <span class="f-tag ok">+10 poin</span>', 'Pilihan cukup baik <span class="f-tag">+5 poin</span>', 'Pilihan kurang tepat <span class="f-tag">0 poin</span>'] as $i => $label): ?>
        <?= isian('pilihan[]', $label, $nilai['pilihan'][$i] ?? '', PANJANG['jawaban'], $dikirim, ['penuh' => true]) ?>
<?php endforeach; ?>
        <?= isian('penjelasan', 'Penjelasan', $nilai['penjelasan'], PANJANG['penjelasan'], $dikirim, ['area' => true, 'penuh' => true, 'ket' => 'muncul setelah pemain memilih']) ?>
<?php else: ?>
        <?= isian('nama', 'Nama sampah', $nilai['nama'], PANJANG['nama'], $dikirim, ['ket' => 'contoh: Kulit pisang']) ?>
        <label class="f">Jenis sampah <select name="jenis_sampah"><?= pilihJenisSampah($nilai['jenis'], $jumlahSampah, false) ?></select></label>
<?php endif; ?>
      </div>
<?php if ($jenis === 'quest'): ?>
      <p class="hint">Urutan keempat pilihan diacak setiap kali soal muncul, jadi tidak perlu mengatur posisi jawaban benar.</p>
<?php elseif ($jenis === 'keputusan'): ?>
      <p class="hint">Urutan ketiga pilihan juga diacak saat permainan.</p>
<?php endif; ?>
      <div class="f-aksi">
        <button class="btn" type="submit">Simpan <?= e($satuan) ?></button>
        <a class="btn ghost" href="<?= e($alamat(['aksi' => null, 'id' => null])) ?>">Batal</a>
      </div>
    </form>
  </section>
<?php endif; ?>

  <section class="card" aria-labelledby="h-daftar">
    <div class="list-head">
      <div>
        <p class="eyebrow"><?= e($namaJenis) ?></p>
        <h2 id="h-daftar">Daftar <?= e($satuan) ?></h2>
      </div>
      <p class="hint">Versi bank soal <?= (int) $bank['versi'] ?> · terakhir diubah <?= e(tanggal($bank['diubah'])) ?></p>
    </div>
    <p class="hint"><?= e(JENIS_SOAL[$jenis][2]) ?>
<?php if ($jenis === 'quest'): ?>
      Setiap SDG minimal <?= MIN_QUEST_PER_SDG ?> soal supaya SDG Quiz tetap bisa dimainkan.
<?php elseif ($jenis === 'keputusan'): ?>
      Minimal <?= MIN_KEPUTUSAN ?> situasi karena satu permainan memakai 5 situasi.
<?php else: ?>
      Setiap jenis minimal <?= MIN_SAMPAH_PER_JENIS ?> sampah dan totalnya minimal <?= MIN_SAMPAH ?> sampah.
<?php endif; ?>
    </p>

    <form method="get" class="toolbar" role="search">
      <input type="hidden" name="jenis" value="<?= e($jenis) ?>">
<?php if ($jenis === 'sampah'): ?>
      <label class="f">Jenis sampah <select name="js"><?= pilihJenisSampah($filterJenis, $jumlahSampah, true) ?></select></label>
<?php else: ?>
      <label class="f">Kategori SDG <select name="sdg"><?= pilihSdg($filterSdg, $jumlahSdg, true) ?></select></label>
<?php endif; ?>
      <label class="f grow">Cari <input type="search" name="cari" value="<?= e($cari) ?>" placeholder="Kata di <?= e($satuan) ?>, jawaban, atau penjelasan"></label>
      <button class="btn ghost" type="submit">Terapkan</button>
      <a class="btn kanan" href="<?= e($alamat(['aksi' => 'tambah', 'id' => null])) ?>#formSoal">Tambah <?= e($satuan) ?></a>
    </form>

    <p class="hint" aria-live="polite">Menampilkan <?= count($daftar) ?> dari <?= count($bank[$jenis]) ?> <?= e($satuan) ?><?= $cari !== '' ? ' untuk pencarian “' . e($cari) . '”' : '' ?>.</p>
    <div class="tbl-wrap">
      <table class="adm-table">
        <thead><tr>
          <th class="c-no">No</th>
          <th class="c-sdg"><?= $jenis === 'sampah' ? 'Jenis' : 'SDG' ?></th>
          <th><?= $jenis === 'quest' ? 'Soal dan jawaban benar' : ($jenis === 'keputusan' ? 'Situasi dan pilihan terbaik' : 'Nama sampah') ?></th>
          <th class="c-aksi">Aksi</th>
        </tr></thead>
        <tbody>
<?php if (!$daftar): ?>
          <tr class="kosong"><td colspan="4">Tidak ada <?= e($satuan) ?> yang cocok.</td></tr>
<?php endif; ?>
<?php foreach ($daftar as $no => $r): ?>
<?php
    $chip = $jenis === 'sampah' ? chipSampah($r['jenis']) : chipSdg((int) $r['sdg']);
    $chipIn = $jenis === 'sampah' ? chipSampah($r['jenis'], 'chip-sdg chip-in') : chipSdg((int) $r['sdg'], 'chip-sdg chip-in');
    $judul = $jenis === 'quest' ? $r['pertanyaan'] : ($jenis === 'keputusan' ? $r['situasi'] : $r['nama']);
    $sub = $jenis === 'quest' ? 'Benar: ' . $r['benar'] : ($jenis === 'keputusan' ? 'Terbaik: ' . $r['pilihan'][0] : '');
?>
          <tr id="baris-<?= e($r['id']) ?>">
            <td class="c-no"><?= $no + 1 ?></td>
            <td class="c-sdg"><?= $chip ?></td>
            <td class="tx"><?= $chipIn ?><b><?= e($judul) ?></b><?= $sub !== '' ? '<small>' . e($sub) . '</small>' : '' ?></td>
            <td class="c-aksi">
              <a class="btn ghost sm" href="<?= e($alamat(['aksi' => 'edit', 'id' => $r['id']])) ?>#formSoal">Edit</a>
              <form method="post" action="<?= e($alamat()) ?>" data-konfirmasi="Hapus <?= e($satuan) ?> ini? Tindakan ini tidak bisa dibatalkan.">
                <?= inputToken() ?>
                <input type="hidden" name="aksi" value="hapus">
                <input type="hidden" name="jenis" value="<?= e($jenis) ?>">
                <input type="hidden" name="id" value="<?= e($r['id']) ?>">
                <button class="btn danger sm" type="submit" aria-label="Hapus <?= e($satuan) ?> nomor <?= $no + 1 ?>">Hapus</button>
              </form>
            </td>
          </tr>
<?php endforeach; ?>
        </tbody>
      </table>
    </div>
  </section>
<?php
kaki();
