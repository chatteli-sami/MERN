import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/mongoos.config";

const app = express();
app.use(express.json(), cors());
dotenv.config();
const PORT = process.env.PORT;

dbConnect();
app.listen(PORT, () => {
  console.log(`listening on port : ${Port}`);
});
