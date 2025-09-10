
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-taupe/30 bg-gradient-to-br from-warmWhite to-softPink/10">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image 
                src="/images/logo/lashlogo.png" 
                alt="THE LASH & CO" 
                width={150} 
                height={75} 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-600 mb-6">
              Transformamos miradas y creamos belleza única para cada una de nuestras clientas en Cancún.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/thelash.cancun" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-rose to-dustyRose rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/thelash.cancun" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-sage to-sageLight rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/529981880825" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-gold to-deepGold rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-charcoal mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/services" className="hover:text-theme transition-colors">Extensiones de Pestañas</Link></li>
              <li><Link href="/services" className="hover:text-theme transition-colors">Lifting de Pestañas</Link></li>
              <li><Link href="/services" className="hover:text-theme transition-colors">Diseño de Cejas</Link></li>
              <li><Link href="/services" className="hover:text-theme transition-colors">Depilación con Hilo</Link></li>
              <li><Link href="/services" className="hover:text-theme transition-colors">Rellenos</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-charcoal mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-theme mr-3" />
                <a href="tel:+529981880825" className="hover:text-theme transition-colors">(998) 188 0825</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-theme mr-3" />
                <a href="mailto:thelashone@hotmail.com" className="hover:text-theme transition-colors">thelashone@hotmail.com</a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-theme mr-3 mt-1" />
                <span>Av. Huayacán KM 2.5<br />Plaza Andara, Local 9<br />77533 Cancún, Q.R.</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-charcoal mb-4">Horarios</h4>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-theme mr-3" />
                <div>
                  <div>Lunes - Viernes</div>
                  <div className="text-sm">9:00 AM - 8:00 PM</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-theme mr-3" />
                <div>
                  <div>Sábados</div>
                  <div className="text-sm">9:00 AM - 5:00 PM</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-theme mr-3" />
                <div>
                  <div>Domingos</div>
                  <div className="text-sm">Cerrado</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-taupe/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} THE LASH & CO · Cancún. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-theme transition-colors">Política de Privacidad</Link>
            <Link href="/terms" className="hover:text-theme transition-colors">Términos y Condiciones</Link>
            <Link href="/contact" className="hover:text-theme transition-colors">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
