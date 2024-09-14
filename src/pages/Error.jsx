import { ChevronLeft, TriangleAlert } from "lucide-react";
import Bouton from "../composants/Bouton";

const Error = ({ error }) => {
	return (
		<>
			<div className="h-[calc(100vh-64px)] w-screen flex flex-col items-center justify-center">
				<TriangleAlert className="h-32 w-32 text-yellow-500" />
				<h1 className="text-5xl font-bold">Oups... une erreur s'est produite !</h1>
				<p className="text-2xl font-semibold mb-8 mt-2">{error}</p>
				<Bouton href={"/"}>
					<ChevronLeft className="inline-block mr-2" />
					Retourner à l'accueil
				</Bouton>
			</div>
		</>
	);
};
export default Error;
