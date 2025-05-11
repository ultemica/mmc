export const characters = [
  {
    id: 1,
    name: 'Alice',
    color: '#f87171',
    messages: [
      { id: 'a1', sender: 'Alice', text: 'こんにちは！', phase: 'morning', day: 1, isMe: false },
      { id: 'a2', sender: 'あなた', text: 'こんにちは、Aliceさん！', phase: 'morning', day: 1, isMe: true },
      { id: 'a3', sender: 'Alice', text: '今日はどうですか？', phase: 'morning', day: 1, isMe: false },
      { id: 'a4', sender: 'あなた', text: '元気です！', phase: 'morning', day: 1, isMe: true }
    ]
  },
  {
    id: 2,
    name: 'Bob',
    color: '#60a5fa',
    messages: [
      { id: 'b1', sender: 'Bob', text: 'おはようございます。', phase: 'morning', day: 1, isMe: false },
      { id: 'b2', sender: 'あなた', text: 'おはよう、Bobさん！', phase: 'morning', day: 1, isMe: true },
      { id: 'b3', sender: 'Bob', text: '今日も頑張りましょう。', phase: 'morning', day: 1, isMe: false }
    ]
  },
  {
    id: 3,
    name: 'Carol',
    color: '#34d399',
    messages: [
      { id: 'c1', sender: 'Carol', text: '最近どう？', phase: 'morning', day: 1, isMe: false },
      { id: 'c2', sender: 'あなた', text: '元気ですよ、Carolさんは？', phase: 'morning', day: 1, isMe: true }
    ]
  },
  {
    id: 4,
    name: 'Dave',
    color: '#fbbf24',
    messages: [
      { id: 'd1', sender: 'Dave', text: 'ランチ行きませんか？', phase: 'noon', day: 1, isMe: false },
      { id: 'd2', sender: 'あなた', text: 'いいですね、行きましょう！', phase: 'noon', day: 1, isMe: true }
    ]
  },
  {
    id: 5,
    name: 'Eve',
    color: '#a78bfa',
    messages: [
      { id: 'e1', sender: 'Eve', text: '新しいプロジェクト始めました。', phase: 'afternoon', day: 1, isMe: false },
      { id: 'e2', sender: 'あなた', text: 'すごいですね！どんな内容ですか？', phase: 'afternoon', day: 1, isMe: true }
    ]
  }
]
