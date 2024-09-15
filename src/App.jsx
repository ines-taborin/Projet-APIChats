import Footer from "./composants/Footer";
import Navbar from "./composants/Navbar";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="flex flex-col min-h-screen overflow-x-hidden">
			<Navbar />
			<main className="flex-grow">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default App;
