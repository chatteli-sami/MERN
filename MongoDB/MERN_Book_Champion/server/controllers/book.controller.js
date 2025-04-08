import Book from "../models/book.model.js";

const BookController = {
  getAllBook: async (req, res) => {
    try {
      const allBook = await Book.find();
      res.json(allBook);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  },

  getBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.json(book);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  },

  updateBook: async (req, res) => {
    const options = {
      new: true,
      runValidators: true,
    };
    try {
      const upBook = await Book.findByIdAndupdate(
        req.params.id,
        req.body,
        options
      );
      res.json(upBook);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  },

  createBook: async (req, res) => {
    try {
      const newBook = await Book.create(req.body);
      res.json(newBook);
    } catch (error) {
      console.log(error);
      res.json(errro);
    }
  },

  delete: async (req, res) => {
    try {
      const deleteBook = await Book.findByIdAndDelete(req.params.id);
      res.json(deleteBook);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  },
};

export default BookController;