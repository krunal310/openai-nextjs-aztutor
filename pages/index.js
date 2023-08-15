import { useState } from 'react';
import styles from '../styles/globals.css'

export default function Home() {
  const [chatLogs, setChatLogs] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Append user message to chat
    setChatLogs([...chatLogs, { role: 'user', content: userInput }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: userInput }),
      });

      const data = await res.json();

      // Append assistant message to chat
      setChatLogs([...chatLogs, { role: 'user', content: userInput }, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error("There was an error sending your message", error);
    }

    setUserInput('');
  };

  return (
    <div className={styles.container}>
      <h1>Azure Guide Chatbot</h1>
      <div className={styles.chatbox}>
        {chatLogs.map((log, index) => (
          <div key={index} className={log.role}>
            {log.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
