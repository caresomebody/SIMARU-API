![logo (1)](https://user-images.githubusercontent.com/48080443/122102927-2e99eb00-ce40-11eb-9841-c7fc4b9647df.png)

<h1 align="center">
	Kelompok 1 - Paralel 1 - PSBO - Mamen Family
</h1>
<h1 align="center">
	<a href="https://www.figma.com/file/UBvLP54qv5oLWKCFyiYgVp/SIMARU">
	<img
	src="https://user-images.githubusercontent.com/48080443/122107501-563f8200-ce45-11eb-8001-b31a9729faad.png"/>
	</a>
	<a href="https://trello.com/b/ykm9C6zl/mamen-family-psbo">
    	<img
	src="https://user-images.githubusercontent.com/48080443/122107552-63f50780-ce45-11eb-8ed1-4b7051c17ed6.png"/> 
	</a>
</h1>




[Back-End](#back-end) | [Deskripsi](#deskripsi-singkat-aplikasi) | [User Analysis](#user-analysis) | [Spesifikasi](#spesifikasi-teknis-lingkungan-pengembangan) | [Konsep OOP](#konsep-oop-yang-digunakan) | [Tipe Desain](#tipe-desain-pengembangan-yang-digunakan) | [Hasil dan Pembahasan](#hasil-dan-pembahasan) | [Implementasi](#hasil-implementasi) | [Saran](#saran-untuk-pengembangan-selanjutnya) | [Job Desc](#developer-dan-job-desc)
:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:

# 🖥 Back-End
[`^ kembali ke atas ^`](#)  
https://github.com/caresomebody/SIMARU-API

# 📖 Deskripsi Singkat Aplikasi
[`^ kembali ke atas ^`](#)  
**SIMARU (Sistem Management Peminjaman Ruangan)**

Selama penyelenggaraan acara kepanitiaan maupun organisasi di IPB, salah satu hal yang perlu dipersiapkan adalah ruangan. Banyak jenis ruangan yang dapat dipinjam dengan berbagai macam cara peminjaman. Variasi dalam peminjaman ruangan tersebut kerap menimbulkan pertanyaan bagi panitia penyelenggara, seperti informasi terkait ketersediaan, kapasitas, waktu operasional, fasilitas serta narahubung yang harus dihubungi. Dengan adanya permasalahan yang dialami tersebut, kami memutuskan untuk membuat suatu platform terpusat mengenai informasi setiap ruangan yang ada di IPB. Platform tersebut bernama SIMARU.

SIMARU ( Sistem Management Peminjaman Ruang ) merupakan platform berbasis website yang diperuntukkan untuk mahasiswa IPB dalam melakukan pencarian informasi dan pengajuan peminjaman dari data ruangan yang tersedia. Fitur yang disediakan oleh Simaru berupa Data Ruangan, Ajukan Peminjaman, Data Peminjaman, dan Pengajuan. Dengan adanya platform informasi ini, tentunya akan membuat alur peminjaman setiap ruangan menjadi lebih terstruktur, informasi jadwal booking setiap ruangan akan lebih terpusat, dan proses peminjaman dapat dilakukan dengan lebih efektif dan efisien.

# 🧑‍🤝‍🧑 User Analysis
[`^ kembali ke atas ^`](#)
### User Story
“Sebagai panitia sebuah acara di ipb saya ingin tahu data realtime ruangan mana di IPB yang sudah terbooking, agar saya dapat menyesuaikan dengan jadwal peminjaman untuk booking ruangan di acara saya.”

“Sebagai panitia sebuah acara di ipb saya ingin tahu kapasitas ruangan yang ada di IPB, agar saya dapat menyesuaikan peminjaman ruangan untuk acara saya.”

“Sebagai panitia sebuah acara di ipb saya ingin tahu fasilitas yang tersedia di ruangan yang akan dipinjam, agar saya dapat menyesuaikan kebutuhan acara dengan fasilitas ruangan.”

“Sebagai panitia sebuah acara di ipb saya ingin tahu narahubung dari setiap ruangan yang ada di IPB, agar saya dapat lebih mudah dalam menghubungi pihak ruangan yang ingin saya sewa nantinya”

# ⚙️ Spesifikasi Teknis Lingkungan Pengembangan
[`^ kembali ke atas ^`](#)  
### Software
<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/60166539/122099522-496a6080-ce3c-11eb-9109-1c7d38699a94.png"/>
</h1>

### Hardware
- Processors  : AMD Ryzen 5 3600, Intel Core i5-8250U 1.60 GHz
- Memory      : 16GB, 8GB RAM
- VGA         : Radeon RX 570, NVIDIA GeForce® 940MX

### Tech Stack
<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/48080443/122120605-d28d9180-ce54-11eb-8c42-5cd51112f20d.png"/>
</h1>

MERN adalah singkatan dari MongoDB, Express, React, Node yang merupakan tech stack yang digunakan pada pengembangan aplikasi kali ini.

<table>
    <thead>
        <tr>
            <th>Nama</th>
            <th>Fungsi</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>MongoDB</td>
            <td>Database</td>
        </tr>
         <tr>
            <td>ExpressJS</td>
            <td>NodeJS Web Framework</td>
        </tr>
        <tr>
            <td>NodeJS</td>
            <td>JavaScript Web Server</td>
        </tr>
       <tr>
            <td>React JS</td>
            <td>Client-side JavaScript framework (Front-End)</td>
        </tr>
</tbody>
</table>

MERN adalah salah satu dari beberapa variasi stack MEAN (MongoDB, Express, Angular, Node), di mana Angular sebagai framework front-end tradisional digantikan dengan React.js. Variasi lainnya adalah MEVN (MongoDB, Express, Vue, Node) dan framework front end dengan bahasa pemrograman JavaScript apapun dapat digunakan.

# 🌸 Konsep OOP yang Digunakan
[`^ kembali ke atas ^`](#)  
- Object, Method dan Property
    - Object adalah kesatuan dasar dari OOP dan merepresentasikan bentuk nyata dari class.
    - Method atau behavior adalah suatu operasi berupa fungsi-fungsi yang dapat dilakukan oleh suatu object. Method didefinisikan pada class akan tetapi dipanggil melalui object. Metode menentukan perilaku object, yakni apa yang terjadi ketika object tersebut dibuat serta berbagai operasi yang dapat dilakukan object.
    - Property adalah bagian dari sebuah class yang mendeskripsikan sifat yang dimiliki oleh class tersebut. 

- Class 
    - Cetak biru (blueprint) definisi pengguna atau prototipe dari object yang dibuat. Class yang telah diciptakan tersebut merepresentasikan seperangkat properti atau method yang umum dari semua object dari satu tipe data.

- Encapsulation
   - Metode penyatuan data atau metode yang berbeda yang “dikapsulkan” menjadi satu unit data. Encapsulation juga dapat diartikan sebagai salah satu cara untuk melindungi data agar tidak dapat diakses oleh apapun yang berada diluar kapsul.

- Inheritance
   - Konsep yang memungkinkan class yang telah terbentuk untuk mewariskan sifat-sifatnya (field dan method) kepada class yang baru dibuat. 

- Getter and Setter
   - Metode untuk mengambil dan memperbarui nilai dari sebuah variabel, terutama pada variabel yang terdapat pada enkapsulasi. 

- Message Passing
   - Metode untuk mengirim pesan dari sebuah objek dari satu bagian ke bagian lainnya (contoh produsen dan konsumen). Metode ini digunakan ketika bagian tersebut tidak memiliki ruang penyimpanan atau perangkat keras yang dapat dibagi sebagai cara untuk berkomunikasi.


# 🎨 Design Pattern
<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/48080443/122119348-4464db80-ce53-11eb-9d35-bcd7b9045a74.png"/>
</h1>

Kami menggunakan design pattern MVC untuk pengembangan web kami, penjelasannya adalah sebagai berikut:
- Model: Mengelola logika bisnis aplikasi yang menentukan bagaimana data harus disimpan, dibuat, dan dimodifikasi
- View: Representasi visual dari data atau informasi
- Controller: Menafsirkan peristiwa yang dibuat pengguna dan mengubahnya menjadi perintah untuk model yang nantinya akan mengubah tampilan

# 🤔 Metode Pengembangan Desain
[`^ kembali ke atas ^`](#)  
Dalam pengembangan sistem Simaru, kami menggunakan metode waterfall (Air terjun). Metode ini menggambarkan pendekatan yang cukup sistematis juga berurutan pada pengembangan software. Tahapan yang dilakukan terdiri dari Requirement, Design System, Coding, Integration dan Operation, serta Maintenance. Berikut merupakan uraian dari tahapan yang kami lakukan :

<table>
    <thead>
        <tr>
            <th>No</th>
            <th>Tahapan</th>
             <th>Uraian</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1.</td>
            <td>Requirement Analysis</td>
            <td>Pada tahapan ini dilakukan untuk mengetahui kebutuhan pengguna atas perangkat lunak yang diharapkan. Informasi kebutuhan tersebut bisa diperoleh dengan cara wawancara langsung, diskusi, dan studi literatur. Kemudian, hasil dari informasi tersebut akan dianalisis dan dikelompokkan berdasarkan kebutuhan pengguna</td>
        </tr>
         <tr>
            <td>2.</td>
            <td>Design System</td>
            <td>Pada tahap ini akan dibuat software requirement dimulai dari perancangan perangkat lunak, pembuatan ERD, Use case diagram, Activity diagram, Class diagram, Arsitektur sistem, serta representasi interface</td>
        </tr>
         <tr>
            <td>3.</td>
            <td>Coding & System</td>
            <td>Tahapan ini merupakan implementasi dari perancangan yang dibuat. Sistem informasi akan dibuat menggunakan bahasa pemrograman JavaScript dengan Framework React JS. Setelah itu akan dilakukan testing terhadap sistem yang telah dibuat untuk mengetahui kesalahan dari sistem tersebut dan dilakukan perbaikan</td>
        </tr>
         <tr>
            <td>4.</td>
            <td>Integration</td>
            <td>Tahap ini merupakan tahapan final. Setelah melakukan tiga tahapan di atas, maka sistem telah siap untuk digunakan oleh user</td>
        </tr>
        <tr>
            <td>5.</td>
            <td>Operation & Maintenance</td>
            <td>Pemeliharaan akan dilakukan apabila terdapat update fitur atau memperbaiki kesalahan yang ditemukan pada saat sistem digunakan langsung oleh user</td>
        </tr>
</tbody>
</table>

# 🎊 Hasil dan Pembahasan
[`^ kembali ke atas ^`](#)  
### Use Case Diagram
<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/60166539/121931675-1f4a6d00-cd6e-11eb-877f-faceee4b0914.png"/>
</h1>

Kami menawarkan ide sebuah platform dimana mahasiswa IPB dapat melakukan peminjaman ruangan yang ada di  IPB. Pengguna dapat melihat ketersediaan ruangan pada daftar ruangan dan juga fasilitas pada ruangan secara lengkap seperti kapasitas orang, luas ruangan dan peralatan pada detail ruangan. Pengguna dapat melakukan pengajuan untuk meminjam ruangan dengan memasukan tujuan peminjaman ruangan dan juga memilih jam serta tanggal pada detail ruangan. Kemudian pengajuan itu akan masuk ke dalam daftar pending pada aplikasi penjaga ruangan sebagai admin yang nantinya pengajuan tersebut dapat disetujui oleh admin. Jika sudah diterima, maka permohonan tersebut akan masuk ke dalam list yang ada pada daftar pengajuan bahwa ruangan sudah dipesan oleh pihak yang memesan dengan rinci.

### Activity Diagram!
<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/48080553/122079774-ec64af80-ce27-11eb-8cbd-ef1c21796ee5.png"/>
	<img
	src="https://user-images.githubusercontent.com/48080553/122079803-f4245400-ce27-11eb-810a-8dd26fcddc17.png"/>
	<img
	src="https://user-images.githubusercontent.com/48080553/122079811-f686ae00-ce27-11eb-840c-9088da6d85ba.png"/>
</h1>


### Class Diagram
<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/60166539/121931715-2f624c80-cd6e-11eb-841f-487f05934cda.png"/>
</h1>

### Entity Relationship Diagram (ERD)
<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/60166539/121931754-39844b00-cd6e-11eb-8cd1-e99e4135abb9.png"/>
</h1>

### Arsitektur Sistem
<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/48080553/122075815-8cb8d500-ce24-11eb-8f41-13821fa11cb3.png"/>
</h1>

### Fungsi Utama yang Dikembangkan
Fitur-fitur aplikasi Simaru antara lain :
- Data Ruangan

Pada fitur “Data Ruangan” pengguna dapat melihat daftar ruangan yang ada di IPB lengkap dengan informasi detail yang meliputi foto ruangan, deskripsi, kapasitas, ukuran, waktu operasional, fasilitas yang tersedia,  dan narahubung dari ruangan tersebut.
- Ajukan Peminjaman

Fitur “Ajukan Peminjaman” dapat digunakan pengguna apabila ingin mengajukan peminjaman ruangan. Pada fitur ini pengguna diwajibkan untuk mengisikan form pengajuan yang tersedia.
- Data Peminjaman

Fitur “Data Peminjaman” berisikan informasi realtime ruangan yang sudah terbooking. Fitur ini membantu pengguna untuk menyesuaikan pengajuan berdasarkan ruangan dan waktu peminjaman yang akan ia ajukan.
- Pengajuan

Pada fitur “Pengajuan” pengguna dapat melihat daftar pengajuan yang telah ia buat lengkap dengan status dari pengajuan tersebut.

### Fungsi CRUD
1. CREATE
- Pengguna dapat membuat pengajuan permintaan untuk booking ruangan dengan atribut Id pengajuan, dokumen, deskripsi, tanggal mulai, tanggal selesai, waktu mulai, waktu selesai.
2. READ
- Pengguna dapat melihat daftar ketersediaan ruangan yang terdapat pada homepage
- Pengguna dapat melihat data detail ruangan IPB
- Pengguna dapat melihat detail pengajuan dari pengajuan yang telah ia buat
3. UPDATE
- Pengguna dapat mengupdate pengajuan yang telah ia ajukan sebelumnya selama admin belum menanggapi pengajuan tersebut
4. DELETE
- Pengguna dapat menghapus pengajuan yang telah ia buat sebelumnya

# 🚀 Hasil Implementasi
[`^ kembali ke atas ^`](#)  

### Endpoint API
| Endpoint API | Fungsi | Method |
| :---         | :---  | :---   |
| https://simaru-api.herokuapp.com/api/login				            | Login & Auth                           | POST						                 | 
| https://simaru-api.herokuapp.com/api/ruangan       | READ semua ruangan                          | GET                      |				                 | 
| https://simaru-api.herokuapp.com/api/ruangan/:id				          | READ sebuah ruangan                        | GET						                 | 
| https://simaru-api.herokuapp.com/api/pengajuan/store					             | CREATE Pengajuan                            | POST | 
| https://simaru-api.herokuapp.com/api/pengajuan/			      | READ semua pengajuan                 | GET	| 
| https://simaru-api.herokuapp.com/api/pengajuan/update/:id					            | UPDATE data pengajuan						           | PUT                       | 
| https://simaru-api.herokuapp.com/api/pengajuan/:id			          | READ data sebuah pengajuan		               | GET    | 
| https://simaru-api.herokuapp.com/api/pengajuan/delete/:id	   | DELETE data pengajuan				| DELETE                     | 
| https://simaru-api.herokuapp.com/api	| READ semua user & admin	| GET     | 
| https://simaru-api.herokuapp.com/api/admin		   | READ semua admin	     | GET | 					


### Screenshot sistem
### Link Aplikasi


# 🤟 Saran untuk Pengembangan Selanjutnya
[`^ kembali ke atas ^`](#)  
# 👨‍🏫 Developer dan Job Desc
[`^ kembali ke atas ^`](#)  

👦 <b>Ali Naufal Ammarullah | G64180080 </b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Role: <a>Project Manager & Back-End</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: <a>ali_naufal26@apps.ipb.ac.id</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/caresomebody">@caresomebody</a> <br>
  

👦 <b>Muhammad Rayhanendra Adikoesoemo | G64180098</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Role: <a>Front-End</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: <a>rayhanendra_a6@apps.ipb.ac.id</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/rayhanendra">@rayhanendra</a> <br>

👩 <b>Zahwa Wahyu Riana | G64180070</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Role: <a>Front-End & System Analyst</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: <a>zahwa_riana31@apps.ipb.ac.id</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/zahwawrr">@zahwawrr</a> <br>
  
👩 <b>Mutia Marcha Fatika | G64180085</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Role: <a>Front-End & UI/UX Designer</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: <a>mutia_kemala@apps.ipb.ac.id</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/mutiamarchaa">@mutiamarchaa</a> <br>
  
👦 <b>Muhammad Hafizhan | G64180100</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Role: <a>System Analyst & UI/UX Designer</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: <a>hafizhan_667@apps.ipb.ac.id</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/Muffin667">@Muffin667</a> <br>

<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/48080443/122121373-bd653280-ce55-11eb-829c-a4d9937056c7.png"/>
</h1>
