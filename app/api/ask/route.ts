import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });

  const content = completion.choices[0].message.content;

  await addDoc(collection(db, 'queries'), {
    prompt,
    response: content,
    createdAt: Timestamp.now(),
  });

  return NextResponse.json({ result: content });
}
