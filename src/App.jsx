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
      command: "Hey Jarvis",
      callback: () => setMessage(`Yes, how can I help you?`),
      // callback: ({ resetTranscript }) => resetTranscript(),
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
      command: "Hey Jarvis",
      // callback: () => setMessage(`Yes, how can I help you?`),
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
  // if (!isMicrophoneAvailable) {
  //   return (
  //     <div>Microphone is not available. Please check your device settings.</div>
  //   );
  // }

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  }, []);

  return (
    <>
      <div className="container">
        <h2>Speech to Text Converter</h2>
        <br />
        {listening && <p>Microphone: {listening ? "on" : "off"}</p>}
        <p>A Simple React app to convert your speech to text</p>
        <h3>{message || "waiting for a  command..."}</h3>
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
          <button onClick={startListening}>Start Listening</button>
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
