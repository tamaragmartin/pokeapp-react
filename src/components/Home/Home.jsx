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

  //borrar texto del input
   useEffect(() => {
     inputSearch.current.value = "";
     setInput("");
   }, [pokemons]);
  //  const inputs = document.querySelectorAll("input");
  //  inputs.forEach((input) => (input.value = ""));

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Find a Pokemon"
            type="text"
            name="search"
            ref={inputSearch}
            onChange={handleChange}
          />
          <button onClick={fetchData}>Search</button>
        </form>
      </section>
      <section>
        <ListaPokemon />
      </section>
    </>
  );
};

export default Home;
