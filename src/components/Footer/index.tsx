import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { type TabType, tabs } from '@/constants/tabs'
import {} from 'react-icons/fi'
import Container from '../Container'

type FooterProps = {
  value: TabType
  onChange: (value: TabType) => void
}

export default function Footer({ value, onChange }: FooterProps) {
  return (
    <Container>
      <div className='fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50'>
        <Tabs value={value} onValueChange={() => onChange(value)}>
          <TabsList className='w-full max-w-xl mx-auto flex justify-around h-16'>
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={`flex flex-col items-center flex-1 py-3 transition-colors ${
                    value === tab.value
                      ? 'text-blue-500 border-t-2 border-blue-500 bg-blue-50 dark:bg-blue-950'
                      : 'text-gray-400 dark:text-gray-500'
                  }`}
                >
                  <Icon size={32} />
                  <span className='text-[10px] mt-0.5 font-medium'>{tab.label}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>
        </Tabs>
      </div>
    </Container>
  )
}
