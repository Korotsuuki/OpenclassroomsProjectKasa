import React from 'react'
import "../sass/bannerImg.scss";
import img from "../assets/banner.png"

function BannerImg() {
  return (
    <div className='banner'>
        <img src={img} alt="Banner" />
        <div className='mask'></div>
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default BannerImg