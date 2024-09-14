import React, { useEffect, useState } from "react";
import Chat from "../composants/Chat";

function Accueil() {
	const headers = new Headers({
		"Content-Type": "application/json",
		"x-api-key": "live_EVLvLili2JoEZbD3up1Rys3PdcVg831piGhrJ99HjelN3pPW4FkOtS4nczfAeou3",
	});

	const requestOptions = {
		method: "GET",
		headers: headers,
		redirect: "follow",
	};

	// Initialiser la liste des chats
	const [chats, setChats] = useState([]);

	useEffect(() => {
		document.title = "Accueil";
		fetch("https://api.thecatapi.com/v1/breeds", requestOptions)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				const filteredChats = data.filter((chat) => chat.image && chat.image.url && chat.image.id.length > 0);
				setChats(filteredChats);
			})
			.catch((error) => console.error("There was a problem with the fetch operation:", error));
	}, []);

	return (
		<div className="container my-10 ">
			<h1 className="uppercase text-4xl font-extrabold my-10 bg-[#301D1C] w-fit mx-auto px-8 py-6 text-white">Races de Chats</h1>

			<div className="grid grid-cols-3 gap-4 w-full">
				{chats.map((chat) => (
					<Chat key={chat.id} chat={chat} />
				))}
			</div>
		</div>
	);
}

export default Accueil;
