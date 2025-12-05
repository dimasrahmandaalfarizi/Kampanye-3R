# 🌱 UPN GAIA PROJECT

Website kampanye lingkungan dan pembangunan berkelanjutan yang dibangun dengan Next.js, Tailwind CSS, dan Shadcn UI.

## 📋 Deskripsi

UPN GAIA PROJECT adalah platform digital untuk kampanye lingkungan yang bertujuan meningkatkan kesadaran masyarakat tentang pentingnya menjaga lingkungan dan menerapkan prinsip pembangunan berkelanjutan. Website ini menampilkan poster kampanye, informasi tentang isu lingkungan, tindakan yang bisa dilakukan, dan profil tim yang terlibat.

## ✨ Fitur

- 🎨 **Modern UI/UX** - Desain yang clean dan modern dengan animasi smooth
- 📱 **Responsive Design** - Optimal di semua perangkat (mobile, tablet, desktop)
- 🎭 **Splash Screen** - Animasi loading yang menarik saat pertama kali membuka website
- 🖼️ **Poster Display** - Tampilan poster kampanye dengan animasi
- 📤 **Share Features** - Bagikan poster ke WhatsApp dan Instagram
- 👥 **Team Page** - Halaman profil tim dengan foto anggota
- 🎯 **Interactive Elements** - Hover effects, transitions, dan micro-interactions
- 🌿 **Green Theme** - Skema warna hijau yang konsisten di seluruh website

## 🚀 Teknologi yang Digunakan

- **Next.js 14** - React framework dengan App Router
- **TypeScript** - Type safety untuk kode yang lebih robust
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - High-quality component library
- **Framer Motion** - Animation library untuk animasi yang smooth
- **Lucide React** - Beautiful icon library

## 📁 Struktur Proyek

```
Project-3R/
├── app/                          # Next.js App Router
│   ├── about/                   # Halaman Tentang Isu
│   ├── actions/                 # Halaman Tindakan yang Bisa Dilakukan
│   ├── campaign/                # Halaman Poster Kampanye
│   ├── contact/                 # Halaman Kontak
│   ├── gallery/                 # Halaman Galeri
│   ├── team/                    # Halaman Tim
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Landing page
├── components/                   # Komponen React
│   ├── ClientLayout.tsx         # Client-side layout wrapper
│   ├── Footer.tsx               # Footer component
│   ├── HeroSection.tsx          # Hero section dengan animasi
│   ├── Navbar.tsx               # Navigation bar (hamburger di mobile)
│   ├── PosterDisplay.tsx        # Komponen display poster
│   ├── SectionTitle.tsx         # Reusable section title
│   ├── ShareButtons.tsx         # Share buttons (WA, IG, dll)
│   └── SplashScreen.tsx         # Splash screen animation
├── lib/                          # Utility functions
│   └── utils.ts                 # Helper functions (cn untuk class merging)
├── public/                       # Static assets
│   └── images/
│       ├── Poster.jpeg          # Poster kampanye
│       └── team/                # Foto anggota tim
│           ├── team1.png        # Foto ketua
│           ├── team2.png        # Foto anggota 1
│           ├── team3.png        # Foto anggota 2
│           ├── team4.png        # Foto anggota 3
│           └── team5.png        # Foto anggota 4
└── [config files]                # Konfigurasi Next.js, Tailwind, dll
```

## 🛠️ Instalasi

1. **Clone repository**
```bash
git clone <repository-url>
cd Project-3R
```

2. **Install dependencies**
```bash
npm install
```

3. **Tambahkan assets**
   - Pastikan poster kampanye ada di `/public/images/Poster.jpeg`
   - Foto tim ada di `/public/images/team/` (team1.png - team5.png)

4. **Jalankan development server**
```bash
npm run dev
```

5. **Buka browser**
```
http://localhost:3000
```

## 📄 Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build untuk production
- `npm run start` - Menjalankan production server
- `npm run lint` - Menjalankan ESLint

## 🎨 Halaman Website

1. **Landing Page (/)** - Halaman utama dengan hero section dan overview
2. **Tentang Isu (/about)** - Informasi tentang isu lingkungan dan tujuan kampanye
3. **Poster Kampanye (/campaign)** - Menampilkan poster kampanye dengan fitur share
4. **Tindakan (/actions)** - Daftar tindakan yang bisa dilakukan untuk lingkungan
5. **Tim (/team)** - Profil ketua dan anggota tim
6. **Galeri (/gallery)** - Galeri foto kegiatan kampanye

## 🎯 Fitur Utama

### Splash Screen
- Animasi logo dan judul saat pertama kali membuka website
- Smooth transition ke konten utama

### Share Features
- **WhatsApp** - Share langsung ke WhatsApp dengan text dan link
- **Instagram Story** - Download poster untuk upload ke Instagram Story
- **Copy Link** - Salin link website ke clipboard
- **Download** - Unduh poster kampanye

### Responsive Navigation
- Hamburger menu di mobile
- Full navigation di desktop
- Smooth transitions dan animations

## 🎨 Design System

- **Primary Color**: Green (hsl(142 71% 45%))
- **Background**: Gradient hijau yang smooth dan konsisten
- **Typography**: Inter font family
- **Spacing**: Consistent spacing system dengan Tailwind
- **Animations**: Framer Motion untuk smooth animations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Kontribusi

Kontribusi sangat diterima! Jika Anda ingin berkontribusi:

1. Fork repository
2. Buat branch untuk fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 License

Proyek ini dibuat untuk keperluan akademik dan kampanye lingkungan.

## 👥 Tim

- **Ketua**: Muhammad Raditya Naufal M. (25081010273)
- **Anggota 1**: Vita Ma'rifatus S. (25081010086) - Desainer Kampanye
- **Anggota 2**: Kavana Nafila N. K. (25081010317) - Content Creator
- **Anggota 3**: Phalosava Nibras (25081010217) - Media & Komunikasi
- **Anggota 4**: Dimas Rahmanda Alfarizi (25081010315) - Web Developer

## 📧 Kontak

Untuk pertanyaan atau informasi lebih lanjut tentang kampanye ini, silakan hubungi tim melalui website.

---

**Dibuat dengan ❤️ untuk lingkungan yang lebih baik**
