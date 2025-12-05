"use client";

import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { ShoppingBag, Zap, Bike, Recycle, Store } from "lucide-react";

export default function ActionsPage() {
  const actions = [
    {
      icon: ShoppingBag,
      title: "Kurangi Penggunaan Plastik",
      description: "Gunakan tas belanja yang dapat digunakan kembali, hindari botol plastik sekali pakai, dan pilih produk dengan kemasan minimal.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Zap,
      title: "Hemat Energi",
      description: "Matikan lampu dan peralatan elektronik saat tidak digunakan, gunakan lampu LED, dan pertimbangkan penggunaan energi terbarukan.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Bike,
      title: "Transportasi Ramah Lingkungan",
      description: "Gunakan transportasi umum, bersepeda, atau berjalan kaki untuk perjalanan pendek. Pertimbangkan kendaraan listrik jika memungkinkan.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Recycle,
      title: "Daur Ulang dan Kompos",
      description: "Pisahkan sampah organik dan anorganik, daur ulang barang yang masih bisa digunakan, dan buat kompos dari sisa makanan.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Store,
      title: "Dukung Produk Lokal dan Berkelanjutan",
      description: "Beli produk lokal untuk mengurangi jejak karbon, pilih produk dengan sertifikasi ramah lingkungan, dan dukung bisnis yang berkomitmen pada keberlanjutan.",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 min-h-screen pb-16 sm:pb-20 md:pb-24">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle 
          title="Tindakan yang Bisa Anda Lakukan" 
          subtitle="Mulai dari hal kecil untuk membuat perubahan besar"
        />
        
        <div className="mt-12 space-y-6">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-8 bg-card rounded-2xl shadow-md card-hover border border-border/50"
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl ${action.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${action.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground">{action.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {action.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

