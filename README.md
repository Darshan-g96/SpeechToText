Speech-to-Text Command Interface

This is a single-file React application that utilizes the Web Speech API via the react-speech-recognition library to convert live microphone input into text. It is configured to listen for specific voice commands ("Hey Jarvis," "I would like to order \*," "clear screen") and provides immediate feedback.

The entire application—including all React components, logic, and comprehensive styling—is contained within a single App.jsx file.

Deliverables Checklist

[ ] Git repo link

[ ] README.md (This file)

[ ] DECLARATION.md

[ ] DEMO.mp4 or DEMO.webm

[ ] notes.md

Run Steps

Prerequisites

You need a modern web browser that supports the Web Speech API (Chrome and Edge are highly recommended).

Environment Setup

This project uses modern JavaScript/React features. You will need Node.js and npm (or yarn) installed to run it locally.

Clone the Repository:

git clone [YOUR_REPO_LINK]
cd [SPEECHTOTEXT]

Install Dependencies:

npm install

# OR

yarn install

Note: The core dependency is react-speech-recognition.

Run the Application:
Start the development server.

npm start

# OR

yarn start

The application will typically open automatically at http://localhost:3000.

Required Permissions

When the application starts, your browser will prompt you to grant Microphone Access. You must allow this permission for the speech-to-text functionality to work. If you block the microphone, the application will display a corresponding error message.

Key Voice Commands

The application is configured to respond to the following commands:

Command Pattern

Action / Response

"Hey Jarvis"

Resets the transcript to an empty state.

"clear screen"

Resets the transcript to an empty state.

"I would like to order [item]"

Updates the message box with the full order: "Your order is for: [item]".

"Hello" or "Hi"

Updates the message box with a friendly greeting.

The application listens continuously once started.
