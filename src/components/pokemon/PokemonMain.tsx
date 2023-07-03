import { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import "./PokemonMain.css"
import { getPokemon } from "../../api/pokemon-api";
import { getDetailedPokemonInformation } from "../../api/pokemon-api";
import { DetailedPokemonInformation } from "../../models/detailed-pokemon.model";
import DisplayPokemon from "./DisplayedPokemon";

export const PokemonMain = () => {

    const [search, setSearch] = useState("");
    const [amount, setAmount] = useState(0);
    const [pokemonList, setPokemonList] = useState<{ name: string, url: string }[]>([])
    const [pokemonToDisplay, setPokemonToDisplay] = useState<DetailedPokemonInformation>();

    useEffect(() => {

        (async () => {
            // const data = await getPokemon();
            // setPokemonList(data.results);
        })();

    }, []);

    // useEffect(() => {
    //     console.log(pokemonToDisplay);
    // }, [pokemonToDisplay])

    async function onGetPokemonClick() {
        const newPokemons = await getPokemon(amount);
        // console.log("New pokemons: ", newPokemons.results);
        setPokemonList(newPokemons.results);
    }

    async function onPokemonClick(pokemonClickedUrl: string) {
        setPokemonToDisplay(await getDetailedPokemonInformation(pokemonClickedUrl));
    }


    return (
        <div className="pokemon-main">



            <label about="pokemonAmount">How many pokemon to get: </label>
            <input id="pokemonAmount" type="text" value={amount} onChange={(evt) => setAmount(+evt.target.value)}></input>
            {amount != 0 && <button onClick={() => { onGetPokemonClick() }}>Get pokemon</button>}
            {pokemonList.length != 0 && <div>
                <label about="searchPokemon">Search for pokemon: </label>
                <input id="searchPokemon" type="text" value={search} onChange={(evt) => setSearch(evt.target.value)}></input>
                {/* {search && <p>Searching...</p>} */}
            </div>}
            {/* {pokemonToDisplay && <img src={pokemonToDisplay?.sprites.front_default}></img>} */}
            <div className="container">
                <PokemonList searchString={search} pokemonList={pokemonList} onPokemonClick={onPokemonClick} />
                {pokemonToDisplay && <DisplayPokemon pokemonToDisplay={pokemonToDisplay} />}
            </div>

        </div>
    )
}


export default PokemonMain;