import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/note.config.js";
import router from "./routes/note.route.js";

dotenv.config();
dbConnect();

const PORT = process.env.PORT;
const app = express();

app.use(express.json(), cors());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`your server running in port ${PORT}`);
});
