'use client'

import {type FC, useState, useEffect} from 'react'
import type {Banner as BannerProps} from '@/app/_components/HomePage/getData'
import Banner from './components/Banner'
import Controller from './components/Controller'

interface Props {
  hero: BannerProps[] | null
}

const HeroBanners: FC<Props> = ({hero}) => {
  const [slide, setSlide] = useState(0)

  const length = hero?.length ?? 0

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = slide + 1

      if (nextSlide >= length) {
        setSlide(0)
      } else {
        setSlide(nextSlide)
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [slide, length])

  if (!hero || !length) return null

  if (length === 1) {
    return <Banner banner={hero[0]} />
  }

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
      <Controller slide={slide} length={length} onSetSlide={(i) => setSlide(i)} />
    </div>
  )
}

export default HeroBanners
