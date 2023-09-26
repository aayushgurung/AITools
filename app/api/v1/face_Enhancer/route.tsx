import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const data = await req.json();
  const resdata = await fetch("http://localhost:5000/api/v1/enhance", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resp: NextApiResponse = await resdata.json();
  return NextResponse.json({ message: resp }, { status: 200 });
};
