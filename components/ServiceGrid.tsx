
import services from "@/data/services.json";
import Link from "next/link";

export function ServiceGrid({limit}:{limit?:number}){
  const list = limit ? services.slice(0,limit) : services;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map(s => (
        <div key={s.id} className="card p-6">
          <div className="text-sm uppercase tracking-widest text-gold">{s.category}</div>
          <h3 className="text-2xl mt-1">{s.name}</h3>
          <p className="mt-2 text-gray-600">Duración ~{s.duration_min} min</p>
          <div className="mt-3 font-semibold">${'{'}s.price_mxn{'}'} MXN</div>
          <div className="mt-5 flex gap-3">
            <Link href={`/book?service=${'${s.id}'}`} className="btn btn-primary">Reservar</Link>
            <Link href="/services" className="btn btn-outline">Detalles</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
