<?php
/** Ganti username dan kata sandi admin */
declare(strict_types=1);

define('SDG_QUEST', true);
require __DIR__ . '/../inc/inti.php';

$akun = wajibMasuk(true);
$wajibGanti = !empty($akun['wajib_ganti']);
$galat = [];
$username = $akun['username'];

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    cekToken();
    $username = rapikan($_POST['username'] ?? '');
    $lama  = is_string($_POST['sandi_lama'] ?? null) ? $_POST['sandi_lama'] : '';
    $baru  = is_string($_POST['sandi_baru'] ?? null) ? $_POST['sandi_baru'] : '';
    $ulang = is_string($_POST['sandi_ulang'] ?? null) ? $_POST['sandi_ulang'] : '';

    if (!password_verify($lama, $akun['hash'])) {
        $galat[] = 'Kata sandi lama salah.';
    }
    if (!preg_match('/^[A-Za-z0-9_.-]{3,32}$/', $username)) {
        $galat[] = 'Username 3 sampai 32 karakter, hanya huruf, angka, titik, garis bawah, atau tanda minus.';
    }
    if (strlen($baru) < SANDI_MIN) {
        $galat[] = 'Kata sandi baru minimal ' . SANDI_MIN . ' karakter.';
    } elseif ($baru === ADMIN_BAWAAN_SANDI || $baru === $lama) {
        $galat[] = 'Kata sandi baru harus berbeda dari kata sandi lama dan kata sandi bawaan.';
    }
    if ($baru !== $ulang) {
        $galat[] = 'Ulangi kata sandi baru dengan isi yang sama.';
    }

    if (!$galat) {
        $hasil = simpanAkun($username, $baru, false);
        if ($hasil === true) {
            session_regenerate_id(true);
            $_SESSION['admin'] = $username;
            pesan('ok', 'Akun berhasil diperbarui.');
            arahkan($wajibGanti ? 'soal.php' : 'akun.php');
        }
        $galat[] = $hasil;
    }
}

kepala('Akun', 'akun');
?>
  <main class="adm-login">
    <form method="post" class="card" autocomplete="off">
      <div><p class="eyebrow">Akun admin</p><h2>Ganti username dan kata sandi</h2></div>
<?php if ($wajibGanti): ?>
      <div class="alert info">Kamu masih memakai kata sandi bawaan. Ganti dulu supaya orang lain tidak bisa masuk ke halaman admin.</div>
<?php endif; ?>
<?php if ($galat): ?>
      <div class="alert galat" role="alert">Akun belum tersimpan:<ul><?php foreach ($galat as $g): ?><li><?= e($g) ?></li><?php endforeach; ?></ul></div>
<?php endif; ?>
      <?= inputToken() ?>
      <label class="f">Username
        <input name="username" required maxlength="32" autocomplete="username" value="<?= e($username) ?>">
      </label>
      <label class="f">Kata sandi lama
        <input name="sandi_lama" type="password" required autocomplete="current-password">
      </label>
      <label class="f">Kata sandi baru <span class="ket">minimal <?= SANDI_MIN ?> karakter</span>
        <input name="sandi_baru" type="password" required minlength="<?= SANDI_MIN ?>" autocomplete="new-password">
      </label>
      <label class="f">Ulangi kata sandi baru
        <input name="sandi_ulang" type="password" required minlength="<?= SANDI_MIN ?>" autocomplete="new-password">
      </label>
      <div class="f-aksi">
        <button class="btn" type="submit">Simpan akun</button>
<?php if (!$wajibGanti): ?>
        <a class="btn ghost" href="soal.php">Batal</a>
<?php endif; ?>
      </div>
    </form>
  </main>
<?php
kaki();
