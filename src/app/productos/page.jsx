import ProductCard from "@/components/productCard/productCard";
import { productos } from "../../../public/data/productos";


export const metadata = {
  title: 'Nuestros productos - Envaplastic',
  description: 'Descubre nuestros envases PET',
}

const ProductosPage = () => {
  return (
    <section>
      <div className="bg-[#f1f5f9]">
        {/* Encabezado */}
        <div className="h-[300px] bg-[url('/images/fondo13.webp')] bg-cover bg-center relative mt-16">
          {/* Capa superpuesta para el brillo oscuro */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Contenido centrado */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white">Nuestros Productos</h1>
              <p className="text-xl text-white mt-4">
                La elección Inteligente con nuestros Envases PET
              </p>
            </div>
          </div>
        </div>
        {/* Sección de texto */}
        <div className="container  max-w-7xl mx-auto px-4 py-12">
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

      <div className="pt-4 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center pb-4">
            <h2 className="text-3xl font-bold text-gray-600 text-left">Envases PET:</h2>
          </div>

          {/* Listado de productos */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 mb-8">
            {productos.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default ProductosPage;
