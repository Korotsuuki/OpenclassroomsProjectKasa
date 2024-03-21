import React from 'react'
import "../sass/header.scss";
import Navigation from './Navigation.jsx';

function Header() {
  return (
    <header>
      <img src="logoKasa.png" alt="Logo Kasa" />
      <Navigation />
    </header>
  )
}

export default Header