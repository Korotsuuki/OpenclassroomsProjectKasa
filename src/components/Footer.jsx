import React from 'react'
import logo from "../assets/logoKazaFooter.svg"
import "../sass/footer.scss"

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Kaza logo" />
      <h3>© 2020 Kasa. All rights reserved</h3>
    </footer>
  )
}

export default Footer