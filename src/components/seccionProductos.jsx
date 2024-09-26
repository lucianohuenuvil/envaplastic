import Link from "next/link";

export function SeccionProductos() {
    return (

                <Link href="/productos" className="relative block w-full min-h-[300px] max-h-[600px] h-[40vw] bg-cover bg-center text-white">
            {/* Imagen de fondo adaptativa */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src='/images/petImage.jpg'
                    alt="Imagen de productos"
                    className="w-full h-full object-cover"
                    style={{ filter: 'brightness(50%)' }} 
                />
            </div>
            <div className="flex w-full h-full relative">
                <h2 
                    className="text-2xl flex w-full h-full items-center justify-center md:text-5xl font-bold text-center text-white hover:text-[#fb7185]" 
                    style={{ textDecorationThickness: '2.5px' }} 
                >
                    Productos
                </h2>
            </div>
        </Link>

    );
}
