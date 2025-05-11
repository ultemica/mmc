## Schema

### Player

プレイヤー情報は以下のようなデータが与えられます。

```ts
export const PlayerSchema = z.object({
  id: z.number().int(), // 固有ID
  name: z.string(), // 名前
  theme_color: z.nativeEnum(ThemeColor), // テーマカラー
  messages: z.array(MessageSchema), // 会話ログ
  age: z.number().int(), // 年齢
  sex: z.nativeEnum(Sex), // 性別
  personality: z.nativeEnum(personality), // 性格
  job: z.nativeEnum(Job), // 職業
  motivation: z.nativeEnum(Motivation), // 動機
  skills: z.array(z.nativeEnum(Skill)), // 特技
  hobbies: z.array(z.nativeEnum(Hobby)), // 趣味
  height: z.number().int(), // 身長
  weight: z.number().int(), // 体重
  blood_type: z.nativeEnum(BloodType), // 血液型
  family: z.array(z.nativeEnum(Family)), // 家族
  status: z.nativeEnum(Status), // 状態（生死・意識など）
  emotion: z.nativeEnum(Emotion) // 感情
})

// Status例（生死・意識などの状態）
export enum Status {
  Alive = 'Alive', // 生存
  Dead = 'Dead', // 死亡
  Unconscious = 'Unconscious', // 意識不明
  Sleeping = 'Sleeping', // 眠っている
  Awake = 'Awake', // 起きている
  Injured = 'Injured', // 負傷している
  Absent = 'Absent', // 不在
  Unknown = 'Unknown' // 不明
}

// Emotion例（感情）
export enum Emotion {
  Calm = 'Calm', // 落ち着いている
  Agitated = 'Agitated', // 動揺している
  Excited = 'Excited', // 興奮している
  Nervous = 'Nervous', // 緊張している
  Depressed = 'Depressed', // 落ち込んでいる
  Angry = 'Angry', // 怒っている
  Fearful = 'Fearful', // 怯えている
  Confident = 'Confident', // 自信がある
  Tired = 'Tired', // 疲れている
  Confused = 'Confused', // 混乱している
  Resting = 'Resting' // 休んでいる
}
```
