import React, {useState} from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (task) =>{
    const newTodo = { text : task, completed : false}
    setTodos([...todos, newTodo])
  }

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App
