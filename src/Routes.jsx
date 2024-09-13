import { createBrowserRouter } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Posts from "./pages/Posts";
import App from "./App";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>404</h1>,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/chat/:id",
        element: <Posts />,
      },
    ],
  },
]);

export default routes;
