
'use client';
import { useState } from 'react';
import services from "@/data/services.json";
import Link from "next/link";
import { ServiceModal } from "./ServiceModal";
import { Clock, Sparkles, Heart, Star, Eye, Target } from "lucide-react";

// Function to get the correct image filename for each service
const getServiceImage = (serviceId: string) => {
  const imageMap: { [key: string]: string } = {
    'classic_set': 'Extensiones Clásicas.png',
    'hybrid_set': 'Extensiones Híbridas.png',
    'volume_set': ' Extensiones Volumen.png',
    'mega_volume': 'Extensiones Mega Volumen.png',
    'wet_look': 'Extensiones Wet Look.png',
    'kim_k': 'Extensiones Kim K.png',
    'manga': 'Extensiones Manga.png',
    'foxy': 'Extensiones Foxy.png',
    'cat_eye': 'Extensiones Cat Eye.png',
    'lash_lifting': 'Lash Lifting.png',
    'lash_lifting_tint': 'Lash Lifting + Tinte.png',
    'brow_lifting': 'Brow Lifting + Laminado.png',
    'thread_brows': 'Depilación con Hilo.png',
    'retouch_classic': 'Retoque Clásico.png',
    'retouch_volume': 'Retoque Volumen.png',
    'refill_classic': 'Relleno Clásico.png',
    'refill_hybrid': 'Relleno Híbrido.png',
    'refill_volume': 'Relleno Volumen.png',
    'refill_mega_volume': 'Relleno Mega Volumen.png',
    'brow_design': 'Brow Design.png',
    'brow_tint': 'Brow Tint.png',
    'lash_removal': 'Retiro de Extensiones.png',
    'brow_removal': 'Retiro de Laminado.png'
  };
  return imageMap[serviceId] || 'Extensiones Clásicas.png';
};

// Function to get the appropriate icon for each service category
const getServiceIcon = (category: string) => {
  switch (category) {
    case 'Extensiones de Pestañas':
      return <Sparkles className="w-5 h-5 text-theme" />;
    case 'Lifting de Pestañas':
      return <Heart className="w-5 h-5 text-theme" />;
    case 'Cejas':
      return <Eye className="w-5 h-5 text-theme" />;
    case 'Depilación':
      return <Target className="w-5 h-5 text-theme" />;
    case 'Retoques':
      return <Star className="w-5 h-5 text-theme" />;
    case 'Rellenos':
      return <Sparkles className="w-5 h-5 text-theme" />;
    case 'Brow Design':
      return <Eye className="w-5 h-5 text-theme" />;
    case 'Retiros':
      return <Target className="w-5 h-5 text-theme" />;
    default:
      return <Sparkles className="w-5 h-5 text-theme" />;
  }
};

export function ServiceGrid({limit}:{limit?:number}){
  const list = limit ? services.slice(0,limit) : services;
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailsClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map(s => (
          <div key={s.id} className="card p-6 hover:shadow-lg transition-all duration-300 group">
            {/* Service Image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-theme/10 to-themeDark/20 rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300 relative">
              <img 
                src={`/images/services/${getServiceImage(s.id)}`}
                alt={s.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute top-3 right-3">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  {getServiceIcon(s.category)}
                </div>
              </div>
            </div>

            {/* Service Info */}
            <div className="text-sm uppercase tracking-widest text-theme font-medium mb-2">{s.category}</div>
            <h3 className="text-xl font-serif group-hover:text-theme transition-colors mb-2">{s.name}</h3>
            
            <div className="flex items-center text-gray-600 text-sm mb-3">
              <Clock className="w-4 h-4 mr-2 text-theme" />
              <span>Duración ~{s.duration_min} min</span>
            </div>
            
            {s.description && (
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">{s.description}</p>
            )}
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-theme">${s.price_mxn} MXN</span>
              <div className="text-right">
                <div className="text-xs text-gray-500">Depósito 30%</div>
                <div className="text-sm font-semibold">${Math.round(s.price_mxn * 0.3)} MXN</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Link href={`/book?service=${s.id}`} className="btn btn-primary flex-1 text-center text-sm px-4 py-2">
                Reservar
              </Link>
              <button 
                onClick={() => handleDetailsClick(s)}
                className="btn btn-outline text-sm px-4 py-2 hover:bg-theme hover:text-white transition-all duration-300"
              >
                Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
