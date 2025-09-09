
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ProductGrid } from "@/components/ProductGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section container">
        <h2 className="mb-6">Nuestros servicios estrella</h2>
        <ServiceGrid limit={6} />
        <div className="mt-6 flex gap-3">
          <Link href="/book" className="btn btn-primary">Reservar ahora</Link>
          <Link href="/services" className="btn btn-outline">Ver todos los servicios</Link>
        </div>
      </section>
      <section className="section container">
        <h2 className="mb-6">Tienda</h2>
        <ProductGrid limit={6} />
        <div className="mt-6">
          <Link href="/shop" className="btn btn-outline">Ir a la tienda</Link>
        </div>
      </section>
    </>
  );
}
