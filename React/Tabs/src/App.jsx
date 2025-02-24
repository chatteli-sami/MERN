import React from "react";
import Tabs from "./components/Tabs";
import "./App.css"

const items = [
  { label: 'Tab 1', content: 'Content of Tab 1' },
  { label: 'Tab 2', content: 'Content of Tab 2' },
  { label: 'Tab 3', content: 'Content of Tab 3' },
]




function App(){
  return(
    <div className="App">
      <h1>Tabs component</h1>
      <Tabs items={items}/>
    </div>
  )
}

export default App