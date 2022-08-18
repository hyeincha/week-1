import TodoList from "../pages/TodoList";
import "./style.css";
import { useState } from "react";

const Todo = ({ todo, setTodos, Finish }) => {
  function Remove(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="todo">
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <button
        onClick={() => {
          Finish(todo.id);
        }}
      >
        {todo.isDone ? "취소" : "완료"}
      </button>
      <button
        onClick={() => {
          Remove(todo.id);
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default Todo;
