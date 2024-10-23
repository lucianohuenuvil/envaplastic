import Link from "next/link";

export function ContactBanner(){
    return (
        <div className="mt-16 relative min-h-[300px] md:min-h-[400px]">
          <img src="/images/contact-image.webp" alt="Banner de contacto" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div className="relative z-10 p-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">¡Habla con nosotros!</h1>
              <p className="text-md md:text-lg lg:text-xl mb-6">Para cualquier duda o consulta, póngase en contacto con nosotros y le ayudaremos encantados.</p>
              <Link href="#formularioContacto" title="Ir al formulario de contacto" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
                  Envíanos un mensaje
              </Link>
            </div>
          </div>
        </div>
    );
}
