import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!
});

export async function POST(req: Request, res: Response) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) { // Fixed logical issue with if condition
      return new NextResponse("prompt is required", { status: 400 });
    }

    const response = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt: "An astronaut riding a horse"
        }
      }
    );

    return  NextResponse.json(response);

  } catch (error) {
    console.error("[VIDEO_ERROR]", error); // Use console.error for errors
    return new NextResponse("Internal error", { status: 500 });
  }
}
