import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const { body, apiPath } = data;
    const { files, inbody } = body;
    const mergedBody = {
      ...files,
      ...inbody
    };
    console.log(`${process.env.PYTHON_SERVER}/${apiPath}`);
    const resdata = await fetch(`${process.env.PYTHON_SERVER}/${apiPath}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(mergedBody),
    });
    
    if(resdata.ok){
      
      const resp: NextApiResponse = await resdata.json();    
      return NextResponse.json({ message: resp }, { status: 200 });
    }
    else{
      const resp: NextApiResponse = await resdata.json();
      throw new Error(`An error occured. Please Try Again`)
    }

  } catch (error) {
    if (error instanceof Error) {
      console.log('Error occured',error.message)
      return NextResponse.json({ message: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};
