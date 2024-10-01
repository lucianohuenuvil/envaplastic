// pages/productos.js

import ProductCard from "@/components/productCard/productCard";

const products = [
  {
    id: '1',
    imagen: '/images/productos/botella5L.png',
    detalles: {
      nombre: {
        label: 'Nombre',
        descripcion: 'ENVASE PET DESECHABLE 5 LITROS'
      },
      material: {
        label: 'Material: ',
        descripcion: 'Polietileno Tereftalato (PET)'
      },
      color: {
        label: 'Color: ',
        descripcion: 'Incoloro'
      },
      tara: {
        label: 'Tara',
        descripcion: 'ENVASE PET DESECHABLE 5 LITROS'
      },
      taraTA: {
        label: 'Tara con Tapa y Asa: ',
        descripcion: '105 gramos'
      },
      diametro: {
        label: 'Diametro: ',
        descripcion: 'Incoloro'
      },
      altura: {
        label: 'Altura: ',
        descripcion: 'ENVASE PET DESECHABLE 5 LITROS'
      },
      capacidad: {
        label: 'Material: ',
        descripcion: '6 Litros'
      },
      aroma: {
        label: 'Aroma: ',
        descripcion: 'Sin olor'
      },
      descripcion: {
        label: 'Descripción : ',
        descripcion: 'Botellón de Polierileno Tereftalato (PET) con capacidad para 6 Litros, testeado y certificado de origen, es apto para envasado de líquidos y libre de Bisfenol A (BPA)'
      },
    }
  },
  {
    id: '2',
    imagen: '/images/productos/botella6L.png',
    detalles: {
      nombre: {
        label: 'Nombre',
        descripcion: 'ENVASE PET DESECHABLE 6 LITROS'
      },
      material: {
        label: 'Material: ',
        descripcion: ''
      },
      color: {
        label: 'Color: ',
        descripcion: 'Incoloro'
      },
      tara: {
        label: 'Tara',
        descripcion: 'ENVASE PET DESECHABLE 5 LITROS'
      },
      taraTA: {
        label: 'Material: ',
        descripcion: ''
      },
      diametro: {
        label: 'Diametro: ',
        descripcion: 'Incoloro'
      },
      altura: {
        label: 'Altura: ',
        descripcion: 'ENVASE PET DESECHABLE 5 LITROS'
      },
      capacidad: {
        label: 'Material: ',
        descripcion: '6 Litros'
      },
      aroma: {
        label: 'Aroma: ',
        descripcion: 'Sin olor'
      },
      descripcion: {
        label: 'Descripción : ',
        descripcion: 'Botellón de Polierileno Tereftalato (PET) con capacidad para 6 Litros, testeado y certificado de origen, es apto para envasado de líquidos y libre de Bisfenol A (BPA)'
      },
    }
  },
];

const ProductosPage = () => {
  return (
 <section>
      <div className="bg-[#f1f5f9]">
        {/* Encabezado */}
        <div className="bg-[#1e1b4b] relative mt-16">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-white">Nuestros Productos</h1>
            <p className="text-xl text-white mt-4">
              La elección Inteligente con nuestros Envases PET de 3 y 5 Litros
            </p>
          </div>
        </div>

        {/* Sección de texto */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-lg text-gray-700 leading-relaxed text-justify">
              <p>
                En un mundo donde la sostenibilidad y la eficiencia son más importantes que nunca, te presentamos nuestros envases de plástico PET, diseñados para satisfacer tus necesidades con estilo y responsabilidad. Con capacidades de 3 y 5 litros.
              </p>
              <p className="mt-4">
                Nuestros envases son resistentes y seguros, garantizando que tus productos lleguen a su destino en óptimas condiciones. Cumplimos con los más altos estándares de calidad, asegurando que cada envase sea fiable y duradero.
              </p>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed text-justify">
              <p>
                Son perfectos para una amplia gama de productos, desde alimentos hasta bebidas, productos químicos y más. Su diseño funcional y moderno se adapta a cualquier necesidad, manteniendo siempre la frescura y calidad de su contenido.
              </p>
              <p className="mt-4">
                Con nuestros envases PET, tendrás la tranquilidad de contar con soluciones de embalaje sostenibles, eficientes y seguras.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Lista de productos</h2>
          </div> */}

          {/* Listado de productos */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default ProductosPage;
