import Carousel from "@/components/carousel/carousel";
import { Nosotros } from "@/components/nosotros/nosotros";
// import { Categorias } from "@/components/categorias/categorias";
// import Maps from "@/components/maps/maps";
// import { Footer } from "@/components/footer/footer";
// import { ImageSlider } from "@/components/ImageSlider/imageSlider";
// import Banner from "@/components/banner/banner";
import { Pet } from "@/components/pet/pet";
import { SeccionProductos } from "@/components/seccionProductos";
import { SeccionMatriceria } from "@/components/seccionMatriceria/seccionMatriceria";
// import { WhatsAppButton } from "@/components/whatsappButton/whatsappButton";
import { BeneficiosPet } from "@/components/beneficiosPet/beneficiosPet";

export default function Home() {
  return (
    <main className="bg-white">
      <Carousel></Carousel>
      {/* <Banner></Banner> */}
      <Nosotros></Nosotros>
      <Pet></Pet>
      <BeneficiosPet></BeneficiosPet>
      <SeccionProductos></SeccionProductos>
      <SeccionMatriceria></SeccionMatriceria>

      {/* <Carousel></Carousel> */}

      {/* <Categorias></Categorias> */}

      {/* <div className="p-6">
        <h2 className="text-cyan-500 font-manrope font-bold text-4xl lg:text-5xl mb-9 text-center">
          ¿Dónde estamos ubicados?
        </h2>

        <div className="flex flex-wrap justify-center items-stretch gap-6">
          <div className="flex-1 min-w-[300px] max-w-md">
            <Contacto />
          </div>

          <div className="flex-1 min-w-[300px] max-w-3xl">
            <Maps />
          </div>
        </div>
      </div> */}
    </main >
  )
}
