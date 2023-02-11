import { useQuery } from "react-query";
import axios from "axios";

function App() {
	const queryinfo = useQuery("pokemon", () =>
		axios
			.get("https://pokeapi.co/api/v2/pokemon")
			.then((res) => res.data.results)
	);

	return queryinfo.isLoading ? (
		<div>Loading...</div>
	) : queryinfo.isError ? (
		queryinfo.error.message
	) : (
		<div>
			{queryinfo.data.map((pokemon) => (
				<div key={pokemon.name}>{pokemon.name}</div>
			))}
		</div>
	);
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

ReactDOM.createRoot(document.getElementById("root")).render(
	<QueryClientProvider client={new QueryClient()}>
		<React.StrictMode>
			<App />
			<ReactQueryDevtools initialIsOpen={false} />
		</React.StrictMode>
	</QueryClientProvider>
);
