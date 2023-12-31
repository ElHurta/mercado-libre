import type { Metadata } from 'next'
import './globals.css'

import Header from './components/Header/Header';

export const metadata: Metadata = {
  title: 'Mercado Libre Dashboard',
  description: 'Dashboard de Mercado Libre API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
