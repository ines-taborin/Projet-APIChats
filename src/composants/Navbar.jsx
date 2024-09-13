import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const NavBar = () => {
	return (
		<header className="bg-[#d4d0d0]  py-4">
			<nav className="container ">
				<ul className="flex font-extrabold text-2xl">
					<li className="mr-1">
						<Link to="/">
							<a className="inline-block border border-white rounded hover:border-gray-200  hover:bg-gray-200 py-2 px-4" href="#">
								Accueil
							</a>
						</Link>
					</li>
					<li className="mr-1">
						<Link to="/Posts">
							<a className="inline-block border border-white rounded hover:border-gray-200  hover:bg-gray-200 py-2 px-4" href="#">
								Liste
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
