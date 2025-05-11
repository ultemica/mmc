import Container from '@/components/Container'
import { messages } from '@/data/message'
import groupBy from 'lodash/groupBy'

export default function Page() {
  // dayごとにグループ化
  const grouped = groupBy(messages, 'day')
  const sortedDays = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => a - b)

  return (
    <Container>
      <div className='rounded-lg py-4 overflow-y-auto'>
        {sortedDays.map((day) => (
          <div key={day} className='mb-4'>
            <div className='flex items-center mb-2'>
              <span className='text-xs font-bold text-gray-500 dark:text-gray-400 mr-2'>Day {day}</span>
            </div>
            <ul className='pl-4 m-0'>
              {grouped[day].map((msg) => (
                <li key={msg.id}>{msg.content}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}
