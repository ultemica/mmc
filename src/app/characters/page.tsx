'use client'
import 'keen-slider/keen-slider.min.css'
import Container from '@/components/Container'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { characters } from '@/data/characters'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'

// 各キャラクターに image プロパティがある前提。なければ name の頭文字をFallbackで表示。
export default function Page() {
  const [current, setCurrent] = useState(0)
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 8
    },
    slideChanged(s) {
      setCurrent(s.track.details.rel)
    }
  })

  return (
    <Container>
      <div ref={ref} className='keen-slider'>
        {characters.map((char) => (
          <div key={char.id} className='keen-slider__slide flex flex-col items-center my-4'>
            <Avatar className='w-24 h-24 border-4 border-gray-700 dark:border-gray-200'>
              <AvatarImage
                src={`/assets/${char.id}.png`}
                alt={char.name}
                width={64}
                height={64}
                className='object-cover w-full h-full'
              />
            </Avatar>
            <span className='mt-2 text-sm font-medium text-gray-800 dark:text-gray-200'>{char.name}</span>
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-2 mt-2'>
        {characters.map((_, idx) => (
          <Button
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={idx}
            className={`w-2 h-2 rounded-full p-0 min-w-0 transition ${current === idx ? 'bg-blue-400 shadow-[0_0_8px_2px_rgba(96,165,250,0.7)] scale-125' : 'bg-gray-400 dark:bg-gray-600'}`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            aria-label={`キャラクター${idx + 1}へ`}
            type='button'
            variant='ghost'
          />
        ))}
      </div>
    </Container>
  )
}
