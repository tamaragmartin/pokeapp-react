import React from "react";


const Card = (props) => {
  const pokemon = props.data;
  return (
    
    <>
    <section>
      <article>
        <p>{pokemon ? pokemon.name : ""}</p>
        <p>#{pokemon ? pokemon.id : ""}</p>
      </article>
    </section>
    <section>
        <article>
          <p> {pokemon.stats ? pokemon.stats[0].base_stat : ""}</p>
          <p> {pokemon.types ? pokemon.types[0].type.name : ""}</p>
          <p> {pokemon ? pokemon.weight : ""}</p>
          <p> {pokemon ? pokemon.height : ""}</p>
        </article>
        <article>
          {pokemon.sprites ? (
            <img id="image"
              src={pokemon.sprites.other["official-artwork"]["front_default"]}
              alt={pokemon.name} />
          ) : (
            ""
          )}
        </article>

      </section>
      </>
  );

}

export default Card
