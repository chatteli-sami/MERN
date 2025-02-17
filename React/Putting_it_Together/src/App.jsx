import React, { useState } from 'react'
import PersonCard from './component/PersonCard'

function App() {

  return(
    <>
     <div className="App">
            <PersonCard firstName="Kourama" lastName="Kyoubi" age={1000} hairColor="orange" />
            <PersonCard firstName="gyouki" lastName="hatshiby" age={1000} hairColor="Purple" />
            <PersonCard firstName="Tshumi" lastName="Nanaby" age={1000} hairColor="Black" />
            <PersonCard firstName="Sayken" lastName="Rukuby" age={1000} hairColor="White" />
        </div>
    </>
  )
}

export default App
