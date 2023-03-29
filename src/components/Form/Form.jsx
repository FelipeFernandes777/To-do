import React, { useState, useEffect } from "react";

export default function Form({ sendValue }) {
	const [task, setTask] = useState([]);
	const [taskOne, setTaskOne] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();

		if (!task.includes(taskOne)) {
			setTask([...task, taskOne]);
		} else {
			setTaskOne("");
		}
	};
	useEffect(() => {
		sendValue(returnValueOfTasks(task));
	}, [task, sendValue])

	useEffect(() => {
		localStorage.setItem(`tarefas`, [JSON.stringify(task)])
	}, [task])

	useEffect(() => {
		localStorage.getItem('tarefas')
	}, [])

	const returnValueOfTasks = (value) => {
		return value;
	};

	return (
		<form
			onSubmit={onSubmit}
			className="flex items-center justify-center w-4/4 gap-4 mb-4"
		>
			<div className="w-full relative flex items-center gap-3">
				<input
					type="text"
					className="bg-gray-400 rounded-md w-5/6 h-10 text-xl text-black p-2 max-sm:w-4/6"
					onChange={(e) => setTaskOne(e.target.value)}
					placeholder="Digite a sua tarefa"
					required
				/>
				<button className="rounded-md w-1/4 text-white bg-gray-800 gap-3 flex items-center justify-center h-10 mr-3 max-sm:text-sm max-sm:gap-0">
					Cadastrar
				</button>
			</div>

		</form>
	);
}
