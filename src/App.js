import "./App.css";
import './styles/styles.scss'

import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { userContext } from "./context/userContext";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [pokemons, setPokemon] = useState([]);

  const value = {
    pokemons: pokemons,
    setPokemon: setPokemon,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={value}>
          <Header />
          <Main />
        </userContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
