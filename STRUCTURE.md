# Struktur Folder Proyek

```
Project-3R/
│
├── app/                          # Next.js App Router
│   ├── about/
│   │   └── page.tsx              # Halaman: /about
│   ├── actions/
│   │   └── page.tsx              # Halaman: /actions
│   ├── campaign/
│   │   └── page.tsx              # Halaman: /campaign (Poster Kampanye)
│   ├── contact/
│   │   └── page.tsx              # Halaman: /contact
│   ├── gallery/
│   │   └── page.tsx              # Halaman: /gallery
│   ├── globals.css               # Global styles (Tailwind)
│   ├── layout.tsx                # Root layout (Navbar + Footer)
│   └── page.tsx                  # Landing page: /
│
├── components/                    # Komponen React
│   ├── Footer.tsx                # Footer component
│   ├── HeroSection.tsx           # Hero section dengan Framer Motion
│   ├── Navbar.tsx                # Navigation bar
│   ├── PosterDisplay.tsx         # Komponen display poster
│   └── SectionTitle.tsx          # Reusable section title
│
├── lib/                          # Utility functions
│   └── utils.ts                  # cn() untuk class merging
│
├── public/                       # Static assets
│   └── images/
│       ├── .gitkeep
│       ├── README.md
│       └── poster.jpg            # [TEMPATKAN POSTER ANDA DI SINI]
│
├── .gitignore                    # Git ignore rules
├── components.json               # Shadcn UI config
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
├── postcss.config.js             # PostCSS config
├── README.md                     # Dokumentasi proyek
├── tailwind.config.ts            # Tailwind CSS config
└── tsconfig.json                 # TypeScript config
```

## Halaman yang Tersedia

1. **/** - Landing page dengan HeroSection
2. **/about** - Tentang Isu Lingkungan
3. **/campaign** - Poster Kampanye (menggunakan PosterDisplay)
4. **/actions** - Tindakan yang Bisa Dilakukan
5. **/gallery** - Galeri Foto
6. **/contact** - Halaman Kontak

## Komponen Utama

- **Navbar** - Navigasi dengan active state detection
- **Footer** - Footer dengan informasi kontak
- **HeroSection** - Hero dengan animasi Framer Motion
- **SectionTitle** - Judul section yang reusable
- **PosterDisplay** - Display poster dengan animasi

## Teknologi Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI
- Framer Motion
- Lucide React (Icons)

