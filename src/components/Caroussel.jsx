import React from 'react'
import PropTypes from "prop-types"
import arrowR from "../assets/arrowRight.svg"
import arrowL from "../assets/arrowLeft.svg"
import { useState } from 'react'

function Caroussel({slides}) {

    const [currentIndex, setCurrentIndex] = useState(0);

const handlePrevClick = () => {
  setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
};

const handleNextClick = () => {
  setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
};

const currentSlide = slides[currentIndex];
const numSlides = slides.length;

const shouldShowArrows = numSlides > 1;
const shouldShowIndicator = numSlides > 1;

  return (
    <div className="caroussel">
    <img className="slider" src={currentSlide} alt={`Slide ${currentIndex + 1}`} />
    {shouldShowArrows && (
     <>
     <img className="arrowRight" src={arrowR} alt="Flèche Droite" onClick={handleNextClick}/>
     <img className="arrowLeft" src={arrowL} alt="Flèche Gauche" onClick={handlePrevClick} />
     </>
    )}
    {shouldShowIndicator && (
      <div className="slide-indicator">{`${currentIndex + 1}/${slides.length}`}</div>
     )}
 </div>
  )
}

Caroussel.propTypes = {
    slides : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Caroussel