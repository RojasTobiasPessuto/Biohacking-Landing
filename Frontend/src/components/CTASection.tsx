import React from "react";
import { motion } from "motion/react";

export default function CTASection() {
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
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => scrollToSection("entradas")}
            className="px-12 py-5 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Asegurá tu lugar
          </button>
        </motion.div>
      </div>
    </section>
  );
}