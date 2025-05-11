import { z } from 'zod'
import { MessageSchema, PlayerSchema } from './characters.dto'

export enum GameState {
  Waiting = 'waiting',
  InProgress = 'in_progress',
  Finished = 'finished'
}

export enum PhaseType {
  Morning = 'morning',
  Day = 'day',
  Evening = 'evening',
  Night = 'night',
  Midnight = 'midnight'
}

export const PhaseSchema = z.object({
  label: z.nativeEnum(PhaseType),
  icon: z.any(),
  bg: z.string(),
  color: z.string()
})

export const EventSchema = z.object({
  day: z.number().int(),
  phase: z.nativeEnum(PhaseType),
  description: z.string().optional()
})

export const HistorySchema = z.object({
  timestamp: z.string(),
  event: z.string(),
  actor: z.string().optional(),
  details: z.string().optional()
})

export const MMCSchema = z.object({
  state: z.nativeEnum(GameState), // ゲームの状態
  players: z.array(PlayerSchema), // プレイヤー情報
  events: z.array(EventSchema), // イベント情報
  phase: PhaseSchema, /// 現在のフェーズ
  day: z.number().int(), // 現在の経過日数
  history: z.array(MessageSchema), // 会話の履歴
  instructions: z.string().optional() // ゲームの指示やルール
})

export type MMC = z.infer<typeof MMCSchema>
export type Phase = z.infer<typeof PhaseSchema>
export type Event = z.infer<typeof EventSchema>
