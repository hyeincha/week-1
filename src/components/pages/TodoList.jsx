import Form from "../form/Form";
import Todo from "../todo/Todo";
import { useState } from "react";
import List from "../list/List";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "리액트",
      body: "리액트 공부",
      isDone: false,
    },
    {
      id: 1,
      title: "sdfwefw",
      body: "wefwefwef",
      isDone: true,
    },
  ]);
  console.log(todos);
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      {/* <Todo todos={todos} setTodos={setTodos} /> */}
      <List todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoList;

// 리스트를넣자??
