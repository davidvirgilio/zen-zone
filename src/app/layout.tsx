import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'
import './ui/styles/statics.css'
import { poppins } from './ui/fonts'
import ReactGA from "react-ga4"



export const metadata: Metadata = {
  title: 'Zen Zone',
  description: "A SAIT's Mental Health Hub develop for New Media Students of the 2023 Class",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  ReactGA.initialize('G-HNGR2YN2DN');

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
