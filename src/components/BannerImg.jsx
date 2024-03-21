import React from 'react'
import "../sass/bannerImg.scss";

function BannerImg() {
  return (
    <div className='banner'>
        <img src="banner.png" alt="Banner" />
        <div className='mask'></div>
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default BannerImg