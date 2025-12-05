import SectionTitle from "@/components/SectionTitle";

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
            {/* Placeholder untuk gambar galeri */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-secondary rounded-lg flex items-center justify-center"
              >
                <p className="text-muted-foreground">Gambar {item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

