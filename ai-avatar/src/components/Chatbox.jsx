import React, { useState } from "react";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, user: true }]);
      setInput("");
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md w-full max-w-lg mx-auto mt-5">
      <div className="h-60 overflow-y-auto bg-white p-2 rounded-md">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 ${msg.user ? "text-right text-blue-600" : "text-left text-gray-800"}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-3">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l-md"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={handleSend} className="bg-blue-600 text-white p-2 rounded-r-md">Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
