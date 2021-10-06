import React, { useContext } from "react";
import Card from "../Card";
import { userContext } from "../../context/userContext";

const ListaPokemon = () => {
  const { pokemons } = useContext(userContext);

  const paintCard = () => {
    return pokemons.map((card, i) => <Card key={i} data={card} />);
  };
  return paintCard();
};

export default ListaPokemon;
