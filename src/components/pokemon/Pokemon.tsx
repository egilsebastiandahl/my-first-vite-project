import "./Pokemon.css"

type PokemonType = {
    name: string;
    url: string;
    pokemonIndex: number;
    onPokemonClick: (e: string) => Promise<void>;
}

export const Pokemon = (pokemon: PokemonType) => {

    return (
        <div className="pokemon" onClick={() => { pokemon.onPokemonClick(pokemon.url) }}>
            <h5>{pokemon.name.toUpperCase()}</h5>
            <h6>Dex number: {pokemon.pokemonIndex}</h6>
        </div>
    )
}

export default Pokemon;