import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 mt-20 relative bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                UPN GAIA PROJECT
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Kampanye lingkungan dan pembangunan berkelanjutan untuk masa depan yang lebih baik.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Tentang Isu
                </Link>
              </li>
              <li>
                <Link href="/campaign" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Poster Kampanye
                </Link>
              </li>
              <li>
                <Link href="/actions" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Tindakan
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Tim
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-foreground">UPN GAIA PROJECT</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

