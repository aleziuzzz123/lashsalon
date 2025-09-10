'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ShoppingCart, Star, Shield, Truck, Heart } from 'lucide-react';
import products from '@/data/products.json';
import { ReviewCarousel } from './ReviewCarousel';

interface ProductModalProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Get all images for this product
  const getProductImages = (productId: string) => {
    const imageMap: { [key: string]: string[] } = {
      'micro_brush': [
        'Micro_brush.jpg',
        'Micro_brush_2.jpg', 
        'Micro_brush_3.jpg',
        'Micro_brush_4.jpg'
      ],
      'wash_brush': ['Wash_brush.jpg'],
      'glue_stop_100gr': ['GLUE STOP.png', 'GLUE STOP 2.png'],
      'glue_stop_80gr': ['gluestop 80.png', 'gluestop 80 2.png'],
      'glue_sticker': ['GLUE STICKER.png', 'GLUE STICKER 2.png'],
      'cinta_micropore': ['CINTA MICROPORE.png'],
      'lash_mascara': ['Lash_mascara_1.jpg', 'Lash_mascara_2.jpg'],
      'lash_mousse_160ml': ['Lash_mousse_160_1.jpg', 'Lash_mousse_160_2.jpg'],
      'magic_liner': ['Magic_liner.jpg'],
      'lash_brush': ['Lash_brush_1.jpg', 'Lash_brush_2.jpg'],
      'remover_apply_brush': [
        'Remover_apply_brush_1.jpg',
        'Remover_apply_brush_2.jpg',
        'Remover_apply_brush_3.jpg',
        'Remover_apply_brush_4.jpg'
      ],
      'eyepad_10pack': ['Eyepad_1.jpg', 'Eyepad_2.jpg'],
      'face_scrub': ['Face_scrub_1.jpg', 'Face_scrub_2.jpg'],
      'golden_brush': ['Golden_brush_1.jpg', 'Golden_brush_2.jpg', 'Golden_brush_3.jpg'],
      'hyaluronic_face': ['Hyaluronic_face_1.jpg', 'Hyaluronic_face_2.jpg'],
      'hydra_face_roses': ['Hydra_face_roses_1.jpg', 'Hydra_face_roses_2.jpg'],
      'lash_mousse_mini': ['lash_mousse_160ml.webp']
    };
    return imageMap[productId] || ['GLUE STOP.png'];
  };

  const productImages = getProductImages(product.id);
  const hasMultipleImages = productImages.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] md:max-h-[90vh] overflow-hidden">
        <div className="max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 z-10 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <X className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-gradient-to-br from-cream to-taupe relative overflow-hidden">
              <img
                src={`/images/products/${productImages[currentImageIndex]}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                  
                  {/* Image Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8 flex flex-col">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-theme/10 text-theme text-sm font-medium rounded-full">
                  {product.category}
                </span>
                {product.certification && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    Certificado
                  </span>
                )}
              </div>
              <h2 className="text-3xl font-serif text-charcoal mb-2">{product.name}</h2>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-theme">${product.price_mxn} MXN</span>
                {product.availability && (
                  <span className="text-sm text-gray-500">{product.availability}</span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Descripción</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-charcoal mb-3">¿Por qué elegir este producto?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-theme/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star className="w-3 h-3 text-theme" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Calidad Profesional</p>
                    <p className="text-sm text-gray-600">Diseñado específicamente para profesionales de extensiones de pestañas</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-theme/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-3 h-3 text-theme" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Seguro y Confiable</p>
                    <p className="text-sm text-gray-600">Materiales de alta calidad que no dañan las pestañas naturales</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-theme/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Truck className="w-3 h-3 text-theme" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Envío Rápido</p>
                    <p className="text-sm text-gray-600">Recibe tu pedido en 2-3 días hábiles en toda la República</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            {(product.usage_instructions || product.features || product.contents) && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-charcoal mb-3">Información Adicional</h3>
                <div className="space-y-2 text-sm">
                  {product.usage_instructions && (
                    <div>
                      <span className="font-medium text-charcoal">Modo de uso:</span>
                      <p className="text-gray-600">{product.usage_instructions}</p>
                    </div>
                  )}
                  {product.features && (
                    <div>
                      <span className="font-medium text-charcoal">Características:</span>
                      <p className="text-gray-600">{product.features}</p>
                    </div>
                  )}
                  {product.contents && (
                    <div>
                      <span className="font-medium text-charcoal">Contenido:</span>
                      <p className="text-theme font-medium">{product.contents}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Reviews Section */}
            {product.reviews && product.reviews.length > 0 && (
              <div className="mb-6">
                <ReviewCarousel reviews={product.reviews} title="Reseñas de Clientes" />
              </div>
            )}

            {/* Actions */}
            <div className="mt-auto pt-6 border-t border-gray-200">
              <div className="flex gap-4">
                <button className="flex-1 btn btn-primary flex items-center justify-center gap-2 py-4">
                  <ShoppingCart className="w-5 h-5" />
                  Agregar al Carrito
                </button>
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    isFavorite 
                      ? 'bg-theme hover:bg-theme/90' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'text-white fill-current' : 'text-gray-600'}`} />
                </button>
              </div>
              
              {product.wholesale_note && (
                <p className="text-center text-sm text-gray-500 mt-3">{product.wholesale_note}</p>
              )}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
