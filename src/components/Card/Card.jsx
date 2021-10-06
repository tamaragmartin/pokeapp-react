import React from "react";


const Card = (props) => {
  const pokemon = props.data;
  return (
    
    <>
    <section>
      <article>
        <p>{pokemon.name.toUpperCase()} </p>
        <p>Pokédex ID: #{pokemon.id}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Height: {pokemon.height}</p>
        <p>Type: {pokemon.types[0].type.name}</p>
        <p>Popular move: {pokemon.moves[2].move.name}</p>
      </article>
      <article>
        {pokemon.sprites ? (
          <img id="image"
            src={pokemon.sprites.other["official-artwork"]["front_default"]} //front default muy pequeño
            alt="" />
        ) : (
          ""
        )}
      </article>
    </section>
    </>
  );

}

export default Card
