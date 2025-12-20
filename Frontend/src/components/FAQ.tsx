import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const faqs = [
    {
      question:
        "¿Necesito conocimientos previos en biohacking o salud?",
      answer:
        "No. El evento está diseñado para personas de todos los niveles. Tanto si nunca escuchaste hablar de biohacking como si ya implementás protocolos avanzados, vas a encontrar contenido valioso, práctico y adaptado a tu contexto.",
    },
    {
      question: "¿Para quién está pensado este summit?",
      answer:
        "Para personas que buscan optimizar su energía, salud y bienestar de forma sostenible. Es ideal para quienes sienten que necesitan un reseteo profundo, quieren aprender herramientas basadas en ciencia, o buscan una comunidad de personas con los mismos intereses.",
    },
    {
      question: "¿Qué temas se abordan en el evento?",
      answer:
        "Nutrición celular, optimización hormonal, neurobiología del estrés, tecnología de medición biométrica, protocolos de longevidad, medicina funcional, movimiento inteligente, respiración, y mucho más. Todo desde una perspectiva práctica y aplicable.",
    },
    {
      question: "¿Es teórico o práctico?",
      answer:
        "Ambos. Tendrás conferencias con base científica sólida, pero también experiencias prácticas, demostraciones en vivo, acceso a tecnología de medición, y sesiones interactivas diseñadas para que tu cuerpo integre lo que tu mente aprende.",
    },
    {
      question:
        "¿Qué diferencia hay entre los tipos de entradas?",
      answer:
        "Standard te da acceso completo a conferencias y contenido principal. VIP añade ubicación preferencial, meet & greet con speakers, y acceso a experiencias premium. Gold incluye todo lo anterior más test epigenético, sesión 1:1 con un experto, y un plan personalizado post-evento.",
    },
    {
      question: "¿Dónde se realiza el evento?",
      answer:
        "En el Complejo Solanas, Punta del Este, Uruguay. Un espacio moderno, luminoso, con acceso a naturaleza y todas las instalaciones necesarias para una experiencia transformadora.",
    },
    {
      question:
        "¿Puedo solicitar reembolso si no puedo asistir?",
      answer:
        "Sí. Aceptamos reembolsos hasta 30 días antes del evento. Pasado ese plazo, podrás transferir tu entrada a otra persona. Contactanos a info@biohackingsummit.com para gestionar cambios.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Header & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <h2 className="mb-6">
              ¿Tienes dudas sobre el Summit?
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Aquí respondemos las preguntas más comunes para
              que puedas decidir con claridad si este encuentro
              es para ti.
            </p>
            <button
              onClick={() => scrollToSection("entradas")}
              className="inline-block bg-[#FF4E2F] text-white px-8 py-4 rounded-full hover:bg-[#FF3204] transition-colors"
            >
              Comprar entrada aquí
            </button>
          </motion.div>

          {/* Right side - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h4 className="pr-8">{faq.question}</h4>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus size={24} className="text-black" />
                    ) : (
                      <Plus size={24} className="text-black" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}