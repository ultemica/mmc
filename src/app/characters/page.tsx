'use client'

import Container from '@/components/Container'
import { characters } from '@/data/characters'
import { Sex } from '@/models/characters.dto'

export default function Page() {
  return (
    <Container className='max-w-full'>
      <div className='grid gap-2 md:gap-6 grid-cols-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {characters.map((p) => (
          <div
            key={p.id}
            className='bg-gradient-to-br from-gray-800 to-gray-950 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition p-6 flex flex-col items-center relative group'
          >
            <div
              className='w-20 h-20 rounded-full mb-4 flex items-center justify-center text-3xl font-bold ring-4 ring-gray-700 shadow'
              style={{ backgroundColor: p.theme_color, color: '#fff' }}
            >
              {p.name[0]}
            </div>
            <h2 className='text-xl font-semibold mb-1 text-gray-100 tracking-wide'>{p.name}</h2>
            <div className='text-gray-400 mb-2'>{p.job}</div>
            <div className='flex flex-wrap gap-x-4 gap-y-1 text-xs mb-4 text-gray-400'>
              <span>年齢: {p.age}</span>
              <span>性別: {p.sex === Sex.Male ? '男性' : '女性'}</span>
              <span>血液型: {p.blood_type}</span>
              <span>身長: {p.height}cm</span>
              <span>体重: {p.weight}kg</span>
            </div>
            <div className='w-full mb-1'>
              <span className='font-medium text-gray-300'>性格: </span>
              <span className='text-gray-400'>{p.personality}</span>
            </div>
            <div className='w-full mb-1'>
              <span className='font-medium text-gray-300'>動機: </span>
              <span className='text-gray-400'>{p.motivation}</span>
            </div>
            <div className='w-full mb-1'>
              <span className='font-medium text-gray-300'>スキル: </span>
              <span className='text-gray-400'>{p.skills.join(', ')}</span>
            </div>
            <div className='w-full mb-1'>
              <span className='font-medium text-gray-300'>趣味: </span>
              <span className='text-gray-400'>{p.hobbies.join(', ')}</span>
            </div>
            <div className='w-full mb-1'>
              <span className='font-medium text-gray-300'>家族: </span>
              <span className='text-gray-400'>{p.family.join(', ')}</span>
            </div>
            <div className='w-full mb-1'>
              <span className='font-medium text-gray-300'>状態: </span>
              <span className='text-gray-400'>{p.status}</span>
            </div>
            <div className='absolute inset-0 rounded-xl ring-2 ring-gray-700 opacity-0 group-hover:opacity-100 transition pointer-events-none' />
          </div>
        ))}
      </div>
    </Container>
  )
}
