import { useQuery } from "react-query";
import axios from "axios";

function App() {
  const queryinfo = useQuery("pokemon", () => {
    // if(true) {
    //   throw new Error('Error')
    // }
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.data.results);
  });

  return (
    <div>
      {queryinfo.isLoading ? (
        <div>Loading...</div>
      ) : queryinfo.isError ? (
        queryinfo.error.message
      ) : (
        queryinfo.data.map((pokemon) => (
          <div key={pokemon.name}>{pokemon.name}</div>
        ))
      )}
    </div>
  );
}

export default App;
