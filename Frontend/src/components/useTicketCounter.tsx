import { useState, useEffect } from 'react';

interface TicketConfig {
  initialStock: number;
  currentStock: number;
}

interface UseTicketCounterReturn {
  getTicketsRemaining: (ticketName: string) => number;
}

export function useTicketCounter(): UseTicketCounterReturn {
  const endDate = new Date('2026-02-21T23:59:59').getTime();
  
  // Configuración inicial de stock por tipo de ticket
  const ticketConfigs: Record<string, TicketConfig> = {
    'Standard': { initialStock: 500, currentStock: 500 },
    'VIP': { initialStock: 300, currentStock: 300 },
    'Gold': { initialStock: 200, currentStock: 200 },
    'Streaming': { initialStock: 300, currentStock: 300 },
  };

  const [ticketsRemaining, setTicketsRemaining] = useState<Record<string, number>>({
    'Standard': 500,
    'VIP': 300,
    'Gold': 200,
    'Streaming': 300,
  });

  useEffect(() => {
    const calculateRemainingTickets = () => {
      const now = Date.now();
      const timeRemaining = endDate - now;
      
      // Si ya pasó la fecha, todos los tickets están vendidos
      if (timeRemaining <= 0) {
        setTicketsRemaining({
          'Standard': 0,
          'VIP': 0,
          'Gold': 0,
          'Streaming': 0,
        });
        return;
      }

      // Calcular el porcentaje de tiempo transcurrido
      const startDate = new Date('2026-01-01T00:00:00').getTime(); // Fecha de inicio de venta
      const totalDuration = endDate - startDate;
      const timeElapsed = now - startDate;
      const percentageElapsed = Math.max(0, Math.min(1, timeElapsed / totalDuration));

      // Calcular tickets vendidos basado en el tiempo transcurrido con variación
      const newRemaining: Record<string, number> = {};
      
      Object.entries(ticketConfigs).forEach(([ticketName, config]) => {
        // Añadir una pequeña variación aleatoria para simular ventas reales
        const randomFactor = 0.95 + Math.random() * 0.1; // 0.95 a 1.05
        const soldPercentage = percentageElapsed * randomFactor;
        
        // Calcular tickets vendidos (más rápido al principio, más lento al final)
        const soldTickets = Math.floor(config.initialStock * soldPercentage * 0.85); // 85% vendido al final
        const remaining = Math.max(0, config.initialStock - soldTickets);
        
        newRemaining[ticketName] = remaining;
      });

      setTicketsRemaining(newRemaining);
    };

    // Calcular inmediatamente
    calculateRemainingTickets();

    // Actualizar cada 8 segundos para simular ventas en tiempo real
    const interval = setInterval(calculateRemainingTickets, 60000);

    return () => clearInterval(interval);
  }, [endDate]);

  const getTicketsRemaining = (ticketName: string): number => {
    return ticketsRemaining[ticketName] || 0;
  };

  return { getTicketsRemaining };
}
