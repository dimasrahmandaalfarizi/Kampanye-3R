// TEST123

"use client";

import { useState } from "react";
import { Download } from "lucide-react";

interface ShareButtonsProps {
  imageUrl?: string;
}

export default function ShareButtons({ 
  imageUrl = "/images/Poster.jpeg"
}: ShareButtonsProps) {
  const [downloading, setDownloading] = useState(false);

  // Download image
  const downloadImage = async () => {
    try {
      setDownloading(true);
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `poster-kampanye-upn-gaia-project.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      setDownloading(false);
    } catch (err) {
      console.error('Failed to download:', err);
      setDownloading(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
      {/* Download */}
      <button
        onClick={downloadImage}
        disabled={downloading}
        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg sm:rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Download className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">{downloading ? 'Mengunduh...' : 'Unduh Poster'}</span>
        <span className="sm:hidden">Unduh</span>
      </button>
    </div>
  );
}
