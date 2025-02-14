import React from "react";
import PersonCard from "./components/PersonCard";
import "./App.css"


function App(){
  return(
    <>
    <div className="App">
      <PersonCard firstName="Naruto" lastName="Uzumaki" age={18} hairColor="Orange" />
      <PersonCard firstName="Saseki" lastName="Uchiha" age={19} hairColor="Black" />
      <PersonCard firstName="Sakura" lastName="Haruno" age={17} hairColor="Pink" />
      <PersonCard firstName="Kakashi" lastName="Hataki" age={25} hairColor="White" />
    </div>
    </>
  )
}
export default App;