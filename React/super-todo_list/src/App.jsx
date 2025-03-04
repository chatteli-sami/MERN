import React, {useReducer} from 'react'
import {todoReducer} from './todoReducer'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

function App(){
  const [todos, dispatch] = useReducer(todoReducer, [])

  return(
    <div className="App">
      <h1>Super Todo List</h1>
      <TodoForm dispatch={dispatch}/>
      <TodoList todos={todos} dispatch={dispatch}/>
    </div>
  )
}

export default App