import { DetailedPokemonInformation } from "../../models/detailed-pokemon.model";
import { useEffect, useState } from "react";
import "./DisplayedPokemon.css"

type DisplayPokemonProps = {
    pokemonToDisplay: DetailedPokemonInformation | undefined
}

/**
 * Shows the currently displayed pokemon. Should take in the pokemon as a parameter 
 * @returns 
 */

export function DisplayPokemon({ pokemonToDisplay }: DisplayPokemonProps) {

    // const [searchParams, setSearchParams] = useSearchParams();
    // const [pokedexIndex, setPokedexIndex] = useState();
    // searchParams.get("pokedexIndex")
    const [useShiny, setUseShiny] = useState(false);
    const [useRenewedImage, setUseRenewedImage] = useState(false);
    const [displayImage, setDisplayImage] = useState(pokemonToDisplay?.sprites.front_default)

    // Evaluate and set display pokemon image url
    useEffect(() => {
        if (useShiny && !useRenewedImage) {
            // use shiny
            setDisplayImage(pokemonToDisplay?.sprites.front_shiny);
        } else if (useShiny && useRenewedImage) {
            // use shiny and renewed
            setDisplayImage(pokemonToDisplay?.sprites.other.home.front_shiny);
        } else if (useRenewedImage) {
            // use renewed
            setDisplayImage(pokemonToDisplay?.sprites.other.home.front_default);
        } else {
            // default
            setDisplayImage(pokemonToDisplay?.sprites.front_default);
        }
    }, [pokemonToDisplay, useShiny, useRenewedImage])

    return (
        <div className="display-pokemon-container">
            <button id="shiny-button" onClick={() => { setUseShiny(!useShiny) }}>{useShiny ? "Show normal" : "Show shiny"}</button>
            <img src={displayImage} height={400 + 'px'}></img>
            <div className="evolution-information">
                <h3 className="pokemon-name">{pokemonToDisplay?.name.toUpperCase()}</h3>
                <button className="evolution-selector" onClick={() => { setUseRenewedImage(!useRenewedImage) }}>{useRenewedImage ? "Oldify" : "Renew"}</button>
            </div>
        </div>
    )
}

export default DisplayPokemon;