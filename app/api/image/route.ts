"use client"
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req:Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const { body } = await req.json();
    const { prompt, amount = "1", resolution = "512x512" } = body; // Ensure 'amount' is a string

    if (!prompt) {
      return new NextResponse(JSON.stringify({ error: "Prompt is required" }), { status: 400 });
    }

    if (!amount) {
      return new NextResponse(JSON.stringify({ error: "Amount is required" }), { status: 400 });
    }

    if (!resolution) {
      return new NextResponse(JSON.stringify({ error: "Resolution is required" }), { status: 400 });
    }

    const response = await replicate.run(
      "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
      {
        input: {
          prompt,
          amount: parseInt(amount, 4),
          resolution,
        },
      }
    );

    // Check if response contains the image URLs directly
    if (Array.isArray(response)) {
      return new NextResponse(JSON.stringify({ imageUrls: response }), { status: 200 });
    } else {
      return new NextResponse(JSON.stringify({ error: "Image data not found in the response" }), { status: 500 });
    }
  } catch (error) {
    console.error("[IMAGE_ERROR]", error);
    return new NextResponse(JSON.stringify({ error: "Internal error" }), { status: 500 });
  }
}
