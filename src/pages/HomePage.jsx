import Tasks from "/src/components/Tasks/Tasks";
import React, { useState } from "react";

import Form from "/src/components/Form/Form";

export default function HomePage() {
	const [value, setValue] = useState([]);

	return (
		<div className="h-full w-full flex flex-col items-center relative">
			<h3 className="title_tasks">Tarefas</h3>
			<main className="h-full w-full flex flex-col items-center">
				<div id="tasks_container" className="w-8/12">
					{value &&
						value.map((valueTask) => {
							return <Tasks task={valueTask} key={valueTask} />;
						})}
				</div>
			</main>

			<div className="absolute bottom-0 w-full block h-auto">
				<Form sendValue={setValue} />
			</div>
		</div>
	);
}
