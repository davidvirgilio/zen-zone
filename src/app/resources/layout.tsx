import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources catalog',
  description: 'A place where you can find most of the resources available for students at SAIT',
}

export default function resourcesLayout({
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
