'use client'
import { Button } from '@/components/ui/button'
import { characters } from '@/data/characters'
import { useRef, useState } from 'react'
import Container from '../Container'

const RADIUS = 140 // 円卓の半径(px)
const OUTER_MARGIN = 40
const TABLE_SIZE = 90
const CENTER = RADIUS + OUTER_MARGIN

export default function Table() {
  const [selected, setSelected] = useState(0) // 選択中キャラindex
  const [rotation, setRotation] = useState(270) // 現在の回転角
  const prevSelected = useRef(0)

  const anglePer = 360 / characters.length

  // キャラ選択時、最短経路で回転
  const handleSelect = (idx: number) => {
    if (idx === selected) return
    const from = 270 - prevSelected.current * anglePer
    const to = 270 - idx * anglePer
    const diff = ((to - from + 540) % 360) - 180 // -180〜180の範囲に正規化
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
                <Button
                  key={char.id}
                  onClick={() => handleSelect(idx)}
                  variant={selected === idx ? 'default' : 'outline'}
                  aria-label={char.name}
                  className={[
                    'absolute flex items-center justify-center select-none transition-all duration-300 cursor-pointer font-bold',
                    'translate-x-[-1/2] translate-y-[-1/2] rounded-full',
                    'text-white',
                    selected === idx
                      ? 'z-20 border-4 border-white shadow-xl w-20 h-20 text-lg'
                      : 'z-10 border-2 border-gray-300 shadow-md w-16 h-16 text-base'
                  ].join(' ')}
                  style={{
                    left: x,
                    top: y,
                    background: char.color,
                    // Tailwindでrotateはできるが、動的値なのでstyleで指定
                    transform: `translate(-50%, -50%) rotate(${-rotation}deg)`
                  }}
                >
                  {char.name}
                </Button>
              )
            })}
          </div>
          {/* 円卓中央（回転しない） */}
          <div
            className='flex items-center justify-center font-bold text-gray-700 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-100 border-4 border-gray-200 z-0 shadow-md text-[20px] pointer-events-none'
            style={{
              width: `${TABLE_SIZE}px`,
              height: `${TABLE_SIZE}px`,
              // boxShadowのrgba部分のみstyleで指定
              boxShadow: '0 2px 12px #0001'
            }}
          >
            Table
          </div>
        </div>
      </div>
    </Container>
  )
}
