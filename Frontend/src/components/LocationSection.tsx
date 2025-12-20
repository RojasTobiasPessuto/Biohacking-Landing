import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Clock } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="py-24 bg-white" id="ubicacion">
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
                src="https://images.unsplash.com/photo-1759672573161-c6d6b861914d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NjYxNTM3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
            <p className="text-gray-700 mb-4 leading-relaxed">
              El <strong>Biohacking & Longevity Summit 2026</strong> se realiza en <strong>Complejo Solanas, Punta del Este</strong>, un entorno elegido de forma intencional, no estética.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              El entorno forma parte activa de la experiencia, acompañando procesos de regulación, atención y reflexión que no ocurren en espacios urbanos saturados.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Durante un día completo, el lugar sostiene el ritmo del Summit: tiempo, silencio, presencia y condiciones reales para integrar lo aprendido y tomar decisiones con mayor claridad.
            </p>

            {/* Info details below description */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FF4E2F] rounded-full flex items-center justify-center">
                  <Calendar size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fecha</p>
                  <p className="text-gray-900">21 de febrero de 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FF4E2F] rounded-full flex items-center justify-center">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Horario</p>
                  <p className="text-gray-900">8:30 a 19:30 hs</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FF4E2F] rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Lugar</p>
                  <p className="text-gray-900">
                    Complejo Solanas<br />
                    Punta del Este, Uruguay
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}