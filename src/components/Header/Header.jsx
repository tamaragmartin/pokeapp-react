import React from 'react'
import Nav from "../Nav/Nav";

import logo from "../../assets/Tamaras-PokeAPP.png";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="pokeapp" className="header--logo" />
        <Nav />
    </header>
  )
}

export default Header;
