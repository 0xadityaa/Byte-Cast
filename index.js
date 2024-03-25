const http = require("http");
const express = require("express");
const path = require("path");
const SocketIO = require("socket.io");

const port = 3000;
const app = express();
const server = http.createServer(app);
const io = SocketIO(server);

app.use(express.static(path.resolve("./public")));

io.on("connection", (socket) => {
  console.log("Socket connection: ", socket.id);
  socket.on("binarystream", (stream) => {
    console.log("Binary stream: ", stream);
  });
});

server.listen(port, () => {
  `Server listening on: ${port}`;
});
