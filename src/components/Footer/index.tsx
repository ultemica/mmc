'use client'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabType, tabs } from '@/constants/tabs'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import {} from 'react-icons/fi'
import Container from '../Container'

export default function Footer() {
  const [value, setValue] = useState<TabType>(TabType.INFO)
  const onChange = (value: string) => {
    setValue(value as TabType)
  }
  return (
    <Container>
      <div className='fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50'>
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
                >
                  <Icon size={28} />
                  <span className='text-[11px] mt-1 font-medium'>{tab.label}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>
        </Tabs>
      </div>
    </Container>
  )
}
