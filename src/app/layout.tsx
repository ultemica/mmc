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
      <body className='bg-[#18181b] text-gray-200'>
        <Header />
        {children}
      </body>
    </html>
  )
}
