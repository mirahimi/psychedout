import React, { useState, FC } from 'react';
import axios from 'axios';

interface ChatFormProps {}

const ChatForm: FC<ChatFormProps> = () => {
  const [text, setText] = useState('');
  const [model, setModel] = useState('copilot');
  const [context, setContext] = useState('patient');
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    try {
      const response = await axios.post('/analyze', { text, model, context });
      setResult(response.data);
    } catch (error) {
      console.error('Error analyzing text', error);
    }
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <select value={model} onChange={(e) => setModel(e.target.value)}>
        <option value="copilot">Copilot</option>
        <option value="gemini">Gemini</option>
      </select>
      <select value={context} onChange={(e) => setContext(e.target.value)}>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>
      <button onClick={handleAnalyze}>Analyze</button>
      {result && <div>{JSON.stringify(result)}</div>}
    </div>
  );
};

export default ChatForm;