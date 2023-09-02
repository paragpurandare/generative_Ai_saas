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
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!prompt) {
      return new NextResponse(JSON.stringify({ error: "Prompt is required" }), { status: 400 });
    }

    if (!amount) {
      return new NextResponse(JSON.stringify({ error: "Amount is required" }), { status: 400 });
    }

    if (!resolution) {
      return new NextResponse(JSON.stringify({ error: "Resolution is required" }), { status: 400 });
    }

    if (!openai.apiKey) {
      return new NextResponse(JSON.stringify({ error: "OpenAI API key not configured" }), { status: 500 });
    }

    const response = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });
    // Access the image data from the response
    if (response.data && response.data[0] && response.data[0].url) {
      const imageData = response.data[0].url;
      return new NextResponse(JSON.stringify({ imageUrl: imageData }), { status: 200 });
    } else {
      return new NextResponse(JSON.stringify({ error: "Image data not found in the response" }), { status: 500 });
    }


  } catch (error) {
    console.error("[IMAGE_ERROR]", error); // Use console.error for errors
    return new NextResponse(JSON.stringify({ error: "Internal error" }), { status: 500 });
  }
}
