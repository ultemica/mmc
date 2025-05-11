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

export const MessageSchema = z.object({
  id: z.string(),
  phase: z.number().int(),
  day: z.number().int(),
  content: z.string(),
  speaker: z.number().int(),
  intended_listener: z.array(z.number().int()),
  actual_listener: z.array(z.number().int())
})

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
  is_alive: z.boolean()
})

export type Player = z.infer<typeof PlayerSchema>
export type Message = z.infer<typeof MessageSchema>
