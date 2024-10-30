import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '../components/navigation/navigation'
import { WhatsAppButton } from '@/components/whatsappButton/whatsappButton'
import { Footer } from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Envaplastic Chile - Envases PET Personalizados de Alta Calidad',
  description: 'Envaplastic Chile ofrece envases PET personalizados de alta calidad, diseñados y fabricados localmente para satisfacer las necesidades del mercado chileno.',
  keywords: 'envaplastic, envases plasticos, envaplastic chile, envases PET, envases personalizados, moldes a medida, PET',
  author: 'Envaplastic',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/logoWEB.png',
  },
  robots: {
    index: true, // Permite que los motores de búsqueda indexen esta página
    follow: true, // Permite que sigan los enlaces en esta página
  },
  // openGraph: {
  //   title: 'Envaplastic - Envases PET Personalizados',
  //   description: 'Explora nuestra gama de envases PET personalizados diseñados para adaptarse a tus necesidades.',
  //   url: 'https://www.envaplastic.cl',
  //   images: [
  //     {
  //       url: '/images/envaplastic-og-image.jpg',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Envaplastic',
  //     },
  //   ],
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation></Navigation>
        {children}
        <WhatsAppButton></WhatsAppButton>
        <Footer></Footer>
      </body>
    </html>
  )
}
