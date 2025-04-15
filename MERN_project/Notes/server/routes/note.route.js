import { Router } from "express";
import noteController from "../controllers/note.controller.js";

const router = Router();

router.route("/notes").get(noteController.getAll).post(noteController.create);

router
  .route("/notes/:id")
  .get(noteController.getOne)
  .put(noteController.update)
  .delete(noteController.delete);

export default router;
