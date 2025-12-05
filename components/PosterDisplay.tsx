"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PosterDisplay() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-4xl mx-auto px-2 sm:px-4"
    >
      <div className="relative aspect-[3/4] w-full bg-gradient-to-br from-secondary to-secondary/50 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-primary/10">
        <Image
          src="/images/Poster.jpeg"
          alt="Poster Kampanye Lingkungan - UPN GAIA PROJECT"
          fill
          className="object-cover rounded-lg sm:rounded-xl"
          priority
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-4 sm:mt-6 md:mt-8 text-center px-2"
      >
        <p className="text-sm sm:text-base text-muted-foreground font-medium">
          Poster kampanye lingkungan dan pembangunan berkelanjutan
        </p>
      </motion.div>
    </motion.div>
  );
}

