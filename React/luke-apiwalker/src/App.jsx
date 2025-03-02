import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SearchForm from './components/SearchForm'
import ResourceDisplay from './components/ResourceDisplay'
import './App.css'

function App(){
  const [resource, setResource] = useState('')
  const [id, setId] = useState('')

  return(
    <BrowserRouter>
      <div className='App'>
        <SearchForm setResource={setResource} setId={setId}/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/:resource/:id' elemen={<ResourceDisplay/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App