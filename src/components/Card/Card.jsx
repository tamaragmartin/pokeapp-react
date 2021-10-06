import React from "react";

const Card = (props) => {
  const pokemon = props.data;
  return (
    <>
      <section className="card">
        <article className="card--imagecontainer">
          <img
            id="image"
            src={pokemon.sprites.other["official-artwork"]["front_default"]} //front default muy pequeño
            alt=""
          />
        </article>
        <article className="card--box">
          <h1 className="card--name">{pokemon.name} </h1>
          <div className="card--stats">
            <li>Pokédex ID: #{pokemon.id}</li>
            <li>Weight: {pokemon.weight}</li>
            <li>Height: {pokemon.height}</li>
          </div>

          <h3 className="card--type">Type: {pokemon.types[0].type.name}</h3>

          <div class="card--abilities">
            <h4 class="card--ability">
              <span class="card--title"> Ability</span>
              {pokemon.abilities[0].ability.name}
            </h4>
            <h4 class="card--ability">
              <span class="card--title">Popular move</span>
              {pokemon.moves[2].move.name}
            </h4>
          </div>

        </article>
      </section>
    </>
  );
};

export default Card;
