import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UPN GAIA PROJECT - Kampanye Lingkungan",
  description: "Kampanye lingkungan dan pembangunan berkelanjutan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} gradient-page relative min-h-screen`}>
        {/* Pattern Dots Layers */}
        <div className="fixed inset-0 pattern-dots-subtle pointer-events-none z-0" />
        <div className="fixed inset-0 pattern-dots-overlay pointer-events-none z-0" />
        
        {/* Multiple Blur Circles for Depth - Smoother and More Vibrant */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-10 left-5 w-80 h-80 bg-primary/12 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-primary/11 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-32 right-1/4 w-[450px] h-[450px] bg-primary/11 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary/12 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/3 w-[380px] h-[380px] bg-primary/11 rounded-full blur-3xl" />
        </div>
        
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

