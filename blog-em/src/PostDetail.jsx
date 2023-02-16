import { useMutation, useQuery } from "react-query";

async function fetchComments(postId) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
	);
	return response.json();
}

async function deletePost(postId) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/postId/${postId}`,
		{ method: "DELETE" }
	);
	return response.json();
}

async function updatePost(postId) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/postId/${postId}`,
		{ method: "PATCH", data: { title: "REACT QUERY FOREVER!!!!" } }
	);
	return response.json();
}

export function PostDetail({ post }) {
	//  post with id
	const { data, isLoading, isError } = useQuery(
		["comments", post.id],
		() => fetchComments(post.id),
		{ staleTime: 5000 }
	);

	const deleteMutation = useMutation((postId) => deletePost(postId));

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}

	return (
		<>
			<h3 style={{ color: "blue" }}>{post.title}</h3>
			<button onClick={() => deleteMutation.mutate(post.id)}>
				Delete
			</button>{" "}
			<button>Update title</button>
			{deleteMutation.isLoading && (
				<p style={{ color: "purple" }}>Deleting...</p>
			)}
			{deleteMutation.isError && <p style={{ color: "red" }}>Error deleting</p>}
			{deleteMutation.isSuccess && <p style={{ color: "green" }}>Deleted</p>}
			<p>{post.body}</p>
			<h4>Comments</h4>
			{data.map((comment) => (
				<li key={comment.id}>
					{comment.email}: {comment.body}
				</li>
			))}
		</>
	);
}
