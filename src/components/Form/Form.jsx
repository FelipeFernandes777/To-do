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
					className="bg-gray-500 rounded-md w-3/4 h-10 text-xl text-black p-2"
					onChange={(e) => setTaskOne(e.target.value)}
					placeholder="Digite a sua tarefa"
					required
				/>
				<button className="rounded-md w-1/4 text-white bg-gray-800 gap-3 flex items-center justify-center h-10 mr-3">
					Cadastrar Tarefa
				</button>
			</div>
		</form>
	);
}
