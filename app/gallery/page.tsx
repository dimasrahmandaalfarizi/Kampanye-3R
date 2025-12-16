import SectionTitle from "@/components/SectionTitle";

// Data gambar galeri - sesuaikan dengan nama file di public/images/gallery
const galleryImages = [
  { id: 1, src: "/images/gallery/gambar1.jpeg", alt: "Kegiatan lingkungan 1" },
  { id: 2, src: "/images/gallery/gambar2.jpeg", alt: "Kegiatan lingkungan 2" },
  { id: 3, src: "/images/gallery/gambar3.jpeg", alt: "Kegiatan lingkungan 3" },
  { id: 4, src: "/images/gallery/gambar4.jpeg", alt: "Kegiatan lingkungan 4" },
  { id: 5, src: "/images/gallery/gambar5.jpeg", alt: "Kegiatan lingkungan 5" },
  { id: 6, src: "/images/gallery/gambar6.jpeg", alt: "Kegiatan lingkungan 6" },
];

export default function GalleryPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 min-h-screen pb-16 sm:pb-20 md:pb-24">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title="Galeri" />
        
        <div className="mt-8">
          <p className="text-center text-muted-foreground mb-8">
            Koleksi foto dan dokumentasi kegiatan kampanye lingkungan
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="aspect-square rounded-lg overflow-hidden bg-secondary/10 hover:bg-secondary/20 transition-colors group"
              >
                <div className="relative w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Fallback jika gambar tidak ditemukan */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <p className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-md">
                      Lihat Detail
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Catatan untuk pengguna */}
          {/* <div className="mt-10 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              📁 Pastikan file gambar sudah ditaruh di folder{" "}
              <code className="bg-background px-2 py-1 rounded text-xs">
                public/images/gallery/
              </code>
              <br />
              dengan nama: gambar1.jpg, gambar2.jpg, dst.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}