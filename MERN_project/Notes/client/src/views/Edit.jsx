import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './style/form.css';

const Edit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errorHandler, setErrorHandler] = useState({});
  const [isImportant, setIsImportant] = useState(false);
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      title,
      content,
      isImportant,
    };

    axios
      .put("http://localhost:8000/api/notes/" + id, newData)
      .then((res) => {
        console.log("✅✅✅", res.data);
        nav("/home");
      })
      .catch((err) => {
        console.log("❌❌❌❌", err.response.data.errors);
        setErrorHandler(err.response.data.errors);
      });
    
    // Optional: Reset fields after submitting
    setTitle('');
    setContent('');
    setIsImportant(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/notes/" + id)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setContent(res.data.content);
        setIsImportant(res.data.isImportant);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="form">
      <h4>Update Note</h4>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <label>Title:</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          {errorHandler.title && <p>{errorHandler.title.message}</p>}
        </div>
        <div className="content">
          <label>Content:</label>
          <br />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          {errorHandler.content && <p>{errorHandler.content.message}</p>}
        </div>
        <div className="important">
          <label>Important?</label>
          <br />
          <input
            type="checkbox"
            checked={isImportant}
            onChange={(e) => setIsImportant(e.target.checked)}
          />
        </div>
        <button type="submit">UPDATE</button>
      </form>
    </div>
  );
};

export default Edit;
