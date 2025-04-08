import { Router } from "express";
import BookController from "../controllers/book.controller.js";

const router = Router();

router
  .route("/books")
  .post(BookController.createBook)
  .get(BookController.getAllBook);

router
  .route("/books/:id")
  .get(BookController.getBook)
  .put(BookController.updateBook)
  .delete(BookController.delete);

export default router;
