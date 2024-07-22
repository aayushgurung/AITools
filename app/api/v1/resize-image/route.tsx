import { NextResponse } from "next/server";
import sharp from "sharp";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const imageBuffer = Buffer.from(data.files.image, "base64");
    const image = sharp(imageBuffer);
    image.toFormat(data.format).resize({
      width: data.width,
      height: data.height,
      fit: "fill",
    });
    const outputBuffer = await image.toBuffer();
    const resizedBase64 = outputBuffer.toString("base64");
    const type = (await sharp(outputBuffer).metadata()).format;
    return NextResponse.json({ message: resizedBase64 }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: error }, { status: 500 });
    }
  }
};

