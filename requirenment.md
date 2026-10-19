# Dokumen Kebutuhan Website Pribadi

## 1. Gambaran Umum

Website yang sudah ada akan dikembangkan menjadi situs pribadi/portofolio yang modern, responsif, mudah digunakan, dan dapat menampilkan profil pemilik secara profesional. Situs ditujukan kepada perekrut, calon rekan kerja, dan pengunjung umum yang ingin mengenal profil serta pengalaman pemilik.

Website saat ini sudah memiliki bagian Beranda, Tentang Saya, Keahlian, Pengalaman Kerja/Magang, Kontak, dan Footer. Pengembangan harus mempertahankan informasi yang relevan dan menyempurnakan tampilan serta fungsi yang sudah tersedia.

## 2. Tujuan

- Menyajikan profil, keahlian, dan pengalaman secara jelas dan profesional.
- Memberikan pengalaman penggunaan yang nyaman di ponsel, tablet, dan desktop.
- Memudahkan pengunjung menemukan informasi dan menghubungi pemilik.
- Membuat tampilan konsisten, modern, mudah dibaca, dan mudah dipelihara.

## 3. Pengguna Sasaran

- Perekrut atau perusahaan yang sedang meninjau profil kandidat.
- Calon rekan kerja atau kolaborator.
- Pengunjung umum yang ingin melihat informasi dan portofolio pemilik.

## 4. Ruang Lingkup Halaman

Website berupa satu halaman (single-page) dengan navigasi ke bagian-bagian berikut:

1. **Navigasi** — logo/nama singkat dan tautan ke setiap bagian utama.
2. **Beranda (Hero)** — nama, peran atau profesi, ringkasan singkat, foto profil, tautan media sosial, serta tombol menuju pengalaman dan kontak.
3. **Tentang Saya** — ringkasan latar belakang, minat, dan tujuan profesional.
4. **Keahlian** — daftar keahlian beserta keterangan yang relevan.
5. **Pengalaman/Portofolio** — pengalaman kerja atau magang yang ditampilkan dengan nama perusahaan, posisi, dan tanggung jawab.
6. **Kontak** — alamat email dan nomor telepon yang dapat digunakan, dengan tombol untuk mengirim email.
7. **Footer** — nama pemilik dan tahun hak cipta yang diperbarui otomatis.

## 5. Kebutuhan Fungsional

- Tautan navigasi mengarah ke bagian halaman yang benar dan berfungsi dengan keyboard maupun sentuhan.
- Tombol ajakan pada bagian Beranda mengarah ke bagian Pengalaman dan Kontak.
- Tautan email membuka aplikasi email dengan alamat penerima yang benar dan konsisten dengan informasi yang ditampilkan.
- Tautan media sosial mengarah ke profil yang valid. Tautan yang belum tersedia tidak boleh dibiarkan sebagai tautan kosong atau `#`.
- Tombol tema terang/gelap berfungsi, memiliki nama aksesibel, dan memperbarui tampilannya secara konsisten di seluruh halaman.
- Tahun pada Footer ditampilkan secara otomatis sesuai tahun berjalan.
- Konten pengalaman, keahlian, dan profil harus mudah diperbarui tanpa mengubah struktur halaman yang tidak berkaitan.

## 6. Kebutuhan Desain dan Responsivitas

- Gunakan tampilan modern yang bersih dengan tipografi, warna, jarak, tombol, dan kartu yang konsisten.
- Pertahankan identitas visual yang sesuai untuk situs pribadi profesional; warna dan aksen harus memiliki kontras yang cukup.
- Navigasi tetap mudah ditemukan dan digunakan pada semua ukuran layar.
- Pada layar lebar, susun bagian dengan tata letak yang memanfaatkan ruang secara seimbang; pada layar kecil, susun konten dalam satu kolom bila diperlukan.
- Tata letak tidak boleh menimbulkan gulir horizontal atau teks/kontrol yang terpotong pada ponsel, tablet, maupun desktop.
- Foto profil harus mempertahankan rasio dan pemotongan yang baik, memiliki teks alternatif, serta tidak meluber dari wadahnya.
- Animasi dan efek hover harus ringan, tidak menghambat penggunaan, serta tetap nyaman bagi pengguna yang memilih pengurangan gerakan.
- Pertahankan navigasi ke bagian halaman saat menggunakan header yang tetap terlihat.

## 7. Kebutuhan Aksesibilitas dan Kualitas

- Gunakan elemen HTML semantik dan urutan heading yang logis.
- Semua fungsi utama dapat digunakan dengan keyboard; fokus keyboard terlihat jelas.
- Teks, ikon, dan kontrol memiliki kontras yang memadai serta nama/label yang dapat dikenali pembaca layar.
- Gunakan bahasa Indonesia yang konsisten, ejaan yang baik, dan informasi profil yang akurat.
- Tautan eksternal yang dibuka di tab baru harus diterapkan dengan aman.
- Halaman memiliki judul dan deskripsi yang sesuai serta metadata viewport untuk perangkat seluler.
- Aset gambar dioptimalkan agar ukuran halaman dan waktu pemuatan tetap wajar.
- Implementasi tetap menggunakan struktur proyek saat ini: HTML, CSS, dan JavaScript sisi klien; backend atau penyimpanan data tidak termasuk dalam ruang lingkup awal.

## 8. Kriteria Penerimaan

- Semua bagian utama tersedia dan dapat dicapai melalui navigasi.
- Halaman dapat digunakan pada lebar ponsel (mulai sekitar 320 px), tablet, dan desktop tanpa konten terpotong atau gulir horizontal.
- Tombol tema dapat berpindah antara tema terang dan gelap, dan tampilan semua bagian tetap terbaca pada kedua tema.
- Tombol ajakan, email, media sosial, dan navigasi mengarah ke tujuan yang valid.
- Informasi kontak yang ditampilkan sama dengan tujuan tautan email.
- Foto profil tampil dengan teks alternatif; kontrol interaktif dapat digunakan menggunakan keyboard dan memiliki fokus yang terlihat.
- Tampilan tetap konsisten, mudah dibaca, dan tidak menunjukkan aset yang rusak atau tautan placeholder.
- Tidak ada kesalahan JavaScript atau tautan internal yang mengarah ke bagian yang tidak tersedia.

## 9. Batasan dan Asumsi

- Website ditujukan sebagai profil pribadi statis, bukan aplikasi dengan login, CMS, atau database.
- Pemilik menyediakan dan menyetujui isi profil, pengalaman, kontak, tautan sosial, serta aset yang digunakan.
- Perubahan isi tidak boleh menambahkan informasi pribadi atau pengalaman yang belum dikonfirmasi oleh pemilik.
