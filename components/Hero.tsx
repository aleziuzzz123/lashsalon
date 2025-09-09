
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-bg">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-rose/10 via-gold/5 to-sage/10"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-rose/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gold/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-sage/15 rounded-full blur-3xl"></div>
      </div>
      <div className="container py-20 md:py-32 relative z-10">
        <div className="max-w-4xl">
          <p className="tracking-[0.3em] text-gold uppercase text-xs md:text-sm font-medium">✨ Belleza de mirada</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-serif leading-tight">
            Extensiones & Lifting de pestañas con 
            <span className="text-gold"> acabado de lujo</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
            Somos especialistas en crear nuevas miradas. Reserva con 30% de anticipo, 
            trabajamos con materiales premium y ofrecemos garantía de 48 horas.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/book" className="btn btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all">
              Reservar ahora
            </Link>
            <Link href="/services" className="btn btn-outline text-lg px-8 py-4 hover:bg-gold hover:text-white transition-all">
              Ver servicios
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="text-gold">💎</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Materiales Premium</p>
                <p className="text-xs text-gray-600">Solo lo mejor</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="text-gold">⏰</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Garantía 48h</p>
                <p className="text-xs text-gray-600">Satisfacción total</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="text-gold">🎯</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Diseño Personalizado</p>
                <p className="text-xs text-gray-600">Para tu rostro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
