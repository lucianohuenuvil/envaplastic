import { ContactBanner } from "@/components/contactBanner/contactBanner";
import { Formulario } from "@/components/formulario/formulario";
import Maps from "@/components/maps/maps";
import { Footer } from "@/components/footer/footer";

export default function Contacto() {
    return (
        // <div className="bg-white">
        //     <ContactBanner></ContactBanner>
        //     <div className="flex flex-wrap justify-center items-stretch gap-6">
        //         <div className="flex-1 min-w-[300px] flex-grow">
        //             <Formulario className="h-full"></Formulario>
        //         </div>

        //         <div className="flex-1 min-w-[300px] flex-grow">
        //             <Maps className="h-full"></Maps>
        //         </div>
        //     </div>
        //     <Footer></Footer>
        // </div>

        <section className="bg-white relative ">
            <ContactBanner></ContactBanner>
            <div className="py-12 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative ">

                {/* <h2 className="text-gray-500 font-manrope font-bold text-3xl mb-9 text-center ">
                    ¿Dónde estamos ubicados?
                </h2> */}

                <div className="flex flex-wrap justify-center items-stretch gap-6">
                    <div className="flex-1 min-w-[300px] ">
                        <Formulario />
                    </div>

                    <div className="flex-1 min-w-[300px] max-w-3xl">
                        <Maps />
                    </div>
                </div>
            </div>
        </section>

    )
}