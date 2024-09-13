import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Bouton from "../composants/Bouton";
import { ChevronLeft } from "lucide-react";
import Spinner from "../composants/Spinner";

function Chat() {
	const headers = new Headers({
		"Content-Type": "application/json",
		"x-api-key": "live_EVLvLili2JoEZbD3up1Rys3PdcVg831piGhrJ99HjelN3pPW4FkOtS4nczfAeou3",
	});

	const requestOptions = {
		method: "GET",
		headers: headers,
		redirect: "follow",
	};

	// Get the `id` from the URL
	const { id } = useParams();

	// Initialize the `chat` state
	const [chat, setChat] = useState(null);

	useEffect(() => {
		// Fetch the specific chat data based on the `id` from the URL
		fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`, requestOptions)
			.then((response) => response.json())
			.then((data) => {
				// Logging the response to figure out the data format
				console.log(data[0].breeds[0]);

				// Simplifying the data to only include the `breeds` array for ease of use
				const breed = data[0].breeds[0];

				// Setting the chat state to the breeds array
				setChat(breed);

				// Setting the page title to the breed name
				document.title = breed ? breed.name : "Chat";
			});
	}, [id]);

	return (
		<>
			<Bouton href={"/"}>
				<ChevronLeft className="inline-block mr-2" />
				Retour à la liste des chats
			</Bouton>

			{/* Display the page content */}
			{chat ? (
				<div className="container my-10 ">
					<h1 className="uppercase text-4xl font-extrabold my-10 bg-[#301D1C] w-fit mx-auto px-8 py-6 text-white">{chat ? chat.name : "Nom indisponible"}</h1>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="group overflow-hidden">
							<Link to={`https://cdn2.thecatapi.com/images/${chat.reference_image_id}.jpg`}>
								<img
									src={chat.reference_image_id ? `https://cdn2.thecatapi.com/images/${chat.reference_image_id}.jpg` : "/chat_placeholder.webp"}
									alt={chat ? chat.name : ""}
									className="group-hover:scale-105 transition-all"
								/>
							</Link>
						</div>
						<div>
							<div>
								<h3 className="text-2xl font-extrabold">Description</h3>
								<p className="text-justify">{chat ? chat.description : "Aucune description n'est disponible"}</p>
							</div>
							<div className="flex items-center gap-6 mt-4">
								{chat.cfa_url && (
									<a href={chat.cfa_url} target="_blank">
										<img src="/cfa-logo.svg" alt={chat.name} />
									</a>
								)}
								{chat.vcahospitals_url && (
									<a href={chat.vcahospitals_url} target="_blank">
										<img src="/vca-logo.png" alt={chat.name} />
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			) : (
				// Display a Spinner if loading
				<div className="h-[calc(100vh-64px)] w-screen flex flex-col items-center justify-center">
					<Spinner />
				</div>
			)}
		</>
	);
}

export default Chat;
