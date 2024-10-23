import { ContactBanner } from "@/components/contactBanner/contactBanner";
import { Formulario } from "@/components/formulario/formulario";
import Maps from "@/components/maps/maps";


export const metadata = {
    title: 'Contáctanos - Envaplastic',
    description: 'Estamos aquí para ayudarte. Contáctanos para más información sobre nuestros envases personalizados.',
  }
  

export default function Contacto() {
    return (
        <section className="bg-white relative ">
            <ContactBanner></ContactBanner>
            <div className="py-6 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative ">
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