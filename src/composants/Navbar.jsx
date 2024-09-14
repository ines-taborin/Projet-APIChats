import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Search } from "lucide-react";

const NavBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchTerm) {
			navigate(`/result/${searchTerm}`);
		}
	};

	return (
		<header className="bg-[#d4d0d0] py-4 mb-4">
			<nav className="container flex justify-between items-center">
				<ul className="flex font-extrabold text-2xl">
					<li className="mr-1">
						<Link to="/" className="inline-block border border-white rounded hover:border-gray-200 hover:bg-gray-200 py-2 px-4">
							Accueil
						</Link>
					</li>
					<li className="mr-1">
						<Link to="/Posts" className="inline-block border border-white rounded hover:border-gray-200 hover:bg-gray-200 py-2 px-4">
							Liste
						</Link>
					</li>
				</ul>
				<div className="relative w-fit">
					<form onSubmit={handleSubmit}>
						<input
							type="search"
							className="h-[35px] w-[350px] rounded-sm pl-10"
							placeholder="Rechercher une race de chat..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<Search className="absolute w-5 h-5 left-2 top-1/2 -translate-y-1/2" />
					</form>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
