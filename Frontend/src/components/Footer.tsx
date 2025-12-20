import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from 'figma:asset/db58196d3fb000af2c136d0c9717696245d406cc.png';

export default function Footer() {
  return (
    <footer className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <img src={logo} alt="ADVA Logo" className="h-10 md:h-12 brightness-0 invert" />
          </div>

          {/* Social media text */}
          <p className="text-gray-400 mb-6">
            Síguenos en nuestras redes sociales para estar al día con todas las novedades
          </p>

          {/* Social links */}
          <div className="flex items-center gap-6 mb-12">
            <a
              href="#"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF4E2F] hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF4E2F] hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF4E2F] hover:text-white transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-8" />

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2026 Biohacking & Longevity Summit. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}