import Carousel from "@/components/carousel/carousel";
import { Nosotros } from "@/components/nosotros/nosotros";
import { Pet } from "@/components/pet/pet";
import { SeccionProductos } from "@/components/seccionProductos";
import { SeccionMatriceria } from "@/components/seccionMatriceria/seccionMatriceria";
import { BeneficiosPet } from "@/components/beneficiosPet/beneficiosPet";

export default function Home() {
  return (
    <main className="bg-white">
      <Carousel></Carousel>
      <Nosotros></Nosotros>
      <Pet></Pet>
      <BeneficiosPet></BeneficiosPet>
      <SeccionProductos></SeccionProductos>
      <SeccionMatriceria></SeccionMatriceria>
    </main >
  )
}
