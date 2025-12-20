import React from 'react';
import { motion } from 'motion/react';

export default function ExperienceCards() {
  const experiences = [
    {
      title: 'Ciencia aplicable',
      description: 'Herramientas y protocolos respaldados por investigación que podés implementar desde el día siguiente.',
    },
    {
      title: 'Conversaciones que conectan',
      description: 'Un espacio donde encontrás personas que comparten tu interés por la optimización y el bienestar.',
    },
    {
      title: 'El cuerpo aprende',
      description: 'Experiencias sensoriales, prácticas guiadas y exposiciones controladas para que tu sistema nervioso integre.',
    },
    {
      title: 'Expertos, no gurús',
      description: 'Médicos, investigadores y profesionales con trayectoria real que hablan con evidencia y humildad.',
    },
    {
      title: 'Tecnología para medir',
      description: 'Acceso a dispositivos y tests que te permiten conocer tu biología en tiempo real.',
    },
    {
      title: 'Un día diseñado como sistema',
      description: 'Cada sesión, pausa y actividad está pensada para que la experiencia completa sea coherente y transformadora.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="experiencia">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Esto será parte de tu experiencia</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <h4 className="mb-4">{exp.title}</h4>
              <p className="text-gray-600 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}