import React from "react";

import ToDo from "../assets/ToDo.jpg";

export default function InfoProject() {
	return (
		<div className="bg-white h-3/4 w-3/4 flex bg-slate-200">
			<article className="flex flex-col h-full w-2/4 gap-2 items-center justify-center bg-white text-center p-2">
				<p className="text-xl">Sobre o To-Do</p>
				<p className="text-black leading-5">
					Fiz esse projeto utilizando a biblioteca <a href="#">React</a>, para a
					criação de meus components, para a estilização do site, estou usando o{" "}
					<a href="#">Tailwind CSS</a>
				</p>
				<p className="text-black leading-5">
					Esses dias estava pensando em como melhorar minha produtividade, foi
					ai que percebi que poderia organiza-las em um To-Do. Onde eu teria o
					controle total do que fiz e não fiz.
				</p>
				<p className="text-black leading-5">
					Mas ai vocês podem pensar:{" "}
					<span className="text-red-900">
						"A mas já existem vários sites e aplicativos que já fazem isso, por
						qual motivo você fez um To-Do?"
					</span>
				</p>
				<p className="text-black leading-5">
					E eu lhe respondo:{" "}
					<span className="bold text-red-900">
						"Simples, eu sou um Desenvolvedor Front-End, eu posso fazer o meu
						próprio To-Do"
					</span>
				</p>
				<p className="text-black leading-5">
					Por vários motivos é um beneficio se fazer um novo projeto. Estar
					sempre em aprendizado constante, e como ainda não tive nenhuma
					experiencia em um ambiente de produção real, estar sempre praticando é
					algo importante
				</p>
				<p className="text-black leading-5">
					O intuito deste site além de organizar minhas tarefas, é aperfeiçoar
					minhas habilidades, como estou estudando algo novo que se chama
					"Context API" muito utilizada no React, resolvi fazer este projeto
					para aprender mais sobre o assunto
				</p>
			</article>
			<div className="h-full w-2/4 overflow-hidden flex items-center justify-center bg-white">
				<img src={ToDo} alt="to-DO" className="h-3/4 w-3/4" />
			</div>
		</div>
	);
}
