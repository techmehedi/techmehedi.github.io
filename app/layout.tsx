import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mehedi Hasan - Software Engineer',
  description: 'Software Engineer with a passion for building full stack applications with great user experiences.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'Portfolio', 'Mehedi Hasan'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Script 
          src="https://kit.fontawesome.com/0b77e17707.js" 
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  )
}

