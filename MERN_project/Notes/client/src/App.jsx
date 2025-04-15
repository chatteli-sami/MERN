import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './views/Home'
import Create from './views/Create'
import Edit from './views/Edit'
import './App.css'
import View from './views/View'


function App () {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/note/add" element={<Create />} />
        <Route path="/note/edit/:id" element={<Edit />} />
        <Route path="/note/view/:id" element={<View />} />
      </Routes>
    </div>
  )
}
export default App