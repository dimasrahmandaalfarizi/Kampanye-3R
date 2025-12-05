"use client";

import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Globe, Recycle, Heart } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Globe,
      title: "Lingkungan",
      description: "Melindungi bumi kita untuk generasi mendatang adalah tanggung jawab kita bersama.",
      color: "text-white",
      bgColor: "bg-white/20",
    },
    {
      icon: Recycle,
      title: "Keberlanjutan",
      description: "Pembangunan berkelanjutan memastikan keseimbangan antara kebutuhan sekarang dan masa depan.",
      color: "text-white",
      bgColor: "bg-white/20",
    },
    {
      icon: Heart,
      title: "Aksi Nyata",
      description: "Setiap individu dapat berkontribusi melalui tindakan sederhana namun berdampak.",
      color: "text-white",
      bgColor: "bg-white/20",
    },
  ];

  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
              title="Selamat Datang di UPN GAIA PROJECT" 
              subtitle="Mari bersama-sama menciptakan perubahan positif untuk lingkungan kita"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
              title="Mengapa Ini Penting?" 
              subtitle="Tiga pilar utama yang menjadi fondasi kampanye kita"
            />
          </motion.div>
          
          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group p-5 sm:p-6 md:p-8 bg-primary/30 rounded-xl sm:rounded-2xl shadow-md card-hover border border-primary/40 backdrop-blur-sm"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl ${feature.bgColor} mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-foreground/90 leading-relaxed text-sm sm:text-base md:text-lg">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

