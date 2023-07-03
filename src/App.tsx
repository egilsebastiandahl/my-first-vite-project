import Heading from "./components/Heading";
import PokemonMain from "./components/pokemon/PokemonMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  // const [count, setCount] = useState<number>(0);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Heading title={"pokesite".toUpperCase()} />}>
            {/* <Route path="display" element={<DisplayPokemon />} /> */}
            <Route index path="*" element={<PokemonMain />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Section>This is my section</Section>
      <Counter setCount={setCount}> Count is {count} </Counter>
      <List items={["Coffee", "Tacos", "Code", `${count}`]} render={(item: string) => <span className="bold">{item}</span>} /> */}
      {/* <PokemonMain /> */}
    </>
  )
}

export default App
