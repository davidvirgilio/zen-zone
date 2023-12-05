import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'
import './ui/styles/statics.css'
import { poppins } from './ui/fonts'
import GoogleAnalytics from '@/components/analytics'



export const metadata: Metadata = {
  title: 'Zen Zone',
  description: "A SAIT's Mental Health Hub develop for New Media Students of the 2023 Class",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
          {children}
        <Footer />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id= 
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
      </body>
    </html>
  )
}
