<?php
/**
 * API bank soal SDG Quest (hanya baca, untuk halaman permainan)
 *
 * GET soal.php  mengirim semua soal dalam bentuk yang langsung dipakai js/script.js:
 *   soal[sdg]  = [[pertanyaan, jawaban benar, [3 pilihan salah], penjelasan], ...]
 *   keputusan  = [[situasi, sdg, [terbaik, cukup baik, kurang tepat], penjelasan], ...]
 *   sampah     = [[nama sampah, jenis], ...]
 *
 * Soal ditambah, diubah, dan dihapus lewat halaman admin (folder admin).
 */
declare(strict_types=1);

define('SDG_QUEST', true);
require __DIR__ . '/../inc/inti.php';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') {
    header('Allow: GET');
    http_response_code(405);
    echo json_encode(['ok' => false, 'pesan' => 'Metode tidak didukung.']);
    exit;
}

$bank = bacaSoal();
if (!$bank['quest']) {
    // bank soal kosong atau belum dibuat, permainan memakai soal bawaannya sendiri
    echo json_encode(['ok' => true, 'soal' => null]);
    exit;
}

$soal = [];
foreach (array_keys(SDG_DAFTAR) as $n) {
    $soal[$n] = [];
}
foreach ($bank['quest'] as $q) {
    $soal[(int) $q['sdg']][] = [$q['pertanyaan'], $q['benar'], array_values($q['pengecoh']), $q['penjelasan']];
}
$keputusan = array_map(function ($k) {
    return [$k['situasi'], (int) $k['sdg'], array_values($k['pilihan']), $k['penjelasan']];
}, $bank['keputusan']);
$sampah = array_map(function ($s) {
    return [$s['nama'], $s['jenis']];
}, $bank['sampah']);

echo json_encode([
    'ok'        => true,
    'versi'     => $bank['versi'],
    'soal'      => $soal,
    'keputusan' => $keputusan,
    'sampah'    => $sampah,
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
