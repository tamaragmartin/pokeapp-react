import React, { useState, useContext, useEffect, useRef, } from "react";
import axios from "axios";
import ListaPokemon from "../ListaPokemon";
// import { useFetch } from "../../hooks/fetch-hook";
// import useDebounce from "../../hooks/useDebounce";

import { userContext } from "../../context/userContext";


const Home = () => {
  const [input, setInput] = useState("");
  const { pokemons, setPokemon } = useContext(userContext);
  
  const inputValue = useRef(null);
  // const debouncedSearch = useDebounce(input, 1000);
  
  const fetchData = () => {
     (async () => {
       const resp = await axios.get(
         "https://pokeapi.co/api/v2/pokemon/" + input
       );
       setPokemon([...pokemons, resp.data]);
     })();
  };
  
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // useEffect(() => {
  //   
  // }, [debouncedSearch]);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

  //Borrar texto del input
   useEffect(() => {
     inputValue.current.value = "";
     setInput("");
   }, [pokemons]);

   const refresh = () => {
    window.location.reload()
   }  
  
  return (
    <>
      <section >
         <form className="search" onSubmit={handleSubmit} > 
          <input
            className="search--input"
            placeholder="Catch a Pokémon"
            type="text"
            name="search"
            ref={inputValue}
            onChange={handleChange}
          />
          <button className="search--button" onClick={fetchData}>Gotcha!</button> 
          <button className="search--refresh" onClick={refresh}>Reset</button> 
        </form>
      </section>
      <section className="pokelist">
        <ListaPokemon />
      </section>
    </>
  );
};

export default Home;
