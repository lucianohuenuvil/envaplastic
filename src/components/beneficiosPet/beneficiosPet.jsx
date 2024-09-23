'use client'

import { useEffect, useRef, useState } from 'react';

const beneficios = [
    {
        title: "Versatilidad",
        description: "El PET se puede moldear en diversas formas y tamaños, lo que lo hace ideal para una amplia gama de productos.",
        icon: "M8 12h8m0 0L13 8m3 4l-3 4",
        color: "bg-[#885f23]"

    },
    {
        title: "Seguridad",
        description: "El PET es seguro para el contacto con alimentos y bebidas, ya que no libera sustancias nocivas.",
        icon: "M9 12l2 2 4-4",
        color: "bg-[#32805d]"
    },
    {
        title: "Ligero y resistente",
        description: "El PET es más ligero que muchos otros materiales, lo que reduce los costos de transporte y la huella de carbono asociada. Además, es resistente a impactos y a la humedad.",
        icon: "M4 4h16v16H4V4z",
        color: "bg-[#9e525d]"
    }
];


export function BeneficiosPet() {
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
            { threshold: 0.1 }
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
            className={`pt-16 pb-16 transition-transform duration-700 ease-out ${isVisible ? 'animate-slide-in-up' : 'opacity-0'} from-blue-100 to-blue-300`}
        >
            <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {beneficios.map((beneficio, index) => (
                        <div
                            key={index}
                            className={`text-center p-6 shadow-md rounded-lg transform hover:scale-105 transition-transform duration-300 ${beneficio.color}`}
                        >
                            <div className="flex justify-center mb-4">
                                <svg
                                    className="w-12 h-12 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d={beneficio.icon} />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-2xl text-white">
                                {beneficio.title}
                            </h3>
                            <p className="text-white mt-4">
                                {beneficio.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
