
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
              <p className="font-semibold text-gold">Teléfono</p>
              <a className="text-charcoal hover:text-gold transition-colors" href="tel:+529981880825">(998) 188 0825</a>
            </div>
            <div>
              <p className="font-semibold text-gold">Email</p>
              <a className="text-charcoal hover:text-gold transition-colors" href="mailto:thelashone@hotmail.com">thelashone@hotmail.com</a>
            </div>
            <div>
              <p className="font-semibold text-gold">Dirección</p>
              <p className="text-charcoal">Av. Huayacán KM 2.5 Plaza Andara, Local 9<br />77533 Cancún, Q.R.</p>
            </div>
          </div>
        </div>
        
        <div className="card p-6">
          <h2 className="text-2xl mb-4">Horarios de Atención</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Lunes - Viernes</span>
              <span className="font-semibold">9:00 AM - 8:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sábados</span>
              <span className="font-semibold">9:00 AM - 5:00 PM</span>
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
