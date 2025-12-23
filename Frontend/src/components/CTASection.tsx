import React from "react";
import { motion } from "motion/react";

export default function CTASection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -550;
      const elementPosition = element.getBoundingClientRect().top;
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
          <motion.button
            onClick={() => scrollToSection("entradas")}
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
      </div>
    </section>
  );
}
