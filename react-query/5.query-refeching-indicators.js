import { useQuery } from "react-query";
import axios from "axios";

function App() {
	const queryinfo = useQuery("pokemon", async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return axios
			.get("https://pokeapi.co/api/v2/pokemon")
			.then((res) => res.data.results);
	});

	return queryinfo.isLoading ? (
		<div>Loading...</div>
	) : queryinfo.isError ? (
		queryinfo.error.message
	) : (
		<div>
			{queryinfo.data.map((pokemon) => (
				<div key={pokemon.name}>{pokemon.name}</div>
			))}
			<br />
			{queryinfo.isFetching ? "Updating..." : null}
		</div>
	);
}

export default App;
