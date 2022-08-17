import "./style.css";
import Todo from "../todo/Todo";

const List = ({ todos, setTodos }) => {
  return (
    <div className="list">
      <div>
        <h2>⏳ in progress...</h2>
        {todos.map((todo) => {
          if (todo.isDone === false) {
            return <Todo key={todo.id} todo={todo} setTodos={setTodos} />;
          } else {
            return null;
          }
        })}
      </div>
      <div>
        <h2>✅ DONE!</h2>
        {todos.map((todo) => {
          if (todo.isDone) {
            return <Todo key={todo.id} todo={todo} setTodos={setTodos} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default List;

//리스트 안에 투두 넣기 칠드런으로 !!
//맵을 돌려서 조건문 주면 됨
