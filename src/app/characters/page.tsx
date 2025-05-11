'use client'
import 'keen-slider/keen-slider.min.css'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { characters } from '@/data/characters'
import { useKeenSlider } from 'keen-slider/react'

// 各キャラクターに image プロパティがある前提。なければ name の頭文字をFallbackで表示。
export default function Page() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 8
    }
  })

  return (
    <div ref={ref} className='keen-slider'>
      {characters.map((char) => (
        <div key={char.id} className='keen-slider__slide flex justify-center my-4'>
          <Avatar className='w-24 h-24 border-4 border-gray-700 dark:border-gray-200'>
            <AvatarImage
              src={`/assets/0${char.id}.png`}
              alt={char.name}
              width={64}
              height={64}
              className='object-cover w-full h-full'
            />
          </Avatar>
        </div>
      ))}
    </div>
  )
}
