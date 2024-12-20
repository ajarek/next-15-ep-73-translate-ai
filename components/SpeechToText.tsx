import React, { useState } from 'react';
import { Mic } from "lucide-react"

const SpeechToText: React.FC<{ setTranscript: (transcript: string) => void }> = ({ setTranscript }) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  

  const startRecognition = () => {
    try {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (!SpeechRecognition) {
        alert('Speech Recognition API is not supported in this browser.');
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US'; // Set language
      recognition.interimResults = false; // Disable partial results
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const result = event.results[0][0].transcript;
        setTranscript(result);
      };

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Speech recognition error:', event.error);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
    } catch (error) {
      console.error('Error starting speech recognition:', error);
    }
  };

  return (
    <div>
      
      <button onClick={startRecognition} disabled={isRecording}>
        {isRecording ? 'Listening...' : <Mic/>}
      </button>
      <div>
        
      </div>
    </div>
  );
};

export default SpeechToText;
