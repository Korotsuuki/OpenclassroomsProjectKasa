import React from 'react'
import Error404 from '../components/Error404.jsx';
import "../sass/error.scss"

function Error() {
  return (
    <div className='error'>
        <Error404 />
    </div>
  )
}

export default Error