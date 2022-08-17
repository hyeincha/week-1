import "./style.css";
import { useState } from "react";

const Form = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function onClickHandler(event) {
    event.preventDefault();
    const todo = {
      id: todos.length + 1,
      title,
      body,
      isDone: false,
    };
    setTodos([...todos, todo]);
    setTitle("");
    setBody("");
  }

  return (
    <div className="form">
      <label>제목</label>
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      ></input>
      <label>내용</label>
      <input
        type="text"
        value={body}
        onChange={(event) => {
          setBody(event.target.value);
        }}
      ></input>
      <button onClick={onClickHandler}>추가하기</button>
    </div>
  );
};

export default Form;
