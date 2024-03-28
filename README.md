# Byte Cast
#### *A Browser-based App For Streaming Live Camera feed on Social Media Platforms.*

## Project Architecture
![Project Architecture](https://i.ibb.co/g35cBWF/image.png)

## Description
This project is a Software as a Service (SAAS) application that allows users to capture their camera feed from their browser, encode it in binary using FFMPEG, and stream it to the RTMP servers of platforms like YouTube, Facebook, LinkedIn, and others. It serves as a browser-based alternative to OBS (Open Broadcaster Software) for streaming to social media platforms.

## Tech Stack
1. Node.js
2. Socket.io
3. FFMPEG
4. Docker

## Features
- **Camera Feed Capture:** Capture camera feed directly from the user's browser.
- **FFMPEG Encoding:** Utilize FFMPEG to encode the camera feed in binary format.
- **RTMP Streaming:** Stream the encoded feed to RTMP servers of platforms like YouTube, Facebook, LinkedIn, etc.
- **Real-time Communication:** Use Socket.io for real-time communication between the browser and the server.
- **Dockerized Deployment:** Docker containerization for easy deployment and scalability.

## Installation
1. Clone the repository: `https://github.com/0xadityaa/Byte-Cast.git`
2. Navigate to the project directory: `cd Byte-Cast`
3. Install dependencies: `npm install`
4. Start the server: `npm run dev`
5. Access the application in your browser at `http://localhost:3000`
6. To use ffmpeg with docker simply pull a `ubuntu - focal` image from dockerhub.
7. Then type this command in your terminal inside Byte-Cast dir `docker compose up`

## Usage
1. Simply replace `YOUR_YT_STREAM_KEY` with your streaming key generated on your yt creator studio inside `index.js` file.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
