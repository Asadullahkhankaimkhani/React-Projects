import InfiniteScroll from "react-infinite-scroller";
import { Person } from "./Person";
import { useInfiniteQuery } from "react-query";

const initialUrl = "https://swapi.dev/api/people/";
const fetchUrl = async (url) => {
	const response = await fetch(url);
	return response.json();
};

export function InfinitePeople() {
	// TODO: get data for InfiniteScroll via React Query
	const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
		"sw-people",
		({ pageParam = initialUrl }) => fetchUrl(pageParam),
		{
			getNextPageParam: (lastPage) => lastPage.next || undefined,
		}
	);

	return (
		<InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
			{data?.pages.map((page, i) => (
				<div key={i}>
					{page.results.map((person) => (
						<Person
							key={person.name}
							name={person.name}
							hairColor={person.hair_color}
							eyeColor={person.eye_color}
						/>
					))}
				</div>
			))}
		</InfiniteScroll>
	);
}
