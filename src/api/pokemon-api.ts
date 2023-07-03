// Fetches a given amount of pokemon
export const getPokemon = async (pokemonAmount?: number) => {
    let url = "https://pokeapi.co/api/v2/pokemon";
    if (pokemonAmount) {
        url += "?limit=" + pokemonAmount;
    }
    const res = await fetch(`${url}`);
    const json = await res.json();
    return json;
}

// drills into a specific pokemon
export const getDetailedPokemonInformation = async (url: string) => {
    const res = await fetch(`${url}`);
    const json = await res.json();
    // console.log(json);
    return json;
}

// drills into a specific pokemon
export const getPokemonFormInformation = async (pokemonIndex: string) => {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon-form/";
    const res = await fetch(`${baseUrl + pokemonIndex}`);
    const json = await res.json();
    // console.log(json);
    return json;
}


