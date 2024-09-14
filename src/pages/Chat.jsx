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
				// Simplifying the data to only include the `breeds` array for ease of use
				const breed = data[0]?.breeds[0];
				console.log(breed);
				setChat(breed);
				// Setting the page title to the breed name
				document.title = breed ? breed.name : "Chat";
			});
	}, [id]);

	// Function to display caracteristic levels up to 5
	const renderLevel = (level) => {
		const maxLevel = 5;
		const cats = [];
		for (let i = 1; i <= maxLevel; i++) {
			const isActive = i <= level;
			cats.push(
				<span key={i} className={`text-lg font-bold inline-block mr-1 transition-all ${isActive ? "text-[#E4AA17]" : "text-gray-600"}`}>
					★
				</span>
			);
		}
		return cats;
	};

	return (
		<>
			<Bouton href={"/"}>
				<ChevronLeft className="inline-block mr-2" />
				Retour à la liste des chats
			</Bouton>

			{/* If there is a result, display the page content */}
			{chat ? (
				<div className="container my-10 ">
					<h1 className="uppercase text-4xl font-extrabold my-10 bg-[#301D1C] w-fit mx-auto px-8 py-6 text-white">{chat.name || "Nom indisponible"}</h1>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="group overflow-hidden">
							<Link to={`https://cdn2.thecatapi.com/images/${chat.reference_image_id}.jpg`}>
								<img
									src={chat.reference_image_id ? `https://cdn2.thecatapi.com/images/${chat.reference_image_id}.jpg` : "/chat_placeholder.webp"}
									alt={chat.name}
									className="group-hover:scale-105 transition-all"
								/>
							</Link>
							{/* Liens externes */}
							<div className="flex items-center justify-evenly gap-6 mt-6">
								{chat.cfa_url && (
									<a href={chat.cfa_url} title="The Cat Fanciers' Association" target="_blank" rel="noopener noreferrer">
										<img src="/cfa-logo.svg" height={20} alt={chat.name} className="h-[40px]" />
									</a>
								)}
								{chat.vcahospitals_url && (
									<a href={chat.vcahospitals_url} title="VCA Animal Hospitals" target="_blank" rel="noopener noreferrer">
										<img src="/vca-logo.png" height={20} alt={chat.name} className="h-[40px]" />
									</a>
								)}
								{chat.vetstreet_url && (
									<a href={chat.vetstreet_url} title="Vet Street" target="_blank" rel="noopener noreferrer">
										<img src="/gpc-logo.svg" height={20} alt={chat.name} className="h-[40px]" />
									</a>
								)}
								{chat.wikipedia_url && (
									<a href={chat.wikipedia_url} title="Wikipedia" target="_blank" rel="noopener noreferrer">
										<img src="/Wikipedia-logo.svg" height={20} alt={chat.name} className="h-[40px]" />
									</a>
								)}
							</div>
						</div>

						<div>
							{/* Caracteristics */}
							<div className="mb-6">
								<h3 className="text-2xl font-extrabold">Détails de la race</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 space-y-2 mb-2">
									{/* Pays d'origine */}
									<div className="text-lg">
										<span className="font-bold">Pays d'origine :</span> {chat.origin}
									</div>
									{/* Poids */}
									<div className="text-lg">
										<span className="font-bold">Poids :</span> {chat.weight.imperial} lbs
									</div>
									{/* Durée de vie */}
									<div className="text-lg">
										<span className="font-bold">Durée de vie :</span> {chat.life_span} années
									</div>
									{/* Hypoallergène */}
									<div className="text-lg">
										<span className="font-bold">Hypoallergène :</span> {chat.hypoallergenic === 0 ? "Non" : "Oui"}
									</div>
									{/* Chat d'intérieur */}
									<div className="text-lg">
										<span className="font-bold">Chat d'intérieur :</span> {chat.indoor === 0 ? "Non" : "Oui"}
									</div>
									{/* Sans poils  */}
									<div className="text-lg">
										<span className="font-bold">Race sans poils :</span> {chat.indoor === 0 ? "Non" : "Oui"}
									</div>
								</div>
								<div className="text-lg">
									<span className="font-bold">Tempérament :</span> {chat.temperament}
								</div>
							</div>
							<div>
								<h3 className="text-2xl font-extrabold">Caractéristiques de la race</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 space-y-2">
									{/* Affectueux */}
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Affectueux </span>
										<span>{renderLevel(chat.affection_level)}</span>
									</div>
									{/* Adaptabilité */}
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Adaptabilité </span>
										<span>{renderLevel(chat.aadaptability)}</span>
									</div>
									{/* Amical avec les Enfants */}
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Amical avec enfants </span>
										<span>{renderLevel(chat.child_friendly)}</span>
									</div>
									{/* Amical avec Chiens */}
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Amical avec chiens </span>
										<span>{renderLevel(chat.dog_friendly)}</span>
									</div>
									{/* Amical avec étrangers */}
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Amical avec étrangers </span>
										<span>{renderLevel(chat.stranger_friendly)}</span>
									</div>
									{/* Besoins sociaux */}
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Besoins sociaux </span>
										<span>{renderLevel(chat.social_needs)}</span>
									</div>
									{/* Intelligence */}
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Intelligence </span>
										<span>{renderLevel(chat.intelligence)}</span>
									</div>
									{/* Niveau d'énergie */}
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Niveau d'énergie </span>
										<span>{renderLevel(chat.energy_level)}</span>
									</div>
									{/* Perte de poils */}
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Perte de poils </span>
										<span>{renderLevel(chat.shedding_level)}</span>
									</div>
									{/* Problèmes de santé */}
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Problèmes de santé </span>
										<span>{renderLevel(chat.health_issues)}</span>
									</div>
									{/* Toilettage */}
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Toilettage </span>
										<span>{renderLevel(chat.grooming)}</span>
									</div>
									{/* Vocalisation */}
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold">Vocalisation </span>
										<span>{renderLevel(chat.vocalisation)}</span>
									</div>
								</div>
							</div>

							<div>
								{/* Description */}
								<h3 className="text-2xl font-extrabold mt-6">Description</h3>
								<p className="text-justify">{chat.description || "Aucune description n'est disponible"}</p>
							</div>
						</div>
					</div>
				</div>
			) : (
				// Otherwise display a Spinner while loading
				<div className="h-[calc(100vh-64px)] w-screen flex flex-col items-center justify-center">
					<Spinner />
				</div>
			)}
		</>
	);
}

export default Chat;
