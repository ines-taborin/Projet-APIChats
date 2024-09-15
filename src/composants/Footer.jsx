import { Link } from "react-router-dom";
import Ajout from "./Ajout";

const Footer = () => {
	return (
		<div>
			<Ajout />

			<footer className="bg-[#d4d0d0] py-4">
				<p className="container text-center text-lg font-medium">© Copyright {new Date().getFullYear()} - Inès Taborin - Tous droits réservés</p>
			</footer>
		</div>
	);
};
export default Footer;
