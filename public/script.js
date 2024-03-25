const userVideo = document.getElementById("user-video");
const startBtn = document.getElementById("start-btn");

const state = { media: null };
const socket = io();

window.addEventListener("load", async (e) => {
  const media = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
  state.media = media;
  userVideo.srcObject = media;
});

startBtn.addEventListener("click", () => {
  const mediaRecorder = new MediaRecorder(state.media, {
    audioBitsPerSecond: 128000,
    videoBitsPerSecond: 2500000,
    frameRate: 25,
  });

  mediaRecorder.ondataavailable = (e) => {
    console.log("Binary stream available: " + e.data);
    socket.emit("binarystream", e.data);
  };

  mediaRecorder.start(25);
});
