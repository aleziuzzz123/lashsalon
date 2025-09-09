
import { ProductGrid } from "@/components/ProductGrid";

export const metadata = { title: "Tienda | THE LASH & CO" };

export default function Page() {
  return (
    <div className="section container">
      <h1 className="mb-2">Tienda</h1>
      <p className="mb-8">Productos profesionales para el cuidado de pestañas y cejas.</p>
      <ProductGrid />
    </div>
  );
}
