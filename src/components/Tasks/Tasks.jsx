import React from "react";

import { useState } from "react";

import { MdStarBorder } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Tasks({ task }) {
	const [finish, setFinish] = useState(false);

	const finishTask = (event) => {
		document.getElementById(task).style = "display: none";
		console.log(event.target)
		setFinish(true);
	};

	return (
		<div
			className="border-2 w-fit flex h-md border-black rounded-lg bg-white m-2 shadow-lg shadown-gray-900"
			id={task}
		>
			<div className="flex items-center justify-center border-r-2 border-black">
				<div
					className="flex items-center justify-center w-5 h-5 border-2 border-black rounded-3xl m-2"
					onClick={finishTask}
				>
					<IoMdClose />
				</div>
			</div>
			<div className="w-full flex items-center p-2">
				<p className="text-lg text-gray-900 w-full">{task}</p>
			</div>
			<div className="flex gap-3 items-center justify-center text-xl ml-2 mr-2">
				<div>
					<MdStarBorder />
				</div>
				<div>
					<HiOutlineTrash />
				</div>
			</div>
		</div>
	);
}
