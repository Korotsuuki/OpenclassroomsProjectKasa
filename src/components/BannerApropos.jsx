import React from 'react'
import "../sass/bannerImg.scss"

function BannerApropos() {
  return (
    <div className='banner'>
        <img src="imgApropos.png" alt="montagnes" className="bannerImg" />
        <div className="mask"></div>
    </div>
  )
}

export default BannerApropos