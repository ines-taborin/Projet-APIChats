import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ajouterAbonne } from "../store/abonnesSlice";

const Ajout = () => {
	const listeAbonnes = useSelector((state) => state.abonnes.abonnes);
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [abonne, setAbonne] = useState({ nom: "", mail: "" });

	const handleChange = (e) => {
		setAbonne({ ...abonne, [e.target.name]: e.target.value });
	};

	const verifierMail = (mail) => {
		let existe = listeAbonnes.find((abonne) => abonne.mail === mail);
		return existe == undefined ? false : true;
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (verifierMail(abonne.mail) == true) alert(`Un abonné utilisant le courriel ${abonne.mail} est déjà inscrit...`);
		else dispatch(ajouterAbonne(abonne));

		setAbonne({ nom: "", mail: "" });
	};

	return (
		<footer className="w-screen bg-[#D4D0D0]/70 py-6">
			<h3 className="text-center text-3xl font-extrabold mb-4">M'inscrire à l'infolettre</h3>
			<form onSubmit={handleSubmit(onSubmit)} className="container flex gap-6 justify-center items-end">
				<div>
					<label hidden htmlFor="nom">
						Nom
					</label>{" "}
					<input
						type="text"
						name="nom"
						id="nom"
						placeholder="Inscrire votre nom..."
						value={abonne.nom}
						onChange={handleChange}
						className="w-[300px] px-4 py-2"
						{...register("name", { required: "Veuillez inscrire votre nom" })}
					/>
					{errors.name && <p className="text-red-500">{errors.name.message}</p>}
				</div>
				<div>
					<label hidden htmlFor="mail">
						Mail
					</label>{" "}
					<input
						type="email"
						name="mail"
						id="mail"
						placeholder="Inscrire votre adresse courriel..."
						value={abonne.mail}
						onChange={handleChange}
						className="w-[300px] px-4 py-2"
						{...register("mail", { required: "Veuillez inscrire votre adresse courriel" },
							{ pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Veuillez inscrire une adresse courriel valide" } }
						)}
					/>
					{errors.mail && <p className="text-red-500">{errors.mail.message}</p>}
				</div>
				<button className="bg-[#301D1C] hover:opacity-80 text-lg text-white font-extrabold tracking-widest px-4 py-1.5" type="submit">
					Envoyer
				</button>
			</form>
		</footer>
	);
};

export default Ajout;
