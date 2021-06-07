import React from 'react'
import Banner from './components/Banner'
import Features from './components/Features'
import Pick from './components/Pick'
import TopSell from './components/TopSell'
import Countdown from './components/Countdown'
import Review from './components/Review'
import Brand from './components/Brand'

export default function Home() {
  return (
    <>
      <Banner />
      {/* FEATURES */}
      <Features />
      {/* BEST PICKS */}
      <Pick />
      {/* TOP SELLERS */}
      <TopSell />
      {/* COUNTDOWN */}
      <Countdown />
      {/* REVIEWS */}
      <Review />
      {/* BRANDS */}
      <Brand />
    </>
  )
}
