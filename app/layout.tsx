import './globals.css'
import type { Metadata } from 'next'
import localFont from '@next/font/local'
import { Roboto_Mono } from '@next/font/google'

export const metadata: Metadata = {
  title: 'XP',
  description: 'Get wallet-friendy tickets to your favorite shows',
}

const sequel = localFont({
  src: [
    {
      path: '../public/fonts/sequel-85.ttf',
      weight: '900',
    }
  ],
  variable: '--font-sequel',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sequel.variable} ${robotoMono.variable} font-sans text-beige`}>{children}</body>
    </html>
  )
}
