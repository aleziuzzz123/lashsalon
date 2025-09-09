
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container py-20 md:py-28">
        <p className="tracking-[0.3em] text-gold uppercase text-xs md:text-sm">Belleza de mirada</p>
        <h1 className="mt-3 max-w-2xl">Extensiones & Lifting de pestañas con acabado de lujo</h1>
        <p className="mt-4 max-w-xl text-gray-600">Reserva con 30% de anticipo. Diseñamos tu rostro, trabajamos con materiales premium y ofrecemos garantía 48h.</p>
        <div className="mt-8 flex gap-3">
          <Link href="/book" className="btn btn-primary">Reservar ahora</Link>
          <Link href="/services" className="btn btn-outline">Ver servicios</Link>
        </div>
      </div>
    </section>
  );
}
