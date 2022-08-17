import "./style.css";
import { useState } from "react";

const Todo = ({ todo, setTodos }) => {
  return (
    <div className="todo">
      {todo.title}
      {todo.body}
      <button>완료</button>
      <button>삭제</button>
    </div>
  );
};

export default Todo;
