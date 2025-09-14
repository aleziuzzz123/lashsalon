
'use client';
import { useEffect, useMemo, useState } from 'react';
import services from "@/data/services.json";
import dayjs from "dayjs";

function generateSlots(){
  // Simple next 7 days, 10:00–18:00 every 2h
  const out: {label:string, value:string}[] = [];
  for(let d=0; d<7; d++){
    for(const hour of [10,12,14,16,18]){
      const dt = dayjs().add(d,'day').hour(hour).minute(0).second(0).millisecond(0);
      out.push({label: dt.format('ddd DD MMM · HH:mm'), value: dt.toISOString()});
    }
  }
  return out;
}

export default function BookingWidget(){
  const [serviceId,setServiceId]=useState(services[0].id);
  const [slot,setSlot]=useState<string>('');
  const [loading,setLoading]=useState(false);
  const slots = useMemo(generateSlots, []);
  useEffect(()=>{ setSlot(slots[0]?.value||'') },[slots]);

  function startWhatsAppBooking(){
    setLoading(true);
    try {
      const service = (services as any[]).find(s=>s.id===serviceId)!;
      const deposit = Math.round(service.price_mxn * 0.3);
      const balance = service.price_mxn - deposit;
      const appointmentDate = new Date(slot).toLocaleString('es-MX', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      // WhatsApp phone number (replace with your salon's WhatsApp number)
      const whatsappNumber = '529981880825'; // +52 998 188 0825
      
      // Create the WhatsApp message
      const message = `¡Hola! Me gustaría reservar una cita en THE LASH & CO. 🌟

📋 *Detalles de la reserva:*
• Servicio: ${service.name}
• Fecha y hora: ${appointmentDate}
• Precio total: $${service.price_mxn} MXN
• Depósito (30%): $${deposit} MXN
• Resto a pagar: $${balance} MXN

💳 *Método de pago:*
El depósito se puede pagar por transferencia bancaria o en efectivo al llegar.

¿Está disponible esta fecha? ¡Espero su confirmación! 😊`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card p-6 max-w-xl">
      <label className="block text-sm mb-2">Servicio</label>
      <select className="w-full border rounded-xl p-3" value={serviceId} onChange={e=>setServiceId(e.target.value)}>
        {(services as any[]).map(s => <option key={s.id} value={s.id}>{s.name} — ${s.price_mxn} MXN</option>)}
      </select>

      <label className="block text-sm mt-4 mb-2">Horario</label>
      <select className="w-full border rounded-xl p-3" value={slot} onChange={e=>setSlot(e.target.value)}>
        {slots.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
      </select>

      <button onClick={startWhatsAppBooking} disabled={loading} className="btn btn-primary mt-5 w-full">
        {loading ? 'Abriendo WhatsApp...' : 'Reservar por WhatsApp'}
      </button>
      <p className="mt-3 small helper">Serás redirigida a WhatsApp para confirmar tu reserva y coordinar el pago del depósito.</p>
    </div>
  )
}
