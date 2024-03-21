import React from 'react'
import "../sass/gallery.scss"
import Apartment from './Apartment.jsx'

function Gallery() {
  return (
    <div className='gallery'>
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
    </div>
  )
}

export default Gallery