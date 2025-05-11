import type { Player } from '@/models/characters.dto'
import { BloodType } from '@/models/enums/blood_type'
import { Family } from '@/models/enums/family'
import { Hobby } from '@/models/enums/hobby'
import { Job } from '@/models/enums/job'
import { Motivation } from '@/models/enums/motivation'
import { Personality } from '@/models/enums/personality'
import { Sex } from '@/models/enums/sex'
import { Skill } from '@/models/enums/skill'
import { Status } from '@/models/enums/status'
import { ThemeColor } from '@/models/enums/theme_color'

export const characters: Player[] = [
  {
    id: 11,
    name: 'Alice',
    theme_color: ThemeColor.Red,
    messages: [
      {
        id: 'a1',
        phase: 0,
        day: 1,
        content: '昨夜、廊下で誰かの足音を聞きました。',
        speaker: 1,
        intended_listener: [0],
        actual_listener: [0]
      },
      {
        id: 'a2',
        phase: 0,
        day: 1,
        content: 'それは何時ごろでしたか？',
        speaker: 0,
        intended_listener: [1],
        actual_listener: [1]
      },
      {
        id: 'a3',
        phase: 0,
        day: 1,
        content: '深夜1時ごろです。誰か見かけませんでしたか？',
        speaker: 1,
        intended_listener: [0],
        actual_listener: [0]
      },
      {
        id: 'a4',
        phase: 0,
        day: 1,
        content: '私は自室にいましたが、物音は聞こえました。',
        speaker: 0,
        intended_listener: [1],
        actual_listener: [1]
      }
    ],
    age: 25,
    sex: Sex.Female,
    personality: Personality.Friendly,
    job: Job.Teacher,
    motivation: Motivation.Curiosity,
    skills: [Skill.Persuasion, Skill.Empathy],
    hobbies: [Hobby.Reading, Hobby.Music],
    height: 160,
    weight: 50,
    blood_type: BloodType.A,
    family: [Family.Father, Family.Mother],
    status: Status.Calm,
    is_alive: true
  },
  {
    id: 9,
    name: 'Bob',
    theme_color: ThemeColor.Blue,
    messages: [
      {
        id: 'b1',
        phase: 0,
        day: 1,
        content: '書斎の窓が開いていたのは知っていますか？',
        speaker: 2,
        intended_listener: [0],
        actual_listener: [0]
      },
      {
        id: 'b2',
        phase: 0,
        day: 1,
        content: 'いいえ、誰かが開けたのでしょうか？',
        speaker: 0,
        intended_listener: [2],
        actual_listener: [2]
      },
      {
        id: 'b3',
        phase: 0,
        day: 1,
        content: '足跡が外に続いていました。調べてみます。',
        speaker: 2,
        intended_listener: [0],
        actual_listener: [0]
      }
    ],
    age: 30,
    sex: Sex.Male,
    personality: Personality.Calm,
    job: Job.Engineer,
    motivation: Motivation.Work,
    skills: [Skill.Technology, Skill.Observation],
    hobbies: [Hobby.Gaming, Hobby.Fishing],
    height: 175,
    weight: 68,
    blood_type: BloodType.O,
    family: [Family.Wife],
    status: Status.Confident,
    is_alive: true
  },
  {
    id: 7,
    name: 'Carol',
    theme_color: ThemeColor.Green,
    messages: [
      {
        id: 'c1',
        phase: 0,
        day: 1,
        content: '被害者と最後に話したのは誰ですか？',
        speaker: 3,
        intended_listener: [0],
        actual_listener: [0]
      },
      {
        id: 'c2',
        phase: 0,
        day: 1,
        content: 'たしかリビングでDaveさんが話していました。',
        speaker: 0,
        intended_listener: [3],
        actual_listener: [3]
      }
    ],
    age: 22,
    sex: Sex.Female,
    personality: Personality.Curious,
    job: Job.Student,
    motivation: Motivation.Investigation,
    skills: [Skill.Research, Skill.Memory],
    hobbies: [Hobby.Photography, Hobby.Traveling],
    height: 155,
    weight: 45,
    blood_type: BloodType.B,
    family: [Family.Mother],
    status: Status.Excited,
    is_alive: true
  },
  {
    id: 10,
    name: 'Dave',
    theme_color: ThemeColor.Yellow,
    messages: [
      {
        id: 'd1',
        phase: 1,
        day: 1,
        content: '昨夜、誰かと口論していたのを見られてしまったかもしれません。',
        speaker: 4,
        intended_listener: [0],
        actual_listener: [0]
      },
      {
        id: 'd2',
        phase: 1,
        day: 1,
        content: '何についての口論だったのですか？',
        speaker: 0,
        intended_listener: [4],
        actual_listener: [4]
      }
    ],
    age: 28,
    sex: Sex.Male,
    personality: Personality.Leader,
    job: Job.Businessperson,
    motivation: Motivation.Business,
    skills: [Skill.Negotiation, Skill.Persuasion],
    hobbies: [Hobby.Sports, Hobby.Cooking],
    height: 180,
    weight: 75,
    blood_type: BloodType.AB,
    family: [Family.Father, Family.Mother, Family.Sister],
    status: Status.Agitated,
    is_alive: true
  },
  {
    id: 5,
    name: 'Eve',
    theme_color: ThemeColor.Purple,
    messages: [
      {
        id: 'e1',
        phase: 2,
        day: 1,
        content: '実は事件の直前に被害者から手紙を受け取りました。',
        speaker: 5,
        intended_listener: [0],
        actual_listener: [0]
      },
      {
        id: 'e2',
        phase: 2,
        day: 1,
        content: 'どんな内容だったか教えてもらえますか？',
        speaker: 0,
        intended_listener: [5],
        actual_listener: [5]
      }
    ],
    age: 27,
    sex: Sex.Female,
    personality: Personality.Ambitious,
    job: Job.Scientist,
    motivation: Motivation.Research,
    skills: [Skill.Research, Skill.Deduction],
    hobbies: [Hobby.Movies],
    height: 165,
    weight: 52,
    blood_type: BloodType.AB,
    family: [Family.None],
    status: Status.Nervous,
    is_alive: true
  }
]
