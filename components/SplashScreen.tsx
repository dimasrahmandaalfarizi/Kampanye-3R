"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Tampilkan konten website setelah splash screen selesai
    const hideSplash = setTimeout(() => {
      setIsVisible(false);
      // Delay sedikit sebelum show content untuk smooth transition
      setTimeout(() => {
        setShowContent(true);
      }, 500);
    }, 3000); // Tampil selama 3 detik

    return () => clearTimeout(hideSplash);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-primary/25 via-primary/20 to-primary/15"
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center">
              {/* Logo Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  duration: 1,
                }}
                className="mb-8"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-primary/25 flex items-center justify-center backdrop-blur-sm border-4 border-primary/40 shadow-2xl">
                  <span className="text-5xl sm:text-6xl md:text-7xl">🌱</span>
                </div>
              </motion.div>

              {/* Title Animation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="text-center"
              >
                <motion.h1
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent"
                >
                  UPN GAIA PROJECT
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1.1,
                    duration: 0.6,
                  }}
                  className="text-sm sm:text-base md:text-lg text-muted-foreground"
                >
                  Kampanye Lingkungan & Pembangunan Berkelanjutan
                </motion.p>
              </motion.div>

              {/* Loading indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="mt-8 flex gap-2"
              >
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay untuk smooth transition */}
      {!isVisible && !showContent && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[99] bg-background pointer-events-none"
        />
      )}
    </>
  );
}

