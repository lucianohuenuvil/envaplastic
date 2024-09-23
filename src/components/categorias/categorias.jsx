'use client'

import { useEffect, useRef, useState } from 'react';

export function Categorias() {
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
            { threshold: 0.1 } // Ajusta el umbral según sea necesario
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
        <section
            ref={containerRef}
            className={`w-full mt-16 px-5 sm:px-10 md:px-24 flex flex-col items-center justify-center ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
        >
            <div className="grid grid-cols-2 grid-rows-2 gap-6 max-w-full max-h-[600px]">
                <div className="col-span-2 md:col-span-1 row-span-2 relative overflow-hidden group">
                    <img src="/images/categorias/uniformes_escolares.jpg" className="w-full h-full object-cover brightness-75 transition-opacity duration-300 group-hover:opacity-70" alt="Uniformes Escolares" />
                    <button className="absolute text-4xl inset-0 flex items-center justify-center text-white bg-black bg-opacity-10 hover:bg-opacity-60 transition-opacity duration-300">
                        Uniformes Escolares
                    </button>
                </div>
                <div className="col-span-2 md:col-span-1 row-span-1 relative overflow-hidden group">
                    <img src="/images/categorias/Ropa-corporativa.webp" className="w-full h-full object-cover brightness-75 transition-opacity duration-300 group-hover:opacity-70" alt="Ropa Corporativa" />
                    <button className="absolute text-4xl inset-0 flex items-center justify-center text-white bg-black bg-opacity-10 hover:bg-opacity-60 transition-opacity duration-300">
                        Ropa Corporativa
                    </button>
                </div>
                <div className="col-span-2 md:col-span-1 row-span-1 relative overflow-hidden group">
                    <img src="/images/categorias/deporte.webp" className="w-full h-full object-cover brightness-75 transition-opacity duration-300 group-hover:opacity-50" alt="Deporte" />
                    <button className="absolute text-4xl inset-0 flex items-center justify-center text-white bg-black bg-opacity-10 hover:bg-opacity-60 transition-opacity duration-300">
                        Deporte
                    </button>
                </div>
            </div>
        </section>
    );
}
