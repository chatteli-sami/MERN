import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/mongoos.config.js";
import {createBook, findBook, findBookbyId, updateBook, deleteBook} from './controllers/book.controller.js'

const app = express();
app.use(express.json(), cors());
dotenv.config();
const PORT = process.env.PORT;

dbConnect();
app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});

app.post('/books', createBook)
app.get('/books', findBook)
app.get('/books/:id', findBookbyId)
app.patch('/books/:id', updateBook)
app.delete('/book/:id', deleteBook)

