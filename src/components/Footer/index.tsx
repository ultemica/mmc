'use client'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabType, tabs } from '@/constants/tabs'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Footer() {
  const [value, setValue] = useState<TabType>(TabType.HOME)
  const router = useRouter()
  const onChange = (value: string) => {
    setValue(value as TabType)
  }
  return (
    <div
      className='w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50'
      style={{
        paddingBottom: '16px'
      }}
    >
      <Tabs value={value} onValueChange={onChange}>
        <TabsList className='w-full max-w-xl mx-auto flex justify-around h-16'>
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={cn(
                  'flex flex-col items-center flex-1 py-2 transition-colors border-none outline-none focus:ring-0',
                  value === tab.value ? 'text-blue-600' : 'text-gray-400 dark:text-gray-500'
                )}
                onClick={() => router.push(tab.href)}
              >
                <Icon size={28} />
                <span className='text-[11px] mt-1 font-medium'>{tab.label}</span>
              </TabsTrigger>
            )
          })}
        </TabsList>
      </Tabs>
    </div>
  )
}
