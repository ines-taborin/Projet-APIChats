import { ChevronLeft, TriangleAlert } from "lucide-react";
import NavBar from "../composants/Navbar";
import Bouton from "../composants/Bouton";

const Error404 = () => {
	return (
		<>
			<NavBar />
			<div className="h-[calc(100vh-64px)] w-screen flex flex-col items-center justify-center">
				<TriangleAlert className="h-32 w-32 text-yellow-500" />
				<h1 className="text-5xl font-bold">Erreur 404</h1>
				<p className="text-2xl font-semibold mb-8">Oups la page est introuvable...</p>
				<Bouton href={"/"}>
					<ChevronLeft className="inline-block mr-2" />
					Retourner à l'accueil
				</Bouton>
			</div>
		</>
	);
};
export default Error404;
