import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zen Zone',
  description: 'A SAIT\'s Mental Health Hub develop for New Media Students of the 2023 Class',
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
        <Footer />
      </body>
    </html>
  )
}
