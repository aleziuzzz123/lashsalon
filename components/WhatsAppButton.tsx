'use client';
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "529981880825";
  const message = "Hola! Me interesa agendar una cita en THE LASH & CO. ¿Podrían ayudarme?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-charcoal text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        ¡Escríbenos por WhatsApp!
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-charcoal"></div>
      </div>
    </a>
  );
}
