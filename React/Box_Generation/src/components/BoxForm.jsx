import React, {useState} from "react";


const BoxForm =({addBox}) =>{
    const [color, setColor] = useState("")
    const [size, setSize] = useState(50)

    const handleSubmit = (e) =>{
        e.preventDefault()
        addBox({color, size : `${size}px`})
        setColor('')
        setSize(50)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Color</label>
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
            <label>Size</label>
            <input type="number" value={size} onChange={(e) => setSize(e.target.value)} />
            <button type="submit">Add Box</button>
        </form>
    )
}

export default BoxForm