import NewsLetterAbonnes from "../composants/newsLetterAbonnes";
import { useDispatch, useSelector } from "react-redux";
import { supprimerAbonne } from "../store/abonnesSlice";

const Abonnes = () => {
	const abonnes = useSelector((state) => state.abonnes.abonnes);
	console.log(abonnes);
	const dispatch = useDispatch();
	const supprimer = (index) => {
		const reponse = confirm("Voulez-vous supprimer cet abonné ?");
		if (reponse) {
			dispatch(supprimerAbonne(index));
		}
	};

	return (
		<div className="container my-10">
			<h1 className="uppercase text-4xl font-extrabold my-10 bg-[#301D1C] w-fit mx-auto px-8 py-6 text-white">Liste des abonnés</h1>

			<table className="w-full border-2 border-[#301D1C]">
				<tr className="bg-[#D4D0D0] border-b border-[#301D1C]">
					<th>Index</th>
					<th>Nom</th>
					<th>Adresse courriel</th>
					<th></th>
				</tr>
				{abonnes.length > 0 ? (
					abonnes.map((abonne, index) => <NewsLetterAbonnes abonne={abonne} index={index} key={abonne.mail} supprimer={supprimer} />)
				) : (
					<tr className="w-full text-center border-b border-[#301D1C]/50">
						<td colSpan="4" className="py-2 font-bold text-red-500">
							Désolé, aucun abonné n'est inscrit à l'infolettre pour le moment...
						</td>
					</tr>
				)}
			</table>
		</div>
	);
};

export default Abonnes;
