import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const resdata = await fetch(`${process.env.PYTHON_SERVER}/compare_faces`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resp: NextApiResponse = await resdata.json();
    return NextResponse.json({ message: resp }, { status: 200 });
  } catch (error) {
    
  }
};
