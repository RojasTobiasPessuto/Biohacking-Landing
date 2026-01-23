import React from "react";
import { motion } from "motion/react";
import { Check, Sparkles, Ticket} from "lucide-react";
import eventImage from '../assets/unnamed.png';
import { useTicketCounter } from "./useTicketCounter";

const CHECKOUT_URL =
  "https://www.suticket.com/evento/311/biohacking-and-optimization-summit-2026";
const ROTADOR_URL =
  "https://linkly.link/2XFcE";

export default function Pricing() {
  const { getTicketsRemaining } = useTicketCounter();
  const tickets = [
    {
      name: "Standard",
      price: "USD 390",
      initialStock: 500,
      features: [
        "Ingreso general al evento",
        "Acceso a todas las conferencias",
        "Material digital del summit",
        "Certificado de asistencia",
        "Coffee breaks incluidos",
      ],
      link: CHECKOUT_URL,
      highlighted: false,
    },
    {
      name: "VIP",
      price: "USD 590",
      initialStock: 300,
      features: [
        "Todo lo incluido en Standard",
        "Ubicación preferencial en conferencias",
        "Meet & greet con speakers",
        "Acceso al laboratorio de experiencias",
        "Kit de bienvenida premium",
        "Regalos exclusivos de sponsors",
      ],
      link: CHECKOUT_URL,
      highlighted: true,
    },
    {
      name: "Gold",
      price: "USD 790",
      initialStock: 200,
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
      link: CHECKOUT_URL,
      highlighted: false,
    },
    {
      name: "Streaming",
      price: "USD 60",
      initialStock: 300,
      features: [
        "Incluye acceso al streaming completo del evento (11 hs aprox.)",
      ],
      link: ROTADOR_URL,
      highlighted: false,
    },
  ];
  // Función para obtener los estilos según el porcentaje de entradas disponibles
  const getUrgencyStyles = (ticketName: string, initialStock: number) => {
    const remaining = getTicketsRemaining(ticketName);
    const percentage = (remaining / initialStock) * 100;

    if (percentage > 50) {
      // Verde/Normal - Muchas entradas disponibles
      return {
        bgColor: "bg-green-50",
        borderColor: "border-gray-900",
        iconColor: "text-green-600",
        textColor: "text-green-600",
        label: "Disponibles",
      };
    } else if (percentage > 20) {
      // Amarillo/Advertencia - Pocas entradas
      return {
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-300",
        iconColor: "text-yellow-600",
        textColor: "text-yellow-600",
        label: "¡Últimas entradas!",
      };
    } else {
      // Rojo/Urgencia - Muy pocas entradas
      return {
        bgColor: "bg-red-50",
        borderColor: "border-red-300",
        iconColor: "text-red-600",
        textColor: "text-red-600",
        label: "⚡ ¡ÚLTIMAS PLAZAS!",
      };
    }
  };

  // Función para VIP (fondo oscuro) con estilos adaptados
  const getUrgencyStylesVIP = (ticketName: string, initialStock: number) => {
    const remaining = getTicketsRemaining(ticketName);
    const percentage = (remaining / initialStock) * 100;

    if (percentage > 50) {
      return {
        bgColor: "bg-white/10",
        borderColor: "border-white/20",
        accentColor: "text-green-400",
        label: "Disponibles",
      };
    } else if (percentage > 20) {
      return {
        bgColor: "bg-yellow-500/10",
        borderColor: "border-yellow-500/30",
        accentColor: "text-yellow-400",
        label: "¡Últimas entradas!",
      };
    } else {
      return {
        bgColor: "bg-red-500/10",
        borderColor: "border-red-500/30",
        accentColor: "text-red-400",
        label: "⚡ ¡ÚLTIMAS PLAZAS!",
      };
    }
  };

  return (
    <section className="py-24" id="entradas">
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
              <p className="text-gray-1200 mb-6 leading-relaxed">
                El{" "}
                <strong>
                  Biohacking & Longevity Summit 2026
                </strong>{" "}
                es un encuentro presencial de un solo día,
                diseñado para trabajar con profundidad, atención
                y coherencia entre ciencia, experiencia y
                reflexión personal.
              </p>
              <p className="text-gray-1200 leading-relaxed">
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
            className="inline-block mb-8"
          >
            <motion.div
              className="bg-black text-white px-8 py-4 rounded-full"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="tracking-wider text-sm">
                ⚡ LAS ENTRADAS SON LIMITADAS
              </p>
            </motion.div>
          </motion.div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un encuentro de un día completo. Cupos limitados
            para garantizar una experiencia íntima y
            personalizada.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="relative">
          {/* Top Row - VIP destacado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-black to-gray-800 rounded-3xl p-12 overflow-hidden group cursor-pointer"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#FF4E2F]/20 via-transparent to-[#FF3204]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="text-[#FF4E2F]" size={24} />
                    <h3 className="text-white">VIP</h3>
                  </div>
                  <div className="bg-[#FF4E2F] text-white px-4 py-1 rounded-full text-sm">
                    Más popular
                  </div>
                </div>

                {/* Ticket Counter for VIP */}
                <motion.div
                  className={`mb-6 backdrop-blur-sm rounded-xl p-3 border ${getUrgencyStylesVIP("VIP", tickets[1].initialStock).bgColor} ${getUrgencyStylesVIP("VIP", tickets[1].initialStock).borderColor}`}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex flex-col gap-1">
                    <span className={`text-xs font-semibold ${getUrgencyStylesVIP("VIP", tickets[1].initialStock).accentColor} uppercase tracking-wider`}>
                      {getUrgencyStylesVIP("VIP", tickets[1].initialStock).label}
                    </span>
                    <div className="flex items-center gap-2 text-white">
                      <Ticket size={18} className={getUrgencyStylesVIP("VIP", tickets[1].initialStock).accentColor} />
                      <span className="text-sm font-medium">
                        Solo quedan{" "}
                        <span className={`${getUrgencyStylesVIP("VIP", tickets[1].initialStock).accentColor} font-bold text-lg`}>
                          {getTicketsRemaining("VIP")}
                        </span>{" "}
                        entradas
                      </span>
                    </div>
                  </div>
                </motion.div>

                <div className="mb-8">
                  <div className="text-white/80 text-sm mb-2">Experiencia Premium</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-white text-5xl">USD 590</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {tickets[1].features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#FF4E2F] rounded-full flex items-center justify-center">
                        <Check size={14} className="text-white" strokeWidth={3} />
                      </div>
                      <span className="text-white/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  href={tickets[1].link}
                  className="block w-full py-4 rounded-full text-center bg-white text-black hover:bg-[#FF4E2F] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reservar entrada VIP
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Grid - Otros tickets */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Standard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:border-black transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-6">
                <h3 className="mb-2">{tickets[0].name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl">{tickets[0].price}</span>
                </div>
              </div>

              {/* Ticket Counter for Standard */}
              <motion.div
                className={`mb-6 rounded-lg p-3 border ${getUrgencyStyles("Standard", tickets[0].initialStock).bgColor} ${getUrgencyStyles("Standard", tickets[0].initialStock).borderColor}`}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex flex-col gap-1">
                  <span className={`text-xs font-semibold ${getUrgencyStyles("Standard", tickets[0].initialStock).textColor} uppercase tracking-wider`}>
                    {getUrgencyStyles("Standard", tickets[0].initialStock).label}
                  </span>
                  <div className="flex items-center gap-2">
                    <Ticket size={16} className={getUrgencyStyles("Standard", tickets[0].initialStock).iconColor} />
                    <span className="text-xs font-medium text-gray-700">
                      <span className={`${getUrgencyStyles("Standard", tickets[0].initialStock).textColor} font-bold`}>{getTicketsRemaining("Standard")}</span> entradas
                    </span>
                  </div>
                </div>
              </motion.div>

              <ul className="space-y-3 mb-8 min-h-[200px]">
                {tickets[0].features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={tickets[0].link}
                className="block w-full py-3 rounded-full text-center border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                whileTap={{ scale: 0.95 }}
              >
                Comprar
              </motion.a>
            </motion.div>

            {/* Gold */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:border-black transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-6">
                <h3 className="mb-2">{tickets[2].name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl">{tickets[2].price}</span>
                </div>
              </div>

              {/* Ticket Counter for Gold */}
              <motion.div
                className={`mb-6 rounded-lg p-3 border ${getUrgencyStyles("Gold", tickets[2].initialStock).bgColor} ${getUrgencyStyles("Gold", tickets[2].initialStock).borderColor}`}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex flex-col gap-1">
                  <span className={`text-xs font-semibold ${getUrgencyStyles("Gold", tickets[2].initialStock).textColor} uppercase tracking-wider`}>
                    {getUrgencyStyles("Gold", tickets[2].initialStock).label}
                  </span>
                  <div className="flex items-center gap-2">
                    <Ticket size={16} className={getUrgencyStyles("Gold", tickets[2].initialStock).iconColor} />
                    <span className="text-xs font-medium text-gray-700">
                      <span className={`${getUrgencyStyles("Gold", tickets[2].initialStock).textColor} font-bold`}>{getTicketsRemaining("Gold")}</span> entradas
                    </span>
                  </div>
                </div>
              </motion.div>

              <ul className="space-y-3 mb-8 min-h-[200px]">
                {tickets[2].features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#FF4E2F] rounded-full flex items-center justify-center">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={tickets[2].link}
                className="block w-full py-3 rounded-full text-center bg-black text-white hover:bg-[#FF4E2F] transition-all duration-300"
                whileTap={{ scale: 0.95 }}
              >
                Comprar
              </motion.a>
            </motion.div>

            {/* Streaming */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:border-black transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-6">
                <h3 className="mb-2">{tickets[3].name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl">{tickets[3].price}</span>
                </div>
              </div>
              {/* Ticket Counter for Streaming */}
              <motion.div
                className={`mb-6 rounded-lg p-3 border ${getUrgencyStyles("Streaming", tickets[3].initialStock).bgColor} ${getUrgencyStyles("Streaming", tickets[3].initialStock).borderColor}`}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex flex-col gap-1">
                  <span
                    className={`text-xs font-semibold ${getUrgencyStyles("Streaming", tickets[3].initialStock).textColor} uppercase tracking-wider`}
                  >
                    {getUrgencyStyles("Streaming", tickets[3].initialStock).label}
                  </span>
                  <div className="flex items-center gap-2">
                    <Ticket
                      size={16}
                      className={getUrgencyStyles("Streaming", tickets[3].initialStock).iconColor}
                    />
                    <span className="text-xs font-medium text-gray-700">
                      <span
                        className={`${getUrgencyStyles("Streaming", tickets[3].initialStock).textColor} font-bold`}
                      >
                        {getTicketsRemaining("Streaming")}
                      </span>{" "}
                      accesos
                    </span>
                  </div>
                </div>
              </motion.div>

              <ul className="space-y-3 mb-8 min-h-[200px]">
                {tickets[3].features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href={tickets[3].link}
                className="block w-full py-3 rounded-full text-center border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                whileTap={{ scale: 0.95 }}
              >
                Comprar Streaming
              </motion.a>

            </motion.div>
          </div>
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