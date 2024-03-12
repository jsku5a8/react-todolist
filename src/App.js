import React, { useState } from "react";
import uuid from "react-uuid";

import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

const App = () => {
	const [todos, setTodos] = useState([]);

	const addTodoHandler = (text) => {
		console.log(text, "app");
		const newTodo = {
			text: text,
			isCompleted: false,
			id: uuid(),
		};
		setTodos([...todos, newTodo]);
	};

	const deleteTodoHandler = (id) => {
		const exchangeTodos = todos.filter((todo) => todo.id !== id);
		setTodos(exchangeTodos);
		setTodos(todos.filter((item) => item.id !== id));
	};
	return (
		<div className="App">
			<h1>Todo List</h1>
			<TodoForm onAddTodo={addTodoHandler} />
			<TodoList todos={todos} onDeletTodo={deleteTodoHandler} />
		</div>
	);
};

export default App;
