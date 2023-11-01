import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;
    if (!userId) {
      return new NextResponse(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    if (!prompt) {
      return new NextResponse(JSON.stringify({ error: "prompt is required" }), { status: 400 });
    }

    const response = await replicate.run(
      "andreasjansson/cantable-diffuguesion:24f3dfb8e9316bf80a541f02db99c12e0d66c1126b8af382ec5471f939093670",
      {
        input: {
          duration: "32"
        }
      }
    );

    return NextResponse.json(response);

  } catch (error) {
    console.error("[MUSIC_ERROR]", error); // Use console.error for errors
    return new NextResponse(JSON.stringify({ error: "Internal error" }), { status: 500 });
  }
}
