import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import eventImage from 'figma:asset/cb65c93425711f0db0a702277dadd78afff98abd.png';

export default function ReferenceBlock() {
  // Countdown Timer - Fecha del evento: 26 de diciembre de 2025
  const eventDate = new Date('2025-12-26T00:00:00');
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = eventDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const reasons = [
    'Sientes que tu energía ya no responde igual que antes y no quieres normalizarlo.',
    'Valoras la ciencia, los datos y el pensamiento crítico por encima de modas o promesas rápidas.',
    'Has probado entrenar, comer mejor o "bajar el ritmo"… y aun así sientes que algo no termina de regularse.',
    'Prefieres prevenir hoy antes que corregir cuando el cuerpo ya pasó factura.',
    'Buscas rendimiento y claridad que se sostengan en el tiempo.',
    'Te interesa entender cómo funciona tu cuerpo para tomar mejores decisiones, no delegarlo todo.',
    'Sabes que sin salud no hay proyectos, ni negocio, ni legado.',
    'Ya no te interesa exprimir el cuerpo para rendir más, sino entenderlo para sostenerte mejor.',
  ];

  return (
    <section className="py-24 bg-white" id="referencia">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="section-title mb-8">El evento comienza en</h2>
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
            {/* Days */}
            <div className="flex flex-col items-center">
              <div className="bg-black text-white w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-3">
                <span className="text-3xl md:text-4xl font-light">{String(timeLeft.days).padStart(2, '0')}</span>
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-wider">Días</p>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="bg-black text-white w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-3">
                <span className="text-3xl md:text-4xl font-light">{String(timeLeft.hours).padStart(2, '0')}</span>
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-wider">Horas</p>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="bg-black text-white w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-3">
                <span className="text-3xl md:text-4xl font-light">{String(timeLeft.minutes).padStart(2, '0')}</span>
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-wider">Minutos</p>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="bg-[#FF4E2F] text-white w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-3">
                <span className="text-3xl md:text-4xl font-light">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-wider">Segundos</p>
            </div>
          </div>
        </motion.div>

        {/* Top Block - Image + Text */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={eventImage}
              alt="Biohacking & Longevity Summit 2026"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              Una experiencia presencial intensiva donde la ciencia deja de ser abstracta y se convierte en decisiones prácticas para tu vida diaria.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Podrás integrar conocimiento, tecnología y experiencias corporales para entender cómo funciona tu cuerpo hoy, qué lo está desgastando y cómo diseñar una salud que se sostenga en el tiempo.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              No se trata de aprender teoría.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Se trata de aprender a leer tu cuerpo, interpretar señales reales y elegir qué optimizar… y qué dejar de forzar.
            </p>
          </motion.div>
        </div>

        {/* Bottom Block - "Este evento es para ti si…" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-10 text-center">Este evento es para ti si…</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <div className="mt-1 flex-shrink-0 w-6 h-6 bg-[#FF4E2F] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <p className="text-gray-700 leading-relaxed">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}