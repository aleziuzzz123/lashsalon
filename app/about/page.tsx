
export const metadata = { title: "Nosotras | THE LASH & CO" };
export default function Page() {
  return (
    <div className="section container">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-serif mb-6">Sobre Nosotras</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Somos especialistas en crear nuevas miradas. Un espacio pensado en ti y en tu comodidad 
          para que vivas una experiencia de belleza única en su tipo.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="card p-8">
          <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl">💎</span>
          </div>
          <h3 className="text-3xl font-serif mb-4">Nuestra Filosofía</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Trabajamos con limpieza profunda, diseño personalizado de rostro y materiales premium tipo mink. 
            Cada servicio está diseñado para realzar tu belleza natural.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><span className="text-gold mr-2">✓</span> Materiales premium</li>
            <li className="flex items-center"><span className="text-gold mr-2">✓</span> Técnicas especializadas</li>
            <li className="flex items-center"><span className="text-gold mr-2">✓</span> Garantía 48 horas</li>
            <li className="flex items-center"><span className="text-gold mr-2">✓</span> Ambiente higiénico</li>
          </ul>
        </div>

        <div className="card p-8">
          <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl">📍</span>
          </div>
          <h3 className="text-3xl font-serif mb-4">Nuestra Ubicación</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Estamos ubicados en el corazón de Cancún, en Lagos del Sol. 
            Un espacio cómodo y moderno diseñado para tu relajación.
          </p>
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold text-gold">Dirección:</span><br />
            Av. Huayacán s/n Local 9<br />
            Col. Los Alamos I, C.P. 77533<br />
            Lagos del Sol, Benito Juárez, Quintana Roo</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-6 text-center">
          <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-xl">⏰</span>
          </div>
          <h4 className="text-xl font-serif mb-2">Horarios</h4>
          <p className="text-sm text-gray-600">
            Lun - Vie: 09:00 - 20:00<br />
            Sáb: 09:00 - 18:00<br />
            Dom: Cerrado
          </p>
        </div>

        <div className="card p-6 text-center">
          <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-xl">💬</span>
          </div>
          <h4 className="text-xl font-serif mb-2">Contacto</h4>
          <p className="text-sm text-gray-600">
            WhatsApp: +52 998 123 4567<br />
            Email: contacto@thelash.mx
          </p>
        </div>

        <div className="card p-6 text-center">
          <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-xl">🎯</span>
          </div>
          <h4 className="text-xl font-serif mb-2">Especialidades</h4>
          <p className="text-sm text-gray-600">
            Extensiones de Pestañas<br />
            Lifting de Pestañas<br />
            Brow Lifting + Laminado
          </p>
        </div>
      </div>
    </div>
  );
}
