import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const View = () => {
  const {id} = useParams()
  const nav = useNavigate()
  const [oneNote, setOneNote] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8000/api/notes' + id)
        .then((res) => {
          console.log(res.data)
          setOneNote(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
  }, [])

  return (
    <div className='post'>
      <div className="note">
        {
          oneNote ? <ul>
            <li><h4>{oneNote.title}</h4></li>
            <li><p>{oneNote.content}</p></li>
            <li>{oneNote.createdAt}</li>
          </ul> : <h3>Loading....</h3>
        }
      </div>
    </div>
  )
}

export default View