import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const openai = new OpenAI({apiKey:process.env.OPENAI_API_KEY});

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  const content = completion.choices[0].message.content;
}
await addDoc(collection(db, "queries"), {
  prompt,
  response: completion.choices[0].message.content
  createdAt: Timestamp.now()
});