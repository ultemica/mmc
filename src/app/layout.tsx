import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Case Closed',
  description: 'Murder Mystery with ChatGPT'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <head>
        <link rel='manifest' href='/manifest.json' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
        <meta name='theme-color' content='#f3f4f6' media='(prefers-color-scheme: light)' />
        <meta name='theme-color' content='#0A0A0A' media='(prefers-color-scheme: dark)' />
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no viewport-fit=cover' />
      </head>
      <body className='bg-[#18181b] text-gray-200'>
        <Header />
        {children}
      </body>
    </html>
  )
}
