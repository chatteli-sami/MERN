import React from 'react';

const TodoItem = ({ todo, dispatch }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.content}
      </span>
      <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
