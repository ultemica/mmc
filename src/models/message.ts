import { z } from 'zod'

export const MessageSchema = z.object({
  id: z.string(),
  phase: z.number().int(),
  day: z.number().int(),
  content: z.string(),
  speaker: z.number().int(),
  intended_listener: z.array(z.number().int()),
  actual_listener: z.array(z.number().int())
})

export type Message = z.infer<typeof MessageSchema>
