# Backend BUSAR

## Deskripsi
Backend ini merupakan aplikasi server untuk website **BUSAR**, yang berfungsi mengelola berbagai fitur seperti autentikasi pengguna, pengelolaan data, upload file, serta komunikasi real-time. Aplikasi ini dibangun menggunakan **Node.js**, **Express.js**, dan **Sequelize** sebagai ORM untuk database **MySQL**. Selain itu, aplikasi ini mendukung fitur-fitur seperti autentikasi menggunakan **JWT**, upload gambar menggunakan **Multer** dan **Sharp**, serta real-time communication menggunakan **Socket.IO**.

## Fitur
- **Autentikasi Pengguna** menggunakan **JWT** dan **bcrypt**
- **Rate Limiting** untuk mencegah serangan DDOS dengan **express-rate-limit**
- **Komunikasi Real-Time** dengan **Socket.IO**
- **Upload dan Resize Gambar** menggunakan **Multer** dan **Sharp**
- **Pengelolaan Database MySQL** menggunakan **Sequelize**
- **Keamanan Sandi** menggunakan **argon2** dan **bcrypt**
- **Integrasi dengan Google APIs** menggunakan **googleapis**
- **Push Notifications** menggunakan **Pusher**

## Instalasi
npm install

### Prasyarat
Sebelum memulai, pastikan Anda memiliki software berikut yang telah terinstal:
- [Node.js](https://nodejs.org/) (versi terbaru)
- [MySQL](https://www.mysql.com/) (versi terbaru)