import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  const apiKey = process.env.MISTRAL_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Missing MISTRAL_API_KEY' }, { status: 500 });
  }

  const mistralRes = await fetch('https://api.mistral.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'ft:open-mistral-7b:0a8d14b7:20250601:76ddf5b6',
      messages: [
        { role: 'user', content: message }
      ]
    })
  });

  if (!mistralRes.ok) {
    const error = await mistralRes.text();
    return NextResponse.json({ error }, { status: mistralRes.status });
  }

  const data = await mistralRes.json();
  const assistantMessage = data.choices?.[0]?.message?.content || '';
  return NextResponse.json({ response: assistantMessage });
} 