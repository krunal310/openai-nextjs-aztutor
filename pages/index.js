import { useState } from 'react';

export default function Home() {
  const [chatLogs, setChatLogs] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setChatLogs(prevLogs => [...prevLogs, { role: 'user', content: userInput }]);

    const startTime = Date.now();

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: userInput }),
      });

      const endTime = Date.now();
      const responseTime = ((endTime - startTime) / 1000).toFixed(2);

      const data = await res.json();
      const assistantReply = data.response;
      const costDetails = `Response time: ${responseTime} seconds | Cost: ${parseFloat(data.cost).toFixed(6)} USD`;

      setChatLogs(prevLogs => [...prevLogs, { role: 'assistant', content: assistantReply, details: costDetails }]);

    } catch (error) {
      console.error("There was an error sending your message", error);
      setChatLogs(prevLogs => [...prevLogs, { role: 'assistant', content: "Sorry, I'm currently experiencing difficulties. Please try again later." }]);
    }

    setUserInput('');
  };

  const handleClearConversation = () => {
    setChatLogs([]);
  };

  return (
    <div className="chatContainer">
      <h1>Azure Guide Chatbot</h1>
      <div className="chatHistory">
        {chatLogs.map((log, index) => (
          <div key={index} className="clearfix">
            <div className={`message ${log.role}`}>
                {log.content}
            </div>
            {log.role === 'assistant' && log.details && (
                <div className="responseDetails">
                    <span className="costDetails">{log.details}</span>
                </div>
              )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="inputContainer">
        <textarea
          className="inputBox"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit" className="sendButton">Send</button>
      </form>
      <button onClick={handleClearConversation} className="sendButton">Clear Conversation</button>
    </div>
  );
}
