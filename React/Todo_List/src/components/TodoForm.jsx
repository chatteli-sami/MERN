import React, {useState} from "react";

const TodoForm = ({addTodo}) => {
    const [task, setTask] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (task.trim()){
            addTodo(task)
            setTask('')
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a new task"/>
            <button type="submit">Add</button>
        </form>
    )
}
export default TodoForm