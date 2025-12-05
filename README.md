# Dashboard App - Website Dummy Multi-Halaman

Website dummy multi-halaman yang dibangun dengan HTML, CSS, dan JavaScript murni (tanpa framework). Memiliki sistem autentikasi, manajemen user, dan berbagai fitur modern.

## 🚀 Fitur Utama

- **Sistem Autentikasi**: Login, Register, Logout dengan localStorage
- **Proteksi Halaman**: Halaman hanya bisa diakses setelah login
- **Multi Halaman**:
  - Login/Register
  - Dashboard dengan statistik
  - Profile (update data user)
  - Users Management (CRUD)
  - Settings
  - 404 Error Page
- **Komponen Reusable**: Header, Footer, Sidebar
- **Dark Mode Toggle**: Mode gelap/terang
- **Toast Notifications**: Notifikasi real-time
- **Responsive Design**: Mobile-friendly
- **Local Storage**: Penyimpanan data di browser

## 📁 Struktur Folder

```
dummy-fe-2/
├── index.html                 # Halaman login/register
├── pages/
│   ├── dashboard.html         # Dashboard utama
│   ├── profile.html           # Halaman profile
│   ├── users.html             # Manajemen users
│   ├── settings.html          # Halaman settings
│   └── 404.html               # Error page
├── components/
│   ├── header.js              # Komponen header
│   ├── sidebar.js             # Komponen sidebar
│   └── footer.js              # Komponen footer
├── assets/
│   ├── css/
│   │   └── style.css          # Styling utama
│   └── js/
│       ├── utils.js           # Utility functions
│       ├── auth.js            # Sistem autentikasi
│       ├── login.js           # Logic halaman login
│       ├── dashboard.js       # Logic dashboard
│       ├── profile.js         # Logic profile
│       ├── users.js           # Logic CRUD users
│       └── settings.js        # Logic settings
└── README.md
```

## 🎯 Cara Penggunaan

### 1. Buka Website

Buka file `index.html` di browser Anda.

### 2. Login dengan Akun Default

Gunakan salah satu akun berikut untuk login:

**Admin:**

- Username: `admin`
- Password: `admin123`

**User Biasa:**

- Username: `user`
- Password: `user123`

### 3. Atau Daftar Akun Baru

Klik "Daftar di sini" dan isi form registrasi.

## 💡 Fitur Detail

### 🔐 Autentikasi

- Login dengan username dan password
- Register akun baru
- Logout
- Session management dengan localStorage
- Proteksi otomatis untuk halaman yang membutuhkan login

### 📊 Dashboard

- Statistik total users, projects, dll
- Aktivitas terbaru
- Card statistik interaktif

### 👤 Profile

- Update email, nama lengkap, bio, telepon
- Avatar dengan inisial nama
- Real-time update

### 👥 Users Management

- Tabel daftar semua users
- Tambah user baru
- Edit data user
- Hapus user
- Status badge (active/inactive)
- Modal form untuk add/edit

### ⚙️ Settings

- Toggle dark mode
- Pengaturan notifikasi (email, push)
- Two-factor authentication toggle
- Ubah password
- Hapus akun

### 🌙 Dark Mode

- Toggle di header dan settings
- Preference tersimpan di localStorage
- Smooth transition

### 🔔 Toast Notifications

- 4 tipe: success, error, warning, info
- Auto-dismiss setelah 3 detik
- Animasi slide-in

## 🛠️ Teknologi

- **HTML5**: Struktur halaman
- **CSS3**: Styling dengan CSS Variables
- **Vanilla JavaScript**: Logic dan interaksi
- **LocalStorage**: Penyimpanan data

## 📱 Responsive

Website ini fully responsive dan dapat diakses dengan baik di:

- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (320px+)

## 🎨 Design Features

- Modern UI dengan shadow dan border-radius
- Color scheme yang konsisten
- Smooth transitions
- Hover effects
- Professional layout

## 📝 Notes

- Data tersimpan di localStorage browser
- Hapus localStorage akan reset semua data
- Default password untuk user baru adalah `password123`
- Tidak ada koneksi ke backend/server

## 🔧 Customization

### Ubah Warna Tema

Edit variabel CSS di `assets/css/style.css`:

```css
:root {
	--primary-color: #4f46e5;
	--success-color: #10b981;
	/* ... dll */
}
```

### Tambah Halaman Baru

1. Buat file HTML di folder `pages/`
2. Include komponen header, sidebar, footer
3. Include script yang diperlukan
4. Tambahkan link di sidebar (`components/sidebar.js`)

## 📄 License

Free to use for learning purposes.

## 👨‍💻 Developer

Dashboard App - 2025
