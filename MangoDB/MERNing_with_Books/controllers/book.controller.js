import Book from "../models/book.model.js";


// ! add new book

async function createBook (req, res) {
    try{
        const newBook = new Book(req.body)
        const book = await newBook.save()
        res.json(book)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}


// ! get all book

async function findBook (req, res) {
    try{
        const books = await Book.find({})
        res.json(books)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}


// ! find book by Id 

async function findBookbyId (req, res) {
    try{
        const foundBook = await Book.findById(req.params.id)
        if (!foundBook) {
            return res.status(404).json('book not found')
        }
        res.json(foundBook)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}


// ! update book 

async function updateBook (req, res) {
    const options = {
        new : true,
        runvalidators : true
    }
    try{
        const book = await Book.findByIdAndUpdate(req.body, req.params.id, options)
        res.json(book)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}


// !  delete book 

async function deleteBook (req, res) {
    try{
        const deltBook = await Book.findByIdAndDelete(req.params.id)
        res.json(deltBook)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}

export {
    createBook,
    findBook,
    findBookbyId,
    updateBook,
    deleteBook,
}

