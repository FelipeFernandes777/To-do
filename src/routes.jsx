import Header from "/src/components/Header/Header";
import { Outlet } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from "react";

function App() {

	const [menu, setMenu] = useState(false);

	let menuShow = document.querySelector('#hidden')

	const showMenu = () => {
		menu === false ? setMenu(true) : setMenu(false)
		if (menu === false) {
			menuShow.style = 'display: block'
		} else {
			menuShow.style = 'display: none'
		}
	}

	return (
		<div className="body_container relative">
			<header className="header_container">
				<div className="show_menu" onClick={showMenu}>
					{menu === false ? <AiOutlineMenu className="text-white" /> : <AiOutlineClose className="text-white" />}
				</div>
				<div className="header_display" id="hidden">
					<Header />
				</div>
			</header>
			<main className="main_container">
				<Outlet />
			</main>
		</div>
	);
}

export default App;
