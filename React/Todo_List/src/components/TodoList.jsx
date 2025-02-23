import React, {useState} from "react";

const TodoList = ({todos, removeTodo, toggleTodo}) =>{
    return(
        <ul>
            {todos.map((todo, index) =>(
                <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(index)} />
                    {todo.text}
                    <button onClick={() => removeTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList