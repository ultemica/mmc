'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { setTheme } = useTheme()
  const handleClick = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'dark') return 'light'
      if (prevTheme === 'light') return 'dark'
      return 'dark'
    })
  }

  return (
    <Button variant='outline' size='icon' onClick={handleClick}>
      <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      {/* <span className='sr-only'>Toggle theme</span> */}
    </Button>
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align='end'>
    //     <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  )
}
