import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, Hotel, Check, Sparkles } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="py-24" id="ubicacion">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">¿Dónde y cuándo será?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Building Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/solanas.png"
                alt="Complejo Solanas - Punta del Este"
                className="w-full h-full object-cover min-h-[600px]"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-4 leading-relaxed">
              El <strong>Biohacking & Longevity Summit 2026</strong> se realiza en <strong>Complejo Solanas, Punta del Este</strong>, un entorno elegido de forma intencional, no estética.
            </p>
            <p className=" mb-4 leading-relaxed">
              El entorno forma parte activa de la experiencia, acompañando procesos de regulación, atención y reflexión que no ocurren en espacios urbanos saturados.
            </p>
            <p className=" mb-8 leading-relaxed">
              Durante un día completo, el lugar sostiene el ritmo del Summit: tiempo, silencio, presencia y condiciones reales para integrar lo aprendido y tomar decisiones con mayor claridad.
            </p>

            {/* Info details below description */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FF4E2F] rounded-full flex items-center justify-center">
                  <Calendar size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-1200">Fecha</p>
                  <p className="text-gray-700">21 de febrero de 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FF4E2F] rounded-full flex items-center justify-center">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-1200">Horario</p>
                  <p className="text-gray-700">8:30 a 19:30 hs</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FF4E2F] rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-1200">Lugar</p>
                  <p className="text-gray-700">
                    Complejo Solanas<br />
                    Punta del Este, Uruguay
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Package Promotion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl p-8 md:p-12 overflow-hidden group cursor-pointer"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#FF4E2F]/30 via-[#FF6B35]/20 to-[#FF3204]/30"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left: Promotion Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Sparkles className="text-[#FF4E2F]" size={32} />
                    </motion.div>
                    <div className="bg-gradient-to-r from-[#FF4E2F] to-[#FF3204] text-white px-4 py-1 rounded-full text-sm tracking-wider">
                      PAQUETE EXCLUSIVO
                    </div>
                  </div>

                  <h3 className="text-white text-3xl md:text-4xl mb-4">
                    Alojamiento + Entrada Standard
                  </h3>

                  <p className="text-white/80 mb-6 text-lg leading-relaxed">
                    Vive la experiencia completa del Summit con nuestro paquete especial que incluye dos noches de alojamiento en Complejo Solanas y tu entrada Standard al evento.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "Dos noches de alojamiento en Complejo Solanas",
                      "Entrada Standard incluida",
                      "Acceso a todas las conferencias y experiencias",
                      "Material digital del summit",
                      "Certificado de asistencia",
                      "Coffee breaks incluidos",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-6 h-6 bg-[#FF4E2F] rounded-full flex items-center justify-center">
                          <Check size={16} className="text-white" strokeWidth={3} />
                        </div>
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div>
                      <div className="text-white/70 text-sm mb-1">Precio</div>
                      <div className="text-white text-3xl">Próximamente</div>
                    </div>
                    <motion.a
                      href="https://www.suticket.com/evento/311/biohacking-and-optimization-summit-2026"
                      className="px-8 py-3 bg-white text-black rounded-full hover:bg-[#FF4E2F] hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Reservar paquete
                    </motion.a>
                  </div>
                </div>

                {/* Right: Visual Element */}
                <div className="block">
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#FF4E2F]/20 to-[#FF3204]/20 rounded-3xl blur-3xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                      <div className="text-center">
                        <Hotel className="text-[#FF4E2F] mx-auto mb-4" size={64} />
                        <div className="text-white text-xl mb-2">Estadía completa</div>
                        <div className="text-white/70 text-sm">Check-in: 20 de febrero</div>
                        <div className="text-white/70 text-sm mb-4">Check-out: 22 de febrero</div>
                        <div className="h-px bg-white/20 my-4"></div>
                        <div className="text-white text-lg">2 noches</div>
                        <div className="text-white/70 text-sm">+ Entrada al Summit</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}