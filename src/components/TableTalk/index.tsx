'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { characters } from '@/data/characters'
import { cn } from '@/lib/utils'
import type { Player } from '@/models/characters.dto'
import { useRef, useState } from 'react'
import Container from '../Container'

const RADIUS = 140 // 円卓の半径(px)
const OUTER_MARGIN = 40
const TABLE_SIZE = 90
const CENTER = RADIUS + OUTER_MARGIN

export function Icon({
  x,
  y,
  id,
  name,
  theme_color,
  idx,
  active,
  selected,
  rotation,
  handleSelect
}: Player & {
  x: number
  y: number
  idx: number
  active: number
  selected: number
  rotation: number
  handleSelect: (idx: number) => void
}) {
  // アクティブ時と非アクティブ時でサイズを決定
  const iconSize = active === idx ? 80 : 64 // w-20=80px, w-16=64px

  return (
    <div
      key={id}
      className='absolute flex flex-col items-center transition-transform duration-700'
      style={{
        left: x,
        top: y,
        // アイコンの中心を常に同じ位置に
        marginLeft: -iconSize / 2,
        marginTop: -iconSize / 2,
        transform: `rotate(${-rotation}deg)`,
        willChange: 'transform'
      }}
    >
      <Button
        onClick={() => handleSelect(idx)}
        variant={active === idx ? 'default' : 'outline'}
        aria-label={name}
        className={cn(
          'flex items-center justify-center select-none transition-all duration-300 cursor-pointer font-bold rounded-full text-white p-0',
          active === idx
            ? 'z-20 border-4 border-white shadow-xl w-20 h-20 text-lg'
            : selected === idx
              ? 'z-10 border-2 border-gray-300 shadow-md w-16 h-16 text-base ring-2 ring-primary/60'
              : 'z-10 border-2 border-gray-300 shadow-md w-16 h-16 text-base'
        )}
        style={{
          background: theme_color
        }}
      >
        <Avatar className={cn('rounded-full overflow-hidden', active === idx ? 'w-20 h-20' : 'w-16 h-16')}>
          <AvatarImage src={`/assets/${id}.png`} alt={name} draggable={false} className='w-full h-full object-cover' />
          <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
        </Avatar>
      </Button>
      <span className='mt-1 text-xs text-white drop-shadow font-bold pointer-events-none select-none'>{name}</span>
    </div>
  )
}

export default function TableTalk() {
  const [selected, setSelected] = useState(0) // 目標インデックス
  const [rotation, setRotation] = useState(270)
  const prevSelected = useRef(0)

  const anglePer = 360 / characters.length

  // 現在の回転角からアクティブなインデックスを逆算
  const active = Math.round((270 - rotation) / anglePer) % characters.length

  // キャラ選択時、最短経路で回転
  const handleSelect = (idx: number) => {
    if (idx === selected) return
    const from = 270 - prevSelected.current * anglePer
    const to = 270 - idx * anglePer
    const diff = ((to - from + 540) % 360) - 180
    setRotation((r) => r + diff)
    setSelected(idx)
    prevSelected.current = idx
  }

  return (
    <Container className='overflow-hidden'>
      <div className='flex flex-col items-center justify-center my-6'>
        <div
          className='relative'
          style={{
            width: `${RADIUS * 2 + OUTER_MARGIN * 2}px`,
            height: `${RADIUS * 2 + OUTER_MARGIN * 2}px`
          }}
        >
          {/* キャラクター配置部分のみ回転 */}
          <div
            className='absolute inset-0 transition-transform duration-700 w-full h-full'
            style={{
              transform: `rotate(${rotation}deg)`
            }}
          >
            {characters.map((char, idx) => {
              const angle = (360 / characters.length) * idx
              const rad = (angle * Math.PI) / 180
              const x = CENTER + Math.cos(rad) * RADIUS
              const y = CENTER + Math.sin(rad) * RADIUS
              return (
                <Icon
                  key={char.id}
                  {...char}
                  x={x}
                  y={y}
                  idx={idx}
                  active={((active % characters.length) + characters.length) % characters.length}
                  selected={selected}
                  rotation={rotation}
                  handleSelect={handleSelect}
                />
              )
            })}
          </div>
          {/* 円卓中央（回転しない） */}
          <div
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#6d4c2b] z-0 shadow-md pointer-events-none'
            style={{
              width: `${TABLE_SIZE}px`,
              height: `${TABLE_SIZE}px`,
              background: 'radial-gradient(circle at 60% 40%, #8b6a4f 60%, #5a3c1b 100%)',
              boxShadow: '0 2px 20px #0008'
            }}
          />
        </div>
      </div>
    </Container>
  )
}
