import type { Event } from '@/models/mmc.dto'
import OpenAI from 'openai'
import type { ChatCompletionMessageParam } from 'openai/resources/index.mjs'

const GAME_SYSTEM_PROMPT = `
あなたはマーダーミステリーのGMです
あなたはプレイヤーの行動を観察し、物語を進めるために必要な情報を提供します

以下のルールを遵守してください
1. ゲームの内容以外の質問には答えないでください
2. 絶対に感情を出さず、淡々と事実のみを述べてください
3. プレイヤーの発言に対して共感・反論してはいけません
4. 進行役として中立な立場を保ってください

ゲームは日付(day)と時間(phase)で進行し、特定の日付と時間でイベントが発生します
5. 発生しうるイベントの情報は事前に与えられていますが、その内容をプレイヤーに伝えてはいけません
6. プレイヤーの行動に対して、あなたはその行動がどのような結果をもたらしたかを示す必要があります
`

export class MMC {
  private static _instance: MMC | null = null
  private _client: OpenAI
  private _events: Event[] = []
  private _messages: ChatCompletionMessageParam[] = []

  constructor() {
    this._client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })
    this._messages = [
      {
        role: 'system',
        content: GAME_SYSTEM_PROMPT
      }
    ]
  }

  public static instance(): MMC {
    if (!MMC._instance) {
      MMC._instance = new MMC()
    }
    return MMC._instance
  }

  talk = async (param: { message: string; id: number }): Promise<string> => {
    this._messages.push({
      role: 'user',
      content: param.message
    })
    const completion = await this._client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: this._messages,
      temperature: 0
    })
    const content: string = completion.choices[0].message?.content || ''
    this._messages.push({
      role: 'assistant',
      content: content
    })
    return content
  }
}
