import React from "react";

export default function Todo({ todo, deleteTodo, editTodo, checkTodo }) {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => checkTodo(todo.id)}
        />
      </td>
      <td>
        {todo.done ? (
          <span style={{ textDecoration: "line-through" }}>{todo.title}</span>
        ) : (
          <input
            type="text"
            value={todo.title}
            onChange={(event) => editTodo(todo.id, event.target.value)}
          />
        )}
      </td>
      <td>
        <button onClick={() => deleteTodo(todo.id)}>x</button>
      </td>
    </tr>
  );
}
