import React from 'react'
import { useState } from 'react';
import arrow from "../assets/arrow.svg"
import PropTypes from "prop-types"
import "../sass/collapsis.scss"

function Collapsis({title,children}) {
    const [isVisible, setIsVisible] = useState(false);
    const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={`colapsis ${isVisible ? "visible" : ""}`}>
    <div className="headColapsis" onClick={handleToggle}>
      <h3>{title}</h3>
      <img
        src={arrow}
        alt="flèche"
        className={`arrow ${isVisible ? "down" : ""}`}
      />
    </div>
    <div className={`paragraph ${isVisible ? "animate" : ""}`}>
      {children}
    </div>
    </div>
  )
}

Collapsis.propTypes ={
    title : PropTypes.string.isRequired,
    children : PropTypes.node.isRequired,
  };

export default Collapsis