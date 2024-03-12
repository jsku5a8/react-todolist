import React, { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
	const [eneteredValue, setEneteredValue] = useState("");
	const submitHandler = (event) => {
		event.preventDefault();
		onAddTodo(eneteredValue);
		setEneteredValue("");
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={eneteredValue}
					onChange={(e) => setEneteredValue(e.target.value)}
					placeholder="Введите текст"
				/>
				<button>Добавить</button>
			</form>
		</div>
	);
};
