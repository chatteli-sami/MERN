import React, {useState}from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './style/form.css'


const Create = () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [errorHandler, setErrorHandler] = useState({})
  const [isImportant, setIsImportant] = useState(false)
  const nav = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newData = {
      title,
      content,
      isImportant,
    }

    axios.post('http://localhost:8000/api/notes', newData)
      .then(res => {
        console.log("✅✅✅", res.data)
        nav("/home")
      })
      .catch(err => {
        console.log("❌❌❌❌", err.response.data.errors)
        setErrorHandler(err.response.data.errors)
      })
    
    setTitle('')
    setContent('')
    setIsImportant(false)
  }
  return (
    <div className="form">
      <h4>New Note</h4>
      <form onSubmit={handleSubmit}>
        <div className='title'>
            <label >Title:</label> <br />
            <input type="text" value={title} onChange={e => {setTitle(e.target.value) }} />
            <br />
            {errorHandler.title && <p>{errorHandler.title.message}</p>}
        </div>
        <div className='content'>
            <label >Content:</label> <br />
            <textarea name="" id="" value={content} onChange={(e) => {setContent(e.target.value)}}></textarea>
            {errorHandler.content && <p style={re}>{errorHandler.content.message}</p>}
        </div>
        <div>
            <label > Important ?</label>  <br />
            <input type="checkbox" value={isImportant} onChange={e => { setIsImportant(e.target.checked) }} />
        </div>
        <button>Create</button>
      </form>
  </div>
  )
}

export default Create