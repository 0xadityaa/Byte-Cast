const http = require("http");
const express = require("express");
const { spawn } = require("child_process");
const path = require("path");
const SocketIO = require("socket.io");

const port = 3000;
const app = express();
const server = http.createServer(app);
const io = SocketIO(server);

const options = [
  "-i",
  "-",
  "-c:v",
  "libx264",
  "-preset",
  "ultrafast",
  "-tune",
  "zerolatency",
  "-r",
  `${25}`,
  "-g",
  `${25 * 2}`,
  "-keyint_min",
  25,
  "-crf",
  "25",
  "-pix_fmt",
  "yuv420p",
  "-sc_threshold",
  "0",
  "-profile:v",
  "main",
  "-level",
  "3.1",
  "-c:a",
  "aac",
  "-b:a",
  "128k",
  "-ar",
  128000 / 4,
  "-f",
  "flv",
  `rtmp://a.rtmp.youtube.com/live2/YOUR_YT_STREAM_KEY`,
];

const ffmpegProcess = spawn("ffmpeg", options);

ffmpegProcess.stdout.on("data", (data) => {
  console.log(`FFMPEG stdout: ${data}`);
});

ffmpegProcess.on("close", (code) => {
  console.log(`FFMPEG process exited with code ${code}`);
});

app.use(express.static(path.resolve("./public")));

io.on("connection", (socket) => {
  console.log("Socket connection: ", socket.id);
  socket.on("binarystream", (stream) => {
    console.log("Binary stream: ", stream);
    ffmpegProcess.stdin.write(stream, (err) => {
      console.error(err);
    });
  });
});

server.listen(port, () => {
  `Server listening on: ${port}`;
});
