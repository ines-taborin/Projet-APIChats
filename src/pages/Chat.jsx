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

	// Extraire l'id de la race de chat de l'URL
	const { id } = useParams();

	// Initialiser les statuts de chat, de chargement et d'erreur
	const [chat, setChat] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Récupérer les informations de la race de chat correspondante à l'id
		fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`, requestOptions)
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					// Simplifier la structure du résultat
					const breed = data[0]?.breeds[0];

					// Définir le statut de chat
					setChat(breed);

					// Configurer le titre de la page
					document.title = breed ? breed.name : "Chat";

					setError(null);
				} else {
					setError(`Aucune race de chat correspondant à : ${id}`);
				}
				// Changer le statut de chargement
				setLoading(false);
			})
			// En cas d'erreur, afficher un message d'erreur
			.catch((error) => {
				setError("Une erreur est survenue. Veuillez recharger la page.");

				// Changer le statut de chargement
				setLoading(false);
			});
	}, [id]);

	// Fonction pour afficher les étoiles
	const renderLevel = (level) => {
		const maxLevel = 5;
		const etoiles = [];
		for (let i = 1; i <= maxLevel; i++) {
			const isActive = i <= level;
			etoiles.push(
				<span key={i} className={`text-lg font-bold inline-block mr-1 transition-all ${isActive ? "text-[#E4AA17]" : "text-gray-600"}`}>
					★
				</span>
			);
		}
		return etoiles;
	};

	return (
		<>
			<Bouton href={"/"}>
				<ChevronLeft className="inline-block mr-2" />
				Retour à la liste des races de chats
			</Bouton>

			{/* Si le statut de chargement est en cours, afficher le spinner */}
			{loading ? (
				<div className="h-[calc(100vh-64px)] w-screen flex flex-col items-center justify-center">
					<Spinner />
				</div>
			) : error ? (
				// Si une erreur est survenue, afficher l'erreur
				<Error error={error} />
			) : (
				// Sinon, afficher le contenu
				<div className="container my-10">
					<h1 className="uppercase text-4xl font-extrabold my-10 bg-[#301D1C] w-fit mx-auto px-8 py-6 text-white">{chat.name || "Nom indisponible"}</h1>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div>
							<div className="group overflow-hidden">
								<Link to={`https://cdn2.thecatapi.com/images/${chat.reference_image_id}.jpg`}>
									<img
										src={chat.reference_image_id ? `https://cdn2.thecatapi.com/images/${chat.reference_image_id}.jpg` : "/chat_placeholder.webp"}
										alt={chat.name}
										className="group-hover:scale-105 transition-all"
									/>
								</Link>
							</div>
							<div className="flex items-center justify-evenly gap-6 mt-6">
								{chat.cfa_url && (
									<a href={chat.cfa_url} title="The Cat Fanciers' Association" target="_blank" rel="noopener noreferrer">
										<img src="/cfa-logo.svg" height={20} alt="CFA Logo" className="h-[40px]" />
									</a>
								)}
								{chat.vcahospitals_url && (
									<a href={chat.vcahospitals_url} title="VCA Animal Hospitals" target="_blank" rel="noopener noreferrer">
										<img src="/vca-logo.png" height={20} alt="VCA Logo" className="h-[40px]" />
									</a>
								)}
								{chat.vetstreet_url && (
									<a href={chat.vetstreet_url} title="Vet Street" target="_blank" rel="noopener noreferrer">
										<img src="/gpc-logo.svg" height={20} alt="Vet Street Logo" className="h-[40px]" />
									</a>
								)}
								{chat.wikipedia_url && (
									<a href={chat.wikipedia_url} title="Wikipedia" target="_blank" rel="noopener noreferrer">
										<img src="/Wikipedia-logo.svg" height={20} alt="Wikipedia Logo" className="h-[40px]" />
									</a>
								)}
							</div>
						</div>

						<div>
							<div className="mb-6">
								<h3 className="text-2xl font-extrabold">Détails de la race</h3>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 space-y-2 mb-2">
									<div className="text-lg">
										<span className="font-bold">Pays d'origine :</span> {chat.origin}
									</div>
									<div className="text-lg">
										<span className="font-bold">Poids :</span> {chat.weight.imperial} lbs
									</div>
									<div className="text-lg">
										<span className="font-bold">Durée de vie :</span> {chat.life_span} années
									</div>
									<div className="text-lg">
										<span className="font-bold">Hypoallergène :</span> {chat.hypoallergenic === 0 ? "Non" : "Oui"}
									</div>
									<div className="text-lg">
										<span className="font-bold">Chat d'intérieur :</span> {chat.indoor === 0 ? "Non" : "Oui"}
									</div>
									<div className="text-lg">
										<span className="font-bold">Race sans poils :</span> {chat.hairless === 0 ? "Non" : "Oui"}
									</div>
								</div>
								<div className="text-lg">
									<span className="font-bold">Tempérament :</span> {chat.temperament}
								</div>
							</div>

							<div>
								<h3 className="text-2xl font-extrabold">Caractéristiques de la race</h3>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Affectueux</span>
										<span>{renderLevel(chat.affection_level)}</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Adaptabilité</span>
										<span>{renderLevel(chat.adaptability)}</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Amical avec enfants</span>
										<span>{renderLevel(chat.child_friendly)}</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Amical avec chiens</span>
										<span>{renderLevel(chat.dog_friendly)}</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Amical avec étrangers</span>
										<span>{renderLevel(chat.stranger_friendly)}</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Besoins sociaux</span>
										<span>{renderLevel(chat.social_needs)}</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Intelligence</span>
										<span>{renderLevel(chat.intelligence)}</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Niveau d'énergie</span>
										<span>{renderLevel(chat.energy_level)}</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Perte de poils</span>
										<span>{renderLevel(chat.shedding_level)}</span>
									</div>
								</div>
							</div>
							<div className="mt-8">
								<h3 className="text-2xl font-extrabold">Description</h3>
								<p className="text-lg">{chat.description}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Chat;
