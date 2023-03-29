import React from "react";

import ToDo from "../assets/ToDo.jpg";

export default function InfoProject() {
	return (
		<div className="bg-white h-3/4 w-3/4 flex bg-slate-200 max-sm:w-full">
			<article className="flex flex-col h-full w-2/4 gap-2 items-center justify-center bg-white text-center p-2 max-sm:w-full max-sm:flex-row max-sm:flex-wrap">
				<p className="text-xl">Sobre o To-Do</p>
				<p className="text-black leading-5 max-sm:leading-3 max-sm:text-xs">
					Fiz esse projeto utilizando a biblioteca <a href="#">React</a>, para a
					criação de meus components, para a estilização do site, estou usando o{" "}
					<a href="#">Tailwind CSS</a>
				</p>
				<p className="text-black leading-5 max-sm:leading-3 max-sm:text-xs">
					Esses dias estava pensando em como melhorar minha produtividade, foi
					ai que percebi que poderia organiza-las em um To-Do. Onde eu teria o
					controle total do que fiz e não fiz.
				</p>
				<p className="text-black leading-5 max-sm:leading-3 max-sm:text-xs">
					Mas ai vocês podem pensar:{" "}
					<span className="text-red-900">
						"A mas já existem vários sites e aplicativos que já fazem isso, por
						qual motivo você fez um To-Do?"
					</span>
				</p>
				<p className="text-black leading-5 max-sm:leading-3 max-sm:text-xs">
					E eu lhe respondo:{" "}
					<span className="bold text-red-900">
						"Simples, eu sou um Desenvolvedor Front-End, eu posso fazer o meu
						próprio To-Do"
					</span>
				</p>
				<p className="text-black leading-5 max-sm:leading-3 max-sm:text-xs">
					Por vários motivos é um beneficio se fazer um novo projeto. Estar
					sempre em aprendizado constante, e como ainda não tive nenhuma
					experiencia em um ambiente de produção real, estar sempre praticando é
					algo importante
				</p>
				<p className="text-black leading-5 max-sm:leading-3 max-sm:text-xs">
					O intuito deste site além de organizar minhas tarefas, é aperfeiçoar
					minhas habilidades, como estou estudando algo novo que se chama
					"Context API" muito utilizada no React, resolvi fazer este projeto
					para aprender mais sobre o assunto
				</p>
			</article>
			<div className="h-full w-2/4 overflow-hidden flex items-center justify-center bg-white max-sm:hidden">
				<img src={ToDo} alt="to-DO" className="h-3/4 w-3/4 max-sm:h-3/4 max-sm:w-3/4" />
			</div>
		</div>
	);
}
