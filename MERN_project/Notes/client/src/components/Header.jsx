import React from 'react'
import {Link} from 'react-router-dom'
import './style/header.css'

const Header = () => {
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/note/add">Create</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header