import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  if (!prompt) return NextResponse.json({ error: 'No prompt provided.' }, { status: 400 });

  try {
    const chat = await openai.chat.completions.create({
      model: process.env.NEXT_PUBLIC_OPENAI_MODEL!,
      messages: [{ role: 'user', content: prompt }],
    });

    const content = chat.choices?.[0]?.message?.content;
    return NextResponse.json({ result: content });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'OpenAI error' }, { status: 500 });
  }
}
