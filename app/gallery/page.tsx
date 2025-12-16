"use client";

import SectionTitle from "@/components/SectionTitle";
import { useState } from "react";
import { X } from "lucide-react";

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
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const handleImageClick = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    // Mencegah scroll saat modal terbuka
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    // Mengembalikan scroll
    document.body.style.overflow = "auto";
  };

  // Tutup modal dengan Escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  };

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
                className="aspect-square rounded-lg overflow-hidden bg-secondary/10 hover:bg-secondary/20 transition-colors group cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <div className="relative w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-md">
                      Klik untuk memperbesar
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal untuk gambar besar */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={handleCloseModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            onClick={handleCloseModal}
            aria-label="Tutup"
          >
            <X size={32} />
          </button>

          <div 
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
              
              <div className="mt-4 text-center text-white">
                <p className="text-lg font-medium">{selectedImage.alt}</p>
                <p className="text-sm text-gray-300 mt-1">
                  Gambar {selectedImage.id} dari {galleryImages.length}
                </p>
              </div>
            </div>

            {/* Tombol navigasi gambar sebelumnya/selanjutnya */}
            <div className="absolute top-1/2 left-4 right-4 transform -translate-y-1/2 flex justify-between">
              <button
                className="text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
                  setSelectedImage(galleryImages[prevIndex]);
                }}
                aria-label="Gambar sebelumnya"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                className="text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
                  const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
                  setSelectedImage(galleryImages[nextIndex]);
                }}
                aria-label="Gambar selanjutnya"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Tombol tutup di bagian bawah untuk mobile */}
            <div className="mt-6 flex justify-center md:hidden">
              <button
                className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
                onClick={handleCloseModal}
              >
                Tutup
              </button>
            </div>
          </div>

          {/* Instruksi untuk pengguna */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm text-center opacity-70">
            <p className="hidden md:block">Tekan ESC atau klik di luar gambar untuk menutup</p>
            <p className="hidden md:block">Gunakan tombol panah untuk navigasi</p>
          </div>
        </div>
      )}
    </div>
  );
}