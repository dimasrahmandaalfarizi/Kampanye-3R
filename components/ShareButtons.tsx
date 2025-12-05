"use client";

import { useState, useEffect } from "react";
import { Share2, MessageCircle, Instagram, Link2, Download, Check } from "lucide-react";

interface ShareButtonsProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export default function ShareButtons({ 
  title = "Poster Kampanye UPN GAIA PROJECT",
  description = "Kampanye lingkungan dan pembangunan berkelanjutan",
  imageUrl = "/images/Poster.jpeg"
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [canShare, setCanShare] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${title} - ${description}`;

  // Check if Web Share API is available
  useEffect(() => {
    if (typeof window !== 'undefined' && 'navigator' in window) {
      setCanShare('share' in navigator && typeof navigator.share === 'function');
    }
  }, []);

  // Share ke WhatsApp (Status/Group/Chat)
  const shareToWhatsApp = () => {
    // Untuk WhatsApp Web/App - akan membuka dengan text dan link
    const text = encodeURIComponent(`${shareText}\n\n${currentUrl}`);
    const url = `https://wa.me/?text=${text}`;
    window.open(url, '_blank');
  };

  // Share ke Instagram Story (download dulu, lalu upload manual)
  const shareToInstagramStory = async () => {
    // Download poster dulu
    await downloadImage();
    // Beri instruksi
    setTimeout(() => {
      alert('Poster telah diunduh!\n\nCara upload ke Instagram Story:\n1. Buka aplikasi Instagram\n2. Tap ikon "+" di kiri atas\n3. Pilih "Story"\n4. Pilih poster yang baru diunduh\n5. Tambahkan caption dan bagikan!');
    }, 500);
  };

  // Copy link ke clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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

  // Native Web Share API
  const nativeShare = async () => {
    if (!canShare) {
      // Fallback ke copy link
      copyToClipboard();
      return;
    }

    try {
      if (typeof window !== 'undefined' && 'navigator' in window) {
        const nav = navigator as any;
        if (nav.share && typeof nav.share === 'function') {
          await nav.share({
            title: title,
            text: description,
            url: currentUrl,
          });
        } else {
          copyToClipboard();
        }
      } else {
        copyToClipboard();
      }
    } catch (err) {
      // User cancelled atau error lainnya
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
      {/* WhatsApp */}
      <button
        onClick={shareToWhatsApp}
        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg sm:rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105"
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">WhatsApp</span>
        <span className="sm:hidden">WA</span>
      </button>

      {/* Instagram Story */}
      <button
        onClick={shareToInstagramStory}
        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white rounded-lg sm:rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105"
      >
        <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">IG Story</span>
        <span className="sm:hidden">IG</span>
      </button>

      {/* Copy Link */}
      <button
        onClick={copyToClipboard}
        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg sm:rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Tersalin!</span>
          </>
        ) : (
          <>
            <Link2 className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Salin Link</span>
            <span className="sm:hidden">Link</span>
          </>
        )}
      </button>

      {/* Download */}
      <button
        onClick={downloadImage}
        disabled={downloading}
        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg sm:rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Download className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">{downloading ? 'Mengunduh...' : 'Unduh Poster'}</span>
        <span className="sm:hidden">Unduh</span>
      </button>

      {/* Native Share (Mobile) */}
      {canShare && (
        <button
          onClick={nativeShare}
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg sm:rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base border border-primary/20 hover:scale-105"
        >
          <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Bagikan</span>
          <span className="sm:hidden">Share</span>
        </button>
      )}
    </div>
  );
}

