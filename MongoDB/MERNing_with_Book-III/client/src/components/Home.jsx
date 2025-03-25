import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Home = () => {

    const [books, setBooks] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8000/api/books')
            .then((res) => {
                setBooks(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return(
        <div className="home-container">
            <h1>Book Catalog</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author Name</th>
                        <th>Page Count</th>
                        <th>Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book._id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.pages}</td>
                            <td>{book.isAvailable ? 'Yes' : 'No'}</td>
                            <td>
                                <Link to={`/books/${book._id}/edit`}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home