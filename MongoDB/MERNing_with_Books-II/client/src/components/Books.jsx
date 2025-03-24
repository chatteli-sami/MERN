import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("/api/books")
            .then((res) => res.json())
            .then((data) => setBooks(data))
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return(
        <div>
      <h1>All Books</h1>
      {books.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
                <td><Link to={`/books/${book._id}`}>Book Details</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No books found.</p>
      )}
    </div>
    )
}

export default Books