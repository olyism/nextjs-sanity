'use client'

import {type FC, useState, useEffect} from 'react'
import cn from 'classnames'
import type {Banner as BannerProps} from '@/app/_components/HomePage/getData'
import Banner from './components/Banner'

interface Props {
  hero: BannerProps[] | null
}

const HeroBanners: FC<Props> = ({hero}) => {
  const length = hero?.length

  if (!length) return null

  if (length === 1) {
    return <Banner banner={hero[0]} />
  }

  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = slide + 1

      if (nextSlide >= length) {
        setSlide(0)
      } else {
        setSlide(nextSlide)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [slide])

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex relative transition-left duration-500"
        style={{
          left: `-${slide * 100}%`,
          width: `${hero.length * 100}%`,
        }}
      >
        {hero.map((banner) => (
          <Banner banner={banner} key={banner._id} />
        ))}
      </div>
      <ul className="absolute w-full bottom-4 z-10 text-center">
        {[...Array(length)].map((_, i) => (
          <li className="inline-block mx-[6px]" key={i}>
            <button
              className={cn(
                'rounded-full',
                'w-3',
                'h-3',
                i === slide ? 'bg-white/90' : 'bg-white/50'
              )}
              onClick={() => setSlide(i)}
            >
              <span className="sr-only">Go to {i + 1}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default HeroBanners
