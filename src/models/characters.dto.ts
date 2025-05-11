import { z } from 'zod'

export enum personality {
  Brave = 'Brave', // 勇敢
  Coward = 'Coward', // 臆病
  Calm = 'Calm', // 冷静
  Hotheaded = 'Hotheaded', // 短気
  Logical = 'Logical', // 論理的
  Emotional = 'Emotional', // 感情的
  Honest = 'Honest', // 正直
  Deceitful = 'Deceitful', // 嘘つき
  Friendly = 'Friendly', // 友好的
  Hostile = 'Hostile', // 敵対的
  Curious = 'Curious', // 好奇心旺盛
  Indifferent = 'Indifferent', // 無関心
  Optimistic = 'Optimistic', // 楽観的
  Pessimistic = 'Pessimistic', // 悲観的
  Leader = 'Leader', // 指導者
  Follower = 'Follower', // 従順
  Suspicious = 'Suspicious', // 疑い深い
  Trusting = 'Trusting', // 信じやすい
  Ambitious = 'Ambitious', // 野心的
  Lazy = 'Lazy' // 怠惰
}

export enum Job {
  Detective = 'Detective', // 探偵
  Doctor = 'Doctor', // 医者
  Lawyer = 'Lawyer', // 弁護士
  Police = 'Police', // 警察
  Journalist = 'Journalist', // ジャーナリスト
  Teacher = 'Teacher', // 教師
  Student = 'Student', // 学生
  Businessperson = 'Businessperson', // 実業家
  Chef = 'Chef', // シェフ
  Artist = 'Artist', // 芸術家
  Writer = 'Writer', // 作家
  Engineer = 'Engineer', // 技術者
  Scientist = 'Scientist', // 科学者
  Actor = 'Actor', // 俳優
  Musician = 'Musician', // 音楽家
  Politician = 'Politician', // 政治家
  Athlete = 'Athlete', // アスリート
  Merchant = 'Merchant', // 商人
  Priest = 'Priest', // 聖職者
  Unemployed = 'Unemployed' // 無職
}

export enum Skill {
  Observation = 'Observation', // 観察力
  Deduction = 'Deduction', // 推理力
  Persuasion = 'Persuasion', // 説得力
  Lying = 'Lying', // 嘘
  Acting = 'Acting', // 演技
  Medicine = 'Medicine', // 医学
  Stealth = 'Stealth', // 隠密
  Lockpicking = 'Lockpicking', // 錠前破り
  Fighting = 'Fighting', // 戦闘
  Negotiation = 'Negotiation', // 交渉
  Cooking = 'Cooking', // 料理
  Drawing = 'Drawing', // 絵画
  Writing = 'Writing', // 執筆
  Singing = 'Singing', // 歌唱
  Memory = 'Memory', // 記憶力
  Technology = 'Technology', // 技術
  FirstAid = 'FirstAid', // 応急処置
  Intimidation = 'Intimidation', // 威圧
  Empathy = 'Empathy', // 共感力
  Research = 'Research' // 調査
}

export enum Hobby {
  Reading = 'Reading', // 読書
  Fishing = 'Fishing', // 釣り
  Cooking = 'Cooking', // 料理
  Photography = 'Photography', // 写真
  Gardening = 'Gardening', // ガーデニング
  Hiking = 'Hiking', // ハイキング
  Gaming = 'Gaming', // ゲーム
  Music = 'Music', // 音楽
  Traveling = 'Traveling', // 旅行
  Movies = 'Movies', // 映画
  Crafting = 'Crafting', // 手芸
  Dancing = 'Dancing', // ダンス
  Sports = 'Sports', // スポーツ
  Karaoke = 'Karaoke', // カラオケ
  Pets = 'Pets', // ペット
  Volunteering = 'Volunteering', // ボランティア
  Collecting = 'Collecting', // 収集
  DIY = 'DIY', // DIY
  Running = 'Running', // ランニング
  Painting = 'Painting' // 絵画
}

export enum Motivation {
  Invitation = 'Invitation', // 招待された
  Work = 'Work', // 仕事で来た
  Investigation = 'Investigation', // 調査・捜査
  Vacation = 'Vacation', // 休暇・旅行
  FamilyVisit = 'FamilyVisit', // 家族に会いに来た
  Reunion = 'Reunion', // 同窓会・再会
  Celebration = 'Celebration', // 祝い事
  Business = 'Business', // 商談
  Curiosity = 'Curiosity', // 興味本位
  Hiding = 'Hiding', // 身を隠すため
  Escape = 'Escape', // 逃亡
  Research = 'Research', // 研究
  Romance = 'Romance', // 恋愛
  Blackmail = 'Blackmail', // 脅迫
  Heir = 'Heir', // 遺産相続
  Delivery = 'Delivery', // 配達
  Accident = 'Accident', // 偶然
  Security = 'Security', // 警備
  InvitationByFriend = 'InvitationByFriend', // 友人に誘われた
  SecretMeeting = 'SecretMeeting', // 秘密の会合
  DebtCollection = 'DebtCollection', // 取り立て
  SeekingHelp = 'SeekingHelp', // 助けを求めて
  Witness = 'Witness', // 目撃者
  Revenge = 'Revenge', // 復讐
  Lost = 'Lost', // 道に迷った
  MedicalTreatment = 'MedicalTreatment', // 治療・診察
  DeliveryOfGoods = 'DeliveryOfGoods', // 荷物の受け渡し
  LookingForSomeone = 'LookingForSomeone', // 人探し
  Secret = 'Secret', // 言えない理由
  Unknown = 'Unknown' // 不明・本人も分からない
}

export enum Sex {
  Male = 'male', // 男性
  Female = 'female' // 女性
}

export enum BloodType {
  A = 'A', // A型
  B = 'B', // B型
  AB = 'AB', // AB型
  O = 'O', // O型
  Unknown = 'Unknown' // 不明
}

export enum Family {
  Father = 'Father', // 父
  Mother = 'Mother', // 母
  Brother = 'Brother', // 兄・弟
  Sister = 'Sister', // 姉・妹
  Husband = 'Husband', // 夫
  Wife = 'Wife', // 妻
  Son = 'Son', // 息子
  Daughter = 'Daughter', // 娘
  Grandfather = 'Grandfather', // 祖父
  Grandmother = 'Grandmother', // 祖母
  Uncle = 'Uncle', // 叔父
  Aunt = 'Aunt', // 叔母
  Cousin = 'Cousin', // いとこ
  Nephew = 'Nephew', // 甥
  Niece = 'Niece', // 姪
  Other = 'Other', // その他
  None = 'None' // 家族なし
}

export enum Status {
  Calm = 'Calm', // 落ち着いている
  Agitated = 'Agitated', // 動揺している
  Excited = 'Excited', // 興奮している
  Nervous = 'Nervous', // 緊張している
  Depressed = 'Depressed', // 落ち込んでいる
  Angry = 'Angry', // 怒っている
  Fearful = 'Fearful', // 怯えている
  Confident = 'Confident', // 自信がある
  Tired = 'Tired', // 疲れている
  Injured = 'Injured', // 負傷している
  Unconscious = 'Unconscious', // 意識不明
  Dead = 'Dead', // 死亡
  Unknown = 'Unknown' // 不明
}

export const Message = z.object({
  id: z.string(),
  phase: z.number().int(),
  day: z.number().int(),
  content: z.string(),
  sender: z.number().int(),
  receiver: z.number().int()
})

export const Character = z.object({
  id: z.number().int(),
  name: z.string(),
  theme_color: z.string(),
  messages: z.array(Message),
  age: z.number().int(),
  sex: z.nativeEnum(Sex),
  personality: z.nativeEnum(personality),
  job: z.nativeEnum(Job),
  motivation: z.nativeEnum(Motivation),
  skills: z.array(z.nativeEnum(Skill)),
  hobbies: z.array(z.nativeEnum(Hobby)),
  height: z.number().int(),
  weight: z.number().int(),
  blood_type: z.nativeEnum(BloodType),
  family: z.array(z.nativeEnum(Family)),
  status: z.nativeEnum(Status)
})
