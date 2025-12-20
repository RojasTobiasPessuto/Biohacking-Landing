import React from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import eventImage from "../../public/img/unnamed.png";

export default function Pricing() {
  const tickets = [
    {
      name: "Standard",
      price: "USD 290",
      features: [
        "Ingreso general al evento",
        "Acceso a todas las conferencias",
        "Material digital del summit",
        "Certificado de asistencia",
        "Coffee breaks incluidos",
      ],
      link: "#",
      highlighted: false,
    },
    {
      name: "VIP",
      price: "USD 490",
      features: [
        "Todo lo incluido en Standard",
        "Ubicación preferencial en conferencias",
        "Meet & greet con speakers",
        "Acceso al laboratorio de experiencias",
        "Kit de bienvenida premium",
        "Regalos exclusivos de sponsors",
      ],
      link: "#",
      highlighted: true,
    },
    {
      name: "Gold",
      price: "USD 690",
      features: [
        "Experiencia completa GOLD",
        "Máximo nivel de integración",
        "Todos los accesos premium",
        "Test epigenético incluido",
        "Sesión 1:1 con experto seleccionado",
        "Acceso a área VIP lounge",
        "Networking exclusivo con speakers",
        "Plan personalizado post-evento",
      ],
      link: "#",
      highlighted: false,
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="entradas">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Event Info Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={eventImage}
                  alt="Biohacking & Longevity Summit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <p className="text-gray-700 mb-6 leading-relaxed">
                El{" "}
                <strong>
                  Biohacking & Longevity Summit 2026
                </strong>{" "}
                es un encuentro presencial de un solo día,
                diseñado para trabajar con profundidad, atención
                y coherencia entre ciencia, experiencia y
                reflexión personal.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Los cupos son limitados porque cada instancia
                del evento (contenidos, experiencias y
                ponencias) está pensada para acompañar procesos
                reales de observación y toma de decisiones en
                vivo.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            className="inline-block mb-8"
          >
            <div className="bg-black text-white px-8 py-4 rounded-full">
              <p className="tracking-wider text-sm">
                ⚡ LAS ENTRADAS SON LIMITADAS
              </p>
            </div>
          </motion.div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un encuentro de un día completo. Cupos limitados
            para garantizar una experiencia íntima y
            personalizada.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tickets.map((ticket, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 ${
                ticket.highlighted
                  ? "ring-2 ring-black shadow-xl scale-105"
                  : "shadow-lg hover:shadow-xl transition-shadow"
              }`}
            >
              {ticket.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FF4E2F] text-white px-4 py-1 rounded-full text-sm">
                  Más popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2">{ticket.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl">
                    {ticket.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {ticket.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#FF4E2F] rounded-full flex items-center justify-center">
                      <Check
                        size={14}
                        className="text-white"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-gray-700 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={ticket.link}
                className={`block w-full py-4 rounded-full text-center transition-all duration-300 ${
                  ticket.highlighted
                    ? "bg-black text-white hover:bg-gray-800 hover:shadow-lg"
                    : "border-2 border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                Comprar entrada
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-600 text-sm"
        >
          <p>
            Todas las entradas incluyen acceso al shop de
            productos wellness y actividades presenciales.
          </p>
          <p className="mt-2">
            Métodos de pago: transferencia, tarjetas de crédito
            y débito.
          </p>
        </motion.div>
      </div>
    </section>
  );
}