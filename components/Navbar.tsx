"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang Isu" },
    { href: "/campaign", label: "Poster Kampanye" },
    { href: "/actions", label: "Tindakan" },
    { href: "/literasi", label: "Literasi" },
    { href: "/infografis", label: "Infografis" },
    { href: "/team", label: "Tim" },
    { href: "/gallery", label: "Galeri" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center space-x-1 sm:space-x-2 group"
            onClick={closeMenu}
          >
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent group-hover:from-primary/80 group-hover:to-primary/60 transition-all">
              🌱 UPN GAIA PROJECT
            </span>
          </Link>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 lg:px-4 py-2 text-sm lg:text-base font-medium rounded-lg transition-all duration-200",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Hamburger Button - Only visible on mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-primary/10 active:bg-primary/20 transition-all duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Only visible on mobile */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b shadow-lg animate-in slide-in-from-top">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "px-4 py-3 text-base font-medium rounded-lg transition-all duration-200",
                      pathname === item.href
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5 active:bg-primary/10"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

