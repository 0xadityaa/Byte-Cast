const userVideo = document.getElementById("user-video");

window.addEventListener("load", async (e) => {
  const media = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
  userVideo.srcObject = media;
});
