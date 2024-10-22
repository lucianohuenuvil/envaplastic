// components/ProductCard.js
'use client'
import React, { useState } from 'react';
import ProductModal from '../productModal/productModal';

const ProductCard = ({ product }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className="flex flex-col">
      <div className="bg-white shadow-md w-full max-w-[480px] sm:max-w-[400px] xs:max-w-[300px] transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg">
        <img
          src={product.imagen}
          alt={product.name}
          style={{ filter: 'brightness(97%)' }}
          className="w-full bg-[#fdfdfd] h-[200px] lg:h-[300px] xs:h-[250px] object-contain transition-opacity duration-300 hover:opacity-90 rounded-t-lg"
        />
        <div className="">
          {/* <h3 className="sm:text-lg xs:text-xs font-semibold text-gray-800 text-center text-gray-400 mb-3">{product.detalles.nombre.descripcion}</h3> */}
          <button
            onClick={openModal}
            className="w-full bg-[#54839D] hover:bg-[#164e63] text-gray-100 py-3 px-6 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 ease-in-out text-md xs:text-sm rounded-b-lg"
          >
            Ver detalles
          </button>
        </div>
      </div>
      {isModalOpen && <ProductModal product={product} onClose={closeModal} />}
    </section>

  );
};

export default ProductCard;