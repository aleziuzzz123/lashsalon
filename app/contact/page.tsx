
export const metadata = { title: "Contacto | THE LASH & CO" };
export default function Page() {
  return (
    <div className="section container">
      <h1 className="mb-2">Contacto</h1>
      <div className="card p-6">
        <p>WhatsApp: <a className="text-gold" href="https://wa.me/529000000000" target="_blank">+52 900 000 0000</a></p>
        <p className="mt-2">Email: <a className="text-gold" href="mailto:contacto@lashco.mx">contacto@lashco.mx</a></p>
        <p className="mt-2">Horarios: Lun–Sáb 10:00–19:00</p>
      </div>
    </div>
  );
}
