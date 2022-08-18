import Form from "../form/Form";
import { useState } from "react";
import List from "../list/List";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "리액트 공부",
      body: "리액트 기초를 공부합시다.",
      isDone: false,
    },
    {
      id: 1,
      title: "리액트 공부",
      body: "리액트 기초를 공부합시다.",
      isDone: true,
    },
  ]);

  function Finish(changeTodo) {
    const todos = [...todos].filter((item) => item.id !== changeTodo.id);
    changeTodo.isDone = !changeTodo.isDone;
    setTodos([...todos, changeTodo]);
  }

  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoList;
