import Tasks from "/src/components/Tasks/Tasks";
import React, { useState } from "react";

import Form from "/src/components/Form/Form";

export default function HomePage() {
	const [value, setValue] = useState([]);

	return (
		<div className="h-full w-full flex flex-col items-center relative">
			<h3 className="title_tasks">Tarefas</h3>
			<div id="tasks_container">
				<Tasks task="teste" />
				{value &&
					value.map((valueTask) => {
						return <Tasks task={valueTask} />;
					})}
			</div>

			<div className="absolute bottom-0 w-full">
				<Form sendValue={setValue} />
			</div>
		</div>
	);
}
