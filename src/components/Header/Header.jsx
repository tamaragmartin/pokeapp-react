import React from 'react'
import Nav from "../Nav/Nav";

// import logo from "../../assets/";

export const Header = () => {
  return (
    <header className="header">
      {/* <img src={logo} alt="newspaper" className="header--logo" /> */}
      <h1>PokeAPP</h1>
      <Nav />
    </header>
  )
}

export default Header;
