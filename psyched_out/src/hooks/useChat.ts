import { useState } from 'react';
import axios from 'axios';

function useChat() {
  const [text, setText] = useState('');
  const [model, setModel] = useState<'copilot' | 'gemini'>('copilot');
  const [context, setContext] = useState<'patient' | 'doctor'>('patient');
  const [result, setResult] = useState<any>(null);

  const analyzeText = async () => {
    try {
      const response = await axios.post('/analyze', { text, model, context });
      setResult(response.data);
    } catch (error) {
      console.error('Error analyzing text', error);
    }
  };

  return { text, setText, model, setModel, context, setContext, result, analyzeText };
}

export default useChat;