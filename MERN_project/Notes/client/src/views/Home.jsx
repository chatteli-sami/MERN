import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './style/Home.css'

const Home = () => {
  const [notes, setNotes] = useState([]);
  const nav = useNavigate()

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/notes/')
      .then((res) => {
        console.log(res.data);
        setNotes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteNote = (idToDelete) => {
    axios
      .delete(`http://localhost:8000/api/notes/${idToDelete}`)
      .then((res) => {
        console.log(res.data);
        setNotes((prevNotes) =>
          prevNotes.filter((note) => note._id !== idToDelete)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      {notes.map((note) => (
        <ul className="note" key={note._id}>
          <li>
            <Link to={`/note/view/${note._id}`}>
              <h3>{note.title}</h3>
              <p className="content">{note.content}</p>
              <p>{note.createdAt}</p>
            </Link>
            <div className="btns">
            <button onClick={() => { nav("/note/edit/" + note._id) }}>Update</button>
              <button onClick={() => deleteNote(note._id)} className="delete">
                Delete
              </button>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Home;
