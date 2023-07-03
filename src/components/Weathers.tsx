import { useEffect, useState } from "react";
import { getPokemon } from "../api/pokemon-api";


function Weathers() {
    const [list, setList] = useState([{
        name: "Peter",
        url: "123"
    },
    {
        name: "Jack",
        url: "1234"
    },
    ]);


    // useEffect(() => {
    //     fetchData();

    //     async function fetchData() {
    //         await getPokemon().then((data) => {
    //             setList(data.results);
    //             console.log("Setting list: ", data);

    //         });
    //     }

    // }, []);


    // setList(await fetchData());

    // const getUrl =
    //     'https://pokeapi.co/api/v2/pokemon/';

    // React.useEffect(() => {
    //     const fetchData = async () => {
    //         const resultat = await fetch(getUrl);
    //         resultat.json().then((result) => {
    //             console.log(result);
    //             setList(result.results);
    //         });
    //     };
    //     console.log("Fetch data")
    //     fetchData();
    // }, []);

    return (
        <>
            {list?.map(entity => {
                return (
                    <div key={entity.name}>
                        <h1>{entity.name}</h1>

                    </div>
                )
            })}
        </>
    )
}



// type LocationType = {
//     locationName: string;
//     id: string;
// }

// function Location(location: LocationType) {
//     console.log(name);

//     return <h1></h1>
// }

export default Weathers;