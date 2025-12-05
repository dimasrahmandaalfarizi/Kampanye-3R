"use client";

import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Info, Target, TrendingUp } from "lucide-react";

export default function AboutPage() {
  const sections = [
    {
      icon: Info,
      title: "Latar Belakang",
      content: "Perubahan iklim dan degradasi lingkungan merupakan tantangan global yang memerlukan perhatian serius dari semua pihak. Kampanye ini bertujuan untuk meningkatkan kesadaran tentang pentingnya menjaga lingkungan dan menerapkan prinsip pembangunan berkelanjutan.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Target,
      title: "Tujuan Kampanye",
      content: [
        "Meningkatkan kesadaran masyarakat tentang isu lingkungan",
        "Mendorong perubahan perilaku yang lebih ramah lingkungan",
        "Mempromosikan praktik pembangunan berkelanjutan",
        "Membangun komunitas yang peduli terhadap lingkungan",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: TrendingUp,
      title: "Dampak yang Diharapkan",
      content: "Melalui kampanye ini, kami berharap dapat menginspirasi lebih banyak orang untuk mengambil tindakan nyata dalam menjaga lingkungan. Setiap perubahan kecil yang kita lakukan hari ini akan berkontribusi pada masa depan yang lebih baik untuk planet kita.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 min-h-screen pb-16 sm:pb-20 md:pb-24">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle 
          title="Tentang Isu Ini" 
          subtitle="Memahami pentingnya aksi kolektif untuk masa depan yang lebih baik"
        />
        
        <div className="mt-12 space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-8 bg-card rounded-2xl shadow-md card-hover border border-border/50"
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl ${section.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${section.color}`} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 text-foreground">{section.title}</h2>
                    {Array.isArray(section.content) ? (
                      <ul className="space-y-3">
                        {section.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground text-lg">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {section.content}
                      </p>
                    )}
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

