
import products from "@/data/products.json";
import { Sparkles, ShoppingCart } from "lucide-react";

// Function to get the correct image filename for each product
const getProductImage = (productId: string) => {
  const imageMap: { [key: string]: string } = {
    'glue_stop_100gr': 'glue_stop_100gr.webp',
    'glue_stop_80gr': 'glue_stop_80gr.webp',
    'glue_sticker': 'glue_sticker.webp',
    'lash_mascara': 'lash_mascara.webp',
    'lash_mousse_160ml': 'lash_mousse_160ml.webp',
    'magic_liner': 'magic_liner.webp',
    'lash_brush': 'lash_brush.webp',
    'micro_brush': 'micro_brush.webp',
    'wash_brush': 'wash_brush.webp',
    'remover_apply_brush': 'remover_apply_brush.webp',
    'eyepad_10pack': 'eyepad_10pack.webp',
    'cinta_micropore': 'cinta_micropore.webp'
  };
  return imageMap[productId] || 'glue_stop_100gr.webp';
};

export function ProductGrid({limit}:{limit?:number}){
  const list = limit ? products.slice(0,limit) : products;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map(p => (
        <div key={p.id} className="card p-6 hover:shadow-lg transition-all duration-300 group">
          <div className="h-48 bg-gradient-to-br from-cream to-taupe rounded-xl flex items-center justify-center relative overflow-hidden">
            <img 
              src={`/images/products/${getProductImage(p.id)}`}
              alt={p.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            <div className="absolute top-3 right-3">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-serif group-hover:text-gold transition-colors">{p.name}</h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{p.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-2xl font-bold text-gold">${p.price_mxn} MXN</span>
              <button className="btn btn-outline text-sm px-4 py-2 hover:bg-gold hover:text-white transition-all flex items-center">
                <ShoppingCart className="w-4 h-4 mr-1" />
                Agregar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
