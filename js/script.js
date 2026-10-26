const SDG=[
 {n:1,name:"Tanpa Kemiskinan",c:"#E5243B"},{n:2,name:"Tanpa Kelaparan",c:"#DDA63A"},{n:3,name:"Kehidupan Sehat dan Sejahtera",c:"#4C9F38"},
 {n:4,name:"Pendidikan Berkualitas",c:"#C5192D"},{n:5,name:"Kesetaraan Gender",c:"#FF3A21"},{n:6,name:"Air Bersih dan Sanitasi Layak",c:"#26BDE2"},
 {n:7,name:"Energi Bersih dan Terjangkau",c:"#FCC30B"},{n:8,name:"Pekerjaan Layak dan Pertumbuhan Ekonomi",c:"#A21942"},{n:9,name:"Industri, Inovasi, dan Infrastruktur",c:"#FD6925"},
 {n:10,name:"Berkurangnya Kesenjangan",c:"#DD1367"},{n:11,name:"Kota dan Permukiman yang Berkelanjutan",c:"#FD9D24"},{n:12,name:"Konsumsi dan Produksi yang Bertanggung Jawab",c:"#BF8B2E"},
 {n:13,name:"Penanganan Perubahan Iklim",c:"#3F7E44"},{n:14,name:"Ekosistem Lautan",c:"#0A97D9"},{n:15,name:"Ekosistem Daratan",c:"#56C02B"},
 {n:16,name:"Perdamaian, Keadilan, dan Kelembagaan yang Tangguh",c:"#00689D"},{n:17,name:"Kemitraan untuk Mencapai Tujuan",c:"#19486A"}];

/* [pertanyaan, jawaban benar, [3 pengecoh], penjelasan] — urutan pilihan diacak saat kartu dibuka */
const Q={
1:[["Apa tujuan utama SDG 1?","Mengakhiri kemiskinan dalam segala bentuk di mana pun",["Membangun lebih banyak pusat perbelanjaan","Menambah jumlah kendaraan pribadi","Mengurangi jumlah hari sekolah"],"SDG 1 ingin mengakhiri kemiskinan, termasuk sulitnya mendapat makanan, pendidikan, dan layanan kesehatan."],
["Manakah contoh program yang membantu mengurangi kemiskinan?","Beasiswa sekolah untuk siswa dari keluarga kurang mampu",["Menaikkan harga kebutuhan pokok","Melarang pedagang kecil berjualan","Membuang makanan yang masih layak"],"Beasiswa membuat anak tetap bersekolah, sehingga peluang mendapat pekerjaan yang lebih baik terbuka."],
["Berikut ini yang termasuk kebutuhan dasar manusia adalah…","Pangan, sandang, dan papan",["Ponsel keluaran terbaru","Kendaraan mewah","Liburan ke luar negeri"],"Pangan, sandang, dan papan adalah kebutuhan dasar. Keluarga miskin sering kesulitan memenuhinya."],
["Sikap siswa yang membantu teman yang kurang mampu adalah…","Menyumbangkan buku dan pakaian layak pakai",["Mengejek teman yang seragamnya lusuh","Membuang barang yang masih bisa dipakai","Tidak peduli pada lingkungan sekitar"],"Berbagi barang layak pakai meringankan beban keluarga yang kurang mampu."],
["Kemiskinan dapat dikurangi dengan cara…","Membuka lapangan kerja dan meningkatkan pendidikan",["Menaikkan harga bahan pokok","Mengurangi jumlah sekolah","Menutup pasar tradisional"],"Pekerjaan dan pendidikan memberi orang kesempatan untuk meningkatkan penghasilannya."]],
2:[["Selain menghapus kelaparan, SDG 2 juga bertujuan…","Memperbaiki gizi dan mendorong pertanian berkelanjutan",["Memperbanyak restoran cepat saji","Mengurangi lahan pertanian","Mengimpor semua bahan makanan"],"SDG 2 memastikan semua orang cukup makan dengan makanan bergizi, dan pangan tetap tersedia untuk generasi berikutnya."],
["Stunting pada anak terutama disebabkan oleh…","Kekurangan gizi dalam waktu lama",["Terlalu banyak berolahraga","Kurang tidur siang","Terlalu sering bermain gawai"],"Stunting terjadi karena kekurangan gizi kronis, terutama pada 1.000 hari pertama kehidupan."],
["Makanan dengan gizi seimbang terdiri dari…","Makanan pokok, lauk-pauk, sayur, dan buah",["Hanya nasi dan kerupuk","Makanan cepat saji setiap hari","Minuman manis dan camilan"],"Gizi seimbang berarti tubuh mendapat karbohidrat, protein, vitamin, dan mineral dalam jumlah cukup."],
["Membuang makanan yang masih layak dimakan termasuk…","Pemborosan pangan (food waste)",["Ketahanan pangan","Swasembada pangan","Diversifikasi pangan"],"Makanan yang terbuang sebenarnya bisa mencukupi orang lain yang masih kelaparan."],
["Cara siswa mendukung SDG 2 adalah…","Mengambil makanan secukupnya dan menghabiskannya",["Membuang bekal yang tidak disukai","Membeli jajanan secara berlebihan","Melewatkan sarapan setiap hari"],"Mengambil secukupnya mengurangi sisa makanan yang terbuang."]],
3:[["Kebiasaan berikut yang mendukung SDG 3 adalah…","Mencuci tangan dengan sabun sebelum makan",["Tidur larut malam setiap hari","Sering melewatkan sarapan","Minum minuman manis secara berlebihan"],"Cuci tangan pakai sabun mencegah penularan banyak penyakit, seperti diare."],
["Apa manfaat imunisasi?","Membentuk kekebalan tubuh terhadap penyakit tertentu",["Membuat badan lebih tinggi","Menggantikan makanan bergizi","Menyembuhkan semua jenis penyakit"],"Imunisasi melatih tubuh melawan penyakit seperti campak dan polio."],
["Berapa kali sebaiknya kita menyikat gigi dalam sehari?","Minimal 2 kali, pagi dan sebelum tidur",["Seminggu sekali","Hanya saat gigi sakit","Sebulan sekali"],"Menyikat gigi pagi dan sebelum tidur mencegah gigi berlubang."],
["Penyakit demam berdarah ditularkan melalui gigitan…","Nyamuk Aedes aegypti",["Lalat rumah","Semut","Kecoak"],"Demam berdarah dicegah dengan 3M Plus: menguras, menutup, dan mendaur ulang barang bekas yang bisa menampung air."],
["Kebiasaan yang baik untuk kesehatan mental adalah…","Bercerita kepada orang tepercaya saat sedang sedih",["Memendam semua masalah sendirian","Begadang setiap malam","Bermain gawai tanpa henti"],"Kesehatan mental sama pentingnya dengan kesehatan fisik. Bercerita membantu meringankan beban."]],
4:[["SDG 4 bertujuan menjamin…","Pendidikan berkualitas yang merata dan kesempatan belajar seumur hidup bagi semua",["Sekolah hanya untuk anak di kota besar","Semua siswa mendapat nilai sempurna","Pelajaran hanya dilakukan secara online"],"SDG 4 ingin semua orang mendapat pendidikan berkualitas tanpa memandang latar belakang."],
["Manakah contoh pendidikan inklusif?","Sekolah menyediakan fasilitas agar siswa penyandang disabilitas bisa belajar bersama",["Sekolah hanya menerima siswa yang nilainya tinggi","Siswa penyandang disabilitas tidak boleh ikut kegiatan kelas","Buku pelajaran hanya untuk siswa yang mampu membeli"],"Pendidikan inklusif berarti semua anak bisa belajar bersama di sekolah yang sama."],
["Kebiasaan yang mendukung SDG 4 di rumah adalah…","Membiasakan membaca buku setiap hari",["Membolos sekolah","Menyontek saat ujian","Tidak mengerjakan PR"],"Membaca setiap hari menambah pengetahuan dan melatih kemampuan berpikir."],
["Perpustakaan sekolah mendukung SDG 4 karena…","Menyediakan sumber belajar yang bisa diakses semua siswa",["Menjadi tempat menyimpan barang bekas","Hanya boleh dipakai oleh guru","Menjadi tempat bermain gawai"],"Perpustakaan membuat buku dan ilmu bisa dinikmati semua siswa, termasuk yang tidak mampu membeli buku."],
["Belajar sepanjang hayat artinya…","Terus belajar di segala usia, tidak hanya saat sekolah",["Belajar hanya sampai lulus SD","Belajar hanya saat ujian","Belajar hanya di dalam kelas"],"Ilmu terus berkembang, jadi kita perlu terus belajar seumur hidup."]],
5:[["Kesetaraan gender berarti…","Laki-laki dan perempuan memiliki hak dan kesempatan yang sama",["Perempuan tidak perlu sekolah tinggi","Hanya laki-laki yang boleh menjadi pemimpin","Pekerjaan rumah hanya untuk perempuan"],"Kesetaraan gender berlaku dalam pendidikan, pekerjaan, dan kesempatan menjadi pemimpin."],
["Contoh kesetaraan gender di sekolah adalah…","Pemilihan ketua OSIS terbuka bagi siswa laki-laki dan perempuan",["Hanya siswa laki-laki yang boleh ikut lomba sains","Siswa perempuan selalu ditugaskan piket kelas","Ekstrakurikuler futsal dilarang untuk siswa perempuan"],"Pemimpin dipilih karena kemampuannya, bukan jenis kelaminnya."],
["Pekerjaan rumah tangga sebaiknya dikerjakan oleh…","Semua anggota keluarga secara bersama-sama",["Hanya ibu","Hanya anak perempuan","Hanya asisten rumah tangga"],"Berbagi tugas rumah membiasakan sikap adil di dalam keluarga."],
["Tokoh perempuan Indonesia yang memperjuangkan pendidikan bagi perempuan melalui surat-suratnya adalah…","R.A. Kartini",["Cut Nyak Dien","Martha Christina Tiahahu","Fatmawati"],"Surat-surat Kartini dibukukan dalam “Habis Gelap Terbitlah Terang” dan menginspirasi pendidikan bagi perempuan."],
["Teman perempuanmu ingin mencalonkan diri menjadi ketua kelas. Sikap yang tepat adalah…","Mendukungnya jika ia mampu memimpin",["Melarangnya karena ia perempuan","Menertawakan keinginannya","Tidak memilihnya hanya karena ia perempuan"],"Setiap siswa berhak mencalonkan diri. Yang dinilai adalah kemampuannya."]],
6:[["Manakah contoh sanitasi yang layak?","Memiliki toilet sehat dengan saluran pembuangan yang aman",["Membuang sampah ke sungai","Buang air besar di sungai","Membiarkan air limbah menggenang di halaman"],"Sanitasi yang buruk dapat mencemari air dan menyebarkan penyakit seperti diare."],
["Cara menghemat air di rumah adalah…","Menutup keran saat menyikat gigi",["Membiarkan keran terbuka saat menyikat gigi","Mencuci motor setiap hari","Menyiram tanaman di siang hari yang terik"],"Air bersih terbatas, jadi gunakan secukupnya."],
["Manakah sumber air yang layak untuk diolah menjadi air minum?","Air ledeng atau sumur yang terlindung",["Air selokan","Air sungai yang tercemar","Genangan air hujan"],"Air minum harus berasal dari sumber yang terlindung dari pencemaran, lalu dimasak sebelum diminum."],
["Membuang sampah ke sungai dapat menyebabkan…","Pencemaran air dan banjir",["Air sungai menjadi lebih jernih","Ikan di sungai bertambah banyak","Sungai menjadi lebih dalam"],"Sampah mencemari air dan menyumbat aliran sungai sehingga memicu banjir."],
["Lubang resapan biopori berguna untuk…","Membantu air hujan meresap ke dalam tanah",["Membuang sampah plastik","Menampung limbah pabrik","Menjadi tempat berkembang biak nyamuk"],"Biopori menambah cadangan air tanah dan mengurangi genangan."]],
7:[["Manakah yang termasuk energi terbarukan?","Energi matahari (tenaga surya)",["Batu bara","Minyak bumi","Gas alam"],"Energi matahari tidak akan habis, sedangkan bahan bakar fosil terbatas dan menghasilkan emisi."],
["Cara sederhana menghemat energi listrik adalah…","Mematikan lampu dan peralatan listrik saat tidak digunakan",["Menyalakan lampu di siang hari","Membiarkan charger tetap tercolok","Menyalakan AC sambil membuka jendela"],"Hemat listrik juga mengurangi emisi, karena banyak pembangkit listrik masih memakai batu bara."],
["Pembangkit listrik yang memanfaatkan aliran air disebut…","PLTA",["PLTU","PLTD","PLTN"],"PLTA (Pembangkit Listrik Tenaga Air) memakai energi terbarukan dari aliran air."],
["Jenis lampu yang paling hemat energi adalah…","Lampu LED",["Lampu pijar","Lilin","Obor"],"Lampu LED memakai listrik lebih sedikit untuk menghasilkan cahaya yang sama terang."],
["Panel surya mengubah … menjadi energi listrik.","Cahaya matahari",["Angin","Batu bara","Minyak bumi"],"Panel surya menghasilkan listrik tanpa asap dan cocok untuk Indonesia yang mendapat sinar matahari sepanjang tahun."]],
8:[["Manakah yang bertentangan dengan SDG 8?","Mempekerjakan anak di bawah umur hingga putus sekolah",["Memberi upah yang adil kepada pekerja","Menyediakan alat keselamatan kerja","Membuka lapangan kerja baru"],"Pekerja anak kehilangan hak untuk belajar dan bermain."],
["Mengapa UMKM penting bagi SDG 8?","Karena UMKM membuka lapangan kerja dan menggerakkan ekonomi lokal",["Karena UMKM tidak perlu membayar pekerja","Karena UMKM hanya ada di kota besar","Karena UMKM mengurangi jumlah pekerjaan"],"UMKM menyerap banyak tenaga kerja di Indonesia."],
["Ciri pekerjaan yang layak adalah…","Upah adil, tempat kerja aman, dan hak pekerja dihormati",["Jam kerja tanpa batas","Tidak ada alat keselamatan","Upah di bawah ketentuan"],"Pekerjaan layak membuat pekerja sejahtera dan aman."],
["Wirausaha berperan dalam SDG 8 karena…","Menciptakan lapangan kerja baru",["Menambah jumlah pengangguran","Mengurangi jumlah pekerjaan","Menghambat pertumbuhan ekonomi"],"Setiap usaha baru membuka kesempatan kerja bagi orang lain."],
["Membeli produk lokal dapat…","Membantu pelaku usaha dalam negeri berkembang",["Merugikan UMKM","Mengurangi lapangan kerja","Menutup usaha kecil"],"Uang yang dibelanjakan untuk produk lokal berputar di dalam negeri."]],
9:[["Manakah contoh infrastruktur?","Jalan, jembatan, dan jaringan internet",["Buku tulis dan pensil","Pakaian dan sepatu","Makanan dan minuman"],"Infrastruktur adalah fasilitas dasar yang memudahkan orang bekerja, bersekolah, dan berdagang."],
["Apa yang dimaksud dengan inovasi?","Menciptakan ide, cara, atau produk baru yang lebih baik",["Meniru karya orang lain tanpa izin","Menggunakan cara lama terus-menerus","Membuang barang yang sudah rusak"],"Inovasi membantu menyelesaikan masalah dengan cara yang lebih baik."],
["Contoh inovasi teknologi dalam pembayaran adalah…","Pembayaran digital dengan QRIS",["Menukar barang dengan barang","Menyimpan uang di bawah kasur","Mencatat utang di buku"],"QRIS memudahkan pembeli dan penjual bertransaksi tanpa uang tunai."],
["Akses internet yang merata penting agar…","Semua daerah bisa belajar dan berusaha secara online",["Hanya kota besar yang maju","Siswa tidak perlu belajar","Desa tertinggal semakin jauh"],"Internet yang merata membuka kesempatan yang sama bagi desa dan kota."],
["Industri yang ramah lingkungan sebaiknya…","Mengolah limbah sebelum dibuang",["Membuang limbah ke sungai","Membakar sampah sembarangan","Menebang hutan tanpa izin"],"Limbah yang diolah tidak mencemari air, tanah, dan udara."]],
10:[["SDG 10 bertujuan untuk…","Mengurangi kesenjangan di dalam dan antarnegara",["Membuat orang kaya semakin kaya","Menutup akses pendidikan bagi daerah terpencil","Membedakan perlakuan berdasarkan suku"],"SDG 10 ingin semua orang mendapat kesempatan yang adil."],
["Sikap yang mendukung SDG 10 di sekolah adalah…","Berteman tanpa membeda-bedakan suku, agama, atau status ekonomi",["Hanya berteman dengan yang berasal dari daerah yang sama","Mengejek teman karena kondisi ekonominya","Menolak teman yang berbeda agama dalam kelompok belajar"],"Setiap orang berhak diperlakukan adil apa pun latar belakangnya."],
["Fasilitas yang membantu penyandang disabilitas di tempat umum adalah…","Jalur landai (ramp) untuk kursi roda",["Tangga yang curam","Pintu yang sempit","Jalan yang berlubang"],"Fasilitas ramah disabilitas membuat semua orang bisa beraktivitas dengan mandiri."],
["Manakah contoh diskriminasi?","Menolak seseorang karena suku atau agamanya",["Membantu teman belajar","Berbagi bekal dengan teman","Bekerja sama dalam kelompok"],"Diskriminasi memperlebar kesenjangan dan bertentangan dengan SDG 10."],
["Semboyan Bhinneka Tunggal Ika mendukung SDG 10 karena mengajarkan…","Menghargai perbedaan dan hidup rukun",["Persaingan antarsuku","Membeda-bedakan teman","Hanya bergaul dengan satu kelompok"],"Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu."]],
11:[["Menggunakan transportasi umum mendukung kota berkelanjutan karena…","Mengurangi kemacetan dan polusi udara",["Membuat jalan semakin padat","Menambah jumlah kendaraan pribadi","Membutuhkan lebih banyak lahan parkir"],"Satu bus dapat mengangkut puluhan orang sekaligus."],
["Apa fungsi ruang terbuka hijau (RTH) di kota?","Menjadi daerah resapan air dan menyerap polusi udara",["Tempat membuang sampah","Lahan untuk membangun pabrik","Tempat parkir kendaraan"],"RTH mengurangi risiko banjir dan menjadi tempat warga beraktivitas."],
["Salah satu penyebab banjir di kota adalah…","Sampah yang menyumbat saluran air",["Banyaknya taman kota","Pohon di pinggir jalan","Sumur resapan"],"Saluran air yang tersumbat membuat air hujan meluap ke jalan dan rumah."],
["Contoh permukiman yang berkelanjutan adalah…","Lingkungan dengan pengelolaan sampah dan ruang hijau yang baik",["Permukiman kumuh di bantaran sungai","Kawasan tanpa saluran air","Lingkungan yang penuh sampah"],"Permukiman berkelanjutan aman, sehat, dan nyaman ditinggali."],
["Mengapa bangunan bersejarah perlu dilestarikan?","Karena merupakan warisan budaya yang perlu dijaga",["Agar bisa segera dibongkar","Karena tidak memiliki nilai apa pun","Agar dijadikan tempat pembuangan sampah"],"Melindungi warisan budaya adalah salah satu target SDG 11."]],
12:[["Apa kepanjangan dari 3R dalam pengelolaan sampah?","Reduce, Reuse, Recycle",["Rapi, Resik, Rajin","Read, Write, Repeat","Repair, Return, Remove"],"Artinya mengurangi, menggunakan kembali, dan mendaur ulang sampah."],
["Manakah yang termasuk sampah organik?","Kulit pisang",["Botol plastik","Baterai bekas","Kaleng minuman"],"Sampah organik mudah terurai dan bisa diolah menjadi kompos."],
["Mengolah sampah organik menjadi pupuk disebut…","Pengomposan",["Pembakaran","Penimbunan","Pencemaran"],"Kompos menyuburkan tanah dan mengurangi sampah di TPA."],
["Baterai bekas termasuk jenis sampah…","B3 (bahan berbahaya dan beracun)",["Organik","Kertas","Sisa makanan"],"Sampah B3 harus dipisahkan karena bisa mencemari tanah dan air."],
["Contoh konsumsi yang bertanggung jawab adalah…","Membeli barang sesuai kebutuhan",["Membeli barang yang sedang tren walau tidak perlu","Membuang barang yang masih bagus","Memakai plastik sekali pakai sebanyak-banyaknya"],"Belanja sesuai kebutuhan mengurangi sampah dan pemborosan sumber daya."]],
13:[["Gas rumah kaca yang paling banyak dihasilkan dari pembakaran bahan bakar fosil adalah…","Karbon dioksida (CO₂)",["Oksigen (O₂)","Nitrogen (N₂)","Helium (He)"],"CO₂ memerangkap panas di atmosfer sehingga suhu bumi meningkat."],
["Tindakan sehari-hari yang membantu mengurangi perubahan iklim adalah…","Berjalan kaki atau bersepeda untuk jarak dekat",["Diantar motor untuk jarak 200 meter","Membakar sampah di halaman","Membiarkan mesin kendaraan menyala saat parkir"],"Berjalan kaki dan bersepeda tidak menghasilkan emisi."],
["Salah satu dampak pemanasan global adalah…","Es di kutub mencair dan permukaan laut naik",["Suhu bumi menurun","Hutan bertambah luas","Musim menjadi selalu sama"],"Naiknya permukaan laut mengancam daerah pesisir dan pulau kecil."],
["Efek rumah kaca terjadi karena…","Gas di atmosfer memerangkap panas matahari",["Banyak gedung berdinding kaca","Bumi semakin jauh dari matahari","Bulan menutupi matahari"],"Semakin banyak gas rumah kaca, semakin banyak panas yang terperangkap."],
["Menanam pohon membantu mengatasi perubahan iklim karena…","Pohon menyerap karbon dioksida",["Pohon menghasilkan asap","Pohon menaikkan suhu bumi","Pohon menghasilkan plastik"],"Pohon menyerap CO₂ dan menghasilkan oksigen."]],
14:[["Mengapa sampah plastik di laut berbahaya?","Hewan laut dapat memakannya atau terjerat",["Membuat air laut menjadi tawar","Menambah jumlah ikan","Membuat terumbu karang tumbuh lebih cepat"],"Plastik juga terurai menjadi mikroplastik yang masuk ke rantai makanan."],
["Apa fungsi terumbu karang bagi laut?","Tempat hidup dan berkembang biak berbagai jenis ikan",["Tempat membuang limbah pabrik","Tidak memiliki fungsi apa pun","Penyebab air laut menjadi asin"],"Terumbu karang juga melindungi pantai dari abrasi."],
["Menangkap ikan dengan bom dapat…","Merusak terumbu karang dan membunuh banyak biota laut",["Menambah jumlah ikan","Membersihkan laut","Menyuburkan terumbu karang"],"Bom ikan menghancurkan rumah ikan sehingga hasil tangkapan di masa depan berkurang."],
["Hutan bakau (mangrove) berfungsi untuk…","Melindungi pantai dari abrasi",["Mencemari laut","Mempercepat abrasi","Menjadi tempat membuang sampah"],"Akar mangrove menahan ombak dan menjadi tempat hidup banyak biota."],
["Mikroplastik adalah…","Potongan plastik sangat kecil yang mencemari lingkungan",["Plastik yang mudah terurai","Jenis ikan kecil","Alat penangkap ikan"],"Mikroplastik bisa termakan ikan lalu masuk ke tubuh manusia."]],
15:[["Apa yang dimaksud dengan deforestasi?","Hilangnya hutan akibat penebangan atau pembukaan lahan",["Penanaman pohon di lahan kosong","Perlindungan hewan langka","Pembuatan taman kota"],"Hilangnya hutan mengancam satwa dan meningkatkan risiko banjir serta longsor."],
["Kegiatan menanam kembali hutan yang gundul disebut…","Reboisasi",["Deforestasi","Urbanisasi","Abrasi"],"Reboisasi memulihkan hutan yang rusak."],
["Manakah hewan langka asli Indonesia yang dilindungi?","Orangutan",["Ayam kampung","Kucing","Kambing"],"Orangutan terancam karena habitatnya di hutan terus berkurang."],
["Kebakaran hutan dapat menyebabkan…","Kabut asap dan hilangnya habitat satwa",["Udara menjadi lebih bersih","Hutan bertambah luas","Satwa bertambah banyak"],"Asap kebakaran hutan juga mengganggu kesehatan manusia."],
["Kawasan yang dilindungi untuk melestarikan hewan dan tumbuhan disebut…","Taman nasional",["Pusat perbelanjaan","Kawasan industri","Terminal"],"Contohnya Taman Nasional Komodo dan Taman Nasional Ujung Kulon."]],
16:[["Sikap yang mendukung SDG 16 di sekolah adalah…","Menyelesaikan masalah dengan musyawarah dan menolak perundungan",["Membalas ejekan dengan kekerasan","Ikut-ikutan merundung teman","Menyebarkan berita bohong tentang teman"],"SDG 16 ingin masyarakat hidup damai, adil, dan tanpa kekerasan."],
["Lembaga negara di Indonesia yang bertugas memberantas korupsi adalah…","KPK",["BMKG","BPS","BNPB"],"Korupsi merugikan masyarakat dan bertentangan dengan SDG 16."],
["Jika melihat perundungan di sekolah, sebaiknya kamu…","Melaporkannya kepada guru atau orang dewasa tepercaya",["Diam saja","Ikut merundung","Merekam lalu menyebarkannya"],"Melapor membantu menghentikan perundungan dan melindungi korban."],
["Contoh sikap jujur di sekolah adalah…","Tidak menyontek saat ujian",["Menyalin tugas teman","Berbohong kepada guru","Mengambil barang milik teman"],"Kejujuran adalah dasar lembaga yang bersih dan dapat dipercaya."],
["Musyawarah adalah cara mengambil keputusan dengan…","Berdiskusi bersama untuk mencapai kesepakatan",["Memaksakan pendapat sendiri","Bertengkar sampai ada yang menang","Mengikuti satu orang saja"],"Musyawarah membuat keputusan adil karena semua pendapat didengar."]],
17:[["SDG 17 menekankan pentingnya…","Kerja sama antara pemerintah, swasta, masyarakat, dan antarnegara",["Setiap negara bekerja sendiri-sendiri","Persaingan tanpa aturan","Menutup hubungan dengan negara lain"],"Tujuan SDGs terlalu besar untuk dicapai satu pihak saja."],
["Manakah contoh kemitraan untuk mencapai SDGs?","Perusahaan bekerja sama dengan sekolah menyediakan tempat sampah terpilah",["Sekolah melarang orang tua ikut kegiatan","Siswa mengerjakan tugas kelompok sendirian","Warga menolak program kebersihan lingkungan"],"Kemitraan terjadi saat beberapa pihak bekerja sama untuk tujuan yang sama."],
["Apa kepanjangan dari SDGs?","Sustainable Development Goals",["Social Development Groups","Sustainable Daily Goals","Smart Development Generation"],"SDGs terdiri dari 17 tujuan global yang ditargetkan tercapai pada tahun 2030."],
["Contoh kerja sama di sekolah untuk mendukung SDGs adalah…","OSIS dan warga sekolah bergotong royong membersihkan lingkungan",["Setiap siswa bekerja sendiri-sendiri","Saling menyalahkan saat ada masalah","Menolak semua kegiatan bersama"],"Gotong royong adalah bentuk kemitraan di lingkungan terdekat."],
["Mengapa SDGs membutuhkan kemitraan?","Karena tujuan besar tidak bisa dicapai oleh satu pihak saja",["Karena hanya pemerintah yang bertanggung jawab","Karena SDGs hanya untuk negara maju","Karena masyarakat tidak perlu terlibat"],"Pemerintah, swasta, masyarakat, dan negara lain perlu bergerak bersama."]]
};

/* Soal tambahan: setiap kategori jadi 10 soal */
const Q2={
1:[["Garis kemiskinan digunakan untuk…","Menentukan batas penghasilan seseorang tergolong miskin atau tidak",["Membagi wilayah provinsi","Menghitung jumlah sekolah","Mengukur luas sawah"],"BPS memakai garis kemiskinan untuk menghitung jumlah penduduk miskin."],
["Lembaga yang mendata jumlah penduduk miskin di Indonesia adalah…","BPS (Badan Pusat Statistik)",["BMKG","Basarnas","KPU"],"Data BPS dipakai pemerintah untuk merencanakan program pengentasan kemiskinan."],
["Menabung sejak kecil membantu mencegah kemiskinan karena…","Memiliki cadangan uang untuk kebutuhan mendesak",["Membuat uang cepat habis","Mengurangi semangat bekerja","Tidak ada manfaatnya"],"Tabungan melindungi keluarga saat ada kebutuhan mendadak."],
["Bencana alam dapat menyebabkan kemiskinan karena…","Warga kehilangan rumah, harta, dan pekerjaan",["Harga barang selalu turun","Lapangan kerja bertambah","Semua warga menjadi kaya"],"Karena itu, kesiapsiagaan bencana juga menjadi bagian dari SDG 1."],
["Program bantuan sosial dari pemerintah bertujuan untuk…","Membantu keluarga kurang mampu memenuhi kebutuhan dasar",["Membiayai liburan warga","Menambah utang warga","Mengurangi jumlah sekolah"],"Bantuan sosial menjadi jaring pengaman bagi keluarga yang paling membutuhkan."]],
2:[["Contoh makanan sumber protein adalah…","Telur, tempe, dan ikan",["Gula dan permen","Minyak goreng","Air putih"],"Protein membantu pertumbuhan dan memperbaiki sel tubuh."],
["Pekarangan rumah bisa mendukung ketahanan pangan dengan cara…","Menanam sayur dan tanaman obat",["Dibiarkan penuh sampah","Dipakai untuk membakar sampah","Ditutup semen seluruhnya"],"Kebun pekarangan menyediakan bahan pangan segar untuk keluarga."],
["Diversifikasi pangan artinya…","Menganekaragamkan makanan pokok, tidak hanya beras",["Hanya makan nasi","Mengimpor semua makanan","Mengurangi makan sayur"],"Jagung, sagu, singkong, dan ubi juga bisa menjadi makanan pokok."],
["Petani penting bagi SDG 2 karena…","Menghasilkan bahan pangan bagi masyarakat",["Membangun jalan tol","Membuat pakaian","Memproduksi kendaraan"],"Tanpa petani, ketersediaan pangan tidak bisa terjamin."],
["Pupuk kompos lebih ramah lingkungan karena…","Berasal dari bahan alami dan menyuburkan tanah",["Mengandung plastik","Membuat tanah keras","Mencemari air sungai"],"Kompos dibuat dari sampah organik dan menjaga kesuburan tanah dalam jangka panjang."]],
3:[["Berapa lama waktu tidur yang dianjurkan untuk remaja?","Sekitar 8–10 jam setiap malam",["2–3 jam","4–5 jam","14–16 jam"],"Tidur yang cukup membantu konsentrasi belajar dan daya tahan tubuh."],
["Merokok berbahaya bagi kesehatan karena…","Merusak paru-paru dan jantung",["Menambah stamina","Menyehatkan gigi","Membuat napas lebih segar"],"Asap rokok juga membahayakan orang di sekitar perokok."],
["Olahraga teratur bermanfaat untuk…","Menjaga kebugaran dan daya tahan tubuh",["Membuat cepat lelah","Melemahkan otot","Mengganggu tidur"],"Aktivitas fisik setiap hari membantu tubuh tetap sehat."],
["Minuman yang paling baik untuk tubuh sehari-hari adalah…","Air putih",["Minuman bersoda","Minuman berenergi","Kopi kemasan manis"],"Minuman manis berlebihan meningkatkan risiko obesitas dan diabetes."],
["Fasilitas kesehatan tingkat pertama yang ada di setiap kecamatan adalah…","Puskesmas",["Kantor pos","Terminal","Stasiun"],"Puskesmas melayani pemeriksaan, imunisasi, dan penyuluhan kesehatan."]],
4:[["Literasi artinya…","Kemampuan membaca, menulis, dan memahami informasi",["Kemampuan berlari cepat","Kemampuan bernyanyi","Kemampuan memasak"],"Literasi adalah dasar untuk mempelajari hal lain."],
["Guru yang berkualitas penting bagi SDG 4 karena…","Membantu siswa belajar dengan baik",["Hanya memberi nilai","Tidak perlu mengajar","Membuat siswa takut"],"Salah satu target SDG 4 adalah menambah jumlah guru yang berkualitas."],
["Belajar online bisa membuat pendidikan lebih merata jika…","Internet dan perangkat tersedia untuk semua siswa",["Hanya siswa kota yang punya internet","Tidak ada guru yang membimbing","Materi tidak bisa diakses"],"Tanpa akses yang merata, belajar online justru memperlebar kesenjangan."],
["Contoh pendidikan nonformal adalah…","Kursus atau pelatihan keterampilan",["SD","SMP","SMA"],"Pendidikan nonformal memberi kesempatan belajar di luar sekolah."],
["Sikap yang tepat jika teman kesulitan memahami pelajaran adalah…","Membantunya belajar bersama",["Menertawakannya","Membiarkannya saja","Memberinya contekan"],"Belajar bersama membantu semua siswa berkembang."]],
5:[["Untuk pekerjaan yang sama, perempuan dan laki-laki sebaiknya mendapat upah…","Yang sama",["Perempuan lebih rendah","Laki-laki lebih rendah","Tergantung jenis kelamin"],"Upah ditentukan oleh pekerjaan dan kemampuan, bukan jenis kelamin."],
["Hari Kartini diperingati setiap tanggal…","21 April",["17 Agustus","2 Mei","10 November"],"Tanggal 21 April adalah hari lahir R.A. Kartini."],
["Kekerasan terhadap perempuan bertentangan dengan SDG 5 karena…","Melanggar hak dan martabat perempuan",["Diperbolehkan dalam keluarga","Tidak berbahaya","Merupakan bagian dari budaya"],"Menghapus segala bentuk kekerasan terhadap perempuan adalah salah satu target SDG 5."],
["Mainan dan cita-cita anak sebaiknya…","Tidak dibatasi karena jenis kelamin",["Anak perempuan hanya boleh bermain boneka","Anak laki-laki dilarang memasak","Ditentukan oleh jenis kelamin"],"Setiap anak berhak mengembangkan minat dan bakatnya."],
["Contoh profesi yang bisa dijalani perempuan maupun laki-laki adalah…","Dokter, insinyur, dan pilot",["Tidak ada","Hanya guru TK","Hanya pekerjaan rumah"],"Semua profesi terbuka bagi siapa pun yang mampu."]],
6:[["Air yang aman diminum adalah air yang…","Jernih, tidak berbau, tidak berasa, dan sudah dimasak",["Berwarna keruh","Berbau tidak sedap","Diambil dari selokan"],"Memasak air membunuh kuman penyebab penyakit."],
["Contoh pencemaran air oleh limbah rumah tangga adalah…","Air bekas cucian yang dibuang langsung ke sungai",["Air hujan yang meresap ke tanah","Air sumur yang ditutup rapat","Air minum dalam galon"],"Deterjen dalam air cucian dapat mencemari sungai dan mengganggu kehidupan di dalamnya."],
["Salah satu penyakit akibat air yang kotor adalah…","Diare",["Rabun jauh","Patah tulang","Sakit gigi"],"Air bersih dan sanitasi layak mencegah penyakit diare."],
["Menampung air hujan dalam wadah tertutup bermanfaat untuk…","Menyiram tanaman dan menghemat air bersih",["Membuat genangan","Tempat nyamuk bertelur","Mencemari tanah"],"Wadah harus tertutup agar tidak menjadi sarang nyamuk."],
["Cara mencuci tangan yang benar menggunakan…","Sabun dan air mengalir",["Air di baskom yang dipakai bergantian","Sedikit air tanpa sabun","Lap kain saja"],"Air mengalir membawa kotoran dan kuman pergi dari tangan."]],
7:[["Bahan bakar fosil disebut tidak terbarukan karena…","Butuh jutaan tahun untuk terbentuk kembali",["Bisa dibuat setiap hari","Berasal dari cahaya matahari","Tidak pernah habis"],"Bahan bakar fosil terbentuk dari sisa makhluk hidup selama jutaan tahun."],
["Pembangkit listrik tenaga angin disebut…","PLTB (Pembangkit Listrik Tenaga Bayu)",["PLTU","PLTD","PLTGU"],"Kincir angin mengubah energi gerak angin menjadi listrik."],
["Energi dari panas di dalam bumi disebut…","Energi panas bumi (geotermal)",["Energi air","Energi nuklir","Energi biomassa"],"Indonesia memiliki potensi panas bumi yang besar karena banyak gunung api."],
["Contoh energi biomassa adalah…","Biogas dari kotoran ternak",["Batu bara","Minyak bumi","Gas alam"],"Biogas dapat dipakai untuk memasak dan mengurangi limbah peternakan."],
["Kendaraan listrik lebih ramah lingkungan jika…","Listriknya berasal dari energi terbarukan",["Diisi dengan bensin","Dipakai tanpa henti","Tidak pernah dirawat"],"Jika listriknya dari batu bara, emisinya hanya berpindah ke pembangkit listrik."]],
8:[["Pengangguran adalah…","Orang usia kerja yang belum memiliki pekerjaan",["Siswa yang masih sekolah SD","Orang yang sudah pensiun","Orang yang bekerja lembur"],"Mengurangi pengangguran adalah salah satu tujuan SDG 8."],
["Alat pelindung diri (APD) di tempat kerja berguna untuk…","Melindungi pekerja dari kecelakaan",["Hiasan seragam","Memperlambat pekerjaan","Mengurangi upah"],"Contoh APD adalah helm, sarung tangan, dan masker."],
["Pariwisata dapat mendukung SDG 8 karena…","Membuka lapangan kerja bagi warga sekitar",["Merusak ekonomi lokal","Menutup usaha warga","Mengurangi pendapatan daerah"],"Pariwisata yang dikelola baik menggerakkan usaha kuliner, kerajinan, dan penginapan."],
["Keterampilan digital penting bagi pekerjaan masa depan karena…","Banyak pekerjaan kini menggunakan teknologi",["Teknologi tidak dipakai lagi","Pekerjaan tidak butuh keterampilan","Teknologi hanya untuk bermain gim"],"Keterampilan digital membuka peluang kerja yang lebih luas."],
["Upah minimum ditetapkan agar…","Pekerja mendapat penghasilan yang layak",["Perusahaan membayar sesukanya","Pekerja tidak digaji","Harga barang turun"],"Upah minimum melindungi pekerja dari bayaran yang terlalu rendah."]],
9:[["Contoh inovasi untuk mengatasi sampah plastik adalah…","Mengolah plastik bekas menjadi paving block",["Membuang plastik ke laut","Menimbun plastik di sungai","Membakar plastik di jalan"],"Inovasi daur ulang mengubah sampah menjadi barang yang berguna."],
["Jalan tol dan pelabuhan termasuk…","Infrastruktur transportasi",["Produk pertanian","Kesenian daerah","Makanan tradisional"],"Infrastruktur transportasi memperlancar distribusi barang dan perjalanan orang."],
["Startup teknologi adalah…","Perusahaan rintisan yang mengembangkan produk berbasis teknologi",["Perusahaan yang berumur ratusan tahun","Toko kelontong biasa","Lembaga pemerintah"],"Banyak startup lahir dari ide untuk menyelesaikan masalah sehari-hari."],
["Penelitian dan pengembangan (riset) penting karena…","Menghasilkan pengetahuan dan inovasi baru",["Tidak ada gunanya","Hanya menghabiskan uang","Menghambat kemajuan"],"SDG 9 mendorong negara meningkatkan riset dan jumlah penelitinya."],
["Jaringan listrik ke desa terpencil penting agar…","Warga desa bisa belajar dan berusaha lebih baik",["Desa semakin tertinggal","Warga tidak bisa bekerja","Sekolah ditutup"],"Listrik memungkinkan anak belajar di malam hari dan warga menjalankan usaha."]],
10:[["Contoh kesenjangan di Indonesia adalah…","Perbedaan akses pendidikan antara kota dan desa terpencil",["Semua daerah punya fasilitas yang sama","Semua orang berpenghasilan sama","Tidak ada perbedaan apa pun"],"Mengurangi kesenjangan antardaerah adalah bagian dari SDG 10."],
["Bahasa isyarat membantu…","Teman tuli berkomunikasi",["Teman tunanetra membaca","Orang berlari lebih cepat","Mengganti bahasa Indonesia"],"Belajar bahasa isyarat membuat kita bisa berkomunikasi dengan teman tuli."],
["Huruf Braille digunakan oleh…","Penyandang tunanetra untuk membaca",["Penyandang tunarungu untuk mendengar","Pilot pesawat","Pemain musik"],"Braille berupa titik timbul yang dibaca dengan ujung jari."],
["Pajak dapat membantu mengurangi kesenjangan jika…","Digunakan untuk layanan publik bagi semua warga",["Disimpan untuk orang kaya","Tidak dipakai sama sekali","Dibagikan ke satu kelompok saja"],"Pajak membiayai sekolah, puskesmas, dan jalan yang dipakai semua orang."],
["Sikap yang tepat kepada teman pindahan dari daerah lain adalah…","Menyambut dan mengajaknya berteman",["Mengucilkannya","Menertawakan logatnya","Tidak mau satu kelompok dengannya"],"Menerima perbedaan membuat semua orang merasa dihargai."]],
11:[["Contoh upaya mencegah banjir di kota adalah…","Membersihkan saluran air secara rutin",["Membuang sampah ke got","Menutup semua tanah dengan semen","Menebang pohon di bantaran sungai"],"Saluran yang bersih membuat air hujan mengalir lancar."],
["Trotoar penting agar…","Pejalan kaki aman dan nyaman",["Bisa dipakai parkir motor","Menjadi jalur balap","Bisa ditutup bangunan"],"Kota berkelanjutan memberi ruang aman bagi pejalan kaki."],
["Polusi udara di kota sebagian besar berasal dari…","Asap kendaraan bermotor dan industri",["Pepohonan","Taman kota","Air hujan"],"Transportasi umum dan ruang hijau membantu mengurangi polusi udara."],
["Bank sampah di lingkungan warga bermanfaat untuk…","Mengelola sampah sekaligus menambah penghasilan warga",["Menimbun sampah di rumah","Membakar sampah bersama-sama","Membuang sampah ke sungai"],"Sampah yang dipilah bisa ditabung dan dijual kembali."],
["Rumah yang layak huni memiliki…","Ventilasi, air bersih, dan sanitasi yang baik",["Tidak ada jendela","Lantai tanah yang lembap","Tidak ada toilet"],"SDG 11 menargetkan semua orang memiliki tempat tinggal yang layak dan aman."]],
12:[["Contoh reduce (mengurangi sampah) adalah…","Membawa botol minum sendiri",["Membeli air kemasan setiap hari","Memakai sedotan plastik setiap kali minum","Meminta kantong plastik berlapis-lapis"],"Botol minum yang dipakai berulang mengurangi sampah botol plastik."],
["Label ramah lingkungan pada produk menunjukkan bahwa…","Produk dibuat dengan dampak lingkungan yang lebih kecil",["Produk pasti murah","Produk sudah kedaluwarsa","Produk hanya untuk anak-anak"],"Memilih produk ramah lingkungan mendorong produsen bertanggung jawab."],
["Tren fast fashion berdampak buruk karena…","Menghasilkan banyak limbah pakaian",["Membuat pakaian lebih awet","Mengurangi sampah","Menghemat air"],"Membeli pakaian secukupnya dan merawatnya mengurangi limbah tekstil."],
["Ponsel rusak dan sampah elektronik lainnya sebaiknya…","Diserahkan ke tempat pengumpulan khusus sampah elektronik",["Dibakar","Dibuang ke sungai","Dicampur dengan sampah dapur"],"Sampah elektronik mengandung bahan berbahaya yang harus diolah secara khusus."],
["Memperbaiki barang yang rusak daripada langsung membuangnya termasuk…","Konsumsi yang bertanggung jawab",["Pemborosan","Pencemaran","Penimbunan"],"Barang yang dipakai lebih lama berarti lebih sedikit sampah."]],
13:[["Lembaga di Indonesia yang memberi informasi cuaca dan iklim adalah…","BMKG",["BPS","KPK","BNN"],"BMKG memantau cuaca, iklim, dan gempa bumi."],
["Contoh bencana yang makin sering terjadi akibat perubahan iklim adalah…","Banjir dan kekeringan",["Gerhana matahari","Gempa bumi","Pergantian siang dan malam"],"Perubahan iklim membuat cuaca ekstrem semakin sering."],
["Mematikan lampu saat tidak dipakai membantu iklim karena…","Mengurangi emisi dari pembangkit listrik",["Membuat bumi lebih panas","Menambah polusi","Tidak berpengaruh apa pun"],"Sebagian besar listrik masih dihasilkan dari bahan bakar fosil."],
["Perjanjian internasional tahun 2015 untuk menahan pemanasan global adalah…","Perjanjian Paris",["Perjanjian Linggarjati","Sumpah Pemuda","Konferensi Asia Afrika"],"Negara-negara sepakat menahan kenaikan suhu bumi jauh di bawah 2°C."],
["Membakar sampah tidak dianjurkan karena…","Menghasilkan asap dan gas yang mencemari udara",["Membuat udara segar","Menyuburkan tanah","Mengurangi emisi"],"Sampah sebaiknya dipilah, didaur ulang, atau dikomposkan."]],
14:[["Penangkapan ikan berlebihan (overfishing) menyebabkan…","Populasi ikan berkurang drastis",["Jumlah ikan semakin banyak","Laut semakin bersih","Terumbu karang bertambah"],"Ikan perlu waktu untuk berkembang biak agar jumlahnya tetap terjaga."],
["Pemutihan karang (coral bleaching) terutama disebabkan oleh…","Suhu air laut yang meningkat",["Jumlah ikan yang terlalu banyak","Air laut yang terlalu dingin","Cahaya bulan"],"Karang yang memutih bisa mati jika suhu air tidak kembali normal."],
["Indonesia disebut negara maritim karena…","Sebagian besar wilayahnya berupa lautan",["Tidak memiliki laut","Hanya memiliki satu pulau","Seluruh wilayahnya daratan"],"Laut Indonesia kaya akan ikan dan terumbu karang."],
["Cara siswa ikut melindungi laut adalah…","Mengurangi penggunaan plastik sekali pakai",["Membuang sampah di pantai","Mengambil karang untuk hiasan","Memberi makan ikan dengan plastik"],"Banyak sampah plastik di laut berasal dari daratan."],
["Hewan laut berikut yang dilindungi di Indonesia adalah…","Penyu",["Ikan lele","Ayam","Kambing"],"Penyu terancam karena perburuan telur dan sampah plastik."]],
15:[["Hutan disebut paru-paru dunia karena…","Menghasilkan oksigen dan menyerap karbon dioksida",["Menghasilkan asap","Menyerap oksigen","Menjadi tempat sampah"],"Hutan menjaga kualitas udara yang kita hirup."],
["Hewan endemik Indonesia yang hidup di Pulau Komodo dan sekitarnya adalah…","Komodo",["Panda","Kanguru","Singa"],"Komodo hanya hidup secara alami di Indonesia."],
["Perburuan liar mengancam satwa karena…","Dapat membuat satwa punah",["Menambah jumlah satwa","Melindungi habitat","Menyuburkan hutan"],"Satwa yang punah tidak bisa dikembalikan lagi."],
["Erosi tanah dapat dicegah dengan…","Menanam pohon dan membuat terasering",["Menebang hutan","Membakar lahan","Menggali tanah sembarangan"],"Akar pohon mengikat tanah agar tidak terbawa air hujan."],
["Sampah plastik di tanah berbahaya karena…","Butuh ratusan tahun untuk terurai",["Terurai dalam sehari","Menyuburkan tanah","Menjadi makanan cacing"],"Plastik yang tertimbun mengganggu kesuburan dan kehidupan di dalam tanah."]],
16:[["Hak setiap anak yang dilindungi negara antara lain…","Hak mendapat pendidikan dan perlindungan",["Hak bekerja di pabrik","Hak untuk tidak sekolah","Hak menerima kekerasan"],"Melindungi anak dari kekerasan adalah salah satu target SDG 16."],
["Berita bohong (hoaks) sebaiknya…","Dicek kebenarannya dan tidak disebarkan",["Langsung dibagikan","Ditambah-tambahi","Dipercaya begitu saja"],"Hoaks bisa memicu perpecahan dan konflik."],
["Contoh lembaga peradilan di Indonesia adalah…","Mahkamah Agung",["BMKG","Puskesmas","Bulog"],"Lembaga peradilan menegakkan hukum secara adil."],
["Pemilihan ketua kelas yang adil dilakukan dengan…","Pemungutan suara yang jujur dan terbuka",["Ditunjuk oleh satu siswa saja","Memilih yang paling kuat","Diundi tanpa persetujuan kelas"],"Keputusan yang adil melibatkan suara semua anggota."],
["Akta kelahiran penting karena…","Menjadi bukti identitas resmi seorang anak",["Hanya hiasan","Tidak ada gunanya","Hanya untuk orang dewasa"],"Identitas resmi untuk semua orang adalah salah satu target SDG 16."]],
17:[["Kerja sama Indonesia dengan negara-negara di Asia Tenggara dilakukan melalui…","ASEAN",["FIFA","Liga Champions","Grammy"],"Indonesia adalah salah satu negara pendiri ASEAN pada tahun 1967."],
["Indonesia menjadi tuan rumah KTT G20 di Bali pada tahun…","2022",["1945","1998","2010"],"Forum G20 membahas kerja sama ekonomi dan pembangunan antarnegara."],
["Komunitas yang menyumbangkan buku ke perpustakaan desa adalah contoh…","Kemitraan masyarakat untuk pendidikan",["Persaingan","Pemborosan","Diskriminasi"],"Kemitraan bisa dimulai dari kelompok kecil di sekitar kita."],
["Teknologi dapat membantu kemitraan global karena…","Memudahkan berbagi ilmu dan berkomunikasi antarnegara",["Memutus komunikasi","Membuat negara terisolasi","Menghambat kerja sama"],"Internet memungkinkan kolaborasi lintas negara dengan cepat."],
["SDGs ditargetkan tercapai pada tahun…","2030",["2020","2025","2045"],"SDGs disepakati pada tahun 2015 untuk dicapai dalam 15 tahun."]]
};
for(const k in Q2)Q[k].push(...Q2[k]);

/* Ikon orisinal SDG Quest (bukan ikon resmi PBB) — garis 24x24 */
const ICONS={
1:'<circle cx="15" cy="7" r="3.5"/><path d="M15 5.5v3"/><path d="M2.5 13.5H6l3.5 2h4a1.5 1.5 0 0 1 0 3h-4"/><path d="M2.5 20.5h10l7.2-4.4a1.6 1.6 0 0 0-1.7-2.7l-4.5 2.6"/>',
2:'<path d="M12 21V7"/><ellipse cx="12" cy="5.2" rx="1.6" ry="2.6"/><ellipse cx="9" cy="10.5" rx="1.5" ry="2.6" transform="rotate(-35 9 10.5)"/><ellipse cx="15" cy="10.5" rx="1.5" ry="2.6" transform="rotate(35 15 10.5)"/><ellipse cx="9" cy="15.2" rx="1.5" ry="2.6" transform="rotate(-35 9 15.2)"/><ellipse cx="15" cy="15.2" rx="1.5" ry="2.6" transform="rotate(35 15 15.2)"/>',
3:'<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
4:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/>',
5:'<circle cx="7.5" cy="5.5" r="2.5"/><circle cx="16.5" cy="5.5" r="2.5"/><path d="M3.5 21v-7a4 4 0 0 1 8 0v7"/><path d="M12.5 21v-7a4 4 0 0 1 8 0v7"/>',
6:'<path d="M3 8h8a5 5 0 0 1 5 5v1"/><path d="M7 8V5M4.5 5h5"/><path d="M16 17c1 1.3 1.5 2.2 1.5 3a1.5 1.5 0 0 1-3 0c0-.8.5-1.7 1.5-3z"/>',
7:'<path d="M12 10.5V21"/><path d="M8.5 21h7"/><circle cx="12" cy="9" r="1.4"/><path d="M12 7.6V2.5"/><path d="M10.8 9.7l-4.5 2.6"/><path d="M13.2 9.7l4.5 2.6"/>',
8:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><path d="M3 13h18"/>',
9:'<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="6.5"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
10:'<path d="M12 3v18"/><path d="M7 21h10"/><path d="M5 7h14"/><path d="M5 7l-3 6a3 3 0 0 0 6 0z"/><path d="M19 7l-3 6a3 3 0 0 0 6 0z"/>',
11:'<path d="M3 11l6-5 6 5v9H3z"/><path d="M7.5 20v-4h3v4"/><circle cx="18.5" cy="10.5" r="3"/><path d="M18.5 13.5V20"/><path d="M2 20h20"/>',
12:'<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/><path d="M12 17c0-3 2-4.5 4-4.5 0 2.5-1.5 4.5-4 4.5z"/>',
13:'<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/><path d="M12 9v7"/><path d="M17 5h3M17 8h2M17 11h3"/>',
14:'<path d="M2 8c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/><path d="M2 13c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/><path d="M2 18c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/>',
15:'<path d="M2 20l6.5-11 4 6 3-4 6.5 9z"/><circle cx="17" cy="5.5" r="2"/>',
16:'<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
17:'<circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="18" r="2.2"/><circle cx="19" cy="18" r="2.2"/><path d="M11 7l-5 9M13 7l5 9M7.2 18h9.6"/>'};
const icon=n=>`<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24">${ICONS[n]}</svg></span>`;
/* Logo kotak Quest: kartu dengan bintang */
const QUEST_SVG='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="2.5" width="14" height="19" rx="2.6" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M12 7l1.4 3.1 3.3.3-2.5 2.2.8 3.3-3-1.8-3 1.8.8-3.3-2.5-2.2 3.3-.3z" fill="currentColor"/></svg>';

/* Tata letak papan diacak setiap permainan dimulai */
let LADDERS={},SNAKES={},QUEST=new Set();
function genLayout(){
  const rowOf=n=>Math.floor((n-1)/10),pick=(lo,hi)=>lo+Math.floor(Math.random()*(hi-lo+1));
  for(let attempt=0;attempt<300;attempt++){
    const used=new Set([1,100]),lad={},sn={};let tries=0;
    const far=(a,b,m)=>Math.abs(center(a).x-center(b).x)>m;
    while(Object.keys(lad).length<7&&tries<4000){tries++;const a=pick(2,85),b=a+pick(10,30);
      if(b>98||rowOf(a)===rowOf(b)||far(a,b,30)||used.has(a)||used.has(b))continue;lad[a]=b;used.add(a);used.add(b)}
    while(Object.keys(sn).length<7&&tries<8000){tries++;const a=pick(14,99),b=a-pick(10,32);
      if(b<2||rowOf(a)===rowOf(b)||far(a,b,40)||used.has(a)||used.has(b))continue;sn[a]=b;used.add(a);used.add(b)}
    if(Object.keys(lad).length<7||Object.keys(sn).length<7)continue;
    const starts=new Set([...Object.keys(lad),...Object.keys(sn)].map(Number)),q=new Set();let ok=true;
    for(let k=0;k<17;k++){const lo=2+Math.floor(k*97/17),hi=1+Math.floor((k+1)*97/17),cand=[];
      for(let n=lo;n<=hi;n++)if(n<100&&!starts.has(n))cand.push(n);
      if(!cand.length){ok=false;break}q.add(cand[Math.floor(Math.random()*cand.length)])}
    if(!ok||q.size<17)continue;
    LADDERS=lad;SNAKES=sn;QUEST=q;return;
  }
}
const PCOL=["#1F6FEB","#E8590C","#2B8A3E","#7B2FBE"];
const PIPS={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]};
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const $=id=>document.getElementById(id);
const sleep=ms=>new Promise(r=>setTimeout(r,reduce?Math.min(ms,30):ms));
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const ink=hex=>{const n=parseInt(hex.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;return (0.299*r+0.587*g+0.114*b)/255>0.62?'#14213D':'#FFFFFF'};

let setup={cat:4,np:2,dur:20,names:["Pemain 1","Pemain 2","Pemain 3","Pemain 4"]};
let S=null, clockId=null, qTimer=null;

function applyCat(n){const s=SDG[n-1];document.documentElement.style.setProperty('--cat',s.c);document.documentElement.style.setProperty('--cat-ink',ink(s.c))}
function chip(el,n){const s=SDG[n-1];el.innerHTML=`${icon(n)}<b>${s.n}</b><span>SDG ${s.n}<br>${s.name}</span>`}

/* ---------- layar awal ---------- */
function renderHome(){
  $('cats').innerHTML=SDG.map(s=>`<button type="button" class="cat" data-n="${s.n}" aria-pressed="${s.n===setup.cat}" style="--c:${s.c};--t:${ink(s.c)}"><span class="tophead"><span class="num">${s.n}</span>${icon(s.n)}</span><span class="nm">${s.name}</span></button>`).join('');
  $('np').innerHTML=[2,3,4].map(k=>`<button type="button" data-k="${k}" aria-pressed="${k===setup.np}">${k} pemain</button>`).join('');
  $('dur').innerHTML=[5,10,20].map(k=>`<button type="button" data-k="${k}" aria-pressed="${k===setup.dur}">${k} menit</button>`).join('');
  $('names').innerHTML=Array.from({length:setup.np},(_,i)=>`<div class="row"><i class="dot" style="--p:${PCOL[i]}"></i><input id="pname${i}" maxlength="16" aria-label="Nama pemain ${i+1}" value="${setup.names[i].replace(/"/g,'&quot;')}"></div>`).join('');
  applyCat(setup.cat);chip($('selChip'),setup.cat);
}
$('cats').addEventListener('click',e=>{const b=e.target.closest('.cat');if(!b)return;setup.cat=+b.dataset.n;renderHome()});
$('np').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;saveNames();setup.np=+b.dataset.k;renderHome()});
$('dur').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;saveNames();setup.dur=+b.dataset.k;renderHome()});
function saveNames(){for(let i=0;i<setup.np;i++){const v=$('pname'+i);if(v)setup.names[i]=v.value.trim()||`Pemain ${i+1}`}}
$('startBtn').addEventListener('click',()=>{saveNames();startGame()});

/* ---------- papan ---------- */
function center(n){const r=Math.floor((n-1)/10),i=(n-1)%10,c=r%2===0?i:9-i;return{x:(c+.5)*10,y:(9-r+.5)*10}}
function buildBoard(){
  let h='';
  for(let vr=0;vr<10;vr++){const r=9-vr;for(let c=0;c<10;c++){const n=r*10+(r%2===0?c:9-c)+1;
    const cls=['cell',(r+c)%2?'alt':'',QUEST.has(n)?'q':'',n===1?'start':'',n===100?'finish':''].join(' ');
    h+=`<div class="${cls}" ${QUEST.has(n)?`aria-label="Kotak ${n}, kartu Quest"`:''}><span class="n">${n}</span>${QUEST.has(n)?`<span class="qi">${QUEST_SVG}</span>`:''}</div>`}}
  $('grid').innerHTML=h;
  let svg='';
  for(const[a,b]of Object.entries(LADDERS)){const p=center(+a),q=center(b);const dx=q.x-p.x,dy=q.y-p.y,L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L,nx=-uy*1.7,ny=ux*1.7;
    svg+=`<line x1="${p.x+nx}" y1="${p.y+ny}" x2="${q.x+nx}" y2="${q.y+ny}" stroke="var(--wood-dark)" stroke-width="1.1" stroke-linecap="round"/><line x1="${p.x-nx}" y1="${p.y-ny}" x2="${q.x-nx}" y2="${q.y-ny}" stroke="var(--wood-dark)" stroke-width="1.1" stroke-linecap="round"/>`;
    for(let t=2.6;t<L-1;t+=3.4){const x=p.x+ux*t,y=p.y+uy*t;svg+=`<line x1="${x+nx}" y1="${y+ny}" x2="${x-nx}" y2="${y-ny}" stroke="var(--wood)" stroke-width="0.9" stroke-linecap="round"/>`}}
  for(const[a,b]of Object.entries(SNAKES)){const h=center(+a),t=center(b);const dx=t.x-h.x,dy=t.y-h.y,L=Math.hypot(dx,dy),nx=-dy/L,ny=dx/L,w=Math.min(9,L*.35);
    const d=`M${h.x},${h.y} C${h.x+dx*.33+nx*w},${h.y+dy*.33+ny*w} ${h.x+dx*.66-nx*w},${h.y+dy*.66-ny*w} ${t.x},${t.y}`;
    svg+=`<path d="${d}" fill="none" stroke="var(--snake)" stroke-width="2.6" stroke-linecap="round"/><path d="${d}" fill="none" stroke="var(--snake-belly)" stroke-width="0.9" stroke-dasharray="1.2 1.6" stroke-linecap="round"/>`;
    svg+=`<circle cx="${h.x}" cy="${h.y}" r="2.3" fill="var(--snake)"/><circle cx="${h.x-.8}" cy="${h.y-.6}" r=".55" fill="#FFFFFF"/><circle cx="${h.x+.8}" cy="${h.y-.6}" r=".55" fill="#FFFFFF"/>`}
  $('overlay').innerHTML=svg;
}
const OFF=[[-1.7,-1.7],[1.7,-1.7],[-1.7,1.7],[1.7,1.7]];
function placeTokens(){
  $('tokens').innerHTML=S.players.map((p,i)=>`<div class="token${i===S.turn&&S.phase!=='over'?' active':''}" id="tok${i}" style="--p:${p.color}" title="${esc(p.name)}">${i+1}</div>`).join('');
  S.players.forEach((p,i)=>moveTokenEl(i));
}
function moveTokenEl(i){const p=S.players[i],c=center(p.pos),el=$('tok'+i);if(!el)return;el.style.left=(c.x+OFF[i][0])+'%';el.style.top=(c.y+OFF[i][1])+'%'}
function esc(s){return s.replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]))}

/* ---------- alur permainan ---------- */
function startGame(){
  applyCat(setup.cat);
  genLayout();
  S={cat:setup.cat,turn:0,phase:'idle',timeUp:false,asked:0,endAt:Date.now()+setup.dur*60000,pool:buildPool(setup.cat),bonus:false,log:[],pts:[],
     players:Array.from({length:setup.np},(_,i)=>({name:setup.names[i],color:PCOL[i],pos:1,pts:0,right:0,qs:0}))};
  $('home').hidden=true;$('modeNav').hidden=true;$('quizHome').hidden=true;$('game').hidden=false;$('topActions').hidden=false;$('endModal').hidden=true;
  chip($('gameChip'),S.cat);buildBoard();placeTokens();setDie(1);
  addLog(`Permainan dimulai · kategori SDG ${S.cat}.`);
  render();clearInterval(clockId);clockId=setInterval(tick,250);tick();
  $('rollBtn').focus();
}
function render(){
  const cur=S.players[S.turn];
  $('turnName').textContent=cur.name;$('turnName').style.color=cur.color;
  $('rollBtn').disabled=S.phase!=='idle'||S.timeUp;
  $('qcount').textContent=S.asked;
  $('scores').innerHTML=S.players.map((p,i)=>`<li class="${i===S.turn?'now':''}" style="--p:${p.color}"><i class="dot" style="--p:${p.color}"></i><div style="min-width:0"><div class="pn">${esc(p.name)}</div><div class="meta">Kotak ${p.pos} · benar ${p.right}/${p.qs}</div></div><span class="pts">${p.pts}</span></li>`).join('');
  document.querySelectorAll('.token').forEach((t,i)=>t.classList.toggle('active',i===S.turn&&S.phase!=='over'));
  $('ptable').innerHTML=S.pts.length?S.pts.slice().reverse().map(r=>`<tr><td class="num">${r.no}</td><td><i class="pdot" style="--p:${r.color}"></i>${esc(r.name)}</td><td>${r.ev}</td><td class="num ${r.cls}">${r.d}</td><td class="num"><b>${r.total}</b></td></tr>`).join('')
    :'<tr class="empty"><td colspan="5">Belum ada poin. Poin tercatat saat pemain menjawab kartu Quest atau mencapai kotak 100.</td></tr>';
}
function addPts(p,ev,applied,label){S.pts.push({no:S.pts.length+1,name:p.name,color:p.color,ev,d:label,cls:applied>0?'plus':applied<0?'minus':'zero',total:p.pts})}
function addLog(m){S.log.unshift(m);$('live').textContent=m}
function tick(){
  if(!S)return;const left=Math.max(0,S.endAt-Date.now());const m=Math.floor(left/60000),s=Math.floor(left/1000)%60;
  $('clock').textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;$('clock').classList.toggle('low',left<60000);
  if(left<=0&&!S.timeUp){S.timeUp=true;clearInterval(clockId);
    if(S.phase==='idle')endGame();else{addLog('Waktu habis! Giliran ini diselesaikan dulu.');render()}}
}
function setDie(v){$('die').querySelectorAll('i').forEach((d,k)=>d.classList.toggle('on',PIPS[v].includes(k)));$('die').setAttribute('data-v',v)}
async function roll(){
  if(S.phase!=='idle'||S.timeUp)return;S.phase='rolling';render();
  const die=$('die');die.classList.remove('rolling');void die.offsetWidth;die.classList.add('rolling');
  for(let k=0;k<6;k++){setDie(1+Math.floor(Math.random()*6));await sleep(70)}
  const v=1+Math.floor(Math.random()*6);setDie(v);
  const p=S.players[S.turn];addLog(`${esc(p.name)} mendapat angka ${v}.`);
  S.phase='moving';render();await move(S.turn,v);
}
async function move(i,v){
  const p=S.players[i];
  for(let k=0;k<v;k++){if(p.pos>=100)break;p.pos++;moveTokenEl(i);await sleep(190)}
  if(p.pos>=100){p.pts+=3;addPts(p,'Kotak 100',3,'+3');addLog(`${esc(p.name)} mencapai kotak 100! +3 poin, mulai lagi dari kotak 1.`);toast(`${p.name} sampai di kotak 100 · +3 poin`);render();await sleep(700);p.pos=1;moveTokenEl(i);render();return endTurn()}
  if(LADDERS[p.pos]){const to=LADDERS[p.pos];addLog(`${esc(p.name)} naik tangga ${p.pos} → ${to}.`);await sleep(250);p.pos=to;moveTokenEl(i);await sleep(400)}
  else if(SNAKES[p.pos]){const to=SNAKES[p.pos];addLog(`${esc(p.name)} digigit ular ${p.pos} → ${to}.`);await sleep(250);p.pos=to;moveTokenEl(i);await sleep(400)}
  render();
  if(QUEST.has(p.pos)){await sleep(200);return openQuest(i)}
  endTurn();
}
function endTurn(){
  if(S.timeUp)return endGame();
  S.turn=(S.turn+1)%S.players.length;S.phase='idle';render();$('rollBtn').focus();
}

/* ---------- kartu quest ---------- */
/* Soal tidak pernah berulang dalam satu permainan.
   Soal yang belum keluar di permainan sebelumnya didahulukan. */
const SEEN={};
function buildPool(cat){
  const all=Q[cat].map((_,i)=>i);let seen=SEEN[cat]||(SEEN[cat]=new Set());
  if(seen.size>=all.length)seen.clear();
  return [...shuffle(all.filter(i=>seen.has(i))),...shuffle(all.filter(i=>!seen.has(i)))].map(i=>({cat,i}));
}
function nextQ(){
  if(!S.pool.length&&!S.bonus){S.bonus=true;
    const rest=[];SDG.forEach(s=>{if(s.n!==S.cat)Q[s.n].forEach((_,i)=>rest.push({cat:s.n,i}))});S.pool=shuffle(rest)}
  const t=S.pool.pop();(SEEN[t.cat]||(SEEN[t.cat]=new Set())).add(t.i);
  return {cat:t.cat,item:Q[t.cat][t.i]};
}
function openQuest(i){
  S.phase='question';S.asked++;render();
  const p=S.players[i],{cat,item}=nextQ(),[q,right,wrong,expl]=item,opts=shuffle([right,...wrong]);
  S.q={i,right,expl,done:false};
  $('qLabel').innerHTML=`${icon(cat)}<span>${cat===S.cat?'Kartu Quest':'Kartu Quest bonus'} · SDG ${cat}</span>`;$('qWho').textContent=`Giliran ${p.name}`;
  $('qCat').textContent=SDG[cat-1].name;$('qText').textContent=q;
  $('qOpts').innerHTML=opts.map((o,k)=>`<button type="button" class="opt" data-v="${esc(o)}"><b>${'ABCD'[k]}</b><span>${esc(o)}</span></button>`).join('');
  $('qFb').hidden=true;$('qNext').hidden=true;$('qModal').hidden=false;
  const start=Date.now(),T=30000;clearInterval(qTimer);$('qBar').style.transform='scaleX(1)';
  qTimer=setInterval(()=>{const left=Math.max(0,T-(Date.now()-start));$('qBar').style.transform=`scaleX(${left/T})`;$('qSecs').textContent=`${Math.ceil(left/1000)} detik`;if(left<=0)answer(null)},100);
  $('qOpts').querySelector('.opt').focus();
}
$('qOpts').addEventListener('click',e=>{const b=e.target.closest('.opt');if(b)answer(b)});
function answer(btn){
  if(!S.q||S.q.done)return;S.q.done=true;clearInterval(qTimer);
  const p=S.players[S.q.i],ok=!!btn&&btn.querySelector('span').textContent===S.q.right;
  $('qOpts').querySelectorAll('.opt').forEach(o=>{o.disabled=true;if(o.querySelector('span').textContent===S.q.right)o.classList.add('right')});
  if(btn&&!ok)btn.classList.add('wrong');
  p.qs++;const before=p.pts;
  if(ok){p.pts+=2;p.right++}else{p.pts=Math.max(0,p.pts-1)}
  const applied=p.pts-before;
  addPts(p,ok?'Benar':(btn?'Salah':'Waktu habis'),applied,ok?'+2':(applied<0?'−1':'0*'));
  const head=ok?'Benar! +2 poin':(btn?'Belum tepat. −1 poin':'Waktu habis. −1 poin');
  const note=!ok&&before===0?' (poin tetap 0)':'';
  $('qFb').className='fb '+(ok?'ok':'no');$('qFb').innerHTML=`<strong>${head}${note}</strong><p>${esc(S.q.expl)}</p>`;$('qFb').hidden=false;
  addLog(`${esc(p.name)} ${ok?'menjawab benar (+2)':(btn?'menjawab salah (−1)':'kehabisan waktu (−1)')}.`);
  $('qNext').hidden=false;$('qNext').focus();render();
}
$('qNext').addEventListener('click',()=>{$('qModal').hidden=true;S.q=null;endTurn()});

/* ---------- akhir permainan ---------- */
function endGame(){
  clearInterval(clockId);clearInterval(qTimer);S.phase='over';S.timeUp=true;render();
  const ranked=S.players.map(p=>p).sort((a,b)=>b.pts-a.pts||b.right-a.right);
  const top=ranked[0].pts,winners=ranked.filter(p=>p.pts===top);
  $('tieBtn').hidden=winners.length<2;
  $('endTitle').textContent=winners.length>1?`Seri! ${winners.map(w=>w.name).join(' & ')}`:`Pemenang: ${winners[0].name}`;
  $('endCat').textContent=`SDG ${S.cat} · ${S.asked} kartu dibuka`;
  let pos=0,prev=null;
  $('rank').innerHTML=ranked.map((p,k)=>{if(p.pts!==prev){pos=k+1;prev=p.pts}return `<li class="${p.pts===top?'win':''}"><span class="pos">${pos}</span><i class="dot" style="--p:${p.color}"></i><div style="min-width:0"><div class="pn" style="font-weight:800">${esc(p.name)}</div><div class="meta" style="font-size:12px;color:var(--muted);font-weight:700">Benar ${p.right} dari ${p.qs} kartu</div></div><span class="pts" style="font-family:var(--display);font-weight:800;font-size:24px">${p.pts}</span></li>`}).join('');
  $('qModal').hidden=true;$('endModal').hidden=false;$('againBtn').focus();
  saveMatch();
}
$('againBtn').addEventListener('click',startGame);
$('homeBtn').addEventListener('click',goHome);
function goHome(){clearInterval(clockId);clearInterval(qTimer);S=null;$('endModal').hidden=true;$('qModal').hidden=true;$('game').hidden=true;$('topActions').hidden=true;resetEnd();setMode('ular')}
let endArmed=false;
function resetEnd(){endArmed=false;$('endBtn').textContent='Akhiri permainan'}
$('endBtn').addEventListener('click',()=>{if(!S)return;if(!endArmed){endArmed=true;$('endBtn').textContent='Yakin? Klik sekali lagi';setTimeout(resetEnd,3000);return}resetEnd();if(S.phase==='question'){$('qModal').hidden=true}endGame()});
$('rollBtn').addEventListener('click',roll);
document.addEventListener('keydown',e=>{if(!S||S.phase==='over')return;
  if(!$('qModal').hidden&&S.q&&!S.q.done&&/^[a-dA-D]$/.test(e.key)){const b=$('qOpts').querySelectorAll('.opt')['abcd'.indexOf(e.key.toLowerCase())];if(b)answer(b)}});

let toastT;function toast(m){const t=$('toast');t.textContent=m;t.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>t.hidden=true,2400)}

/* =================== MODE QUIZ =================== */
const BINS=[{k:'org',name:'Organik',hint:'Mudah terurai',c:'#2B8A3E'},{k:'anorg',name:'Anorganik',hint:'Bisa didaur ulang',c:'#1864AB'},
            {k:'b3',name:'B3',hint:'Berbahaya & beracun',c:'#C92A2A'},{k:'res',name:'Residu',hint:'Sulit didaur ulang',c:'#495057'}];
const WASTE=[
 ['Kulit pisang','org'],['Sisa nasi','org'],['Daun kering','org'],['Ampas kopi','org'],['Kulit telur','org'],['Sisa sayuran','org'],['Tulang ikan','org'],
 ['Botol plastik','anorg'],['Kaleng minuman','anorg'],['Kardus bekas','anorg'],['Kertas HVS bekas','anorg'],['Botol kaca','anorg'],['Koran bekas','anorg'],
 ['Baterai bekas','b3'],['Lampu neon bekas','b3'],['Kaleng obat nyamuk semprot','b3'],['Obat kedaluwarsa','b3'],['Termometer raksa pecah','b3'],['Ponsel rusak','b3'],
 ['Popok sekali pakai','res'],['Puntung rokok','res'],['Tisu bekas','res'],['Bungkus mi instan','res'],['Styrofoam bekas makanan','res'],['Masker sekali pakai','res']];
const WASTE_NOTE={org:'Sampah organik berasal dari makhluk hidup dan bisa dijadikan kompos.',anorg:'Sampah anorganik ini bisa dikumpulkan untuk didaur ulang.',
 b3:'Sampah B3 mengandung bahan berbahaya, jadi harus dipisahkan dan diserahkan ke tempat khusus.',res:'Sampah residu sulit didaur ulang atau dikomposkan, jadi berakhir di TPA.'};
/* [situasi, SDG, [terbaik(10), cukup baik(5), kurang tepat(0)], penjelasan] */
const DECISIONS=[
 ['Jarak rumahmu ke sekolah 1 km dan cuaca cerah. Kamu berangkat dengan…',13,['Berjalan kaki atau bersepeda','Naik angkot atau bus bersama teman','Minta diantar mobil pribadi sendirian'],'Berjalan kaki dan bersepeda tidak menghasilkan emisi. Transportasi umum lebih baik daripada kendaraan pribadi.'],
 ['Kamu haus saat jalan-jalan di pusat perbelanjaan. Kamu memilih…',12,['Mengisi ulang botol minum yang kamu bawa','Membeli minuman kaleng lalu membuang kalengnya ke tempat daur ulang','Membeli air botol plastik lalu membuangnya sembarangan'],'Botol isi ulang tidak menghasilkan sampah baru. Kaleng masih bisa didaur ulang jika dibuang dengan benar.'],
 ['Lampu dan kipas kelas masih menyala saat istirahat, padahal kelas kosong. Kamu…',7,['Mematikannya sebelum keluar kelas','Mengingatkan petugas piket untuk mematikannya nanti','Membiarkannya menyala'],'Mematikan listrik yang tidak dipakai langsung menghemat energi.'],
 ['Bekal makan siangmu tidak habis. Kamu…',12,['Menyimpannya untuk dihabiskan nanti, lalu membawa porsi lebih kecil besok','Memberikan sisa makanan untuk kompos atau pakan ternak','Membuangnya ke tempat sampah'],'Mengurangi sisa makanan sejak awal adalah cara terbaik mencegah food waste.'],
 ['Kamu melihat temanmu dirundung di kelas. Kamu…',16,['Melapor ke guru dan menemani temanmu','Menghibur temanmu setelah kejadian','Ikut menertawakannya'],'Melapor membantu menghentikan perundungan. Menghibur korban tetap baik, tetapi perundungannya belum berhenti.'],
 ['Ada teman baru penyandang disabilitas di kelasmu. Kamu…',10,['Mengajaknya bergabung dan bertanya bantuan apa yang ia perlukan','Bersikap ramah tetapi tidak mengajaknya bergabung','Menjauhinya'],'Melibatkan teman penyandang disabilitas membuat kelas lebih inklusif.'],
 ['Kaos lamamu sudah kekecilan, tetapi masih bagus. Kamu…',12,['Menyumbangkannya kepada yang membutuhkan','Menjadikannya kain lap','Membuangnya ke tempat sampah'],'Pakaian layak pakai masih bermanfaat bagi orang lain dan tidak menjadi sampah.'],
 ['Saat menyikat gigi, kamu…',6,['Mematikan keran dan memakai gelas untuk berkumur','Mengecilkan aliran keran','Membiarkan keran terus mengalir'],'Menutup keran saat menyikat gigi menghemat banyak air bersih setiap hari.'],
 ['Kelompokmu harus memilih ketua untuk tugas kelompok. Kalian…',5,['Memilih bersama berdasarkan kemampuan, siapa pun jenis kelaminnya','Mengundi nama semua anggota','Menetapkan bahwa ketua harus laki-laki'],'Pemimpin dipilih karena kemampuannya, bukan jenis kelaminnya.'],
 ['Kamu menemukan baterai bekas di rumah. Kamu…',12,['Memisahkannya dan menyerahkannya ke tempat pengumpulan sampah B3','Menyimpannya dulu di wadah tertutup','Mencampurnya dengan sampah dapur'],'Baterai mengandung bahan berbahaya yang bisa mencemari tanah dan air.'],
 ['Ibumu mengajakmu belanja ke pasar. Kamu menyarankan…',12,['Membawa tas belanja sendiri dari rumah','Meminta satu kantong plastik besar lalu memakainya ulang','Meminta kantong plastik untuk setiap barang'],'Tas belanja yang dipakai berulang mengurangi sampah plastik.'],
 ['Kamu menerima pesan berantai yang belum jelas kebenarannya. Kamu…',16,['Mengecek ke sumber tepercaya dan tidak menyebarkannya','Tidak menyebarkannya, tetapi juga tidak mengeceknya','Langsung menyebarkannya ke semua grup'],'Hoaks yang disebarkan bisa memicu kepanikan dan perpecahan.'],
 ['Di rumahmu ada lahan kosong kecil. Kamu mengusulkan untuk…',15,['Menanam sayur atau pohon buah','Menanam rumput atau tanaman hias','Menutup seluruhnya dengan semen'],'Tanaman menyerap air hujan dan karbon dioksida. Sayur dan buah juga bisa dimakan.']];

let QZ=null,qzTimer=null;
function setMode(m){
  if(bankTertunda&&!S&&!QZ)pakaiBank(bankTertunda);
  document.querySelectorAll('#modeNav button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.mode===m));
  $('modeNav').hidden=false;$('home').hidden=m!=='ular';$('quizHome').hidden=m!=='quiz';$('learn').hidden=m!=='learn';$('quizPlay').hidden=true;
  if(m==='ular')renderHome();else if(m==='quiz')renderQuizHome();else renderLearn();
  if(m==='ular')loadHistory();else if(m==='quiz')loadLb();
}
$('modeNav').addEventListener('click',e=>{const b=e.target.closest('button');if(b)setMode(b.dataset.mode)});
function renderQuizHome(){
  const sel=$('qzCat'),cur=sel.value;
  if(!sel.options.length)sel.innerHTML='<option value="0">Campuran 17 SDG</option>'+SDG.map(s=>`<option value="${s.n}">SDG ${s.n} · ${s.name}</option>`).join('');
  if(cur)sel.value=cur;
  $('tagQuiz').innerHTML=`${icon(4)}SDG 4 · Pendidikan`;$('tagSort').innerHTML=`${icon(12)}SDG 12 · Konsumsi`;$('tagDec').innerHTML=`${icon(13)}SDG 13 · Iklim`;
  document.documentElement.style.setProperty('--cat','#14213D');document.documentElement.style.setProperty('--cat-ink','#FFFFFF');
}
const GAMES={quiz:{title:'SDG Quiz',sdg:4,max:50},sort:{title:'Waste Sorting',sdg:12,max:50},dec:{title:'SDG Decision',sdg:13,max:50}};
function startQuiz(queue){
  QZ={queue:queue.slice(),all:queue.slice(),results:[],name:($('qzName').value.trim()||'Pemain 1'),cat:+$('qzCat').value};
  $('modeNav').hidden=true;$('quizHome').hidden=true;$('quizPlay').hidden=false;nextGame();
}
document.querySelector('.games').addEventListener('click',e=>{const b=e.target.closest('[data-play]');if(b)startQuiz([b.dataset.play])});
$('playAll').addEventListener('click',()=>startQuiz(['quiz','sort','dec']));
function nextGame(){
  clearInterval(qzTimer);const g=QZ.queue.shift();if(!g)return quizResult();
  QZ.g=g;QZ.score=0;QZ.n=0;QZ.right=0;
  const G=GAMES[g],c=g==='quiz'&&QZ.cat?QZ.cat:G.sdg;applyCat(c);
  $('qpTitle').innerHTML=`${icon(c)}<span>${G.title}</span>`;$('qpScore').textContent='0';
  ({quiz:runQuiz,sort:runSort,dec:runDec})[g]();
}
function clock(sec,onEnd){
  clearInterval(qzTimer);const T=sec*1000,start=Date.now();QZ.tEnd=onEnd;
  const step=()=>{const left=Math.max(0,T-(Date.now()-start));$('qpTime').textContent=Math.ceil(left/1000);$('qpBar').style.transform=`scaleX(${left/T})`;
    if(left<=0){clearInterval(qzTimer);onEnd()}};
  step();qzTimer=setInterval(step,100);
}
function addScore(v){QZ.score+=v;$('qpScore').textContent=QZ.score}
function finishGame(detail){
  clearInterval(qzTimer);const G=GAMES[QZ.g];QZ.results.push({title:G.title,score:QZ.score,max:G.max,detail});
  if(!QZ.queue.length)return quizResult();
  const nx=GAMES[QZ.queue[0]].title;
  $('qpBody').innerHTML=`<p class="eyebrow">${G.title} selesai</p><p class="big-score">${QZ.score}<span style="font-size:24px;color:var(--muted)"> / ${G.max}</span></p><p style="margin:0">${detail}</p><button class="btn" id="qzNext" type="button">Lanjut ke ${nx}</button>`;
  $('qzNext').addEventListener('click',nextGame);$('qzNext').focus();
}

/* --- SDG Quiz: 5 soal, 60 detik total --- */
function runQuiz(){
  const src=QZ.cat?Q[QZ.cat].map(item=>({cat:QZ.cat,item})):SDG.flatMap(s=>Q[s.n].map(item=>({cat:s.n,item})));
  QZ.list=shuffle(src).slice(0,5);QZ.lock=false;
  clock(60,()=>finishGame(`Benar ${QZ.right} dari 5 soal${QZ.n<5?' (waktu habis)':''}.`));showQuizQ();
}
function showQuizQ(){
  if(QZ.n>=5)return finishGame(`Benar ${QZ.right} dari 5 soal.`);
  const {cat,item:[q,right,wrong]}=QZ.list[QZ.n],opts=shuffle([right,...wrong]);QZ.lock=false;
  $('qpBody').innerHTML=`<div style="display:flex;justify-content:space-between;gap:10px"><span class="progress">Soal ${QZ.n+1} dari 5</span><span class="progress">SDG ${cat} · ${SDG[cat-1].name}</span></div>
    <p class="qtext">${esc(q)}</p><div class="opts">${opts.map((o,k)=>`<button type="button" class="opt"><b>${'ABCD'[k]}</b><span>${esc(o)}</span></button>`).join('')}</div>`;
  $('qpBody').querySelectorAll('.opt').forEach(b=>b.addEventListener('click',()=>{
    if(QZ.lock)return;QZ.lock=true;const ok=b.querySelector('span').textContent===right;
    $('qpBody').querySelectorAll('.opt').forEach(o=>{o.disabled=true;if(o.querySelector('span').textContent===right)o.classList.add('right')});
    if(!ok)b.classList.add('wrong');else{QZ.right++;addScore(10)}
    QZ.n++;setTimeout(()=>{if(QZ&&QZ.g==='quiz'&&!$('quizPlay').hidden&&QZ.n<=5&&QZ.results.length===QZ.all.length-QZ.queue.length-1)showQuizQ()},reduce?200:900);
  }));
  $('qpBody').querySelector('.opt').focus();
}

/* --- Waste Sorting: 10 sampah, 30 detik --- */
function runSort(){
  const by=k=>shuffle(WASTE.filter(w=>w[1]===k));
  const base=BINS.flatMap(b=>by(b.k).slice(0,2)),rest=shuffle(WASTE.filter(w=>!base.includes(w))).slice(0,2);
  QZ.list=shuffle([...base,...rest]);QZ.lock=false;
  clock(30,()=>finishGame(`Benar ${QZ.right} dari 10 sampah${QZ.n<10?` (${QZ.n} sampah sempat dipilah)`:''}.`));showSort();
}
function showSort(){
  if(QZ.n>=10)return finishGame(`Benar ${QZ.right} dari 10 sampah.`);
  const [name,k]=QZ.list[QZ.n];QZ.lock=false;
  $('qpBody').innerHTML=`<span class="progress">Sampah ${QZ.n+1} dari 10 · ketuk tempat sampah yang tepat</span>
    <div class="item-card" id="itemCard"><span class="eyebrow">Masukkan ke tempat sampah</span><b>${esc(name)}</b></div>
    <div class="bins">${BINS.map(b=>`<button type="button" class="bin" data-k="${b.k}" style="--b:${b.c}"><b>${b.name}</b><span>${b.hint}</span></button>`).join('')}</div>
    <p class="progress" id="sortFb" style="min-height:1.5em;margin:0"></p>`;
  $('qpBody').querySelectorAll('.bin').forEach(b=>b.addEventListener('click',()=>{
    if(QZ.lock)return;QZ.lock=true;const ok=b.dataset.k===k;
    $('itemCard').classList.add(ok?'flash-ok':'flash-no');
    $('qpBody').querySelector(`.bin[data-k="${k}"]`).classList.add('hint');
    $('sortFb').textContent=ok?'Tepat! +5 poin':`Kurang tepat. ${name} termasuk ${BINS.find(x=>x.k===k).name}.`;
    if(ok){QZ.right++;addScore(5)}QZ.n++;
    setTimeout(()=>{if(QZ&&QZ.g==='sort'&&!$('quizPlay').hidden&&QZ.results.length===QZ.all.length-QZ.queue.length-1)showSort()},reduce?200:ok?500:1100);
  }));
}

/* --- SDG Decision: 5 situasi, 20 detik per situasi --- */
function runDec(){QZ.list=shuffle(DECISIONS).slice(0,5);showDec()}
function showDec(){
  if(QZ.n>=5)return finishGame(`${QZ.right} dari 5 situasi dijawab dengan pilihan terbaik.`);
  const [sit,sdg,opts,expl]=QZ.list[QZ.n],order=shuffle([0,1,2]),PT=[10,5,0];QZ.lock=false;
  $('qpBody').innerHTML=`<div style="display:flex;justify-content:space-between;gap:10px"><span class="progress">Situasi ${QZ.n+1} dari 5</span><span class="progress">SDG ${sdg}</span></div>
    <p class="qtext">${esc(sit)}</p><div class="opts">${order.map((o,k)=>`<button type="button" class="opt" data-o="${o}"><b>${'ABC'[k]}</b><span>${esc(opts[o])}</span></button>`).join('')}</div>
    <div id="decFb" hidden></div>`;
  const resolve=pick=>{
    if(QZ.lock)return;QZ.lock=true;clearInterval(qzTimer);
    const pts=pick===null?0:PT[pick];if(pick===0)QZ.right++;addScore(pts);
    $('qpBody').querySelectorAll('.opt').forEach(o=>{o.disabled=true;const v=+o.dataset.o;
      o.insertAdjacentHTML('beforeend',`<span class="dec-pts">${['Terbaik +10','Cukup baik +5','Kurang tepat 0'][v]}</span>`);o.style.gridTemplateColumns='30px 1fr auto';
      if(v===0)o.classList.add('right');else if(v===pick)o.classList.add('wrong')});
    const fb=$('decFb');fb.className='fb '+(pts===10?'ok':'no');
    fb.innerHTML=`<strong>${pick===null?'Waktu habis · 0 poin':pts===10?'Pilihan terbaik · +10 poin':pts===5?'Cukup baik · +5 poin':'Kurang tepat · 0 poin'}</strong><p>${esc(expl)}</p>`;fb.hidden=false;
    QZ.n++;const nb=document.createElement('button');nb.className='btn';nb.type='button';nb.textContent=QZ.n<5?'Situasi berikutnya':'Lihat skor';
    nb.addEventListener('click',showDec);$('qpBody').appendChild(nb);nb.focus();
  };
  $('qpBody').querySelectorAll('.opt').forEach(b=>b.addEventListener('click',()=>resolve(+b.dataset.o)));
  clock(20,()=>resolve(null));
}

/* --- hasil akhir --- */
function quizResult(){
  clearInterval(qzTimer);const tot=QZ.results.reduce((a,r)=>a+r.score,0),max=QZ.results.reduce((a,r)=>a+r.max,0);
  applyCat(QZ.all.length===1?(QZ.all[0]==='quiz'&&QZ.cat?QZ.cat:GAMES[QZ.all[0]].sdg):4);
  $('qpTitle').innerHTML=`${icon(17)}<span>Hasil ${esc(QZ.name)}</span>`;$('qpTime').textContent='–';$('qpBar').style.transform='scaleX(0)';$('qpScore').textContent=tot;
  const pct=tot/max,msg=pct>=.8?'Luar biasa! Kamu sudah jadi duta SDG.':pct>=.5?'Bagus! Sedikit lagi menuju skor sempurna.':'Ayo coba lagi dan pelajari penjelasan setiap soal.';
  $('qpBody').innerHTML=`<p class="big-score">${tot}<span style="font-size:24px;color:var(--muted)"> / ${max}</span></p><p style="margin:0;font-weight:700">${msg}</p>
    <table class="score-table"><thead><tr><th>Permainan</th><th>Keterangan</th><th class="num">Skor</th></tr></thead>
    <tbody>${QZ.results.map(r=>`<tr><td><b>${r.title}</b></td><td>${r.detail}</td><td class="num"><b>${r.score}</b> / ${r.max}</td></tr>`).join('')}</tbody>
    <tfoot><tr><td colspan="2">Total</td><td class="num">${tot} / ${max}</td></tr></tfoot></table>
    <div class="lb-result" id="lbResult"></div>
    <div class="row-actions"><button class="btn cat-btn" id="qzAgain" type="button">Main lagi</button><button class="btn ghost" id="qzBack" type="button">Pilih permainan lain</button></div>`;
  $('qzAgain').addEventListener('click',()=>startQuiz(QZ.all));$('qzBack').addEventListener('click',()=>{QZ=null;setMode('quiz')});$('qzAgain').focus();
  saveQuizScore(tot);
}
/* =================== PENGENALAN 17 SDGs =================== */
const INFO={
1:['Mengakhiri kemiskinan dalam segala bentuk di mana pun, termasuk sulitnya memenuhi pangan, pendidikan, dan kesehatan.','Berbagi buku dan pakaian layak pakai kepada yang membutuhkan.'],
2:['Menghapus kelaparan, mencapai ketahanan pangan dan gizi yang baik, serta mendorong pertanian berkelanjutan.','Mengambil makanan secukupnya dan menghabiskannya.'],
3:['Menjamin kehidupan yang sehat dan meningkatkan kesejahteraan semua orang di segala usia, termasuk kesehatan mental.','Cuci tangan pakai sabun, tidur cukup, dan rutin berolahraga.'],
4:['Menjamin pendidikan berkualitas yang merata dan inklusif, serta kesempatan belajar seumur hidup bagi semua.','Membiasakan membaca dan membantu teman yang kesulitan belajar.'],
5:['Mencapai kesetaraan gender dan memberdayakan semua perempuan dan anak perempuan.','Memberi kesempatan yang sama kepada teman laki-laki dan perempuan.'],
6:['Menjamin ketersediaan air bersih dan sanitasi yang layak serta pengelolaannya secara berkelanjutan.','Menutup keran saat menyikat gigi dan tidak membuang sampah ke sungai.'],
7:['Menjamin akses energi yang terjangkau, andal, berkelanjutan, dan modern bagi semua.','Mematikan lampu dan peralatan listrik saat tidak dipakai.'],
8:['Mendorong pertumbuhan ekonomi yang inklusif dan berkelanjutan, serta pekerjaan yang layak bagi semua.','Membeli produk lokal dan mendukung UMKM di sekitar.'],
9:['Membangun infrastruktur yang tangguh, mendorong industri yang berkelanjutan, dan mendukung inovasi.','Membuat karya atau ide sederhana untuk menyelesaikan masalah di sekitar.'],
10:['Mengurangi kesenjangan di dalam negara maupun antarnegara.','Berteman tanpa membeda-bedakan suku, agama, atau kondisi ekonomi.'],
11:['Menjadikan kota dan permukiman inklusif, aman, tangguh, dan berkelanjutan.','Naik transportasi umum, jalan kaki, atau bersepeda.'],
12:['Menjamin pola konsumsi dan produksi yang bertanggung jawab, termasuk mengurangi sampah.','Menerapkan 3R dan membawa botol minum sendiri.'],
13:['Mengambil tindakan cepat untuk mengatasi perubahan iklim dan dampaknya.','Menanam pohon dan tidak membakar sampah.'],
14:['Melestarikan dan memanfaatkan secara berkelanjutan sumber daya laut dan samudra.','Mengurangi plastik sekali pakai agar tidak berakhir di laut.'],
15:['Melindungi ekosistem darat, mengelola hutan secara berkelanjutan, dan menghentikan hilangnya keanekaragaman hayati.','Tidak membeli produk dari satwa dilindungi dan ikut menanam pohon.'],
16:['Mewujudkan masyarakat yang damai, adil, dan inklusif dengan lembaga yang bersih dan bertanggung jawab.','Menolak perundungan dan tidak menyebarkan hoaks.'],
17:['Memperkuat kerja sama antara pemerintah, swasta, masyarakat, dan antarnegara untuk mencapai SDGs.','Ikut kegiatan gotong royong dan kerja bakti di sekolah.']};
function renderLearn(){
  document.documentElement.style.setProperty('--cat','#14213D');document.documentElement.style.setProperty('--cat-ink','#FFFFFF');
  $('sdgGrid').innerHTML=SDG.map(s=>`<article class="sdg-card" style="--c:${s.c};--t:${ink(s.c)}">
    <div class="hd">${icon(s.n)}<b>${s.n}</b><span>${s.name}</span></div>
    <div class="bd"><p>${INFO[s.n][0]}</p><div class="act"><b>Yang bisa kamu lakukan</b>${INFO[s.n][1]}</div>
    <button type="button" class="play" data-n="${s.n}">Main kategori SDG ${s.n}</button></div></article>`).join('');
}
$('sdgGrid').addEventListener('click',e=>{const b=e.target.closest('.play');if(!b)return;setup.cat=+b.dataset.n;setMode('ular');window.scrollTo(0,0)});

$('qzExit').addEventListener('click',()=>{clearInterval(qzTimer);QZ=null;setMode('quiz')});
$('tieBtn').addEventListener('click',()=>{const c=S?S.cat:0;$('endModal').hidden=true;goHome();setMode('quiz');$('qzCat').value=String(c)});

$('qLegend').innerHTML=QUEST_SVG;
renderHome();

/* =================== PAPAN PERINGKAT DAN RIWAYAT (PHP) =================== */
/* Skor Mode Quiz dan hasil ular tangga dikirim ke api/skor.php lalu disimpan di data/skor.json.
   Kalau halaman dibuka tanpa server PHP, permainan tetap berjalan dan bagian ini hanya menampilkan petunjuk. */
const API_SKOR='api/skor.php';
const TANPA_PHP='Papan peringkat dan riwayat aktif kalau folder ini dibuka lewat server PHP, misalnya XAMPP di http://localhost/sdg-quest/.';
const PAKET=[['semua','Ketiganya'],['quiz','SDG Quiz'],['sort','Waste Sorting'],['dec','SDG Decision']];
let lbPaket='semua';

async function apiSkor(query,body){
  if(location.protocol==='file:')throw new Error(TANPA_PHP);
  let r;
  try{
    r=await fetch(API_SKOR+(query?'?'+new URLSearchParams(query):''),body
      ?{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}
      :{cache:'no-store'});
  }catch(e){throw new Error(TANPA_PHP)}
  // tanpa PHP, server biasa mengirim isi file .php sebagai teks, bukan JSON
  if(!(r.headers.get('content-type')||'').includes('application/json'))throw new Error(TANPA_PHP);
  const j=await r.json().catch(()=>null);
  if(!j||!r.ok||!j.ok)throw new Error((j&&j.pesan)||'Server tidak bisa memproses data.');
  return j;
}
const tgl=iso=>{const d=new Date(iso);return isNaN(d)?'':d.toLocaleString('id-ID',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'})};
const katLabel=n=>n?`SDG ${n}`:'Campuran';
const lbNote=m=>`<p class="lb-note">${esc(String(m))}</p>`;

/* --- Mode Quiz: 10 skor tertinggi per paket permainan --- */
function lbTable(rows,me){
  if(!rows.length)return lbNote('Belum ada skor di papan ini. Jadilah yang pertama!');
  return `<table class="score-table lb-table"><thead><tr><th class="num">#</th><th>Nama</th><th class="hide-sm">Kategori</th><th class="hide-sm">Tanggal</th><th class="num">Skor</th></tr></thead><tbody>${
    rows.map((r,k)=>`<tr class="${r.id===me?'me':''}"><td class="num pos">${k+1}</td><td class="nm">${esc(r.nama)}</td><td class="hide-sm">${katLabel(r.kategori)}</td><td class="hide-sm">${tgl(r.waktu)}</td><td class="num"><b>${r.skor}</b> / ${r.maks}</td></tr>`).join('')
  }</tbody></table>`;
}
function renderLbTabs(){
  $('lbTabs').innerHTML=PAKET.map(([k,t])=>`<button type="button" data-p="${k}" aria-pressed="${k===lbPaket}">${t}</button>`).join('');
}
$('lbTabs').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;lbPaket=b.dataset.p;loadLb()});
async function loadLb(){
  renderLbTabs();const box=$('lbBody'),want=lbPaket;
  box.innerHTML=lbNote('Memuat papan peringkat…');
  try{const j=await apiSkor({mode:'quiz',paket:want});if(want===lbPaket)box.innerHTML=lbTable(j.data,null)}
  catch(e){if(want===lbPaket)box.innerHTML=lbNote(e.message)}
}
async function saveQuizScore(tot){
  const box=$('lbResult');if(!box||!QZ)return;
  const paket=QZ.all.length>1?'semua':QZ.all[0],label=PAKET.find(p=>p[0]===paket)[1];
  const body={mode:'quiz',paket,nama:QZ.name,skor:tot,kategori:QZ.cat};
  box.innerHTML=lbNote('Menyimpan skor ke papan peringkat…');
  try{
    const j=await apiSkor(null,body);lbPaket=paket;
    box.innerHTML=`<p class="eyebrow">Papan peringkat · ${label}</p>${lbNote(`Skormu ada di peringkat ${j.peringkat} dari ${j.total} skor.`)}${lbTable(j.data,j.id)}`;
  }catch(e){box.innerHTML=lbNote(e.message)}
}

/* --- Ular tangga: riwayat 5 permainan terakhir --- */
function histItem(m){
  const s=SDG[m.kategori-1]||SDG[0],top=m.pemain[0].poin,win=m.pemain.filter(p=>p.poin===top);
  const judul=win.length>1?`Seri: ${win.map(p=>esc(p.nama)).join(' & ')}`:`Pemenang: ${esc(win[0].nama)}`;
  return `<li style="--c:${s.c}"><b>${judul} · ${top} poin</b><span>${m.pemain.map(p=>`${esc(p.nama)} ${p.poin}`).join(' · ')}</span><small>SDG ${s.n} ${esc(s.name)} · ${m.durasi} menit · ${tgl(m.waktu)}</small></li>`;
}
async function loadHistory(){
  const box=$('histBody');box.innerHTML=lbNote('Memuat riwayat…');
  try{const j=await apiSkor({mode:'ular'});box.innerHTML=j.data.length?`<ol class="hist">${j.data.slice(0,5).map(histItem).join('')}</ol>`:lbNote('Belum ada permainan yang tersimpan.')}
  catch(e){box.innerHTML=lbNote(e.message)}
}
function saveMatch(){
  const out=$('endSave');out.textContent='';
  if(!S||S.saved)return;
  if(!S.asked){out.textContent='Belum ada kartu Quest yang dibuka, jadi hasil ini tidak disimpan ke riwayat.';return}
  S.saved=true;out.textContent='Menyimpan hasil ke riwayat…';
  const ranked=S.players.slice().sort((a,b)=>b.pts-a.pts||b.right-a.right);
  apiSkor(null,{mode:'ular',kategori:S.cat,durasi:setup.dur,kartu:S.asked,pemain:ranked.map(p=>({nama:p.name,poin:p.pts,benar:p.right,kartu:p.qs}))})
    .then(()=>{out.textContent='Hasil permainan tersimpan di riwayat.'})
    .catch(e=>{out.textContent=e.message});
}

loadHistory();

/* =================== BANK SOAL DARI SERVER (api/soal.php) =================== */
/* Soal yang dikelola lewat halaman admin diambil dari server. Kalau server PHP tidak aktif
   atau datanya tidak lengkap, permainan tetap memakai soal bawaan di atas. */
let bankTertunda=null;
function bankLengkap(b){
  if(!b||!b.soal||!Array.isArray(b.keputusan)||!Array.isArray(b.sampah))return false;
  if(!SDG.every(s=>Array.isArray(b.soal[s.n])&&b.soal[s.n].length>=5))return false;
  if(b.keputusan.length<5||b.sampah.length<10)return false;
  return BINS.every(x=>b.sampah.filter(w=>w[1]===x.k).length>=2);
}
function pakaiBank(b){
  if(S||QZ){bankTertunda=b;return}   // soal tidak diganti di tengah permainan
  bankTertunda=null;
  SDG.forEach(s=>{Q[s.n]=b.soal[s.n]});
  DECISIONS.splice(0,DECISIONS.length,...b.keputusan);
  WASTE.splice(0,WASTE.length,...b.sampah);
  Object.keys(SEEN).forEach(k=>delete SEEN[k]);
}
async function muatBank(){
  if(location.protocol==='file:')return;
  try{
    const r=await fetch('api/soal.php',{cache:'no-store'});
    if(!(r.headers.get('content-type')||'').includes('application/json'))return;
    const j=await r.json();
    if(j&&j.ok&&j.soal&&bankLengkap(j))pakaiBank(j);
  }catch(e){}
}
muatBank();
