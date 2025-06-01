'use client';
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setMessages(msgs => [...msgs, { role: 'assistant', content: data.response }]);
    } catch (err) {
      setMessages(msgs => [...msgs, { role: 'assistant', content: 'Error: Could not get response.' }]);
    }
    setLoading(false);
  }

  return (
    <div style={{ fontFamily: 'Times New Roman, Times, serif', background: '#e6f0ff', minHeight: '100vh', padding: 0, margin: 0 }}>
      <div style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
        <h1 style={{ color: '#0057b8', textAlign: 'center', marginBottom: 24, fontWeight: 'bold', fontSize: 32 }}>Mistral Chatbot</h1>
        <div style={{ background: '#fff', border: '2px solid #0057b8', borderRadius: 8, padding: 16, minHeight: 400, marginBottom: 16, overflowY: 'auto', height: 400 }}>
          {messages.length === 0 && <div style={{ color: '#0057b8', textAlign: 'center', marginTop: 100 }}>Say hello to your fine-tuned Mistral model!</div>}
          {messages.map((msg, i) => (
            <div key={i} style={{ margin: '12px 0', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
              <span style={{
                display: 'inline-block',
                background: msg.role === 'user' ? '#cce0ff' : '#e6f0ff',
                color: '#003366',
                borderRadius: 6,
                padding: '8px 12px',
                maxWidth: '80%',
                wordBreak: 'break-word',
                fontSize: 18
              }}>
                {msg.content}
              </span>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <form onSubmit={sendMessage} style={{ display: 'flex', gap: 8 }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your message..."
            style={{ flex: 1, padding: 10, fontSize: 18, border: '2px solid #0057b8', borderRadius: 6, fontFamily: 'Times New Roman, Times, serif' }}
            disabled={loading}
            autoFocus
          />
          <button type="submit" style={{ background: '#0057b8', color: '#fff', border: 'none', borderRadius: 6, padding: '0 24px', fontSize: 18, fontFamily: 'Times New Roman, Times, serif', cursor: 'pointer' }} disabled={loading}>
            {loading ? '...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}
