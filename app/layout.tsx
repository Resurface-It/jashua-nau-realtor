import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'J.NAU REAL ESTATE | Eugene & Springfield Real Estate Expert',
  description: 'Expert real estate services in Eugene, Springfield, and Lane County, Oregon. Buy or sell with confidence. Local expertise, proven results.',
  keywords: 'Eugene real estate, Springfield real estate, Lane County homes, Eugene homes for sale, Springfield homes for sale, real estate agent Eugene',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

