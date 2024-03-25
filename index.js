const http = require("http");
const express = require("express");
const path = require("path");

const port = 3000;
const app = express();
const server = http.createServer(app);

app.use(express.static(path.resolve("./public")));

server.listen(port, () => {
  `Server listening on: ${port}`;
});
