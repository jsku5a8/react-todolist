import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({ todos, onDeletTodo, onToggle }) => {
	return (
		<div>
			{todos.map((todo) => (
				<Todo
					key={todos.id}
					todo={todo}
					onDeletTodo={onDeletTodo}
					onToggle={onToggle}
				/>
			))}
		</div>
	);
};
