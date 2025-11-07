# Proyek GLSC: Website Berita dengan Autentikasi Vue.js & Laravel

Ini adalah proyek *full-stack* yang dibuat untuk memenuhi tugas mata kuliah GLSC dengan tema **"State Management and Login Form with Authentication"**.

Aplikasi ini mengimplementasikan sistem autentikasi penuh (Register, Login, Logout) menggunakan **Vue.js** sebagai frontend dan **Laravel** sebagai backend (API). Setelah login, pengguna akan diarahkan ke halaman *home* yang menampilkan *layout* situs berita (sesuai dengan *screenshot* tugas) dengan **tema gelap (dark mode)**.



## ✨ Fitur Utama

* **Autentikasi Pengguna:** Sistem Register, Login, dan Logout penuh menggunakan Laravel Sanctum.
* **Rute Terproteksi (Protected Routes):** Halaman Home (`/home`) tidak dapat diakses sebelum pengguna berhasil login.
* **State Management:** Menggunakan **Pinia** (dibantu `localStorage`) untuk mengelola dan menyimpan status login pengguna secara global di sisi *client*.
* **Layout Kustom:** Halaman *home* yang didesain menggunakan Bootstrap 5 agar menyerupai *layout* situs berita (sesuai gambar tugas).
* **Tema Gelap:** Seluruh antarmuka pengguna (UI) menggunakan tema gelap (dark mode).
* **API Backend:** Backend Laravel menyediakan REST API untuk menangani semua logika autentikasi dan pengambilan data pengguna.

## 🛠️ Teknologi yang Digunakan

Proyek ini dibagi menjadi dua bagian:

#### 1. Frontend (`tugas-frontend`)
* **Vue 3** (Composition API)
* **Vite** sebagai *build tool*
* **Vue Router** untuk navigasi halaman (SPA)
* **Pinia** untuk *State Management*
* **Axios** untuk melakukan *request* HTTP ke API Laravel
* **Bootstrap 5** untuk *styling* dan *layout* responsif

#### 2. Backend (`tugas-backend`)
* **Laravel 11** untuk menyediakan REST API
* **Laravel Sanctum** untuk menangani sistem autentikasi SPA yang aman
* **MySQL** sebagai database

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

Proyek ini terdiri dari dua bagian (backend dan frontend) yang harus dijalankan **secara bersamaan** di dua terminal terpisah.

**Prasyarat:**
* **XAMPP/Laragon/MAMP:** Pastikan **MySQL** Anda berjalan.
* **Composer** (Manajer paket PHP)
* **Node.js** (v18 atau lebih baru)

---

### 1. Backend (Laravel API)

1.  Buka terminal, masuk ke folder backend:
    ```bash
    cd tugas-backend
    ```
2.  Install semua dependensi PHP:
    ```bash
    composer install
    ```
3.  Salin file `.env.example` menjadi `.env`:
    ```bash
    cp .env.example .env
    ```
4.  Buka **XAMPP/phpMyAdmin**, buat database baru dengan nama `db_tugas_vue`.
5.  Edit file `.env` dan sesuaikan pengaturan database Anda:
    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_DATABASE=db_tugas_vue
    DB_USERNAME=root
    DB_PASSWORD=
    ```
6.  Pastikan juga Anda mengatur `SESSION_DRIVER` dan `SANCTUM_STATEFUL_DOMAINS` (sesuai dengan port Vue Anda, misal: 5174):
    ```env
    SESSION_DRIVER=cookie
    SESSION_DOMAIN=localhost
    SANCTUM_STATEFUL_DOMAINS=localhost:5174,127.0.0.1:5174
    ```
7.  Generate *application key* Laravel:
    ```bash
    php artisan key:generate
    ```
8.  Jalankan migrasi untuk membuat tabel (termasuk tabel `users`):
    ```bash
    php artisan migrate
    ```
9.  (Penting) Hapus *cache* konfigurasi lama agar `.env` baru terbaca:
    ```bash
    php artisan config:clear
    php artisan cache:clear
    ```
10. Jalankan server backend (biarkan terminal ini terbuka):
    ```bash
    php artisan serve
    ```
> 🖥️ **Backend Anda sekarang berjalan di `http://localhost:8000`**

---

### 2. Frontend (Vue.js App)

1.  Buka **terminal BARU** (jangan tutup terminal backend).
2.  Masuk ke folder frontend:
    ```bash
    cd tugas-frontend
    ```
3.  Install semua dependensi Node.js:
    ```bash
    npm install
    ```
4.  Jalankan server frontend (biarkan terminal ini terbuka):
    ```bash
    npm run dev
    ```
> 🚀 **Frontend Anda sekarang berjalan di `http://localhost:5173` (atau port lain seperti `5174`)**

---

### 3. Selesai!

Buka URL frontend (`http://localhost:5174` atau port yang tertera) di browser Anda. Anda sekarang dapat mendaftar (register) dan login.

## 👤 Penulis

* **Nama:** [Nama Lengkap Anda]
* **NIM:** [NIM Anda]
* **Kelas:** [Kelas Anda]
