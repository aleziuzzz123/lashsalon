
'use client';

import { useState } from 'react';
import products from "@/data/products.json";
import { Sparkles, ShoppingCart, Eye, Heart, Star } from "lucide-react";
import { ProductModal } from './ProductModal';

// Function to get the correct image filename for each product
const getProductImage = (productId: string) => {
  const imageMap: { [key: string]: string } = {
    'glue_stop_100gr': 'GLUE STOP.png',
    'glue_stop_80gr': 'gluestop 80.png',
    'glue_sticker': 'GLUE STICKER.png',
    'cinta_micropore': 'CINTA MICROPORE.png',
    'lash_mascara': 'Lash_mascara_1.jpg',
    'lash_mousse_160ml': 'Lash_mousse_160_1.jpg',
    'magic_liner': 'Magic_liner.jpg',
    'lash_brush': 'Lash_brush_1.jpg',
    'micro_brush': 'Micro_brush.jpg',
    'wash_brush': 'Wash_brush.jpg',
    'remover_apply_brush': 'Remover_apply_brush_1.jpg',
    'eyepad_10pack': 'Eyepad_1.jpg',
    'face_scrub': 'Face_scrub_1.jpg',
    'golden_brush': 'Golden_brush_1.jpg',
    'hyaluronic_face': 'Hyaluronic_face_1.jpg',
    'hydra_face_roses': 'Hydra_face_roses_1.jpg',
    'lash_mousse_mini': 'lash_mousse_160ml.webp'
  };
  return imageMap[productId] || 'GLUE STOP.png';
};

// Function to get random MICRO BRUSH image
const getMicroBrushImage = () => {
  const microBrushImages = [
    'Micro_brush.jpg',
    'Micro_brush_2.jpg', 
    'Micro_brush_3.jpg',
    'Micro_brush_4.jpg'
  ];
  const randomIndex = Math.floor(Math.random() * microBrushImages.length);
  return microBrushImages[randomIndex];
};

export function ProductGrid({limit}:{limit?:number}){
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  
  const list = limit ? products.slice(0,limit) : products;
  
  const handleViewMore = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const getAverageRating = (product: any) => {
    if (!product.reviews || product.reviews.length === 0) return 5;
    const sum = product.reviews.reduce((acc: number, review: any) => acc + review.rating, 0);
    return Math.round(sum / product.reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };
  
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map(p => (
          <div key={p.id} className="card p-6 hover:shadow-lg transition-all duration-300 group">
                      <div className="h-48 bg-gradient-to-br from-cream to-taupe rounded-xl flex items-center justify-center relative overflow-hidden">
                        <img
                          src={`/images/products/${p.id === 'micro_brush' ? getMicroBrushImage() : getProductImage(p.id)}`}
                          alt={p.name}
                          className="w-full h-full object-cover"
                        />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            <div className="absolute top-3 right-3 flex gap-2">
              <button
                onClick={() => toggleFavorite(p.id)}
                className={`w-8 h-8 backdrop-blur-sm rounded-full flex items-center justify-center transition-all ${
                  favorites.has(p.id)
                    ? 'bg-theme/90 hover:bg-theme'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <Heart className={`w-4 h-4 ${favorites.has(p.id) ? 'text-white fill-current' : 'text-white'}`} />
              </button>
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-serif group-hover:text-gold transition-colors">{p.name}</h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{p.description}</p>
            
            {/* Additional Product Details */}
            {p.usage_instructions && (
              <p className="text-xs text-gray-500 mt-2 line-clamp-1">{p.usage_instructions}</p>
            )}
            {p.features && (
              <p className="text-xs text-gray-500 mt-2 line-clamp-1">{p.features}</p>
            )}
            {p.contents && (
              <p className="text-xs text-theme mt-1 font-medium">{p.contents}</p>
            )}
            {p.certification && (
              <p className="text-xs text-theme mt-1 font-medium">✓ Certificado</p>
            )}
            {p.availability && (
              <p className="text-xs text-gray-500 mt-1">{p.availability}</p>
            )}
            
            {/* Star Rating */}
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                {renderStars(getAverageRating(p))}
              </div>
              <span className="text-sm text-gray-500">
                ({p.reviews ? p.reviews.length : 0} reseñas)
              </span>
            </div>
            
            <div className="mt-3 flex items-center justify-between">
              <span className="text-2xl font-bold text-gold">${p.price_mxn} MXN</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleViewMore(p)}
                  className="btn btn-outline text-sm px-3 py-2 hover:bg-theme hover:text-white transition-all flex items-center"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  Ver Más
                </button>
                <button className="btn btn-primary text-sm px-3 py-2 flex items-center">
                  <ShoppingCart className="w-4 h-4 mr-1" />
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
      
      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}
