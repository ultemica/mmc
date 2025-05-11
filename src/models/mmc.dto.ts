import { z } from 'zod'
import { PlayerSchema } from './characters.dto'
import { MessageSchema } from './message.dto'

// export enum GameState {
//   Waiting = 'waiting',
//   InProgress = 'in_progress',
//   Finished = 'finished'
// }

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
  day: z.number().int().min(0),
  phase: z.nativeEnum(PhaseType),
  target: z.number().int().min(0).nullable(), // イベントの対象となるプレイヤーのID
  prob: z.number().min(0).max(1).default(1), // 発生確率
  description: z.string().optional() // イベントの内容
})

export const HistorySchema = z.object({
  timestamp: z.string(),
  event: z.string(),
  actor: z.string().optional(),
  details: z.string().optional()
})

export const SettingSchema = z.object({
  title: z.string(), // シナリオタイトル
  description: z.string(), // シナリオの説明
  max_dead_count: z.number().int().min(0), // 最大死亡人数
  end_day_count: z.number().int().min(1) // 終了日数
})

export const GameStateSchema = z.object({
  day: z.number().int(), // 現在の経過日数
  // events: z.array(EventSchema), // イベント情報
  phase: z.nativeEnum(PhaseType) /// 現在のフェーズ
  // state: z.nativeEnum(GameState) // ゲームの状態
})

export const MMCSchema = z.object({
  current: GameStateSchema,
  players: z.array(PlayerSchema), // プレイヤー情報
  histories: z.array(MessageSchema), // 会話の履歴
  messages: z.array(MessageSchema), // メッセージの履歴
  instructions: z.array(z.string()) // ゲームの指示やルール
})

export type MMC = z.infer<typeof MMCSchema>
export type Phase = z.infer<typeof PhaseSchema>
export type Event = z.infer<typeof EventSchema>
export type GameState = z.infer<typeof GameStateSchema>
