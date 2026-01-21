# GreenAdmin – Simple Modern Admin Template

GreenAdmin adalah **admin dashboard template sederhana** yang dibuat dengan **Bootstrap 5** dan **jQuery**, dimodifikasi agar tampil **lebih fresh, modern, dan clean** dibandingkan template Bootstrap standar.

Template ini cocok untuk:

- Dashboard admin
- Panel internal
- CMS sederhana
- Prototype / MVP cepat

---

## Gambar

![gambar](ss/admin%20sendiri.png)

---

## ✨ Fitur Utama

- 📱 **Responsive sidebar**
  - Desktop: expand / collapse
  - Mobile: off-canvas + overlay
- 🎨 **UI modern**
  - Custom color system (CSS variables)
  - Rounded card & button
  - Soft shadow & clean spacing
- 🧭 **Sidebar navigation**
  - Active state
  - Submenu (collapse)
- 🖥️ **Navbar fixed**
  - Mobile toggle
  - User menu
- 🧩 **Reusable layout**
  - Sidebar
  - Navbar
  - Main content wrapper
- 🖼️ **Carousel support**
  - Untuk banner / highlight
- ⚡ **Lightweight**
  - Tanpa framework JS berat
  - Mudah dimodifikasi

---

## 🛠️ Teknologi yang Digunakan

- **Bootstrap 5**
- **jQuery**
- **Bootstrap Icons**
- **HTML5**
- **CSS3 (Custom Variables)**

> Tidak menggunakan framework SPA (React / Vue), fokus ke **simpel & cepat**.

---

## 🚀 Cara Menggunakan

1. Clone / download repository ini
2. Pastikan sudah include:
   - Bootstrap CSS & JS
   - jQuery
   - Bootstrap Icons
3. Buka `index.html` di browser

Tidak memerlukan build tools atau konfigurasi tambahan.

---

## 📱 Responsive Behavior

| Mode              | Sidebar Behavior         |
| ----------------- | ------------------------ |
| Desktop (≥ 992px) | Expand / Collapse        |
| Mobile (< 992px)  | Slide in / out + overlay |

State desktop dan mobile **dipisahkan** untuk menghindari bug saat resize.

---

## 🎨 Customisasi

### Ubah warna utama

Edit di `:root` [misal]:

```css
:root {
  --green-500: #10b981;
  --green-600: #059669;
}
```
