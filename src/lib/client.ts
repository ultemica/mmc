import OpenAI from 'openai'

export class MMC {
  private _client: OpenAI

  constructor() {
    this._client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })
  }

  talk = async (param: { message: string; id: number }) => {
    const completion = await this._client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: []
    })
    console.log(completion.choices[0].message?.content)
  }
}
