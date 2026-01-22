import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

import aimieImg from '../assets/Personas/aimieapigian.png';
import alexandraImg from '../assets/Personas/alexandracochrane.png';
import arpitImg from '../assets/Personas/arpitbansal.png';
import ashleyImg from '../assets/Personas/ashleymadsen.png';
import claudiaImg from '../assets/Personas/claudiavonboeselger.png';
import giseleImg from '../assets/Personas/giselewerneck.png';
import gracielaImg from '../assets/Personas/gracielavarela.png';
import heloisaImg from '../assets/Personas/heloisaalves.png';
import luisaImg from '../assets/Personas/luisacomerlato.png';
import martinImg from '../assets/Personas/martinlombardero.png';
import melinaImg from '../assets/Personas/melinavicario.png';
import nathalyImg from '../assets/Personas/nathalymarcus.png';
import ricardoImg from '../assets/Personas/ricardozimerman.png';

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<number | null>(null);

  const mainSpeakers = [
    { 
      name: 'Nathaly Marcus', 
      role: 'Biohacking y Optimización', 
      description: 'Nutricion funcional, biohacker y oradora internacional especializada en epigenética, longevidad saludable, bienestar holístico y salud de la mujer.',
      image: nathalyImg 
    },
    { 
      name: 'Ricardo Zimerman', 
      role: 'Medicina Integrativa', 
      description: 'Médico infectólogo y científico con sede en Brasil y Argentina. Autonomía médica y la medicina basada en evidencia.',
      image: ricardoImg 
    },
    { 
      name: 'Martin Lombardero', 
      role: 'Performance y Neurociencia', 
      description: 'Especialista en imagenología cardíaca no invasiva. Su enfoque integra la medicina tradicional con una perspectiva innovadora.',
      image: martinImg 
    },
    { 
      name: 'Melina Vicario', 
      role: 'Wellness y Movimiento', 
      description: 'Especialista en la optimización del rendimiento, el bienestar y el potencial humano a través de la ciencia, la tecnología y el autoconocimiento.',
      image: melinaImg 
    },
    { 
      name: 'Heloísa Alves', 
      role: 'Medicina Funcional', 
      description: 'Doctorado en Ciencias Odontológicas. Explora la conexión entre la medicina de la oclusión y la función cerebral.',
      image: heloisaImg 
    },
    { 
      name: 'Aimie Apigian', 
      role: 'Neurobiología del Estrés', 
      description: 'Médica, educadora y experta en la curación del trauma fisiológico.',
      image: aimieImg 
    },
    { 
      name: 'Gisele Werneck', 
      role: 'Salud Hormonal', 
      description: 'Médica especializada en neurología. Promueve un enfoque de "medicina humanizada y cuidado integral".',
      image: giseleImg 
    },
    { 
      name: 'Luisa Comerlato', 
      role: 'Psicología de la Salud', 
      description: 'Médica y arquitecta brasileña, especializada en Medicina del Estilo de Vida. Es conocida por su trabajo en la integración del bienestar y el equilibrio en la vida.',
      image: luisaImg 
    },
    { 
      name: 'Arpit Bansal', 
      role: 'Biotecnología e Innovación', 
      description: 'Cirujano laparoscópico avanzado. Especialista en intestino y longevidad.',
      image: arpitImg 
    },
    { 
      name: 'Graciela Varela', 
      role: 'Nutrición Clínica', 
      description: 'Especialista en Medicina Integral y Funcional Pionera en medicina de precisión.',
      image: gracielaImg 
    },
    { 
      name: 'Ashley Madsen', 
      role: 'Medicina del Deporte', 
      description: 'Médica certificada, oradora y educadora global con experiencia en medicina funcional y ciencia de la longevidad. Es cofundadora de Lumara Collective.',
      image: ashleyImg
    },
    { 
      name: 'Claudia Von Boeselger', 
      role: 'Longevidad y Epigenética', 
      description: 'Entrenadora de rendimiento máximo (peak performance coach), empresaria en serie y experta en longevidad y biohacking. Co fundadora, Lumara Collective.',
      image: claudiaImg
    },
    { 
      name: 'Alexandra Cochrane', 
      role: 'Microbioma y Salud Digestiva', 
      description: 'Cofundadora de Lumara Collective, una organización enfocada en la salud regenerativa, la estrategia de biohacking y la innovación en bienestar.',
      image: alexandraImg
    },
  ];

  const hosts = ['Nara Ferregut', 'Silvina Tochetti'];
  const experienceLeaders = ['Nicolás Ogues', 'Irina Sbaglia', 'Jorge Patrono', 'María Keto', 'Paula Soriano', 'Lis Sikorki'];
  const scrollToSection = (id: string, offset = 100) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };


  return (
    <section className="py-32 relative" id="speakers">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title mb-4">EXPERTOS DE TALLA MUNDIAL</h2>
          <p className="text-gray-600">
            Aprende de los mejores expertos en optimización humana, medicina funcional y ciencias de la longevidad
          </p>
        </motion.div>

        {/* Speaker Grid */}
        <div className="mb-24 max-w-6xl mx-auto">
          {/* First 10 speakers - 2 full rows */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-5">
            {mainSpeakers.slice(0, 10).map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group cursor-pointer"
                onClick={() => setSelectedSpeaker(index)}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 hover:bg-white transition-all duration-300 hover:shadow-xl hover:scale-[1.03] h-full">
                  {/* Image */}
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    {/* Overlay Badge */}
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-[10px] text-[#FF4E2F] uppercase tracking-wider">Ver más</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="text-center">
                    <p className="text-sm mb-1 text-gray-900 font-semibold">{speaker.name}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{speaker.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Last 3 speakers - centered */}
          <div className="flex justify-center gap-5 flex-wrap">
            {mainSpeakers.slice(10).map((speaker, index) => (
              <motion.div
                key={index + 10}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 10) * 0.08 }}
                className="group cursor-pointer w-full sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(20%-16px)] max-w-[220px]"
                onClick={() => setSelectedSpeaker(index + 10)}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 hover:bg-white transition-all duration-300 hover:shadow-xl hover:scale-[1.03] h-full">
                  {/* Image */}
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    {/* Overlay Badge */}
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-[10px] text-[#FF4E2F] uppercase tracking-wider">Ver más</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="text-center">
                    <p className="text-sm mb-1 text-gray-900 font-semibold">{speaker.name}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{speaker.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
                  <div className="flex flex-col gap-6 text-center w-full">
                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="mb-3">{mainSpeakers[selectedSpeaker].name}</h3>
                      <p className="text-gray-500 mb-6 text-lg">{mainSpeakers[selectedSpeaker].role}</p>
                      <p className="text-gray-700 leading-relaxed text-lg">
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
          <h2 className="text-center mb-10 tracking-[0.2em] text-sm text-gray-1200">EVENTO CONDUCIDO POR</h2>
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
          <h2 className="text-center mb-10 tracking-[0.2em] text-sm text-gray-1200">EXPERIENCIAS A CARGO DE</h2>
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
      <motion.div
      className="w-full mt-10 flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.button
        onClick={() => scrollToSection("entradas", -700)}
        className="px-12 py-5 bg-black text-white rounded-full text-lg font-medium"
        animate={{
          scale: [1, 1.06, 1],
          boxShadow: [
            "0px 0px 0px rgba(0,0,0,0)",
            "0px 12px 32px rgba(0,0,0,0.25)",
            "0px 0px 0px rgba(0,0,0,0)",
          ],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 16px 40px rgba(0,0,0,0.35)",
        }}
      >
        Asegurá tu lugar
      </motion.button>
    </motion.div>
    </section>
  );
}