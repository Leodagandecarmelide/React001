function PokemonCard() {
  const pokemon = pokemonList[1];
  console.log(pokemon);

  let imgSrc;
  if (pokemon.imgSrc) {
    imgSrc = pokemon.imgSrc;
  } else {
    // imgSrc = "https://via.placeholder.com/150?text=?";
    <p>?</p>;
  }

  return (
    <div>
      PokemonCard
      <figure className="card">
        <img className="img_box" src={imgSrc} alt={pokemon.name} />
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
