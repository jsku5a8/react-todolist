import React from "react";

export const Todo = ({ todo, onDeletTodo, onToggle }) => {
	return (
		<div>
			<div>{todo.text}</div>
			<button onClick={() => onDeletTodo(todo.id)}>Удалить</button>
			{/* <button onClick={() => onToggle(todo.id)}>update</button> */}
		</div>
	);
};
