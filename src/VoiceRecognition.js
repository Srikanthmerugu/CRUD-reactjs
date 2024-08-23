import React, { useState, useEffect, useRef } from 'react';
// import './grid/gridcss.css'
import './react-spring/grid/gridcss.css'


const VoiceRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState('');
  const recognitionRef = useRef(null);

  const startListening = () => {
    if (!recognitionRef.current) {
      recognitionRef.current = new window.SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onstart = () => {
        console.log('Speech recognition service has started');
        setError('');
      };

      recognitionRef.current.onresult = (event) => {
        console.log('Speech recognition result event:', event);
        const speechToText = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        setTranscript(speechToText);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error detected:', event);
        setError(`Error detected: ${event.error}`);
        if (event.error === 'no-speech') {
          setTimeout(() => {
            if (isListening) {
              recognitionRef.current.start();
            }
          }, 1000); // Retry after 1 second
        }
      };

      recognitionRef.current.onend = () => {
        console.log('Speech recognition service disconnected');
        if (isListening) {
          recognitionRef.current.start();
        }
      };
    }
    setIsListening(true);
    recognitionRef.current.start();
  };

  const stopListening = () => {
    setIsListening(false);
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  useEffect(() => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!window.SpeechRecognition) {
      alert('Your browser does not support Speech Recognition. Please try Chrome or Edge.');
    }
  }, []);

  return (
    <div>
      <button onClick={isListening ? stopListening : startListening}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <p>{transcript}</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default VoiceRecognition;
