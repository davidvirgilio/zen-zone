import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find resources for a friend.',
  description: 'A place where you can find valuable information to help other people in mental stress',
}

export default function ForMeLayout({
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
