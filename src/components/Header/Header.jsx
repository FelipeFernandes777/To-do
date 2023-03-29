import React from "react";

import { FcTodoList } from "react-icons/fc";
import { RiSunLine, RiStarLine } from "react-icons/ri";
import { BsListTask, BsInfoCircle } from "react-icons/bs";
import { FiLinkedin, FiGithub } from "react-icons/fi";

import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="h-full w-full max-sm:h-full max-sm:bg-transparent">
			<div className="h-1/4 max-sm:hidden">
				<h3 className="text-white text-3xl flex gap-2 items-center justify-center max-sm:text-xl">
					{<FcTodoList />}To-Do
				</h3>
			</div>
			<div className="h-2/4 flex items-center justify-start max-sm:h-4/6 max-sm:justify-end">
				<nav className="w-full p-2 m-2 max-sm:self-end max-sm:mb-24">
					<ul className="flex flex-col gap-5">
						<Link to={"/"}>
							<li className="flex gap-3 text-white justify-start items-center w-full text-lg max-sm:text-base">
								<RiSunLine />
								<p className="max-sm:hidden">Meu Dia</p>
							</li>
						</Link>
						<Link to={"/importantes"}>
							<li className="flex gap-3 text-white justify-start items-center w-full text-lg max-sm:text-base">
								<RiStarLine />
								<p className="max-sm:hidden">Importantes</p>
							</li>
						</Link>
						<Link to={"/tarefas"}>
							<li className="flex gap-3 text-white justify-start items-center w-full text-lg max-sm:text-base">
								<BsListTask />
								<p className="max-sm:hidden">Tarefas</p>
							</li>
						</Link>
						<Link to={"/info"}>
							<li className="flex gap-3 text-white justify-start items-center w-full text-lg max-sm:text-base">
								<BsInfoCircle />
								<p className="max-sm:hidden">Sobre o Projeto</p>
							</li>
						</Link>
					</ul>
				</nav>
			</div>
			<div className="h-1/4 w-full flex justify-center items-center gap-20 relative">
				<div className="absolute bottom-0 flex justify-center w-full gap-8 mb-6 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
					<a
						href="https://github.com/FelipeFernandes777"
						className="text-white text-lg max-sm:text-base"
					>
						<FiGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/felipe-fernandes-ab7a3622a/"
						className="text-white text-lg max-sm:text-base"
					>
						<FiLinkedin />
					</a>
				</div>
			</div>
		</div>
	);
}
