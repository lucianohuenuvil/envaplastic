'use client'

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function Nosotros() {
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
        <section id='nosotros'
            ref={containerRef}
            className={`pt-16 bg-white relative transition-transform duration-700 ease-out lg:max-h-[400px] max-h-none ${isVisible ? 'animate-slide-in-left' : 'opacity-0'} overflow-hidden`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 h-full">
                    <div className="img-box h-full">
                        <img
                            src="/images/fondo3.webp"
                            alt="About Us tailwind pagsse"
                            loading="lazy"
                            className="max-lg:mx-auto brightness-75 shadow-md object-cover lg:max-h-[400px] lg:max-w-[600px] max-h-[350px] max-w-full w-full"
                        />
                    </div>
                    <div className="lg:pl-[30px] flex h-full">
                        <div className="w-full max-h-full overflow-y-auto">
                            <h2 className="text-cyan-500 font-manrope font-bold text-4xl lg:text-4xl mb-6 max-lg:text-center relative">
                                NUESTRA EMPRESA
                            </h2>
                            <p className="text-md leading-8 text-gray-500  mx-auto pb-2 text-justify">
                                <strong>ENVAPLASTIC</strong> es una empresa familiar dedicada a la fabricación y venta de envases de plástico PET. Desde nuestros inicios, hemos estado dedicados
                                a ofrecer soluciones de envasados innovadoras y de alta calidad que satisfagan las diversas necesidades de nuestros clientes.
                            </p>
                            <p className="font-normal text-md leading-8 text-gray-500 mx-auto text-justify">
                                Nuestra empresa nació con el objetivo de proporcionar envases PET en diferentes tipos de medidas, adaptándonos
                                a las demandas del mercado y los requerimientos específicos de cada cliente. Gracias a nuestra experiencia y compromiso,
                                hemos logrado posicionarnos como un referente en la industria, siempre manteniendo la esencia de ser una compañía familiar
                                que valora la confianza y el compromiso por nuestros productos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
