'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { messages } from '@/data/message'
import groupBy from 'lodash/groupBy'
import Container from '../Container'

export default function Messages() {
  const grouped = groupBy(messages, 'day')
  const sortedDays = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => a - b)

  const latestDay = sortedDays[sortedDays.length - 1]
  const latestDayMessages = grouped[latestDay] ?? []

  return (
    <Container>
      <strong>イベントログ</strong>
      <div className='max-h-60'>
        <div className='mb-4'>
          <div className='flex items-center mb-2'>
            <span className='text-xs font-bold text-gray-500 dark:text-gray-400 mr-2'>Day {latestDay}</span>
          </div>
          <ul className='pl-4 m-0'>
            {latestDayMessages.map((msg) => (
              <li key={msg.id}>{msg.content}</li>
            ))}
          </ul>
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline' className='mt-2'>
            ログを見る
          </Button>
        </DialogTrigger>
        <DialogContent className='bg-gray-50 dark:bg-gray-900'>
          <DialogHeader>
            <DialogTitle>イベントログ</DialogTitle>
            <DialogDescription>これまでの全メッセージを確認できます。</DialogDescription>
          </DialogHeader>
          <div className='rounded-lg py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900'>
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
          <DialogClose asChild>
            <Button variant='secondary' className='mt-2'>
              閉じる
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </Container>
  )
}
