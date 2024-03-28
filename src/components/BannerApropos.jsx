import React from 'react'
import "../sass/bannerImg.scss"
import img from "../assets/imgApropos.png"

function BannerApropos() {
  return (
    <div className='banner'>
        <img src={img} alt="montagnes" className="bannerImg" />
        <div className="mask"></div>
    </div>
  )
}

export default BannerApropos