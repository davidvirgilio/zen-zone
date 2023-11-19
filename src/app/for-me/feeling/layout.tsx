import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EMOTION.',
  description: 'This is the page to describe emotions',
}

export default function emotionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <main>
      {children} 
    </main>
  )
}
