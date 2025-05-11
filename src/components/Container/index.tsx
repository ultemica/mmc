import { cn } from '@/lib/utils'
import type React from 'react'

export default function Container({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <main className={cn('w-full max-w-xl mx-auto px-4', className)}>{children}</main>
}
