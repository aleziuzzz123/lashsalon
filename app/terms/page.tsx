export const metadata = { 
  title: "Términos y Condiciones | THE LASH & CO",
  description: "Términos y condiciones de servicio de THE LASH & CO en Cancún."
};

export default function Terms() {
  return (
    <div className="section container max-w-4xl">
      <h1 className="text-4xl font-serif text-charcoal mb-8">Términos y Condiciones</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-MX')}
        </p>

        <h2 className="text-2xl font-serif text-charcoal mb-4">1. Aceptación de términos</h2>
        <p className="text-gray-600 mb-6">
          Al utilizar nuestros servicios, aceptas estos términos y condiciones. Si no estás de acuerdo 
          con alguna parte de estos términos, no debes utilizar nuestros servicios.
        </p>

        <h2 className="text-2xl font-serif text-charcoal mb-4">2. Servicios ofrecidos</h2>
        <p className="text-gray-600 mb-6">
          THE LASH & CO ofrece servicios de belleza especializados en:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Extensiones de pestañas</li>
          <li>Lifting de pestañas</li>
          <li>Diseño y laminado de cejas</li>
          <li>Depilación con hilo</li>
          <li>Productos de belleza profesional</li>
        </ul>

        <h2 className="text-2xl font-serif text-charcoal mb-4">3. Reservas y pagos</h2>
        <p className="text-gray-600 mb-6">
          • Las reservas requieren un depósito del 30% del costo total del servicio<br/>
          • El saldo restante se paga en el salón al momento del servicio<br/>
          • Los pagos se procesan de forma segura a través de Mercado Pago<br/>
          • Los precios están en pesos mexicanos (MXN) e incluyen IVA
        </p>

        <h2 className="text-2xl font-serif text-charcoal mb-4">4. Política de cancelaciones</h2>
        <p className="text-gray-600 mb-6">
          • <strong>Más de 24 horas:</strong> Se otorga crédito en tienda<br/>
          • <strong>Menos de 24 horas o no-show:</strong> Se pierde el depósito<br/>
          • Las cancelaciones deben notificarse por teléfono o WhatsApp
        </p>

        <h2 className="text-2xl font-serif text-charcoal mb-4">5. Horarios de atención</h2>
        <p className="text-gray-600 mb-6">
          • <strong>Lunes a Viernes:</strong> 9:00 AM - 8:00 PM<br/>
          • <strong>Sábados:</strong> 9:00 AM - 5:00 PM<br/>
          • <strong>Domingos:</strong> Cerrado
        </p>

        <h2 className="text-2xl font-serif text-charcoal mb-4">6. Responsabilidades del cliente</h2>
        <p className="text-gray-600 mb-6">
          • Llegar puntualmente a tu cita<br/>
          • Informar sobre alergias o condiciones médicas relevantes<br/>
          • Seguir las recomendaciones de cuidado post-tratamiento<br/>
          • Respetar las políticas del salón
        </p>

        <h2 className="text-2xl font-serif text-charcoal mb-4">7. Limitación de responsabilidad</h2>
        <p className="text-gray-600 mb-6">
          THE LASH & CO no se hace responsable por reacciones alérgicas no informadas previamente 
          o por el incumplimiento de las recomendaciones de cuidado post-tratamiento.
        </p>

        <h2 className="text-2xl font-serif text-charcoal mb-4">8. Modificaciones</h2>
        <p className="text-gray-600 mb-6">
          Nos reservamos el derecho de modificar estos términos en cualquier momento. 
          Los cambios entrarán en vigor inmediatamente después de su publicación.
        </p>

        <h2 className="text-2xl font-serif text-charcoal mb-4">9. Contacto</h2>
        <p className="text-gray-600 mb-6">
          Para cualquier consulta sobre estos términos y condiciones:
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
