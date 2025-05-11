import { cn } from '@/lib/utils'
import type React from 'react'

export default function Container({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <main className={cn('flex-1 flex flex-col w-full max-w-xl mx-auto p-4', className)}>{children}</main>
}
