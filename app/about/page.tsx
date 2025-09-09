
export const metadata = { title: "Nosotras | THE LASH & CO" };
export default function Page() {
  return (
    <div className="section container">
      <h1 className="mb-2">Nuestra filosofía</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-2xl mb-2">Belleza, higiene y precisión</h3>
          <p>Trabajamos con limpieza profunda, diseño de rostro y materiales tipo mink. Garantía 48h en extensiones.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-2xl mb-2">Ubicación</h3>
          <p>Cancún, QRoo. Abierto Lun–Sáb. Contáctanos por WhatsApp para ubicarnos fácilmente.</p>
        </div>
      </div>
    </div>
  );
}
