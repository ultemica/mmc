'use client'
import { useSystemStore } from '@/stores/system'
import { useEffect, useState } from 'react'
import Container from '../Container'

// タイプライター表示用のカスタムフック
// biome-ignore lint/correctness/noUnusedVariables: <explanation>
function useTypewriter(text: string, speed = 20) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    setDisplayed('')
    if (!text) return
    let i = 0
    const timer = setInterval(() => {
      setDisplayed((prev) => prev + text[i])
      i++
      if (i >= text.length) clearInterval(timer)
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed])
  return displayed
}

export default function EventLog() {
  const messages = useSystemStore((system) => system.messages)
  // 各メッセージごとにタイプライター表示を管理
  const [currentIndex, setCurrentIndex] = useState(0)
  const [typedMessages, setTypedMessages] = useState<string[]>([])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setTypedMessages([])
    setCurrentIndex(0)
  }, [messages])

  useEffect(() => {
    if (!messages.length) return
    if (currentIndex >= messages.length) return
    const content = messages[currentIndex].content
    let i = 0
    let displayed = ''
    const timer = setInterval(() => {
      // @ts-ignore
      displayed += content[i]
      setTypedMessages((prev) => {
        const updated = [...prev]
        updated[currentIndex] = displayed
        return updated
      })
      i++
      // @ts-ignore
      if (i >= content.length) {
        clearInterval(timer)
        setTimeout(() => setCurrentIndex((idx) => idx + 1), 300)
      }
    }, 20)
    return () => clearInterval(timer)
  }, [currentIndex, messages])

  useEffect(() => {
    // 初期化時に空文字列で配列を埋める
    if (typedMessages.length < messages.length) {
      setTypedMessages(Array(messages.length).fill(''))
    }
  }, [messages, typedMessages.length])

  return (
    <Container>
      <strong>イベントログ</strong>
      <div className='max-h-60'>
        <div className='mb-4'>
          <div className='flex items-center mb-2'>
            {/* <span className='text-xs font-bold text-gray-500 dark:text-gray-400 mr-2'>Day {latestDay}</span> */}
          </div>
          <ul className='pl-4 m-0'>
            {typedMessages.map((typed, idx) =>
              typed.split('\n').map((line, lineIdx) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <li key={`${idx}-${lineIdx}`}>{line}</li>
              ))
            )}
          </ul>
        </div>
      </div>
    </Container>
  )
}
