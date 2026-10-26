<?php
/** Keluar dari halaman admin (hanya lewat tombol Keluar yang mengirim POST) */
declare(strict_types=1);

define('SDG_QUEST', true);
require __DIR__ . '/../inc/inti.php';

mulaiSesi();
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    arahkan('soal.php');
}
cekToken();
$_SESSION = [];
session_destroy();
mulaiSesi();
session_regenerate_id(true);
pesan('ok', 'Kamu sudah keluar dari halaman admin.');
arahkan('index.php');
