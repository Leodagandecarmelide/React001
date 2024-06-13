function PokemonCard() {
  const pokemon = pokemonList[0];
  console.log(pokemon);

  return (
    <div>
      PokemonCard
      <figure className="card">
        {pokemon.imgSrc ? (
          <img className="img_box" src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>?</p>
        )}

        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default PokemonCard;
