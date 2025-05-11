import { type GameState, PhaseType } from '@/models/mmc.dto'
import type { ChatCompletionMessageParam } from 'openai/resources/index.mjs'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type GameStateStore = GameState & {
  messages: ChatCompletionMessageParam[]
  next: () => Promise<void>
  reset: () => void
}

const send = async (params: { content: string }): Promise<ChatCompletionMessageParam> => {
  const response = await fetch('/api/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      role: 'system',
      content: params.content
    })
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response.json()
}

export const useSystemStore = create<GameStateStore>()(
  persist(
    (set, get) => ({
      day: 1,
      phase: PhaseType.Morning,
      messages: [],
      next: async () => {
        const { phase, day, messages } = get()
        if (phase === PhaseType.Morning && day === 1) {
          const message: ChatCompletionMessageParam = await send({
            content: 'ゲームを開始してください'
          })
          set({ messages: [...messages, message] })
        }
        switch (phase) {
          case PhaseType.Morning:
            set({ phase: PhaseType.Day, day: day })
            break
          case PhaseType.Day:
            set({ phase: PhaseType.Evening, day: day })
            break
          case PhaseType.Evening:
            set({ phase: PhaseType.Night, day: day })
            break
          case PhaseType.Night:
            set({ phase: PhaseType.Midnight, day: day })
            break
          case PhaseType.Midnight:
            set({ phase: PhaseType.Morning, day: day + 1 })
            break
          default:
        }
      },
      reset: () => {
        set({ day: 1, phase: PhaseType.Morning })
      }
    }),
    {
      name: 'system'
    }
  )
)
