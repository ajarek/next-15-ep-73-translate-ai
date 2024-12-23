/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { Mic } from 'lucide-react'
type SpeechToTextProps = {
  setTranscript: (transcript: string) => void
}
const SpeechToText: React.FC<SpeechToTextProps> = ({ setTranscript }) => {
  const [isRecording, setIsRecording] = useState<boolean>(false)

  const startRecognition = () => {
    try {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition

      if (!SpeechRecognition) {
        alert('Speech Recognition API is not supported in this browser.')
        return
      }

      const recognition = new SpeechRecognition()
      recognition.lang = 'pl-PL' // Set language
      recognition.interimResults = false // Disable partial results
      recognition.maxAlternatives = 1

      recognition.onstart = () => {
        setIsRecording(true)
      }

      recognition.onresult = (event: any) => {
        const result = event.results[0][0].transcript
        setTranscript(result)
      }

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error)
      }

      recognition.onend = () => {
        setIsRecording(false)
      }

      recognition.start()
    } catch (error) {
      console.error('Error starting speech recognition:', error)
    }
  }

  return (
    <div>
      <button
        onClick={startRecognition}
        disabled={isRecording}
        aria-label='Start speech recognition'
      >
        {isRecording ? 'Listening...' : <Mic />}
      </button>
    </div>
  )
}

export default SpeechToText
