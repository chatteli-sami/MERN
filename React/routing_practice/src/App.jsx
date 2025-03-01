import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import "./App.css"


const Home = () => {
  return(
    <h1>Welcome</h1>
  )
}

const NumberOrWord = () => {
  const {input} = useParams()
  return(
    <h1>{isNaN(input) ? input : Number(input)}</h1>
  )
}

const StyledWord = () => {
  const {word, textColor, bgColor} = useParams()
  return(
    <h1 style={{color : textColor, backgroundColor : bgColor}}>{word}</h1>
  )
}

const Navigation = () => {
  return(
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/4">Number</Link></li>
        <li><Link to="/hello">Hello</Link></li>
        <li><Link to="/hello/blue/red">word Style</Link></li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:input" element={<NumberOrWord />} />
          <Route path="/:word/:textColor/:bgColor" element={<StyledWord />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App