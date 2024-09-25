// components/ProductModal.js
import React, { useEffect } from 'react';

export default function ProductModal({ product, onClose }) {

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, []);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white py-4 rounded-lg w-[90vw] max-h-[85vh] overflow-auto shadow-xl">
        <div className="relative flex flex-col md:flex-row h-full">
          {/* Botón de cierre flotante */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 bg-gray-100 text-gray-500 hover:text-gray-800 rounded-full p-2 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Imagen del producto */}
          <div className="w-full flex justify-center md:w-1/2 h-[300px] md:h-full">
            <img
              src={product.imagen}
              alt={product.detalles.nombre.descripcion}
              className="h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </div>

          {/* Información del producto */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
                {product.detalles.nombre.descripcion}
              </h2>
              <div className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                <p><strong>{product.detalles.material.label}</strong>: {product.detalles.material.descripcion}</p>
                <p><strong>{product.detalles.color.label}</strong>: {product.detalles.color.descripcion}</p>
                <p><strong>{product.detalles.tara.label}</strong>: {product.detalles.tara.descripcion}</p>
                <p><strong>{product.detalles.taraTA.label}</strong>: {product.detalles.taraTA.descripcion}</p>
                <p><strong>{product.detalles.diametro.label}</strong>: {product.detalles.diametro.descripcion}</p>
                <p><strong>{product.detalles.altura.label}</strong>: {product.detalles.altura.descripcion}</p>
                <p><strong>{product.detalles.capacidad.label}</strong>: {product.detalles.capacidad.descripcion}</p>
                <p><strong>{product.detalles.aroma.label}</strong>: {product.detalles.aroma.descripcion}</p>
                <p><strong>{product.detalles.descripcion.label}</strong>: {product.detalles.descripcion.descripcion}</p>
              </div>
            </div>
            
            <button 
              onClick={onClose} 
              className="mt-6 w-full bg-[#be123c] text-white py-2 sm:py-3 rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 text-xs sm:text-sm md:text-base shadow-md">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
