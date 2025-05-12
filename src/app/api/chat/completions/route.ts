import { MMC } from '@/lib/client'
import { type NextRequest, NextResponse } from 'next/server'

// メッセージを受け取って、MMC クラスを使って返答を得る処理
export async function POST(request: NextRequest) {
  try {
    // リクエストボディからメッセージを取得
    // const { message, id } = await request.json()

    const body = await request.json()

    // if (!message || !id) {
    //   return NextResponse.json({ error: 'Message and ID are required' }, { status: 400 })
    // }

    // MMCのインスタンスを取得し、メッセージを送信
    const mmc = MMC.instance()
    return NextResponse.json(await mmc.talk({ content: body.content, id: 0 }))
  } catch (error) {
    console.error('Error in API route:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
