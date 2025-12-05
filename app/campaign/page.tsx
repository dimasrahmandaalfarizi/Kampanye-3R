"use client";

import SectionTitle from "@/components/SectionTitle";
import PosterDisplay from "@/components/PosterDisplay";
import ShareButtons from "@/components/ShareButtons";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function CampaignPage() {
  return (
    <div className="py-8 sm:py-12 md:py-20 px-4 sm:px-6 min-h-screen pb-16 sm:pb-20 md:pb-24">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle 
          title="Poster Kampanye" 
          subtitle="Visualisasi pesan kami untuk perubahan yang lebih baik"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 sm:mt-8 md:mt-12"
        >
          <PosterDisplay />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-xl sm:rounded-2xl border border-primary/20"
        >
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground">Pesan Kampanye</h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                Poster ini dirancang untuk menyampaikan pesan penting tentang perlindungan lingkungan
                dan pembangunan berkelanjutan. Setiap elemen visual dipilih dengan hati-hati untuk
                menginspirasi tindakan positif dan membangun kesadaran akan pentingnya menjaga bumi kita.
              </p>
            </div>
          </div>
          
          <div className="pt-6 border-t border-primary/20">
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-foreground">Bagikan Poster</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Bantu sebarkan pesan ini ke lebih banyak orang melalui media sosial
              </p>
            </div>
            <ShareButtons 
              title="Poster Kampanye UPN GAIA PROJECT"
              description="Kampanye lingkungan dan pembangunan berkelanjutan"
              imageUrl="/images/Poster.jpeg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

