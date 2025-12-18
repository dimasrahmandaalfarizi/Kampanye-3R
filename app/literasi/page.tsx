"use client";

import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { 
  Leaf, 
  Recycle, 
  AlertTriangle, 
  FileText, 
  Trash2,
  CheckCircle2 
} from "lucide-react";

export default function LiterasiPage() {
  const jenisSampah = [
    {
      id: 1,
      name: "Sampah Organik",
      icon: Leaf,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      description: "Sampah yang berasal dari sisa-sisa makhluk hidup yang dapat terurai secara alami oleh mikroorganisme.",
      examples: [
        "Sisa makanan (nasi, sayur, buah, daging)",
        "Dedaunan dan ranting pohon",
        "Kulit buah dan sayuran",
        "Sisa makanan hewan",
        "Kotoran hewan"
      ],
      caraPilah: [
        "Pisahkan dari sampah lainnya",
        "Masukkan ke tempat sampah organik",
        "Bisa dijadikan kompos untuk pupuk",
        "Jangan dicampur dengan sampah anorganik"
      ],
      manfaat: "Dapat diolah menjadi kompos yang bermanfaat untuk tanaman"
    },
    {
      id: 2,
      name: "Sampah Anorganik",
      icon: Recycle,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      description: "Sampah yang tidak dapat terurai secara alami dan membutuhkan waktu lama untuk terurai, bahkan hingga ratusan tahun.",
      examples: [
        "Plastik (botol, kemasan, kantong)",
        "Kaca (botol, gelas, kaca jendela)",
        "Logam (kaleng, besi, aluminium)",
        "Karet dan ban bekas",
        "Styrofoam"
      ],
      caraPilah: [
        "Cuci bersih sebelum dibuang",
        "Pisahkan berdasarkan jenisnya (plastik, kaca, logam)",
        "Kumpulkan di tempat sampah anorganik",
        "Bawa ke bank sampah atau tempat daur ulang"
      ],
      manfaat: "Dapat didaur ulang menjadi produk baru yang bermanfaat"
    },
    {
      id: 3,
      name: "Bahan Berbahaya dan Beracun (B3)",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      description: "Sampah yang mengandung bahan berbahaya dan beracun yang dapat membahayakan kesehatan manusia dan lingkungan.",
      examples: [
        "Baterai bekas",
        "Lampu neon dan lampu hemat energi",
        "Obat-obatan kadaluarsa",
        "Pestisida dan bahan kimia",
        "Aki kendaraan",
        "Cat dan thinner"
      ],
      caraPilah: [
        "JANGAN dibuang ke tempat sampah biasa",
        "Kumpulkan secara terpisah",
        "Bawa ke tempat pengumpulan sampah B3",
        "Hubungi dinas lingkungan setempat",
        "Jangan dibakar atau dibuang sembarangan"
      ],
      manfaat: "Mencegah pencemaran lingkungan dan bahaya kesehatan"
    },
    {
      id: 4,
      name: "Sampah Kertas",
      icon: FileText,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      description: "Sampah yang berasal dari kertas dan karton yang dapat didaur ulang menjadi produk kertas baru.",
      examples: [
        "Kertas HVS dan kertas tulis",
        "Kardus dan karton",
        "Koran dan majalah",
        "Kertas kemasan",
        "Buku dan notebook bekas"
      ],
      caraPilah: [
        "Pisahkan dari sampah basah",
        "Jangan dicampur dengan sampah organik",
        "Kumpulkan dalam kondisi kering",
        "Bawa ke bank sampah atau tempat daur ulang",
        "Bisa dijual ke pengepul kertas"
      ],
      manfaat: "Dapat didaur ulang menjadi kertas baru, menghemat pohon"
    },
    {
      id: 5,
      name: "Sampah Residu",
      icon: Trash2,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      description: "Sampah yang tidak dapat didaur ulang atau dikomposkan, sehingga harus dibuang ke tempat pembuangan akhir (TPA).",
      examples: [
        "Tisu basah dan popok sekali pakai",
        "Pembalut wanita",
        "Kain yang sudah rusak dan tidak bisa digunakan",
        "Plastik yang sudah terkontaminasi",
        "Sampah medis (harus ditangani khusus)"
      ],
      caraPilah: [
        "Pisahkan dari sampah lainnya",
        "Masukkan ke tempat sampah residu",
        "Bungkus dengan rapat",
        "Buang ke tempat pembuangan akhir",
        "Kurangi penggunaan produk sekali pakai"
      ],
      manfaat: "Mencegah kontaminasi pada sampah yang bisa didaur ulang"
    }
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 min-h-screen pb-16 sm:pb-20 md:pb-24">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle 
          title="Literasi Pemilahan Sampah" 
          subtitle="Pelajari cara memilah sampah dengan benar untuk menjaga lingkungan yang lebih bersih dan sehat"
        />
        
        <div className="mt-12 sm:mt-16 space-y-8">
          {jenisSampah.map((sampah, index) => {
            const Icon = sampah.icon;
            return (
              <motion.div
                key={sampah.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`p-6 sm:p-8 bg-card rounded-2xl shadow-md card-hover border-2 ${sampah.borderColor}`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl ${sampah.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${sampah.color}`} />
                  </div>
                  <div className="flex-1 w-full">
                    <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${sampah.color}`}>
                      {sampah.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6">
                      {sampah.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Contoh Sampah */}
                      <div>
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>Contoh Sampah:</span>
                        </h3>
                        <ul className="space-y-2">
                          {sampah.examples.map((example, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm sm:text-base">
                              <span className={`${sampah.color} mt-1.5`}>•</span>
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Cara Memilah */}
                      <div>
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>Cara Memilah:</span>
                        </h3>
                        <ul className="space-y-2">
                          {sampah.caraPilah.map((cara, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm sm:text-base">
                              <span className={`${sampah.color} mt-1.5`}>•</span>
                              <span>{cara}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Manfaat */}
                    <div className={`p-4 rounded-lg ${sampah.bgColor} border ${sampah.borderColor}`}>
                      <p className="text-sm sm:text-base font-medium text-foreground">
                        <span className="font-semibold">Manfaat: </span>
                        {sampah.manfaat}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tips Tambahan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 p-6 sm:p-8 bg-primary/10 rounded-2xl border-2 border-primary/20"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            <span>Tips Penting Pemilahan Sampah</span>
          </h3>
          <ul className="space-y-3 text-muted-foreground text-base sm:text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>Selalu cuci bersih sampah anorganik sebelum dibuang untuk memudahkan proses daur ulang</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>Gunakan tempat sampah terpisah untuk setiap jenis sampah di rumah</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>Kurangi penggunaan produk sekali pakai untuk mengurangi sampah residu</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>Edukasi keluarga dan tetangga tentang pentingnya pemilahan sampah</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>Bawa sampah B3 ke tempat pengumpulan khusus, jangan dibuang sembarangan</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

