const express = require("express")
const app = express()
const cors = require("cors")
const server = require('http').Server(app);
const env = require('dotenv').config();
const PORT = process.env.PORT;
const NODE_PORT = process.env.NODE_PORT;
const allUsers = require('./database/users');
// connetion server with socket io.
// console.log(allUsers)
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:" + PORT
  }
});
// cors pass origin 
app.use(cors());
users = [];
// socket connection 
io.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`)

  io.emit("allUsers", allUsers);

  socket.on("newUser", data => {
    users.push(data)
    io.emit("newUserResponse", users)
  })

  socket.on("message", data => {
    io.emit("messageResponse", data)
  })

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});

server.listen(NODE_PORT, () => {
  console.log(`Server listening on ${NODE_PORT}`);
});