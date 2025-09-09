
'use client';
import { useState } from 'react';
import services from "@/data/services.json";
import Link from "next/link";
import { ServiceModal } from "./ServiceModal";
import { Clock } from "lucide-react";

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
            <div className="text-sm uppercase tracking-widest text-gold font-medium">{s.category}</div>
            <h3 className="text-2xl mt-1 font-serif group-hover:text-gold transition-colors">{s.name}</h3>
            <div className="mt-2 flex items-center text-gray-600 text-sm">
              <Clock className="w-4 h-4 mr-2 text-gold" />
              <span>Duración ~{s.duration_min} min</span>
            </div>
            {s.description && (
              <p className="mt-2 text-gray-600 text-sm line-clamp-2">{s.description}</p>
            )}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-2xl font-bold text-gold">${s.price_mxn} MXN</span>
              <div className="text-right">
                <div className="text-xs text-gray-500">Depósito 30%</div>
                <div className="text-sm font-semibold">${Math.round(s.price_mxn * 0.3)} MXN</div>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              <Link href={`/book?service=${s.id}`} className="btn btn-primary flex-1 text-center">Reservar</Link>
              <button 
                onClick={() => handleDetailsClick(s)}
                className="btn btn-outline hover:bg-gold hover:text-white transition-all duration-300"
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
