import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find resources for me.',
  description: 'Tell us how do you feel today, we well help you to identify find out the right resource for your mental wellness',
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
