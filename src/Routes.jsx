import { createBrowserRouter } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Chat from "./pages/Chat";
import App from "./App";
import Error from "./pages/Error";
import Result from "./pages/Result";

const routes = createBrowserRouter([
	{
		path: "/",
		errorElement: <Error error="La page que vous tentez d'afficher ne semble pas exister" />,
		element: <App />,
		children: [
			{
				path: "/",
				element: <Accueil />,
			},
			{
				path: "/chat/:id",
				element: <Chat />,
			},
			{
				path: "/result/:breed",
				element: <Result />,
			},
		],
	},
]);

export default routes;
