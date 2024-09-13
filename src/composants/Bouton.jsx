import { Link } from "react-router-dom";

const Bouton = ({ children, href, className }) => {
	return (
		<Link to={href} className={`text-2xl font-bold hover:bg-[#D4D0D0]/50 rounded-none pl-4 pr-6 py-3 transition ${className ? className : ""}`}>
			{children}
		</Link>
	);
};
export default Bouton;
