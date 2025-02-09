import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BuyMeACoffee } from '@/components/ui/BuyMeACoffee'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'How To Piss Off Men from Other Countries',
  description: 'Cultural Triggers - A World Tour',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#0a0a0f]`}>
        <div className="fixed inset-0 cyberpunk-grid" />
        <div className="fixed inset-0 bg-gradient-to-b from-[#ff2d55]/20 to-transparent" />
        <div className="relative">
          {children}
        </div>
        <div className="fixed bottom-4 right-4 z-50">
          <BuyMeACoffee username="michzarx" />
        </div>
      </body>
    </html>
  )
}
