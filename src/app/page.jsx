import Carousel from "@/components/carousel/carousel";
import { Nosotros } from "@/components/nosotros/nosotros";
import { Pet } from "@/components/pet/pet";
import { SeccionProductos } from "@/components/seccionProductos";
import { SeccionMatriceria } from "@/components/seccionMatriceria/seccionMatriceria";
import { BeneficiosPet } from "@/components/beneficiosPet/beneficiosPet";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logoWEB.png" type="image/png" />
        <link rel="icon" href="/logoWEB.png" type="image/png" />
        <meta property="og:image" content="/logoWEB.png" />
      </Head>
      <main className="bg-white">
        <Carousel></Carousel>
        <Nosotros></Nosotros>
        <Pet></Pet>
        <BeneficiosPet></BeneficiosPet>
        <SeccionProductos></SeccionProductos>
        <SeccionMatriceria></SeccionMatriceria>
      </main >
    </>
  )
}
