# Byte Cast
#### *A Browser-based App For Streaming Live Camera feeds on Social Media Platforms.*

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
3. To use ffmpeg with docker simply pull a `ubuntu - focal` image from dockerhub.
7. Then type this command in your terminal `docker-compose up`.
4. Once ready, install dependencies using: `npm install`
5. Start the server: `npm run dev`
6. Access the application in your browser at `http://localhost:3000`


## Usage
1. Simply replace `YOUR_YT_STREAM_KEY` with your streaming key generated on your yt creator studio inside the `index.js` file.

## TO-DO
1. **Camera Feed Capture:** This functionality might remain on the client side using Web APIs, but server components can handle user confirmation or error messages.
**FFMPEG Encoding:** FFMpeg will likely remain a server-side process, but Server Components can display encoding progress or status updates.
**RTMP Streaming:** Server Components can't directly handle the streaming process, but they can manage user input (stream key selection) and potentially trigger the streaming initiation on the server side.
**Real-time Communication:** Socket.io integration with Next.js. Might set up event listeners on the server side within Server Components to handle incoming messages and update the UI accordingly.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
