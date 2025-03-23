import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect } from "react";

const VoiceAssistant = ({ onSpeak }) => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      onSpeak(transcript); // Send speech to avatar
    }
  }, [transcript]);

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>🎤 Start Talking</button>
      <p>{listening ? "Listening..." : "Click to speak"}</p>
    </div>
  );
};

export default VoiceAssistant;
