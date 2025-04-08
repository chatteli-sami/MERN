import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/book.config.js";
import router from "./routes/book.route.js";
import errorHandler from "./utils/errorHandler.js";
import notFoundHandler from "./utils/notFoundHandler.js";

dotenv.config();
dbConnect();

const app = express();
const PORT = process.env.PORT;

// Midlleware

app.use(express.json());
app.use(cors());

// Mount api routes

app.use("/api", router);

// Handle Undefined routes

app.use(notFoundHandler);

// Global error middleware to normalize errors

app.use(errorHandler);

// Start the server

app.listen(PORT, () => {
  console.log(`the server is running in port ${PORT}`);
});
