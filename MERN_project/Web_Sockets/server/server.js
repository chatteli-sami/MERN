import express from "express";
import dotenv from "dotenv";
import { Server } from "socket.io";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

const server = app.listen(PORT, () => {
  console.log(`your Server runnig in port ${PORT}`);
});

const io = new Server(server, { cors: true });

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("message", (message) => {
    console.log(`Message from client : ${message}`);
  });
  io.emit("message", "Welcome to the chat");
});
