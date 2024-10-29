"use client"
import React, { useEffect, useState, useRef } from 'react';

export default function Carousel() {

    const [activeSlide, setActiveSlide] = useState(0);
    const [animateSlide, setAnimateSlide] = useState(null);
    const slides = [
        {
            image: "/images/fondo1.webp",
            text: "¡Bienvenidos a ENVAPLASTIC!",
            subtitle: "Explora nuestros productos y servicios",
            buttonLabel: "Explorar",
            buttonLink: "/#nosotros",
        },
        {
            image: "/images/fondo9.webp",
            text: "ENVAPLASTIC",
            subtitle: "En ENVAPLASTIC somos especialistas en envases plásticos",
            buttonLabel: null,
            buttonLink: "#",
        },
    ];

    const intervalRef = useRef(null);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
        resetInterval();

        // Solo aplicar animación y estilo personalizado cuando se muestre la segunda diapositiva
        if (index === 1) {
            setAnimateSlide(index);
        } else {
            setAnimateSlide(null);
        }
    };

    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setActiveSlide((prevSlide) => {
                const nextSlide = (prevSlide + 1) % slides.length;
                handleSlideChange(nextSlide);
                return nextSlide;
            });
        }, 5000); // Cambia la diapositiva cada 5000 milisegundos (6 segundos)
    };

    useEffect(() => {
        resetInterval();

        return () => clearInterval(intervalRef.current);
    }, [slides.length]);

    return (
        <div className="relative w-full h-screen overflow-hidden brightness-90">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative flex-shrink-0 w-full h-screen">
                        <img src={slide.image} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />

                        {/* Contenedor de texto y botón */}
                        <div className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50`}>
                            <h2 className={`font-semibold mb-4 ${index === 1 ? 'text-5xl md:text-6xl leading-tight tracking-wide' : 'text-3xl'} ${index === 1 && animateSlide === 1 ? 'animate-fadeInUp' : ''}`}>
                                {slide.text}
                            </h2>
                            <p className={`mb-4 ${index === 1 ? 'text-xl md:text-2xl text-gray-300' : ''} ${index === 1 && animateSlide === 1 ? 'animate-fadeInUp' : ''}`}>
                                {slide.subtitle}
                            </p>

                            {slide.buttonLabel &&
                                <a href={slide.buttonLink} className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-800 transition duration-300">
                                    {slide.buttonLabel}
                                </a>
                            }
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-blue-600' : 'bg-gray-400'}`}
                        aria-current={index === activeSlide}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => handleSlideChange(index)}
                    ></button>
                ))}
            </div>

            <button type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => handleSlideChange((activeSlide - 1 + slides.length) % slides.length)}>
            </button>

            <button type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => handleSlideChange((activeSlide + 1) % slides.length)}>
            </button>
        </div>
    );
}
