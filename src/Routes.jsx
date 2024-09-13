import { createBrowserRouter } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Chat from "./pages/Chat";
import App from "./App";
import Error404 from "./pages/Error404";

const routes = createBrowserRouter([
	{
		path: "/",
		errorElement: <Error404 />,
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
		],
	},
]);

export default routes;
