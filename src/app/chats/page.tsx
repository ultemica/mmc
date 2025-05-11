'use client'
import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'

type Message = {
  id: number
  text: string
  sender: 'me' | 'other'
}

const initialMessages: Message[] = [
  { id: 1, text: 'こんにちは！', sender: 'other' },
  { id: 2, text: 'こんにちは！元気ですか？', sender: 'me' }
]

export default function Page() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { id: Date.now(), text: input, sender: 'me' }])
    setInput('')
  }

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // IME変換中は送信しない
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      handleSend()
      setInput('')
    }
  }

  return (
    <Container>
      <div className='flex flex-col h-full'>
        {' '}
        {/* min-h追加で高さが足りない時も下寄せ */}
        <div className='flex-1 flex flex-col'>
          <div className='flex-1 overflow-y-auto p-4 flex flex-col mb-2'>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex mb-2 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`
                    max-w-xs px-4 py-2 rounded-[18px]
                    text-base shadow-sm break-words
                    ${
                      msg.sender === 'me'
                        ? 'bg-[#9eea6a] text-gray-900 rounded-br-[4px] rounded-bl-[18px]'
                        : 'bg-white text-gray-900 rounded-bl-[4px] rounded-br-[18px]'
                    }
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className='flex gap-2 p-3 border-t border-gray-200'
        >
          <Input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder='メッセージを入力...'
            className='flex-1'
          />
          <Button
            type='submit'
            className='bg-[#06c755] text-white rounded-[20px] font-semibold min-w-[64px] hover:bg-[#06b150]'
          >
            送信
          </Button>
        </form>
      </div>
    </Container>
  )
}
