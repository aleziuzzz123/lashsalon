export const metadata = { 
  title: "Política de Privacidad | THE LASH & CO",
  description: "Política de privacidad y protección de datos de THE LASH & CO en Cancún."
};

export default function Privacy() {
  return (
    <div className="section container max-w-4xl">
      <h1 className="text-4xl font-serif text-charcoal mb-8">Política de Privacidad</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-MX')}
        </p>

        <h2 className="text-2xl font-serif text-charcoal mb-4">1. Información que recopilamos</h2>
        <p className="text-gray-600 mb-6">
          Recopilamos información que nos proporcionas directamente, como tu nombre, número de teléfono, 
          dirección de correo electrónico y preferencias de servicios cuando reservas una cita o te comunicas con nosotros.
        </p>

        <h2 className="text-2xl font-serif text-charcoal mb-4">2. Cómo utilizamos tu información</h2>
        <p className="text-gray-600 mb-6">
          Utilizamos la información recopilada para:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Procesar y confirmar tus reservas</li>
          <li>Comunicarnos contigo sobre tus citas</li>
          <li>Mejorar nuestros servicios</li>
          <li>Enviarte información promocional (solo si has dado tu consentimiento)</li>
        </ul>

        <h2 className="text-2xl font-serif text-charcoal mb-4">3. Compartir información</h2>
        <p className="text-gray-600 mb-6">
          No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto cuando 
          sea necesario para procesar pagos a través de Mercado Pago o cuando la ley lo requiera.
        </p>

        <h2 className="text-2xl font-serif text-charcoal mb-4">4. Seguridad de datos</h2>
        <p className="text-gray-600 mb-6">
          Implementamos medidas de seguridad apropiadas para proteger tu información personal contra 
          acceso no autorizado, alteración, divulgación o destrucción.
        </p>

        <h2 className="text-2xl font-serif text-charcoal mb-4">5. Tus derechos</h2>
        <p className="text-gray-600 mb-6">
          Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales. 
          Para ejercer estos derechos, contáctanos en thelashone@hotmail.com
        </p>

        <h2 className="text-2xl font-serif text-charcoal mb-4">6. Contacto</h2>
        <p className="text-gray-600 mb-6">
          Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:
        </p>
        <div className="bg-gradient-to-r from-theme/5 to-themeDark/10 rounded-xl p-6">
          <p className="text-gray-600 mb-2"><strong>Email:</strong> thelashone@hotmail.com</p>
          <p className="text-gray-600 mb-2"><strong>Teléfono:</strong> (998) 188 0825</p>
          <p className="text-gray-600"><strong>Dirección:</strong> Av. Huayacán KM 2.5 Plaza Andara, Local 9, 77533 Cancún, Q.R.</p>
        </div>
      </div>
    </div>
  );
}
