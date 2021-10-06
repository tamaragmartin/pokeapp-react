import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import ListaPokemon from "../ListaPokemon";

import { userContext } from "../../context/userContext";
// import useFetch from "../../hooks/fetch-hook";

const Home = () => {
  const [input, setInput] = useState("");
  const { pokemons, setPokemon } = useContext(userContext);
  const inputSearch = useRef(null);

  const fetchData = () => {
    (async () => {
      const resp = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/" + input
      );
      setPokemon([...pokemons, resp.data]);
    })();
  };

  // const {loading,result} = useFetch("https://pokeapi.co/api/v2/pokemon"+input)
  //   useEffect(async ()=>{
  //     setPokemon([...pokemons, result.results])
  //   }, [result])

  const handleChange = (e) => {
    setInput(e.target.value);
  };

   const handleSubmit = (e) => {
     e.preventDefault();
   };

  //Borrar texto del input
  useEffect(() => {
    inputSearch.current.value = "";
    setInput("");
  }, [pokemons]);
  //  const inputs = document.querySelectorAll("input");
  //  inputs.forEach((input) => (input.value = ""));

  return (
    <>
      <section >
        <form className="search" onSubmit={handleSubmit} >
          <input
            className="search--input"
            placeholder="Catch a Pokémon"
            type="text"
            name="search"
            ref={inputSearch}
            onChange={handleChange}
          />
          <button className="search--button" onClick={fetchData}>Gotcha!</button>
        </form>
      </section>
      <section className="pokelist">
        <ListaPokemon />
      </section>
    </>
  );
};

export default Home;
