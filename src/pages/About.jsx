import React from 'react'
import BannerApropos from '../components/BannerApropos.jsx'
import Collapsis from "../components/Collapsis.jsx"
import colapsJson from "../data/colaps.json"
import "../sass/about.scss"

function About() {
  return (
    <div className='about'>
        <BannerApropos />
        {colapsJson.map((colaps, index) => (
        <Collapsis key={index} index={index} title={colaps.title}>
          {colaps.text}
        </Collapsis>
      ))}
    </div>
  )
}

export default About