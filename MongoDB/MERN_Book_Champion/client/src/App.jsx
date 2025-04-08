import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import CreateBookForm from './components/CreateBookForm'
import './App.css'

function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/books/create' element={<CreateBookForm/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App