'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export default function AskAI() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      if (res.ok) {
        const aiMessage = { role: 'ai', content: data.result };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        setMessages((prev) => [...prev, { role: 'ai', content: '❌ ' + data.error }]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'ai', content: '❌ Network error' }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="max-w-2xl mx-auto bg-green-100 rounded-xl p-4 shadow-md">
      <h2 className="text-xl font-semibold text-green-900 mb-2">Ask EcoAI</h2>

      <div
        ref={chatRef}
        className="h-64 overflow-y-auto bg-white p-3 rounded border border-green-200 space-y-2"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-md ${
              msg.role === 'user'
                ? 'bg-green-200 text-right text-green-800'
                : 'bg-green-50 text-left text-black'
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && (
          <div className="text-green-600 italic animate-pulse">EcoAI is thinking...</div>
        )}
      </div>

      <div className="mt-3 flex items-center gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={2}
          placeholder="Ask about sustainability tips..."
          className="w-full p-2 border rounded"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
