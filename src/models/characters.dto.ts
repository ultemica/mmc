import { z } from 'zod'
import { BloodType } from './enums/blood_type'
import { Family } from './enums/family'
import { Hobby } from './enums/hobby'
import { Job } from './enums/job'
import { Motivation } from './enums/motivation'
import { Personality } from './enums/personality'
import { Sex } from './enums/sex'
import { Skill } from './enums/skill'
import { Status } from './enums/status'
import { ThemeColor } from './enums/theme_color'
import { MessageSchema } from './message.dto'

/**
 * プレイヤー情報のZodスキーマ
 * @property id - プレイヤーID
 * @property name - 名前
 * @property theme_color - テーマカラー
 * @property messages - メッセージ一覧
 * @property age - 年齢
 * @property sex - 性別
 * @property personality - 性格
 * @property job - 職業
 * @property motivation - 動機
 * @property skills - スキル配列
 * @property hobbies - 趣味配列
 * @property height - 身長
 * @property weight - 体重
 * @property blood_type - 血液型
 * @property family - 家族構成
 * @property status - 現在の状態
 * @property affection - 好感度（0〜100）
 * @property is_alive - 生存フラグ
 */
export const PlayerSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  theme_color: z.nativeEnum(ThemeColor),
  messages: z.array(MessageSchema),
  age: z.number().int(),
  sex: z.nativeEnum(Sex),
  personality: z.nativeEnum(Personality),
  job: z.nativeEnum(Job),
  motivation: z.nativeEnum(Motivation),
  skills: z.array(z.nativeEnum(Skill)),
  hobbies: z.array(z.nativeEnum(Hobby)),
  height: z.number().int(),
  weight: z.number().int(),
  blood_type: z.nativeEnum(BloodType),
  family: z.array(z.nativeEnum(Family)),
  status: z.nativeEnum(Status),
  affection: z.number().int().min(0).max(100),
  is_alive: z.boolean()
})

/**
 * Player型（Zodスキーマから推論）
 */
export type Player = z.infer<typeof PlayerSchema>
