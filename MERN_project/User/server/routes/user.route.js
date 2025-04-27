import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import authenticate from "../config/jwt.config.js";

const router = Router();

router
  .route("/users")
  .post(UserController.register)
  .post(UserController.login)
  .get(authenticate, UserController.getAll);

export default router;
