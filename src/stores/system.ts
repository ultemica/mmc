import { type GameState, PhaseType } from '@/models/mmc.dto'
import { create } from 'zustand'

export type GameStateStore = GameState & {
  next: () => void
}

export const useSystemStore = create<GameStateStore>((set, get) => ({
  day: 1,
  phase: PhaseType.Morning,
  next: () => {
    const { phase, day } = get()
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
  }
}))
