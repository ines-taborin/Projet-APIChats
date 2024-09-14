import React, { useEffect, useState } from "react";
import Chat from "../composants/Chat";
import Spinner from "../composants/Spinner";
import Error from "../pages/Error";

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

	// Initialiser les statuts de chat, de chargement et d'erreur
	const [chats, setChats] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Configurer le titre de la page
		document.title = "Accueil";
		// Récupérer les informations des races de chat
		fetch("https://api.thecatapi.com/v1/breeds", requestOptions)
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					// Filtrer les races de chat qui ont une image
					const filtreChats = data.filter((chat) => chat.image && chat.image.url && chat.image.id.length > 0);

					// Définir le statut de chats
					setChats(filtreChats);

					setError(null);
				}
				// Changer le statut de chargement
				setLoading(false);
			})
			// En cas d'erreur, afficher un message d'erreur
			.catch(() => {
				setError("Une erreur est survenue. Veuillez recharger la page.");

				// Changer le statut de chargement
				setLoading(false);
			});
	}, []);

	return (
		<>
			{/* Si le statut de chargement est en cours, afficher le spinner */}
			{loading ? (
				<div className="h-[calc(100vh-64px)] w-screen flex flex-col items-center justify-center">
					<Spinner />
				</div>
			) : error ? (
				// Si une erreur est survenue, afficher l'erreur
				<Error error={error} />
			) : chats.length === 0 ? (
				// Si aucune race de chat n'est disponible, afficher l'erreur
				<Error error="Aucune race de chat disponible." />
			) : (
				// Sinon, afficher les races de chat
				<div className="container my-10">
					<h1 className="uppercase text-4xl font-extrabold my-10 bg-[#301D1C] w-fit mx-auto px-8 py-6 text-white">Races de Chats</h1>

					<div className="grid grid-cols-3 gap-x-4 gap-y-8 w-full">
						{chats.map((chat) => (
							<Chat key={chat.id} chat={chat} />
						))}
					</div>
				</div>
			)}
		</>
	);
}

export default Accueil;
