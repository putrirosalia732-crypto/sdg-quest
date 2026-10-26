<?php
/** Halaman masuk admin SDG Quest */
declare(strict_types=1);

define('SDG_QUEST', true);
require __DIR__ . '/../inc/inti.php';

mulaiSesi();
kepalaKeamanan();
if (sudahMasuk()) {
    arahkan('soal.php');
}

$galat = '';
$username = '';
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    cekToken();
    $username = rapikan($_POST['username'] ?? '');
    $sandi = is_string($_POST['sandi'] ?? null) ? $_POST['sandi'] : '';
    $hasil = cobaMasuk($username, $sandi);
    if ($hasil === true) {
        arahkan('soal.php');
    }
    $galat = $hasil;
}

kepala('Masuk');
?>
  <main class="adm-login">
    <form method="post" class="card" autocomplete="on">
      <div><p class="eyebrow">Admin</p><h2>Masuk ke halaman admin</h2></div>
<?php if ($galat !== ''): ?>
      <div class="alert galat" role="alert"><?= e($galat) ?></div>
<?php endif; ?>
      <?= inputToken() ?>
      <label class="f">Username
        <input name="username" autocomplete="username" required maxlength="32" value="<?= e($username) ?>" autofocus>
      </label>
      <label class="f">Kata sandi
        <input name="sandi" type="password" autocomplete="current-password" required>
      </label>
      <button class="btn" type="submit">Masuk</button>
<?php if (akunAdmin() === null): ?>
      <p class="hint">Akun bawaan: username <b>admin</b> dan kata sandi <b>admin123</b>. Setelah masuk, kamu akan diminta menggantinya.</p>
<?php endif; ?>
      <p class="hint"><a href="../">Kembali ke permainan</a></p>
    </form>
  </main>
<?php
kaki();
