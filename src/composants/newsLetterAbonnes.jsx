import React from "react";
import { useDispatch } from "react-redux";
import { modifierAbonne, supprimerAbonne } from "../store/abonnesSlice";

const NewsLetterAbonnes = ({ abonne, index }) => {
	const dispatch = useDispatch();

	const handleModifier = (index) => {
		const nom = prompt(`Modifier le nom de l'abonné ${abonne.nom} : `);
		if (nom) {
			dispatch(modifierAbonne({ index, updatedAbonne: { ...abonne, nom } }));
		}
	};

	const handleSupprimer = (index) => {
		const reponse = confirm(`Voulez-vous vraiment supprimer l'abonné ${abonne.nom} ?`);
		if (reponse) {
			dispatch(supprimerAbonne(index));
		}
	};

	return (
		<tr className="w-full text-center border-b border-[#301D1C]/50">
			<td className="font-bold py-2">{index + 1}</td>
			<td className="font-bold">{abonne.nom}</td>
			<td className="font-bold">{abonne.mail}</td>
			<td className="py-2">
				<button onClick={() => handleModifier(index)} className="font-semibold text-gray-900 hover:text-gray-400 transition">
					Modifier
				</button>
				<span className="mx-2">|</span>
				<button onClick={() => handleSupprimer(index)} className="font-semibold text-red-600 hover:text-red-400 transition">
					Supprimer
				</button>
			</td>
		</tr>
	);
};

export default NewsLetterAbonnes;
