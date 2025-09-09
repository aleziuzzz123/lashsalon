
import { ServiceGrid } from "@/components/ServiceGrid";

export const metadata = { title: "Servicios | THE LASH & CO" };

export default function Page() {
  return (
    <div className="section container">
      <h1 className="mb-2">Servicios</h1>
      <p className="mb-8">Extensiones, lifting, cejas, depilación con hilo y más. Precios en MXN.</p>
      <ServiceGrid />
    </div>
  );
}
