import React, {useState} from 'react'
import { NameContext } from './component/NameContext'
import Navbar from './component/Navbar'
import FormWrapper from './component/FormWrapper'
// ? import './App.css'

function App(){
  const [name, setName] = useState('(Write your name)')
  return(
    <NameContext.Provider value={{name, setName}}>
      <Navbar/>
      <FormWrapper/>
    </NameContext.Provider>
  )
}

export default App