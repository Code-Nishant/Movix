import React from 'react'
import "./style.scss"
// component
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
import Upcoming from './upcoming/Upcoming'

function Home() {
  return (
    <div className='homePage'>
      <HeroBanner></HeroBanner>
      <Trending></Trending>
      <Popular></Popular>
      <TopRated></TopRated>
      <Upcoming></Upcoming>
      
    </div>
  )
}

export default Home