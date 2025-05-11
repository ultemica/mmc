'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { FiMoon, FiRotateCw, FiSun, FiSunrise, FiSunset } from 'react-icons/fi'

// 段階ごとの情報
const timePhases = [
  {
    label: 'Morning',
    icon: FiSunrise,
    bg: 'from-blue-200 via-yellow-100 to-blue-100 dark:from-blue-900 dark:via-yellow-900 dark:to-blue-950',
    iconColor: 'text-yellow-400 dark:text-yellow-200'
  },
  {
    label: 'Day',
    icon: FiSun,
    bg: 'from-sky-300 via-blue-100 to-yellow-100 dark:from-blue-800 dark:via-blue-900 dark:to-yellow-900',
    iconColor: 'text-yellow-300 dark:text-yellow-100'
  },
  {
    label: 'Evening',
    icon: FiSunset,
    bg: 'from-pink-200 via-orange-200 to-blue-200 dark:from-pink-900 dark:via-orange-900 dark:to-blue-950',
    iconColor: 'text-orange-400 dark:text-orange-200'
  },
  {
    label: 'Night',
    icon: FiMoon,
    bg: 'from-blue-900 via-indigo-900 to-gray-900 dark:from-blue-950 dark:via-indigo-950 dark:to-black',
    iconColor: 'text-blue-400 dark:text-blue-200'
  },
  {
    label: 'Midnight',
    icon: FiMoon,
    bg: 'from-gray-900 via-black to-blue-900 dark:from-black dark:via-gray-900 dark:to-blue-950',
    iconColor: 'text-gray-300 dark:text-gray-100'
  }
]

export default function Header() {
  const [phase, setPhase] = useState(1)

  const advanceTime = () => setPhase((prev) => (prev + 1) % timePhases.length)

  const { label, icon: Icon, bg, iconColor } = timePhases[phase]

  return (
    <header
      className={cn(
        'transition-colors duration-700 border-b border-gray-200 dark:border-gray-700 shadow-sm',
        'bg-gradient-to-r',
        bg,
        'flex items-center'
      )}
    >
      <div className='flex items-center justify-between px-4 sm:px-0 py-4 sm:py-6 mx-auto w-full sm:max-w-xl '>
        <div className='flex items-center gap-4'>
          <span className='flex items-center justify-center'>
            <Icon className={cn(iconColor, 'drop-shadow text-2xl sm:text-3xl')} aria-label={label} />
          </span>
          <span className='font-bold text-lg sm:text-xl text-gray-800 dark:text-gray-100 tracking-wide select-none drop-shadow'>
            Day 1
          </span>
        </div>
        <div className='flex items-center gap-3'>
          <Button
            variant='ghost'
            size='icon'
            aria-label='Advance time'
            onClick={advanceTime}
            className={cn(
              'text-gray-700 dark:text-gray-200 bg-transparent hover:bg-gray-200/60 dark:hover:bg-gray-700/60 active:bg-gray-300/70 dark:active:bg-gray-800/70 font-bold text-base transition-colors'
            )}
          >
            <FiRotateCw size={28} />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            aria-label='Open menu'
            className={cn(
              'text-gray-400 dark:text-gray-300 bg-transparent hover:bg-gray-200/60 dark:hover:bg-gray-800/60 active:bg-gray-300/70 dark:active:bg-gray-900/70 transition-colors'
            )}
          >
            <FiMenu size={28} />
          </Button>
        </div>
      </div>
    </header>
  )
}
