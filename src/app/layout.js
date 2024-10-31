import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '../components/navigation/navigation'
import { WhatsAppButton } from '@/components/whatsappButton/whatsappButton'
import { Footer } from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Envaplastic Chile - Especialistas en envases plásticos',
  description: 'Somos Envaplastic Chile, dedicados a ofrecer soluciones y proporcionar envases PET en diferentes tipos de medidas, adaptándonos a las demandas del mercado y los requerimientos específicos de cada cliente.',
 
  keywords: 'envaplastic, envases plasticos, envaplastic chile, envases PET, envases personalizados, moldes a medida, PET',
  author: 'Envaplastic',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/logoWEB.ico',
  },
  robots: {
    index: true, // Permite que los motores de búsqueda indexen esta página
    follow: true, // Permite que sigan los enlaces en esta página
  },
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
