
import products from "@/data/products.json";

export function ProductGrid({limit}:{limit?:number}){
  const list = limit ? products.slice(0,limit) : products;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map(p => (
        <div key={p.id} className="card p-6 hover:shadow-lg transition-all duration-300 group">
          <div className="h-48 bg-gradient-to-br from-cream to-taupe rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            <div className="text-center z-10">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">✨</span>
              </div>
              <p className="text-sm text-gray-600 font-medium">{p.category}</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-serif group-hover:text-gold transition-colors">{p.name}</h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{p.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-2xl font-bold text-gold">${p.price_mxn} MXN</span>
              <button className="btn btn-outline text-sm px-4 py-2 hover:bg-gold hover:text-white transition-all">
                Agregar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
