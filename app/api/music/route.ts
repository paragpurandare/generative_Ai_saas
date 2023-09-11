import OpenAI from 'openai';
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Request } from "openai/_shims/fetch";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const { body } = await req.json();
    const { messages } = body;

    if (!messages) {
      return new NextResponse(JSON.stringify({ error: "Messages are required" }), { status: 400 });
    }

    if (!openai.apiKey) {
      return new NextResponse(JSON.stringify({ error: "OpenAI API key not configured" }), { status: 500 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages
    });

    return new NextResponse(JSON.stringify(response.choices[0].message), { status: 200 });

  } catch (error) {
    console.error("[CONVERSATION_ERROR]", error); // Use console.error for errors
    return new NextResponse(JSON.stringify({ error: "Internal error" }), { status: 500 });
  }
}
