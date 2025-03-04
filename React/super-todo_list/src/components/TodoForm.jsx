import React, {useState} from 'react'

const TodoForm = ({dispatch}) => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(input.trim()){
            dispatch({type : 'ADD_TODO', payloed: input})
            setInput('')
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter Your task"/>
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TodoForm