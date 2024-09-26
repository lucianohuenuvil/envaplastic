import Link from 'next/link';

export default function Banner() {
  return (
    <div className="relative min-h-[400px] md:min-h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/envases-banner.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="relative z-10 p-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">¡Bienvenido a ENVAPLASTIC!</h1>
          <p className="text-md md:text-lg lg:text-xl mb-6">Explora nuestros servicios y productos.</p>
          <Link href="#nosotros" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
              Explorar
          </Link>
        </div>
      </div>
    </div>
  );
}
