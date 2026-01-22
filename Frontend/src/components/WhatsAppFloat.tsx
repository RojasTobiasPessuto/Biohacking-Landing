import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const linklyUrl = 'https://linkly.link/2XFcE';

  return (
    <a
      href={linklyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Círculo con efecto de pulso */}
      <div className="relative">
        {/* Anillo de pulso animado */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75" />
        
        {/* Botón principal */}
        <div className="relative bg-[#25D366] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] group-active:scale-95">
          <MessageCircle className="w-8 h-8" strokeWidth={2} />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl">
            ¿Tienes preguntas?
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-black" />
          </div>
        </div>
      </div>
    </a>
  );
}