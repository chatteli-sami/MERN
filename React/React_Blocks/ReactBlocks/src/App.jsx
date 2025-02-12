import React from "react";
import Header from './components/Header'
import Navigation from './components/Navigation'
import MainContent from './components/MainContent'
import './App.css'

function App(){
  return(
    <div className="app">
      <Header />
      <div className="body">
        <Navigation />
        <MainContent />
      </div>
    </div>
  )
}

export default App;
