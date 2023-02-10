import { useQuery } from "react-query";
import axios from "axios";

function App() {
  const queryinfo = useQuery("pokemon", () =>
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.data.results)
  );
  console.log(queryinfo);
  return (
    <div>
      {queryinfo.isLoading ? (
        <div>Loading...</div>
      ) : (
        queryinfo.data.map((pokemon) => (
          <div key={pokemon.name}>{pokemon.name}</div>
        ))
      )}
    </div>
  );
}

export default App;
