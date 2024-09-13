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

	const [chats, setChats] = useState([]);
	console.log(chats);
	useEffect(() => {
		document.title = "Accueil";
		fetch("https://api.thecatapi.com/v1/breeds?attach_image=1", requestOptions)
			.then((response) => response.json())
			.then((data) => {
				// Filtrer les resultats pour inclure seulement les chats avec images
				const filteredChats = data.filter((chat) => chat.image && chat.image.url && chat.image.id.length > 0);
				setChats(filteredChats);
			});
	}, []);

	return (
		<div className="container my-10 ">
			<h1 className="uppercase text-4xl font-extrabold my-10 bg-[#301D1C] w-fit mx-auto px-8 py-6 text-white">Liste des Chats</h1>

			<div className="grid grid-cols-3 gap-8">
				{chats.map((chat) => (
					<Chat key={chat.id} chat={chat} />
				))}
			</div>
		</div>
	);
}

export default Accueil;
