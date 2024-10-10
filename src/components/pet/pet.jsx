'use client'

import { useEffect, useRef, useState } from 'react';

export function Pet() {

    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(containerRef.current);
                }
            },
            { threshold: 0.1 } // El 10% del contenedor debe estar visible para activar la animación
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);



    return (
        <section id='explorar'
            ref={containerRef}
            className={`pt-16 bg-white relative transition-transform duration-700 ease-out lg:max-h-[400px] max-h-none ${isVisible ? 'animate-slide-in-right' : 'opacity-0'} overflow-hidden`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 h-full">
                    <div className="flex h-full">
                        <div className="w-full max-h-full overflow-y-auto">
                            <h2 className="text-cyan-500 font-bold text-4xl relative mb-6 ">
                                ¿QUÉ ES EL PET?
                            </h2>
                            <p className=" text-md leading-8 text-gray-500 mx-auto pb-2 text-justify">
                                El PET, o tereftalato de polietileno, es un tipo de plástico que se utiliza ampliamente en diversas aplicaciones. Es conocido por su ligereza, resistencia y durabilidad.
                                Es un material transparente y tiene una buena barrera contra gases, lo que lo hace ideal para el envasado de productos.
                            </p>
                            <p className=" text-md leading-8 text-gray-500 mx-auto pb-2 text-justify">
                                <strong>¿Para qué se usa?</strong>
                            </p>
                            <p className=" text-md leading-8 text-gray-500 mx-auto pb-2 text-justify">
                                El PET se utiliza principalmente en la fabricación de botellas y envases productos de limpieza bebidas y alimentos.
                            </p>                            
                        </div>
                    </div>
                    <div className="img-box h-full brightness-75">
                        <img
                            src="/images/fondo12.jpeg"
                            alt="About Us tailwind page"
                            className="max-lg:mx-auto shadow-md object-cover lg:max-h-[400px] lg:max-w-[600px] max-h-[350px] max-w-full w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}