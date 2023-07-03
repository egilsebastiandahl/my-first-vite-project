import Pokemon from "./Pokemon";
import { PokemonModel } from "../../models/Animals.model";
import "./PokemonList.css"

type PokemonListProps = {
    searchString: string;
    pokemonList: PokemonModel[];
    onPokemonClick: (e: string) => Promise<void>;
}

export default function PokemonList(pokemonListProps: PokemonListProps) {
    // const [pokemonList, setPokemonList] = useState<{ name: string, url: string }[]>([])

    // Runs the first time the app starts up
    // useEffect(() => {

    //     (async () => {
    //         const data = await getPokemon();
    //         setPokemonList(data.results);
    //     })();



    // }, []);

    // useEffect(() => {
    //      fetchData();
    //     async function fetchData() {
    //         const data = await getPokemon();
    //         setPokemonList(data.results);
    //     }
    // }, [])
    function calculateIndex(url: string) {
        return +url.split("pokemon/")[1].slice(0, url.split("pokemon/")[1].length - 1)
    }

    function ReturnListOrRestrictedList() {
        if (pokemonListProps.searchString) {
            return (
                <div className="pokemon-list">
                    {pokemonListProps.pokemonList.filter(entity => entity.name.includes(pokemonListProps.searchString)).map((pokemon) => {


                        return (<Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} pokemonIndex={calculateIndex(pokemon.url)} onPokemonClick={pokemonListProps.onPokemonClick} />)
                    })}
                </div>
            )
        } else {
            return (
                <div className="pokemon-list">
                    {pokemonListProps.pokemonList.map((pokemon) => {
                        return (<Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} pokemonIndex={calculateIndex(pokemon.url)} onPokemonClick={pokemonListProps.onPokemonClick} />)
                    })}
                </div>
            )
        }
    }

    return ReturnListOrRestrictedList();






}