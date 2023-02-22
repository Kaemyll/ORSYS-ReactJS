import React, { useState } from "react";
import Todo from "./Todo";

export default function Todolist() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  function addTodo() {
    setTodos([
      ...todos,
      {
        id:
          todos.reduce((prev, todo) => (prev > todo.id ? prev : todo.id), 0) +
          1,
        title: "",
        done: false,
      },
    ]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function editTodo(id, title) {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, title } : todo;
      })
    );
  }

  function checkTodo(id) {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
  }

  const filteredTodo = todos.filter((todo) => {
    return (
      filter === "All" ||
      (filter === "Done" && todo.done) ||
      (filter === "Todo" && !todo.done)
    );
  });

  return (
    <table border="1">
      <thead>
        <tr>
          <th colSpan={3}>
            <select
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
            >
              <option>All</option>
              <option>Done</option>
              <option>Todo</option>
            </select>
          </th>
        </tr>
        <tr>
          <th colSpan={3}>
            <button onClick={addTodo}>Add todo</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredTodo.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            checkTodo={checkTodo}
          />
        ))}
      </tbody>
    </table>
  );
}
