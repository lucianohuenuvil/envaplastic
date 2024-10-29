import Link from 'next/link';
import React, { useEffect } from 'react';

export default function ProductModal({ product, onClose }) {

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, []);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white py-4 rounded-lg w-[90vw]  max-h-[90vh]  overflow-auto shadow-xl">
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
              loading="lazy"
              className="h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </div>

          {/* Información del producto */}
          <div className="m-4 md:w-1/2 p-4 sm:p-6 flex flex-col  rounded-lg border border-gray-200 shadow-sm">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
                {product.detalles.nombre.descripcion}
              </h2>

              {
                product?.disponible ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-white rounded-lg shadow-lg">
                      <tbody>
                        {product?.detalles?.material && (
                          <tr className="border-b border-gray-300">
                            <td className="px-4 py-2 font-semibold text-gray-700">Material</td>
                            <td className="px-4 py-2 text-gray-600">{product.detalles.material.descripcion}</td>
                          </tr>
                        )}
                        {product?.detalles?.color && (
                          <tr className="border-b border-gray-300">
                            <td className="px-4 py-2 font-semibold text-gray-700">Color</td>
                            <td className="px-4 py-2 text-gray-600">{product.detalles.color.descripcion}</td>
                          </tr>
                        )}
                        {product?.detalles?.tara && (
                          <tr className="border-b border-gray-300">
                            <td className="px-4 py-2 font-semibold text-gray-700">Tara</td>
                            <td className="px-4 py-2 text-gray-600">{product.detalles.tara.descripcion}</td>
                          </tr>
                        )}
                        {product?.detalles?.taraTA && (
                          <tr className="border-b border-gray-300">
                            <td className="px-4 py-2 font-semibold text-gray-700">Tara TA</td>
                            <td className="px-4 py-2 text-gray-600">{product.detalles.taraTA.descripcion}</td>
                          </tr>
                        )}
                        {product?.detalles?.diametro && (
                          <tr className="border-b border-gray-300">
                            <td className="px-4 py-2 font-semibold text-gray-700">Diámetro</td>
                            <td className="px-4 py-2 text-gray-600">{product.detalles.diametro.descripcion}</td>
                          </tr>
                        )}
                        {product?.detalles?.altura && (
                          <tr className="border-b border-gray-300">
                            <td className="px-4 py-2 font-semibold text-gray-700">Altura</td>
                            <td className="px-4 py-2 text-gray-600">{product.detalles.altura.descripcion}</td>
                          </tr>
                        )}
                        {product?.detalles?.capacidad && (
                          <tr className="border-b border-gray-300">
                            <td className="px-4 py-2 font-semibold text-gray-700">Capacidad</td>
                            <td className="px-4 py-2 text-gray-600">{product.detalles.capacidad.descripcion}</td>
                          </tr>
                        )}
                        {product?.detalles?.aroma && (
                          <tr className="border-b border-gray-300">
                            <td className="px-4 py-2 font-semibold text-gray-700">Aroma</td>
                            <td className="px-4 py-2 text-gray-600">{product.detalles.aroma.descripcion}</td>
                          </tr>
                        )}
                        {product?.detalles?.descripcion && (
                          <tr>
                            <td className="px-4 py-2 font-semibold text-gray-700">Descripción</td>
                            <td className="px-4 py-2 text-gray-600">{product.detalles.descripcion.descripcion}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                ) : (
                  <div className="flex h-[100px] items-center justify-center h-16 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 rounded-lg shadow-inner">
                    <p className="text-xl font-semibold text-white tracking-wider">
                      Producto no disponible
                    </p>
                  </div>
                )
              }
            </div>

            <Link
              href="https://api.whatsapp.com/send?phone=56988113986&text=Hola,%20quiero%20más%20información%20sobre%20sus%20productos."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full bg-[#329E4D] hover:bg-[#229B47] text-white py-2 sm:py-3 rounded-lg transition-all duration-300 text-xs sm:text-sm md:text-base shadow-md text-center">
              Háblanos
            </Link>
            <button
              onClick={onClose}
              className="mt-2 w-full bg-[#B83152] hover:bg-[#9a0f32] text-white py-2 sm:py-3 rounded-lg transition-all duration-300 text-xs sm:text-sm md:text-base shadow-md">
              Cerrar
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
