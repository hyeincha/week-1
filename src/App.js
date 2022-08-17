import './App.css';
import Header from './components/header/Header';
import Form from './components/form/Form';
import List from './components/list/List';
import Todo from './components/todo/Todo';
import TodoList from './components/pages/TodoList'

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
