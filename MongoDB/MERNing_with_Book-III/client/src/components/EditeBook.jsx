import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'


const EditeBook = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [book, setBook] = useState({
        title : '',
        author : '',
        pages : '',
        isAvailable : false,
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then((res) => {
                setBook(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    })

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target
        setBook({
            ...book,
            [name] : type === 'checkbox' ? checked : value,

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/books/${id}`, book)
            .then((res) => {
                setErrors({})
                navigate('/')
            })
            .catch((err) => {
                if (err.response && err.response.data && err.response.data.errors) {
                    setErrors(err.response.data.errors);
                }
            });
    }

    return (
        <div className="edit-book-container">
          <h2>Edit Book</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>Title:</label>
              <input 
                type="text" 
                name="title" 
                value={book.title} 
                onChange={handleChange}
                placeholder="Enter book title" 
              />
              {errors.title && <p className="error-text">{errors.title.message}</p>}
            </div>
            <div className="form-group">
              <label>Author Name:</label>
              <input 
                type="text" 
                name="author" 
                value={book.author} 
                onChange={handleChange}
                placeholder="Enter author name" 
              />
              {errors.author && <p className="error-text">{errors.author.message}</p>}
            </div>
            <div className="form-group">
              <label>Page Count:</label>
              <input 
                type="number" 
                name="pages" 
                value={book.pages} 
                onChange={handleChange}
                placeholder="Enter page count" 
              />
              {errors.pages && <p className="error-text">{errors.pages.message}</p>}
            </div>
            <div className="form-group">
              <label>Available:</label>
              <input 
                type="checkbox" 
                name="isAvailable" 
                checked={book.isAvailable} 
                onChange={handleChange}
              />
            </div>
            <button type="submit">Update Book!</button>
          </form>
        </div>
      );
}

export default EditeBook