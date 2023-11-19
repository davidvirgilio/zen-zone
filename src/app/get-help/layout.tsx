import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Help.',
  description: 'A place to find contact information of metal health professionals',
}

export default function getHelpLayout({
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
