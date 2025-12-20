import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<number | null>(null);

  const mainSpeakers = [
    { 
      name: 'Coral Mujaes', 
      role: 'Experta en Nutrición y Longevidad', 
      description: 'Mentora de alto rendimiento empresaria, escritora y atleta de fisicoculturismo que ha transformado su vida.',
      image: 'https://images.unsplash.com/photo-1573497491306-c8a68afac6f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2NjE1MTYxNnww&ixlib=rb-4.1.0&q=80&w=1080' 
    },
    { 
      name: 'Dr. Ricardo Zimerman', 
      role: 'Medicina Integrativa', 
      description: 'Médico infectólogo y científico con sede en Brasil y Argentina. Autonomía médica y la medicina basada en evidencia.',
      image: 'https://images.unsplash.com/photo-1758691461516-7e716e0ca135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NjA1MDM5Mnww&ixlib=rb-4.1.0&q=80&w=1080' 
    },
    { 
      name: 'Nathaly Marcus', 
      role: 'Biohacking y Optimización', 
      description: 'Nutricion funcional, biohacker y oradora internacional especializada en epigenética, longevidad saludable, bienestar holístico y salud de la mujer.',
      image: 'https://images.unsplash.com/photo-1733231291514-06895ab0f5e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHNwZWFrZXJ8ZW58MXx8fHwxNzY2MTUxNjE2fDA&ixlib=rb-4.1.0&q=80&w=1080' 
    },
    { 
      name: 'Martin Lombardero', 
      role: 'Performance y Neurociencia', 
      description: 'Especialista en imagenología cardíaca no invasiva. Su enfoque integra la medicina tradicional con una perspectiva innovadora.',
      image: 'https://images.unsplash.com/photo-1758599543126-59e3154d7195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjYxNTE2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080' 
    },
    { 
      name: 'Melina Vicario', 
      role: 'Wellness y Movimiento', 
      description: 'Especialista en la optimización del rendimiento, el bienestar y el potencial humano a través de la ciencia, la tecnología y el autoconocimiento.',
      image: 'https://images.unsplash.com/photo-1573497491306-c8a68afac6f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2NjE1MTYxNnww&ixlib=rb-4.1.0&q=80&w=1080' 
    },
    { 
      name: 'Heloísa F. Alves', 
      role: 'Medicina Funcional', 
      description: 'Doctorado en Ciencias Odontológicas. Explora la conexión entre la medicina de la oclusión y la función cerebral.',
      image: 'https://images.unsplash.com/photo-1733231291514-06895ab0f5e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHNwZWFrZXJ8ZW58MXx8fHwxNzY2MTUxNjE2fDA&ixlib=rb-4.1.0&q=80&w=1080' 
    },
    { 
      name: 'Dr. Aimie K. Apigian', 
      role: 'Neurobiología del Estrés', 
      description: 'Médica, educadora y experta en la curación del trauma fisiológico.',
      image: 'https://images.unsplash.com/photo-1758691461516-7e716e0ca135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NjA1MDM5Mnww&ixlib=rb-4.1.0&q=80&w=1080' 
    },
    { 
      name: 'Gisele Werneck', 
      role: 'Salud Hormonal', 
      description: 'Médica especializada en neurología. Promueve un enfoque de "medicina humanizada y cuidado integral".',
      image: 'https://images.unsplash.com/photo-1573497491306-c8a68afac6f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2NjE1MTYxNnww&ixlib=rb-4.1.0&q=80&w=1080' 
    },
    { 
      name: 'Anaïs Garcia', 
      role: 'Nutrición Celular', 
      description: 'Médica, oradora y experta en salud holística, conocida por integrar la medicina con la energía y la intuición. Sanadora energética y promotora de la longevidad.',
      image: 'https://images.unsplash.com/photo-1733231291514-06895ab0f5e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHNwZWFrZXJ8ZW58MXx8fHwxNzY2MTUxNjE2fDA&ixlib=rb-4.1.0&q=80&w=1080' 
    },
    { 
      name: 'Ashley Madsen', 
      role: 'Medicina del Deporte', 
      description: 'Médica certificada, oradora y educadora global con experiencia en medicina funcional y ciencia de la longevidad. Es cofundadora de Lumara Collective.',
      image: 'https://images.unsplash.com/photo-1758599543126-59e3154d7195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjYxNTE2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080' 
    },
    { 
      name: 'Claudia Von Boeselger', 
      role: 'Longevidad y Epigenética', 
      description: 'Entrenadora de rendimiento máximo (peak performance coach), empresaria en serie y experta en longevidad y biohacking. Co fundadora, Lumara Collective.',
      image: 'https://images.unsplash.com/photo-1573497491306-c8a68afac6f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2NjE1MTYxNnww&ixlib=rb-4.1.0&q=80&w=1080' 
    },
    { 
      name: 'Alexandra Cochrane', 
      role: 'Microbioma y Salud Digestiva', 
      description: 'Cofundadora de Lumara Collective, una organización enfocada en la salud regenerativa, la estrategia de biohacking y la innovación en bienestar.',
      image: 'https://images.unsplash.com/photo-1733231291514-06895ab0f5e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHNwZWFrZXJ8ZW58MXx8fHwxNjYxNTE2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080' 
    },
    { 
      name: 'Luisa Comerlato', 
      role: 'Psicología de la Salud', 
      description: 'Médica y arquitecta brasileña, especializada en Medicina del Estilo de Vida. Es conocida por su trabajo en la integración del bienestar y el equilibrio en la vida.',
      image: 'https://images.unsplash.com/photo-1758691461516-7e716e0ca135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NjA1MDM5Mnww&ixlib=rb-4.1.0&q=80&w=1080' 
    },
    { 
      name: 'Arpit Bansal', 
      role: 'Biotecnología e Innovación', 
      description: 'Cirujano laparoscópico avanzado. Especialista en intestino y longevidad.',
      image: 'https://images.unsplash.com/photo-1758599543126-59e3154d7195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjYxNTE2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080' 
    },
    { 
      name: 'Graciela Varela', 
      role: 'Nutrición Clínica', 
      description: 'Especialista en Medicina Integral y Funcional Pionera en medicina de precisión.',
      image: 'https://images.unsplash.com/photo-1573497491306-c8a68afac6f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2NjE1MTYxNnww&ixlib=rb-4.1.0&q=80&w=1080' 
    },
  ];

  const hosts = ['Nara Ferregut', 'Silvina Tochetti'];
  const experienceLeaders = ['Nicolás Ogues', 'Irina Sbaglia', 'Jorge Patrono', 'María Keto', 'Paula Soriano', 'Lis Sikorki'];

  return (
    <section className="py-24 bg-white" id="speakers">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Expertos de talla mundial</h2>
          <p className="text-gray-600">Conocé a los speakers</p>
        </motion.div>

        {/* Speaker Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
          {mainSpeakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedSpeaker(index)}
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <h5 className="mb-1">{speaker.name}</h5>
              <p className="text-sm text-gray-500">{speaker.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Speaker Modal */}
        <AnimatePresence>
          {selectedSpeaker !== null && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedSpeaker(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              />
              
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedSpeaker(null)}
              >
                <div
                  className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-12 relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedSpeaker(null)}
                    className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} className="text-gray-600" />
                  </button>

                  {/* Speaker Info */}
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Image */}
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100">
                      <img
                        src={mainSpeakers[selectedSpeaker].image}
                        alt={mainSpeakers[selectedSpeaker].name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="mb-2">{mainSpeakers[selectedSpeaker].name}</h3>
                      <p className="text-gray-500 mb-6">{mainSpeakers[selectedSpeaker].role}</p>
                      <p className="text-gray-700 leading-relaxed">
                        {mainSpeakers[selectedSpeaker].description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Hosts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-center mb-10 tracking-[0.2em] text-sm text-gray-500">EVENTO CONDUCIDO POR</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 max-w-4xl mx-auto overflow-hidden rounded-2xl">
            {hosts.map((host, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: '#f9fafb' }}
                className="bg-white p-10 text-center cursor-default transition-colors"
              >
                <p className="text-black text-lg">{host}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Leaders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-10 tracking-[0.2em] text-sm text-gray-500">EXPERIENCIAS A CARGO DE</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-200 max-w-4xl mx-auto overflow-hidden rounded-2xl">
            {experienceLeaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ scale: 1.02, backgroundColor: '#f9fafb' }}
                className="bg-white p-10 text-center cursor-default transition-colors"
              >
                <p className="text-black">{leader}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}