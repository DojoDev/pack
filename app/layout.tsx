import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '🔥 Pack de Figurinhas para Stories - Mais de 500 Figurinhas Exclusivas!',
  description: 'Pack com mais de 500 figurinhas exclusivas para bombar seus Stories no Instagram! Oferta limitada por apenas R$ 19,90. Compre agora!',
  openGraph: {
    type: 'website',
    title: '🔥 Pack de Figurinhas para Stories - Mais de 500 Figurinhas!',
    description: 'Pack exclusivo com mais de 500 figurinhas para engajar seus Stories no Instagram. Oferta por tempo limitado!',
  },
  twitter: {
    card: 'summary_large_image',
    title: '🔥 Pack de Figurinhas para Stories',
    description: 'Mais de 500 figurinhas exclusivas para bombar no Instagram!',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}