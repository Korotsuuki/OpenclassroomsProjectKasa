import React from 'react'
import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <div className='navigation'>
        <ul>
            <NavLink to ="/Accueil" className={({isActive}) => (isActive ? "nav-underline" : "")}>
            <li>Accueil</li>
            </NavLink>
            <NavLink to ="/Apropos" className={({isActive}) => (isActive ? "nav-underline" : "")}>
            <li>A propos</li>
            </NavLink>
        </ul>
    </div>
  )
}

export default Navigation