import React from 'react'
import Banner from '../components/BannerImg.jsx';
import Gallery from '../components/Gallery.jsx';
import "../sass/home.scss"

function Home() {
  return (
    <div className='home'>
    <Banner />
    <Gallery />
    </div>
  )
}

export default Home