import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

// Función helper para trackear eventos personalizados
export const trackEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);
  }
};

// Eventos predefinidos comunes para e-commerce
export const MetaEvents = {
  // Cuando un usuario hace clic en "Comprar"
  initiateCheckout: (ticketType: string, price: string) => {
    trackEvent('InitiateCheckout', {
      content_name: ticketType,
      content_category: 'Event Ticket',
      value: parseFloat(price.replace(/[^0-9.]/g, '')),
      currency: 'USD',
    });
  },

  // Cuando un usuario completa una compra
  purchase: (ticketType: string, price: string) => {
    trackEvent('Purchase', {
      content_name: ticketType,
      content_type: 'product',
      value: parseFloat(price.replace(/[^0-9.]/g, '')),
      currency: 'USD',
    });
  },

  // Cuando un usuario ve el contenido de pricing
  viewContent: (section: string) => {
    trackEvent('ViewContent', {
      content_name: section,
    });
  },

  // Cuando un usuario hace clic en WhatsApp
  contact: (method: string) => {
    trackEvent('Contact', {
      content_name: method,
    });
  },
};

export default function MetaPixel() {
  useEffect(() => {
    // Verificar si ya existe fbq para evitar duplicados
    if (window.fbq) return;

    // Inicializar fbq
    (function(f: any, b: Document, e: string, v: string, n?: any, t?: HTMLScriptElement, s?: Element) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e) as HTMLScriptElement;
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s?.parentNode?.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );

    // Inicializar el pixel con tu ID
    window.fbq('init', '877102194863907');
    window.fbq('track', 'PageView');

    // Cleanup function
    return () => {
      // Opcional: limpiar si es necesario
    };
  }, []);

  return (
    <>
      {/* Noscript fallback para usuarios sin JavaScript */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=877102194863907&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}