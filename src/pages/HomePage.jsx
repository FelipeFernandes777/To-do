import React from "react";

import Form from "/src/components/Form/Form";

export default function HomePage() {
	return (
		<div className="h-full w-full flex flex-col items-center relative">
			<h3>Tarefas do dia:</h3>
			<div>Listar Tarefas aqui</div>

      <div className="absolute bottom-0 w-full">
        <Form/>
      </div>
		</div>
	);
}
