import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes";
import "./index.css";

import HomePage from "/src/pages/HomePage";
import InfoProject from "/src/pages/InfoProject";
import Importants from "/src/pages/ImportantsPage";
import TasksPage from "/src/pages/TasksPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/importantes",
				element: <Importants />,
			},
			{
				path: "/tarefas",
				element: <TasksPage />,
			},
			{
				path: "/info",
				element: <InfoProject />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={routes} />
	</React.StrictMode>
);
