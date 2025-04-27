import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import dbConnect from "./config/user.config.js";
import router from "./routes/user.route.js";

dotenv.config();
dbConnect();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors({credentials:true, origin:'http://localhost:8000'}))

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`your server running in port ${PORT}`);
});
