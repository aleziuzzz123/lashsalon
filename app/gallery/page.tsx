import { Star, Heart, Eye, Sparkles } from "lucide-react";

export const metadata = { 
  title: "Galería | THE LASH & CO",
  description: "Antes y después de nuestros servicios de pestañas, cejas y lifting. Ve los increíbles resultados de nuestras especialistas."
};

export default function Gallery() {
  return (
    <div className="section container">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
          Nuestra Galería
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre los increíbles resultados de nuestros servicios. Cada transformación es única y especial.
        </p>
      </div>

      {/* Before & After Gallery */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif text-charcoal mb-8 text-center">Antes y Después</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for before/after images */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-theme/10 to-themeDark/20 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300 relative">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-16 h-16 text-theme mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Imagen {item}</p>
                    <p className="text-sm text-gray-500">Antes y Después</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-serif text-charcoal mb-2">Transformación {item}</h3>
              <p className="text-gray-600 text-sm">Resultado profesional y elegante</p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Categories Gallery */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif text-charcoal mb-8 text-center">Por Categoría</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Extensiones de Pestañas */}
          <div className="group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-gold/20 to-sage/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <Sparkles className="w-16 h-16 text-sage mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Extensiones</p>
              </div>
            </div>
            <h3 className="text-lg font-serif text-charcoal mb-2">Extensiones de Pestañas</h3>
            <p className="text-gray-600 text-sm">Diferentes estilos y volúmenes</p>
          </div>

          {/* Lifting de Pestañas */}
          <div className="group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-rose/20 to-dustyRose/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <Heart className="w-16 h-16 text-dustyRose mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Lifting</p>
              </div>
            </div>
            <h3 className="text-lg font-serif text-charcoal mb-2">Lifting de Pestañas</h3>
            <p className="text-gray-600 text-sm">Realza tus pestañas naturales</p>
          </div>

          {/* Cejas */}
          <div className="group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-sage/20 to-sageLight/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <Eye className="w-16 h-16 text-sage mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Cejas</p>
              </div>
            </div>
            <h3 className="text-lg font-serif text-charcoal mb-2">Diseño de Cejas</h3>
            <p className="text-gray-600 text-sm">Cejas perfectas y definidas</p>
          </div>

          {/* Depilación */}
          <div className="group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-taupe/20 to-cream/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <Star className="w-16 h-16 text-taupe mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Depilación</p>
              </div>
            </div>
            <h3 className="text-lg font-serif text-charcoal mb-2">Depilación con Hilo</h3>
            <p className="text-gray-600 text-sm">Técnica tradicional y precisa</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-theme/5 to-themeDark/10 rounded-2xl p-12">
        <h2 className="text-3xl font-serif text-charcoal mb-6">
          ¿Lista para tu transformación?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Reserva tu cita y descubre cómo podemos realzar tu belleza natural con nuestros servicios profesionales.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/book" className="btn btn-primary text-lg px-8 py-4">
            Reservar Cita
          </a>
          <a href="/contact" className="btn btn-outline text-lg px-8 py-4">
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
}
