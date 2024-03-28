import React from 'react'
import PropTypes from "prop-types"
import fullStar from "../assets/starFull.svg"
import emptyStar from "../assets/starGrey.svg"

function Rating({ rating }) {

    const totalStars = 5;

  let starsFull = [];
  let starsEmpty = [];

  for (let index = 0; index < rating; index++) {
    starsFull.push(<img className="stars" key={index} src={fullStar} alt="Full Star" />);
  }

  for (let index = 0; index < (totalStars - rating); index++) {
    starsEmpty.push(<img className="starsGrey" key={index} src={emptyStar} alt="Empty Star" />);
  }

  return (
    <>
      {starsFull}
      {starsEmpty}
    </>
  )
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
}

export default Rating