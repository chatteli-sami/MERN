import React, {useState} from "react";
import BoxForm from "./components/BoxForm";
import BoxDisplay from "./components/BoxDisplay";

function App(){
  const [boxes, setBoxes] = useState([])
  const addBox = (newBox) =>{
    setBoxes([...boxes, newBox])
  }
  const removeBox = (index) => {
    setBoxes(boxes.filter((_, i) => i !== index))
  }
  return(
    <>
    <div>
      <BoxForm addBox={addBox}/>
      <BoxDisplay boxes={boxes} removeBox={removeBox}/>
    </div>
    </>
  )
}

export default App
