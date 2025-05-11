'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { type Phase, PhaseType } from '@/models/mmc.dto'
import { useSystemStore } from '@/stores/system'
import { FiMenu } from 'react-icons/fi'
import { FiMoon, FiRotateCw, FiSun, FiSunrise, FiSunset } from 'react-icons/fi'

// 段階ごとの情報
const phases: Phase[] = [
  {
    label: PhaseType.Morning,
    icon: FiSunrise,
    bg: 'from-blue-200 via-yellow-100 to-blue-100 dark:from-blue-900 dark:via-yellow-900 dark:to-blue-950',
    color: 'text-yellow-400 dark:text-yellow-200'
  },
  {
    label: PhaseType.Day,
    icon: FiSun,
    bg: 'from-sky-300 via-blue-100 to-yellow-100 dark:from-blue-800 dark:via-blue-900 dark:to-yellow-900',
    color: 'text-yellow-300 dark:text-yellow-100'
  },
  {
    label: PhaseType.Evening,
    icon: FiSunset,
    bg: 'from-pink-200 via-orange-200 to-blue-200 dark:from-pink-900 dark:via-orange-900 dark:to-blue-950',
    color: 'text-orange-400 dark:text-orange-200'
  },
  {
    label: PhaseType.Night,
    icon: FiMoon,
    bg: 'from-blue-900 via-indigo-900 to-gray-900 dark:from-blue-950 dark:via-indigo-950 dark:to-black',
    color: 'text-blue-400 dark:text-blue-200'
  },
  {
    label: PhaseType.Midnight,
    icon: FiMoon,
    bg: 'from-gray-900 via-black to-blue-900 dark:from-black dark:via-gray-900 dark:to-blue-950',
    color: 'text-gray-300 dark:text-gray-100'
  }
]

export default function Header() {
  const system = useSystemStore((system) => system)
  const phase = phases.find((phase) => phase.label === system.phase)
  const Icon = phase?.icon

  return (
    <header
      className={cn(
        'transition-colors duration-700 border-b border-gray-200 dark:border-gray-700 shadow-sm',
        'bg-gradient-to-r',
        phase?.bg,
        'flex items-center'
      )}
    >
      <div className='flex items-center justify-between px-4 sm:px-0 py-4 sm:py-6 mx-auto w-full sm:max-w-xl '>
        <div className='flex items-center gap-4'>
          <span className='flex items-center justify-center'>
            {Icon && (
              <Icon className={cn(phase?.color, 'drop-shadow text-2xl sm:text-3xl')} aria-label={phase?.label} />
            )}
          </span>
          <span className='font-bold text-lg sm:text-xl text-gray-800 dark:text-gray-100 tracking-wide select-none drop-shadow'>
            Day {system.day}
          </span>
        </div>
        <div className='flex items-center gap-3'>
          <Button
            variant='ghost'
            size='icon'
            aria-label='Advance time'
            onClick={system.next}
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
