import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import Container from '../Container'

type Message = {
  id: string
  text: string
  timestamp?: string
  isMe: boolean
}

type ChatHistoryProps = {
  messages: Message[]
  onSend?: (text: string) => void
  partnerName: string
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages, onSend, partnerName }) => {
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && onSend) {
      onSend(input.trim())
      setInput('')
    }
  }

  return (
    <Container>
      <div className=''>{partnerName}</div>
      <div className=''>
        <div className='flex-1 overflow-y-auto p-4 text-sm min-h-0'>
          <ul className='list-none p-0 m-0'>
            {messages.map((msg) => (
              <li
                key={msg.id}
                className={`
                  mb-3 flex
                  ${msg.isMe ? 'justify-end' : 'justify-start'}
                `}
              >
                <div
                  className={`
                    max-w-[70%] px-3 py-2 rounded-lg break-words
                    ${
                      msg.isMe
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-none'
                    }
                    shadow-sm
                  `}
                >
                  <div>{msg.text}</div>
                  {msg.timestamp && (
                    <div
                      className={`mt-1 text-[10px] text-right ${msg.isMe ? 'text-blue-100' : 'text-gray-400 dark:text-gray-400'}`}
                    >
                      {msg.timestamp}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div ref={messagesEndRef} />
        </div>
        <form
          onSubmit={handleSubmit}
          className='flex border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-2'
        >
          <input
            type='text'
            className='flex-1 rounded border border-gray-300 dark:border-gray-600 px-2 py-1 text-xs bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none'
            placeholder='メッセージを入力...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={140}
          />
          <button
            type='submit'
            className='ml-2 px-3 py-1 rounded bg-blue-600 text-white text-xs hover:bg-blue-700 disabled:opacity-50'
            disabled={!input.trim()}
          >
            送信
          </button>
        </form>
      </div>
    </Container>
  )
}

export default ChatHistory
