import React, { useEffect, useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  const [message, setMessage] = useState("");
  const commands = [
    {
      command: "I would like to order *",
      callback: (food) => setMessage(`Your order is for: ${food}`),
    },
    {
      command: "Myself *",
      callback: (name) => setMessage(`welcome ${name}`),
    },
    {
      command: "Hey Jarvis",
      callback: () => setMessage(`Yes, how can I help you?`),
    },
    {
      command: "are you there Jarvis",
      callback: () => setMessage(`Yes, I am here!`),
    },
    {
      command: ["Hello", "Hi"],
      callback: ({ command }) => setMessage(`Hi there! You said: "${command}"`),
      matchInterim: true,
    },
    {
      command: "clear screen",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
    {
      command: "Stop listening",
      callback: () =>
        setMessage(
          `You Are Offline Now, Please Click on Start Listening-To Continue`
        ),
    },
    {
      command: "stop listening",
      callback: () => SpeechRecognition.stopListening(),
    },
    {
      command: "Hey Jarvis",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
  ];

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition({ commands });
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true, language: "kan-IN" });
  }, []);
  return (
    <>
      <div className="container">
        <h2>Voice-Trigger-Demo</h2>
        <br />
        {/* ------------------------------------------------------------ */}
        <div className="microphone">
          {" "}
          {listening && <p>Microphone: {listening ? "on" : "off"}</p>}
        </div>
        <p>A Simple React app To Voice Trigger</p>
        <div className="message-container">
          <h3>{message || "waiting for a  command..."}</h3>
        </div>
        {isMicrophoneAvailable ? (
          <div className="main-content">
            <p>{transcript}</p>
          </div>
        ) : (
          <p>Microphone is not available. Allow Permission To Continue.</p>
        )}
        {/* ---------------------------------------------------------- */}
        <div className="btn-style">
          <button onClick={resetTranscript}>Reset</button>
          <button
            onClick={() => {
              startListening();
              setMessage("Youre online now");
            }}
          >
            Start Listening
          </button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
        </div>
        {/* ---------------------------------------------------------- */}
      </div>
    </>
  );
};

export default App;
