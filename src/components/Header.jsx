import React from 'react'
import "../sass/header.scss";
import logo from "../assets/logoKasa.png"
import Navigation from './Navigation.jsx';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Kasa" />
      <Navigation />
    </header>
  )
}

export default Header