import React from "react";

import { FcTodoList } from "react-icons/fc";
import { RiSunLine, RiStarLine } from "react-icons/ri";
import { BsListTask, BsInfoCircle } from "react-icons/bs";
import { FiLinkedin, FiGithub } from "react-icons/fi";

import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="h-full w-full">
			<div className="h-1/4">
				<h3 className="text-white text-3xl flex gap-2 items-center justify-center">
					{<FcTodoList />}To-Do
				</h3>
			</div>
			<div className="h-2/4 flex items-center justify-start">
				<nav className="w-full p-2 m-2">
					<ul className="flex flex-col gap-5">
						<Link to={"/"}>
							<li className="flex gap-3 text-white justify-start items-center w-full text-lg">
								<RiSunLine />
								Meu Dia
							</li>
						</Link>
						<Link to={"/importantes"}>
							<li className="flex gap-3 text-white justify-start items-center w-full text-lg">
								<RiStarLine />
								Importantes
							</li>
						</Link>
						<Link to={"/tarefas"}>
							<li className="flex gap-3 text-white justify-start items-center w-full text-lg">
								<BsListTask />
								Tarefas
							</li>
						</Link>
						<Link to={"/info"}>
							<li className="flex gap-3 text-white justify-start items-center w-full text-lg">
								<BsInfoCircle />
								Sobre o Projeto
							</li>
						</Link>
					</ul>
				</nav>
			</div>
			<div className="h-1/4 w-full flex justify-center items-center gap-20 relative">
				<div className="absolute bottom-0 flex justify-center w-full gap-8">
					<a
						href="https://github.com/FelipeFernandes777"
						className="text-white text-md"
					>
						<FiGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/felipe-fernandes-ab7a3622a/"
						className="text-white text-md"
					>
						<FiLinkedin />
					</a>
				</div>
			</div>
		</div>
	);
}
