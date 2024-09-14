import Footer from "./composants/Footer";
import Navbar from "./composants/Navbar";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default App;
