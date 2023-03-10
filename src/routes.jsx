import Header from "/src/components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="bg-slate-600 h-screen w-screen flex">
			<div className="h-full w-2/12 mr-4 bg-slate-700">
				<Header />
			</div>
			<div className="h-4/4 w-10/12 flex items-center justify-center">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
