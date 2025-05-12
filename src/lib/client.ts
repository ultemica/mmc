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
5. プレイヤーがキャラクターとしてのシナリオへの没入感を高めるために、ゲームであることを意識させないようにしてください

ゲームは日付(day)と時間(phase)で進行し、特定の日付と時間でイベントが発生します
6. 発生しうるイベントの情報は事前に与えられていますが、その内容をプレイヤーに伝えてはいけません
7. プレイヤーの行動に対して、あなたはその行動がどのような結果をもたらしたかを示す必要があります

8. ゲーム開始時には以下の情報をナレーター風の口調で提供してください
- とある秘境のゲレンデにスキーをするために一人で訪れたあなたは、突然の嵐で山奥のロッジに閉じ込められてしまう
- ロッジを訪れると既に他のツアー客と思われる人間が避難して暖を取っていた

9. 以下の情報は尋ねられた場合にのみ答えてください
- ラジオによると嵐は数日止む様子がない
- 携帯電話は一切繋がらない
- ロッジの外は吹雪で何も見えない
- ロッジの中は暖かい
- ロッジの中には暖炉があり、薪がある
- ロッジの中には十分な食料がある
- ロッジにはひとりひとつの個室がある
- ロッジにはリビングがある
- ロッジには食堂はなく、食事はリビングでとる
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

  talk = async (param: { content: string; id: number }): Promise<ChatCompletionMessageParam> => {
    this._messages.push({
      role: 'user',
      content: param.content
    })
    console.debug('messages', this._messages)
    const completion = await this._client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: this._messages,
      temperature: 1
    })
    const content: string = completion.choices[0].message?.content || ''
    this._messages.push({
      role: 'assistant',
      content: content
    })
    return {
      role: 'assistant',
      content: content
    }
  }
}
