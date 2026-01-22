import React from 'react';
import { motion } from 'motion/react';

export default function BiohackingVideo() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-24" id="evento">
      {/* Video section - Full width */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden"
      >
        {/* Video element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 0%" }}
        >
          {/* Replace this URL with your own video */}
          <source src="https://1jasce7jeuzj98bv.public.blob.vercel-storage.com/VideoLentes.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for text legibility */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Animated breathing effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#FF4E2F]/10 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Caption */}
        <div className="absolute bottom-8 left-8 right-8 max-w-7xl mx-auto">
          <p className="text-white/90 text-sm">
            Respiración consciente • Conexión • Presencia
          </p>
        </div>
      </motion.div>
    </section>
  );
}