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
import type { Message } from '@/models/characters.dto'
import groupBy from 'lodash/groupBy'
import Container from '../Container'

export default function Messages() {
  // ダミーのMessage型データ
  const dummyMessages: Message[] = [
    {
      id: '1',
      phase: 1,
      day: 1,
      content: '事件が発生しました。全員リビングに集合してください。',
      speaker: 0,
      intended_listener: [],
      actual_listener: []
    },
    {
      id: '2',
      phase: 1,
      day: 1,
      content: '被害者は書斎で発見されました。',
      speaker: 0,
      intended_listener: [],
      actual_listener: []
    },
    {
      id: '3',
      phase: 1,
      day: 2,
      content: '第一発見者は執事のカワムラさんです。',
      speaker: 0,
      intended_listener: [],
      actual_listener: []
    },
    {
      id: '4',
      phase: 1,
      day: 2,
      content: '現場には割れたグラスが落ちていました。',
      speaker: 0,
      intended_listener: [],
      actual_listener: []
    },
    {
      id: '5',
      phase: 1,
      day: 2,
      content: 'アリバイの確認を始めます。',
      speaker: 0,
      intended_listener: [],
      actual_listener: []
    },
    {
      id: '6',
      phase: 1,
      day: 3,
      content: '容疑者Aは21時にキッチンにいたと証言しています。',
      speaker: 0,
      intended_listener: [],
      actual_listener: []
    },
    {
      id: '7',
      phase: 1,
      day: 3,
      content: '容疑者Bは庭で物音を聞いたそうです。',
      speaker: 0,
      intended_listener: [],
      actual_listener: []
    },
    {
      id: '8',
      phase: 1,
      day: 3,
      content: '重要な証拠品が見つかりました。',
      speaker: 0,
      intended_listener: [],
      actual_listener: []
    },
    {
      id: '9',
      phase: 1,
      day: 4,
      content: '推理フェーズに入ります。各自の意見を述べてください。',
      speaker: 0,
      intended_listener: [],
      actual_listener: []
    },
    {
      id: '10',
      phase: 1,
      day: 4,
      content: '全員の投票が終わりました。真犯人の発表です。',
      speaker: 0,
      intended_listener: [],
      actual_listener: []
    }
  ]

  // lodashでdayごとにグループ化
  const grouped = groupBy(dummyMessages, 'day')
  const sortedDays = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => a - b)

  // 最新のDayのみ取得
  const latestDay = sortedDays[sortedDays.length - 1]
  const latestDayMessages = grouped[latestDay] ?? []

  return (
    <Container>
      <strong>イベントログ</strong>
      <div className='max-h-60 '>
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
          <div className='rounded-lg max-h-full p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900'>
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
