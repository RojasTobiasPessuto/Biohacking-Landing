import React from "react";
import { motion } from "motion/react";
import { MapPin, Calendar } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -550;
      const elementPosition =
        element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image - full width */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1765774407767-5b339ce355ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25mZXJlbmNlJTIwZXZlbnR8ZW58MXx8fHwxNzY2MjQ4MDk4fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      />

      {/* Stronger gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-gray-50/60" />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge/Title Banner - Mejorado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mb-10 inline-block"
          >
            <div className="relative overflow-hidden rounded-full px-10 py-4 backdrop-blur-md border-2 border-black/20 bg-white/60 shadow-lg">
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FF4E2F]/30 via-transparent to-[#FF4E2F]/30"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="relative flex items-center gap-4">
                <motion.span
                  className="uppercase tracking-[0.25em] text-sm md:text-base font-medium"
                  animate={{
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Evento presencial
                </motion.span>
                <div className="w-1.5 h-1.5 bg-[#FF4E2F] rounded-full" />
                <motion.span
                  className="uppercase tracking-[0.25em] text-sm md:text-base font-medium"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Cupos limitados
                </motion.span>
              </div>
            </div>
          </motion.div>

          <h1 className="max-w-5xl mx-auto mb-10 leading-tight text-black drop-shadow-sm">
            No necesitas vivir más años. Necesitas vivirlos
            mejor.
          </h1>

          <motion.p
            className="max-w-3xl mx-auto mb-14 text-gray-800 text-lg md:text-xl leading-relaxed drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Un día de ciencia aplicada, biohacking y
            experiencias reales para aprender a tomar mejores
            decisiones sobre tu cuerpo, tu energía y tu futuro.
          </motion.p>

          {/* Meta info - Mejorado */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 text-gray-900 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full border border-black/10">
              <MapPin size={20} className="text-[#FF4E2F]" />
              <span className="font-medium">Punta del Este, Uruguay</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 bg-[#FF4E2F] rounded-full" />
            <div className="flex items-center gap-3 text-gray-900 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full border border-black/10">
              <Calendar size={20} className="text-[#FF4E2F]" />
              <span className="font-medium">21 de febrero de 2026</span>
            </div>
          </motion.div>

          {/* CTAs - Mejorados */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection("entradas")}
              className="px-12 py-5 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:scale-105 text-lg font-medium"
            >
              Asegurá tu lugar
            </button>
            <button
              onClick={() => scrollToSection("speakers")}
              className="px-12 py-5 border-2 border-black text-black bg-white/50 backdrop-blur-sm rounded-full hover:bg-black hover:text-white transition-all duration-300 text-lg font-medium hover:shadow-xl"
            >
              Ver speakers
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}