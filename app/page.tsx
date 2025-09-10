
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ProductGrid } from "@/components/ProductGrid";
import { SalonGallery } from "@/components/SalonGallery";
import { Star, Heart, Sparkles, Clock, Shield, Users, ArrowRight, CheckCircle, Play } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Video Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-warmWhite to-softPink/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-4 md:mb-6">
              Descubre nuestra experiencia
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Mira cómo transformamos miradas y creamos belleza única para cada una de nuestras clientas.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gradient-to-br from-theme/10 to-themeDark/20 rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer">
              {/* Video Element */}
              <video 
                className="w-full h-full object-cover"
                poster="/images/homepage/video-poster.jpg"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/videos/02cWMXRt-33883556.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              
              {/* Video Title Overlay */}
              <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 md:p-4">
                  <h3 className="text-base md:text-lg font-serif text-charcoal mb-1 md:mb-2">
                    Transformación Completa de Pestañas
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    Proceso completo desde la consulta hasta el resultado final
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-3 right-3 md:top-6 md:right-6">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
              
              <div className="absolute top-3 left-3 md:top-6 md:left-6">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
            </div>
            
            {/* Video Stats */}
            <div className="mt-6 md:mt-8 grid grid-cols-3 gap-4 md:gap-6 text-center">
              <div>
                <div className="text-xl md:text-2xl font-bold text-theme">500+</div>
                <div className="text-xs md:text-sm text-gray-600">Clientas satisfechas</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-theme">3+</div>
                <div className="text-xs md:text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-theme">100%</div>
                <div className="text-xs md:text-sm text-gray-600">Garantía de calidad</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-softPink/30 via-warmWhite to-blush/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos especialistas en crear nuevas miradas. Un espacio pensado en ti y en tu comodidad 
              para que vivas una experiencia de belleza única en su tipo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-rose/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">Materiales Premium</h3>
              <p className="text-gray-600 leading-relaxed">
                Utilizamos solo los mejores materiales y técnicas profesionales para garantizar resultados excepcionales.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-rose/20 to-sage/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-rose" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">Garantía 48h</h3>
              <p className="text-gray-600 leading-relaxed">
                Confiamos tanto en nuestro trabajo que ofrecemos garantía completa en todos nuestros servicios.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-sage/20 to-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-sage" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">Diseño Personalizado</h3>
              <p className="text-gray-600 leading-relaxed">
                Cada servicio se adapta a tu estilo único y preferencias personales para un look perfecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              Nuestros servicios estrella
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestra selección de servicios más populares, diseñados para realzar tu belleza natural.
            </p>
          </div>
          
          {/* Featured Services with Images */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Extensiones Clásicas */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-theme/10 to-themeDark/20 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300 relative">
                <img 
                  src="/images/services/Extensiones Clásicas.png" 
                  alt="Extensiones Clásicas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-theme transition-colors">Extensiones Clásicas</h3>
              <p className="text-gray-600 text-sm mb-3">Look natural y elegante</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-theme">$650 MXN</span>
                <Link href="/book?service=classic_set" className="btn btn-primary text-sm px-4 py-2">
                  Reservar
                </Link>
              </div>
            </div>

            {/* Extensiones Híbridas */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-theme/10 to-themeDark/20 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300 relative">
                <img 
                  src="/images/services/Extensiones Híbridas.png" 
                  alt="Extensiones Híbridas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-theme transition-colors">Extensiones Híbridas</h3>
              <p className="text-gray-600 text-sm mb-3">Combinación perfecta</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-theme">$690 MXN</span>
                <Link href="/book?service=hybrid_set" className="btn btn-primary text-sm px-4 py-2">
                  Reservar
                </Link>
              </div>
            </div>

            {/* Extensiones Volumen */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-theme/10 to-themeDark/20 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300 relative">
                <img 
                  src="/images/services/ Extensiones Volumen.png" 
                  alt="Extensiones Volumen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-theme transition-colors">Extensiones Volumen</h3>
              <p className="text-gray-600 text-sm mb-3">Máximo impacto</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-theme">$750 MXN</span>
                <Link href="/book?service=volume_set" className="btn btn-primary text-sm px-4 py-2">
                  Reservar
                </Link>
              </div>
            </div>

            {/* Extensiones Mega Volumen */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-theme/10 to-themeDark/20 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300 relative">
                <img 
                  src="/images/services/Extensiones Mega Volumen.png" 
                  alt="Extensiones Mega Volumen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-theme transition-colors">Extensiones Mega Volumen</h3>
              <p className="text-gray-600 text-sm mb-3">Look más dramático</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-theme">$890 MXN</span>
                <Link href="/book?service=mega_volume" className="btn btn-primary text-sm px-4 py-2">
                  Reservar
                </Link>
              </div>
            </div>

            {/* Extensiones Wet Look */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-theme/10 to-themeDark/20 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300 relative">
                <img 
                  src="/images/services/Extensiones Wet Look.png" 
                  alt="Extensiones Wet Look"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-theme transition-colors">Extensiones Wet Look</h3>
              <p className="text-gray-600 text-sm mb-3">Efecto mojado fresco</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-theme">$790 MXN</span>
                <Link href="/book?service=wet_look" className="btn btn-primary text-sm px-4 py-2">
                  Reservar
                </Link>
              </div>
            </div>

            {/* Extensiones Kim K */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-theme/10 to-themeDark/20 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300 relative">
                <img 
                  src="/images/services/Extensiones Kim K.png" 
                  alt="Extensiones Kim K"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-theme transition-colors">Extensiones Kim K</h3>
              <p className="text-gray-600 text-sm mb-3">Estilo Kardashian</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-theme">$790 MXN</span>
                <Link href="/book?service=kim_k" className="btn btn-primary text-sm px-4 py-2">
                  Reservar
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Services Grid */}
        <ServiceGrid limit={6} />
          
          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-primary text-lg px-8 py-4">
              Ver todos los servicios
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-cream/50 to-taupe/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              Cómo funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso simple y elegante para tu experiencia de belleza perfecta.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-deepGold rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-4">Reserva tu cita</h3>
              <p className="text-gray-600">Elige tu servicio favorito y selecciona el horario que mejor te convenga.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose to-dustyRose rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-4">Paga tu depósito</h3>
              <p className="text-gray-600">Aparta tu cita con solo el 30% del costo total de manera segura.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sage to-sageLight rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-4">Disfruta tu servicio</h3>
              <p className="text-gray-600">Relájate mientras nuestras expertas trabajan su magia en ti.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-deepGold to-gold rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-4">Paga el saldo</h3>
              <p className="text-gray-600">Completa tu pago al finalizar el servicio y disfruta tu nuevo look.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              Transformaciones hermosas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre los increíbles resultados que hemos logrado para nuestras clientas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-rose/20 to-gold/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <Sparkles className="w-16 h-16 text-gold mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Antes y Después</p>
                </div>
              </div>
              <h3 className="text-lg font-serif text-charcoal mb-2">Extensiones Clásicas</h3>
              <p className="text-gray-600 text-sm">Look natural y elegante</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-sage/20 to-rose/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-rose mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Antes y Después</p>
                </div>
              </div>
              <h3 className="text-lg font-serif text-charcoal mb-2">Brow Lifting</h3>
              <p className="text-gray-600 text-sm">Cejas perfectas y definidas</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-gold/20 to-sage/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <Star className="w-16 h-16 text-sage mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Antes y Después</p>
                </div>
              </div>
              <h3 className="text-lg font-serif text-charcoal mb-2">Lash Lifting</h3>
              <p className="text-gray-600 text-sm">Pestañas naturales realzadas</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/gallery" className="btn btn-outline text-lg px-8 py-4">
              Ver galería completa
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-warmWhite to-softPink/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              Lo que dicen nuestras clientas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La satisfacción de nuestras clientas es nuestra mayor recompensa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Increíble experiencia. Las extensiones quedaron perfectas y el servicio fue excepcional. 
                Definitivamente regresaré."
              </p>
              <div className="font-semibold text-charcoal">María González</div>
              <div className="text-sm text-gray-500">Extensiones Volumen</div>
            </div>
            
            <div className="card p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "El brow lifting cambió completamente mi look. Me siento más segura y hermosa. 
                El personal es muy profesional."
              </p>
              <div className="font-semibold text-charcoal">Ana Rodríguez</div>
              <div className="text-sm text-gray-500">Brow Lifting + Laminado</div>
            </div>
            
            <div className="card p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Ambiente relajante, atención personalizada y resultados espectaculares. 
                Recomiendo al 100%."
              </p>
              <div className="font-semibold text-charcoal">Laura Martínez</div>
              <div className="text-sm text-gray-500">Lash Lifting</div>
            </div>
          </div>
        </div>
      </section>

      {/* Salon Gallery Section */}
      <SalonGallery />

      {/* Products Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              Productos de cuidado
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantén tus extensiones y cejas perfectas con nuestros productos profesionales.
            </p>
          </div>
          
          <ProductGrid limit={4} />
          
          <div className="text-center mt-12">
            <Link href="/shop" className="btn btn-outline text-lg px-8 py-4">
              Ver todos los productos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold/10 via-rose/10 to-sage/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
            ¿Lista para tu transformación?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Reserva tu cita ahora y descubre por qué somos la mejor opción en Cancún.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="btn btn-primary text-lg px-8 py-4">
              Reservar cita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/contact" className="btn btn-outline text-lg px-8 py-4">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
