# SDG Quest (Ular Tangga SDG)

Permainan edukasi 17 SDGs (Sustainable Development Goals). Isinya ular tangga untuk 2 sampai 4 pemain, Mode Quiz untuk 1 pemain, halaman pengenalan 17 SDGs, dan halaman admin untuk mengelola soal.

## Isi folder

```
sdg-quest/
├── index.html          halaman permainan (HTML)
├── css/
│   ├── style.css       tampilan permainan
│   └── admin.css       tampilan tambahan untuk halaman admin
├── js/
│   ├── script.js       logika permainan, soal bawaan, papan peringkat, pemuatan soal dari server
│   └── admin.js        konfirmasi hapus dan penghitung karakter di halaman admin
├── api/
│   ├── skor.php        API (Application Programming Interface) papan peringkat dan riwayat
│   └── soal.php        API bank soal untuk halaman permainan (hanya baca)
├── admin/
│   ├── index.php       halaman masuk admin
│   ├── soal.php        daftar, tambah, edit, dan hapus soal
│   ├── akun.php        ganti username dan kata sandi admin
│   └── keluar.php      keluar dari halaman admin
├── inc/
│   └── inti.php        fungsi bersama: sesi login, keamanan formulir, validasi soal, penyimpanan
└── data/
    ├── soal.json       bank soal (170 kartu Quest, 13 situasi, 25 sampah)
    ├── skor.json       skor Mode Quiz dan riwayat ular tangga
    └── admin.php       akun admin, dibuat otomatis saat login pertama
```

Semua data disimpan dalam file, jadi tidak perlu membuat database.

## Cara menjalankan

**Dengan XAMPP**

1. Salin folder `sdg-quest` ke `C:\xampp\htdocs\`.
2. Buka XAMPP Control Panel, lalu klik **Start** pada Apache.
3. Permainan: `http://localhost/sdg-quest/`
4. Halaman admin: `http://localhost/sdg-quest/admin/` (atau klik tautan **Kelola soal** di bagian bawah halaman permainan)

**Dengan Laragon**

Salin folder ke `C:\laragon\www\`, klik **Start All**, lalu buka alamat yang sama seperti di atas.

**Tanpa XAMPP (cukup PHP terpasang)**

```
cd sdg-quest
php -S localhost:8000
```

Lalu buka `http://localhost:8000` dan `http://localhost:8000/admin/`.

Kalau `index.html` dibuka langsung dengan klik dua kali (tanpa server PHP), permainan tetap bisa dimainkan dengan soal bawaan. Hanya papan peringkat, riwayat, dan soal hasil suntingan admin yang tidak aktif.

## Halaman admin

**Masuk pertama kali**

- Username: `admin`
- Kata sandi: `admin123`

Setelah masuk, admin langsung diminta mengganti kata sandi (minimal 8 karakter). Halaman soal baru bisa dibuka setelah kata sandi diganti.

**Fitur**

- **Tiga jenis soal** dalam tab terpisah:
  - Kartu Quest, dipakai di ular tangga dan SDG Quiz. Isinya pertanyaan, 1 jawaban benar, 3 pilihan salah, dan penjelasan.
  - SDG Decision. Isinya situasi, pilihan terbaik (+10), cukup baik (+5), kurang tepat (0), dan penjelasan.
  - Waste Sorting. Isinya nama sampah dan jenisnya (Organik, Anorganik, B3, Residu).
- **Tambah, edit, dan hapus soal.** Penghapusan selalu dikonfirmasi lebih dulu.
- **Saring dan cari.** Soal bisa disaring per SDG atau per jenis sampah, dan dicari berdasarkan kata di soal, jawaban, atau penjelasan.
- **Pemeriksaan isian.** Semua isian wajib diisi dan punya batas panjang. Pilihan jawaban tidak boleh kembar. Pertanyaan dan nama sampah juga tidak boleh dobel.
- **Batas minimal soal.** PHP menolak penghapusan yang membuat permainan tidak bisa berjalan:
  - setiap SDG minimal 5 kartu Quest,
  - SDG Decision minimal 5 situasi,
  - setiap jenis sampah minimal 2 dan totalnya minimal 10.
- **Langsung dipakai.** Soal yang disimpan langsung dipakai permainan saat halaman permainan dibuka atau dimuat ulang.

**Keamanan**

- Kata sandi disimpan sebagai hash (`password_hash`), bukan teks asli.
- Setiap formulir memakai token CSRF (Cross-Site Request Forgery), jadi perubahan hanya bisa dikirim dari halaman admin itu sendiri.
- Setelah 5 kali salah kata sandi, login dikunci selama 60 detik.
- File akun berbentuk `.php`, jadi isinya tidak tampil walaupun dibuka langsung dari browser.

**Lupa kata sandi?** Hapus file `data/admin.php`, lalu masuk lagi dengan akun bawaan `admin` / `admin123`.

## API untuk halaman permainan

| Permintaan | Kegunaan |
| --- | --- |
| `GET api/soal.php` | Semua soal dalam bentuk yang langsung dipakai `js/script.js` |
| `GET api/skor.php?mode=quiz&paket=semua` | 10 skor tertinggi Mode Quiz (paket: `semua`, `quiz`, `sort`, `dec`) |
| `GET api/skor.php?mode=ular` | 10 hasil ular tangga terbaru |
| `POST api/skor.php` | Simpan skor baru, body berupa JSON (contoh ada di komentar `skor.php`) |

**Papan peringkat Mode Quiz** tersimpan otomatis saat hasil akhir muncul. Ada empat papan: Ketiganya (maksimal 150), SDG Quiz, Waste Sorting, dan SDG Decision (masing-masing maksimal 50).

**Riwayat ular tangga** tersimpan saat permainan berakhir, asalkan minimal satu kartu Quest sudah dibuka.

Untuk mengosongkan skor, isi ulang `data/skor.json` dengan:

```json
{"quiz": [], "ular": []}
```

## Catatan

- Membutuhkan PHP versi 7.4 atau lebih baru. XAMPP versi terbaru sudah memenuhi.
- Kalau diunggah ke hosting Linux, folder `data` harus bisa ditulisi oleh server (biasanya `chmod 775`).
- File `.htaccess` di folder `data` dan `inc` hanya berlaku di Apache. Kalau memakai Nginx, blokir akses ke kedua folder itu lewat konfigurasi server.
- Soal tidak diganti di tengah permainan yang sedang berjalan. Soal baru dipakai mulai permainan berikutnya.
- Skor dikirim dari browser, jadi orang yang paham teknis masih bisa mengirim skor palsu. Untuk kelas atau prototipe ini sudah cukup.
- Font Baloo 2 dan Nunito dimuat dari Google Fonts, jadi butuh internet. Tanpa internet, halaman memakai font cadangan dan tetap bisa dipakai.
