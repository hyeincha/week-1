import "./style.css";
import Todo from "../todo/Todo";

const List = ({ todos, setTodos }) => {
  function Finish(id) {
    const newTodo = todos.map((newTodo) =>
      newTodo.id === id ? { ...newTodo, isDone: !newTodo.isDone } : newTodo
    );
    setTodos(newTodo);
  }

  return (
    <div>
      <div>
        <h2>⏳ in progress...</h2>
        <div className="list_1">
          {todos.map((todo) => {
            if (todo.isDone === false) {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  setTodos={setTodos}
                  Finish={Finish}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div>
        <h2>✅ DONE!</h2>
        <div className="list_2">
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  setTodos={setTodos}
                  Finish={Finish}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
