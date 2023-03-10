import React from "react";

export default function Form() {
	const onSubmit = (event) => {
		event.prevent.default;
	};

	return (
		<form
			onSubmit={onSubmit}
			className="flex items-center justify-center w-4/4 gap-4 mb-4"
		>
			<div className="w-full relative flex items-center gap-3">
				<input
					type="text"
					className="bg-slate-400 rounded-md w-3/4 h-10 text-xl text-black p-2"
				/>
				<button className="rounded-md w-1/4 text-white bg-slate-700 gap-3 flex items-center justify-center h-10 mr-3">
          Cadastrar Tarefa
        </button>
			</div>
		</form>
	);
}
