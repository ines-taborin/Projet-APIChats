import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Post from "../composants/Post";

function Posts() {
	const headers = new Headers({
		"Content-Type": "application/json",
		"x-api-key": "live_EVLvLili2JoEZbD3up1Rys3PdcVg831piGhrJ99HjelN3pPW4FkOtS4nczfAeou3",
	});

	const requestOptions = {
		method: "GET",
		headers: headers,
		redirect: "follow",
	};

	const { id } = useParams();
	console.log(id);
	const [posts, setPosts] = useState([]);
	const [chat, setChat] = useState(null);

	useEffect(() => {
		// Fetch the specific chat data based on the `id` from the URL
		fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`, requestOptions)
			.then((response) => response.json())
			.then((data) => {
				// Logging the response to figure out the format
				console.log(data[0].breeds[0]);

				// Simplifying the data to only include the `breeds` array for ease of use
				const breed = data[0].breeds[0];

				// Setting the `chat` state to the `breeds` array
				setChat(breed);

				// Setting the page title to the breed name
				document.title = breed ? breed.name : "Chat";
			});
	}, [id]);

	return (
		<>
			<Link to={"/"} className="lien">
				Retour à la liste des chats
			</Link>

			{chat ? (
				<>
					<h1 className="uppercase text-4xl font-extrabold my-10 bg-[#301D1C] w-fit mx-auto px-8 py-6 text-white">{chat ? chat.name : "Nom indisponible"}</h1>

					<div className="conteneur">
						{posts.map((post) => (
							<Post key={post.id} post={post} />
						))}
					</div>
				</>
			) : (
				<p>Loading...</p> // Add a loading state while chat data is being fetched
			)}
		</>
	);
}

export default Posts;
