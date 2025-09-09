
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

  async function startCheckout(){
    setLoading(true);
    try {
      const service = (services as any[]).find(s=>s.id===serviceId)!;
      const deposit = Math.round(service.price_mxn * 0.3);
      const res = await fetch('/api/mp/create-preference',{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({
        title: `Depósito ${service.name}`,
        description: `Reserva ${service.name} ${new Date(slot).toLocaleString()}`,
        amount_mxn: deposit,
        booking: { service_id: serviceId, slot }
      })});
      const data = await res.json();
      if(data.init_point){
        window.location.href = data.init_point;
      } else if(data.sandbox_init_point){
        window.location.href = data.sandbox_init_point;
      } else {
        alert('No se pudo iniciar el pago.');
      }
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

      <button onClick={startCheckout} disabled={loading} className="btn btn-primary mt-5 w-full">
        {loading ? 'Redirigiendo...' : 'Apartar con 30%'}
      </button>
      <p className="mt-3 small helper">Serás redirigida a Mercado Pago para completar el depósito.</p>
    </div>
  )
}
