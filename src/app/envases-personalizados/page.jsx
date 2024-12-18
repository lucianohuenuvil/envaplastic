import Link from "next/link";

export const metadata = {
    title: 'Envases plásticos PET Personalizados - Envaplastic',
    description: 'Brindamos la oportunidad de llevar tu visión al siguiente nivel con nuestro servicio de fabricación de moldes a medida.',
}

export default function EnvasesPersonalizados() {
    return (
        <section className="mt-16 bg-white ">
            {/* Sección superior */}
            <div className="relative overflow-hidden h-[300px]">
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="bg-[url('/images/envases-plasticos.webp')] bg-cover bg-center h-full relative z-0"></div>
                <div className="container absolute inset-0 mx-auto h-full flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8 text-center items-center z-20">
                    <h1 className="text-4xl font-bold text-white">Envases plásticos PET Personalizados</h1>
                    <p className="text-xl text-white mt-4">Lleva tus envases al siguiente nivel</p>
                </div>
            </div>
            <div className="container py-8 mx-auto px-4 sm:px-6 lg:px-8">
                <section className={`mb-10 bg-white relative transition-transform duration-700 ease-out lg:max-h-[450px]`}>
                    <div className="relative h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 h-full">
                            <div className="img-box h-full">
                                <img
                                    src="/images/fondo13.webp"
                                    alt="Envases personalizados"
                                    loading="lazy"
                                    className="rounded-md shadow-xl brightness-90 shadow-md object-cover lg:max-h-[400px] max-h-[250px] max-w-full w-full"
                                />
                            </div>
                            <div className="lg:pl-[30px] flex h-full">
                                <div className="w-full max-h-full overflow-y-auto">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personalización a Tu Medida</h2>
                                    <p className="text-gray-600 mb-6 leading-8 text-justify">
                                        En Envaplastic, no solo ofrecemos envases PET de alta calidad en capacidades de 3 y 5 litros,
                                        sino que también te brindamos la oportunidad de llevar tu visión al siguiente nivel con nuestro servicio de fabricación de moldes a medida.
                                    </p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-4">
                                        <li><strong>Fabricación de Moldes a Medida:</strong> Diseño y fabricación de moldes específicos.</li>
                                        <li><strong>Personalización de Envases:</strong> Adaptamos forma, tamaño, color y más.</li>
                                        <li><strong>Atención al Cliente Personalizada:</strong> Servicio excepcional en cada etapa.</li>
                                        <li><strong>Innovación Continuada:</strong> Nos mantenemos a la vanguardia tecnológica.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Línea de Procesos Estática con Animación al Pasar el Mouse */}
                <div className="relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 my-4 text-center">Moldes a Medida</h3>
                            <p className="text-gray-600 leading-8 text-justify ">
                                Nuestro equipo de expertos trabaja en estrecha colaboración contigo para diseñar y fabricar moldes específicos para tus envases PET.
                                Ya sea que necesites una forma particular, un tamaño único o una función especial, tenemos la experiencia y la tecnología para hacerlo realidad.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 my-4 text-center">Personalización de Envases</h3>
                            <p className="text-gray-600 leading-8 text-justify">
                                Dale vida a tus ideas con la personalización de envases. Desde la forma y el tamaño hasta el color y el etiquetado, podemos adaptar cada aspecto de nuestros
                                envases para reflejar la identidad de tu marca. Tus productos no solo destacarán en el estante, sino que también contarán una historia que resuena con tus clientes.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center my-4">Atención personalizada</h3>
                            <p className="text-gray-600 leading-8 text-justify">
                                Nos enorgullece ofrecer un servicio al cliente excepcional. Desde la consulta inicial hasta la entrega final, nuestro equipo está aquí para asegurarse de que cada
                                paso del proceso sea fluido y satisfactorio. Tu confianza es nuestra prioridad.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 my-4 text-center">Innovación Continuada</h3>
                            <p className="text-gray-600 leading-8 text-justify">
                                Nos mantenemos a la vanguardia de la tecnología y las tendencias del mercado para ofrecer soluciones innovadoras y efectivas.
                                Nos apasiona superar tus expectativas y ayudarte a destacar entre la competencia.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sección de Contáctanos */}
                <div className="mt-16 p-4 bg-gradient-to-r from-[#1e1b4E] to-[#3e3b7c] py-10 text-center rounded-lg">
                    <h3 className="text-3xl font-bold text-white mb-4">¿Listo para personalizar tus envases?</h3>
                    <p className="text-lg text-white mb-6">Trabajamos juntos para crear envases PET que no solo cumplan con tus necesidades, sino que también sorprendan a tus clientes.
                        Contáctanos hoy mismo para explorar cómo nuestro servicio de fabricación de moldes y personalización puede llevarte a cumplir tus objetivos.</p>
                    <Link
                        title="Contáctanos para personalizar tus envases"
                        href="/contacto"
                        className="bg-white text-[#1e1b4E] font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300"
                    >
                        Contáctanos
                    </Link>
                </div>
            </div>
        </section>
    );
}
