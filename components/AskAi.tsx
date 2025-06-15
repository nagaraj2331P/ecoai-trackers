'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export default function AskAi() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Dummy AI response (simulate real API call)
    const aiReply: Message = {
      role: 'ai',
      content: `AI says: I received "${input}"`
    };

    // Simulate delay for AI
    setTimeout(() => {
      setMessages((prev) => [...prev, aiReply]);
    }, 1000);

    setInput('');
    inputRef.current?.focus();
  };

  useEffect(() => {
    console.log('Updated messages:', messages);
  }, [messages]);

  return (
    <div className="p-8 bg-white rounded shadow-md max-w-md mx-auto gap-19">
      <h2 className="text-lg font-bold mb-4">Ask EcoAI</h2>

      <div className="space-y-4 mb-4 max-h-64 overflow-y-auto border p-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`text-sm ${msg.role === 'ai' ? 'text-green-700' : 'text-blue-700'}`}>
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about recycling, energy, etc."
          className="flex-1 border px-2 py-1 rounded"
        />
        <button
          onClick={handleSend}
          className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
