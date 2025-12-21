import React from 'react';
import { Instagram, MessageCircleMore, Ticket } from 'lucide-react';
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
              href="https://www.instagram.com/bhe.humanexperience?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF4E2F] hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=59893900039&text&type=phone_number&app_absent=0"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF4E2F] hover:text-white transition-all duration-300"
              aria-label="Whatsapp"
            >
              <MessageCircleMore size={20} />
            </a>
            <a
              href="https://linktr.ee/rewirexperience?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnpYDi6K3tO85iDIHf5Vm7CZ9GTR7TAe4v7C65OsRSjhjfsDlCl1_FwmTSCVw_aem__wt09EbPZ1MPVsBe0F2W2g"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF4E2F] hover:text-white transition-all duration-300"
              aria-label="YouTube"
            >
              <Ticket size={20} />
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