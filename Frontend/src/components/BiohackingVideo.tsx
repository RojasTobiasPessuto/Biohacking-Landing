import React from 'react';
import { motion } from 'motion/react';

export default function BiohackingVideo() {
  return (
    <section className="py-24 bg-gray-50" id="evento">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Text content */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="section-title mb-8">¿Biohacking no es para ti?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Tal vez viste la palabra biohacking y pensaste que no era para ti. Que es solo para atletas de élite, ejecutivos obsesionados con la productividad o personas con acceso a tecnologías caras.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Este espacio está diseñado para ayudarte a recuperar energía, foco y control sobre tu salud a largo plazo. Sin extremos. Sin gurús. Solo herramientas reales.
            </p>
          </motion.div>
        </div>
      </div>

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
          <source src="/video/VideoLentes.mp4" type="video/mp4" />
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