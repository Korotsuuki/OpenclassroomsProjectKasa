import React from 'react'
import Thumb from "../components/Thumb.jsx"
import locations from "../data/locations.json"
import "../sass/gallery.scss"

function Gallery() {
  return (
    <div className="gallery">
      <Thumb locations={locations}/>
    </div>
  )
}

export default Gallery