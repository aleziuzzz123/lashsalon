
export const metadata = { title: "Contacto | THE LASH & CO" };
export default function Page() {
  return (
    <div className="section container">
      <h1 className="mb-2">Contacto</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h2 className="text-2xl mb-4">Información de Contacto</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gold">WhatsApp</p>
              <a className="text-charcoal hover:text-gold transition-colors" href="https://wa.me/529981234567" target="_blank">+52 998 123 4567</a>
            </div>
            <div>
              <p className="font-semibold text-gold">Email</p>
              <a className="text-charcoal hover:text-gold transition-colors" href="mailto:contacto@thelash.mx">contacto@thelash.mx</a>
            </div>
            <div>
              <p className="font-semibold text-gold">Dirección</p>
              <p className="text-charcoal">Av. Huayacán s/n Local 9<br />Col. Los Alamos I, C.P. 77533<br />Lagos del Sol, Benito Juárez, Quintana Roo</p>
            </div>
          </div>
        </div>
        
        <div className="card p-6">
          <h2 className="text-2xl mb-4">Horarios de Atención</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Lunes - Viernes</span>
              <span className="font-semibold">09:00 AM - 08:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sábados</span>
              <span className="font-semibold">09:00 AM - 06:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Domingos</span>
              <span className="font-semibold">Cerrado</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-cream rounded-xl">
            <h3 className="font-semibold text-gold mb-2">Reserva tu cita</h3>
            <p className="text-sm text-gray-600 mb-3">Reserva con 30% de anticipo y disfruta de nuestros servicios premium</p>
            <a href="/book" className="btn btn-primary">Reservar Ahora</a>
          </div>
        </div>
      </div>
    </div>
  );
}
