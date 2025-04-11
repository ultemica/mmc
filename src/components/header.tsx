// components/header.tsx
import Link from 'next/link'
import { ModeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className='w-full border-b shadow-sm'>
      <div className='container mx-auto flex items-center justify-between h-16 px-4'>
        {/* ロゴ */}
        <Link href='/' className='text-xl font-bold'>
          Quantumleap
        </Link>

        {/* ナビゲーション */}
        <nav className='flex items-center gap-4'>
          <Link href='/about' className='text-sm font-medium hover:underline'>
            ABOUT US
          </Link>
          <Link href='/services' className='text-sm font-medium hover:underline'>
            SERVICES
          </Link>
          <Link href='/contact' className='text-sm font-medium hover:underline'>
            CONTACT
          </Link>

          {/* CTAボタン */}
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
