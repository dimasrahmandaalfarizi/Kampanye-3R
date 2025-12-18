"use client";

import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Crown, Palette, PenTool, Megaphone, Calendar } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function TeamPage() {
  const leader = {
    id: 1,
    name: "Muhammad Raditya Naufal M. (25081010273)",
    role: "Koordinator Kampanye",
    icon: Crown,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    image: "/images/team/team1.png",
  };

  const members = [
    {
      id: 2,
      name: "Vita Ma'rifatus S. (25081010086)",
      role: "Desainer Kampanye",
      icon: Palette,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      image: "/images/team/team2.png",
    },
    {
      id: 3,
      name: "Kavaana Nafila N. K. (25081010317)",
      role: "Content Creator",
      icon: PenTool,
      color: "text-green-600",
      bgColor: "bg-green-50",
      image: "/images/team/team3.png",
    },
    {
      id: 4,
      name: "Phalosava Nibras (25081010217)",
      role: "Media & Komunikasi",
      icon: Megaphone,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      image: "/images/team/team4.png",
    },
    {
      id: 5,
      name: "Dimas Rahmanda Alfarizi (25081010315)",
      role: "Web Developer",
      icon: Calendar,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      image: "/images/team/team5.png",
    },
  ];

  // Component untuk menampilkan foto atau icon fallback
  const TeamPhoto = ({ image, icon: Icon, bgColor, color, isLeader = false }: {
    image: string;
    icon: any;
    bgColor: string;
    color: string;
    isLeader?: boolean;
  }) => {
    const [imageError, setImageError] = useState(false);

    return (
      <div className="relative w-full h-full">
        {!imageError ? (
          <Image
            src={image}
            alt="Team member"
            fill
            className="object-cover rounded-xl"
            onError={() => setImageError(true)}
            priority={isLeader}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <div className={`${isLeader ? 'w-40 h-40 sm:w-48 sm:h-48' : 'w-28 h-28 sm:w-32 sm:h-32'} rounded-full ${bgColor} flex items-center justify-center shadow-lg`}>
              <Icon className={`${isLeader ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-14 h-14 sm:w-16 sm:h-16'} ${color}`} />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 min-h-screen pb-16 sm:pb-20 md:pb-24">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle 
          title="Tim Kami" 
          subtitle="Para individu yang berdedikasi dalam menjalankan kampanye lingkungan ini"
        />
        
        {/* Ketua Kelompok */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <div className="group bg-card rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden border-2 border-primary/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 max-w-md w-full">
            {/* Photo Container - Lebih besar untuk ketua */}
            <div className="relative w-full aspect-square overflow-hidden">
              <TeamPhoto
                image={leader.image}
                icon={leader.icon}
                bgColor={leader.bgColor}
                color={leader.color}
                isLeader={true}
              />
              {/* Badge ketua - overlay */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-bold shadow-lg z-10">
                KETUA
              </div>
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Info */}
            <div className="p-6 sm:p-8 text-center bg-gradient-to-b from-card to-card/95">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {leader.name}
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground font-medium">
                {leader.role}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Anggota Tim */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            Anggota Tim
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {members.map((member, index) => {
              const Icon = member.icon;
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group bg-card rounded-2xl shadow-md overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Photo Container */}
                  <div className="relative w-full aspect-square overflow-hidden">
                    <TeamPhoto
                      image={member.image}
                      icon={Icon}
                      bgColor={member.bgColor}
                      color={member.color}
                    />
                    {/* Decorative overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Info */}
                  <div className="p-5 sm:p-6 text-center bg-gradient-to-b from-card to-card/95">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

