
import products from "@/data/products.json";

export function ProductGrid({limit}:{limit?:number}){
  const list = limit ? products.slice(0,limit) : products;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map(p => (
        <div key={p.id} className="card p-6">
          <div className="h-36 bg-cream rounded-xl"></div>
          <h3 className="text-2xl mt-4">{p.name}</h3>
          <div className="mt-2 font-semibold">${'{'}p.price_mxn{'}'} MXN</div>
          <button className="btn btn-outline mt-4">Agregar al carrito</button>
        </div>
      ))}
    </div>
  )
}
