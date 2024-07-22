import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { validateImage } from "./middleware/validateImage";

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/api/v1/resize-image") ||
    request.nextUrl.pathname.startsWith("/api/v1/image-enhancer")
  ) {
    const validation = await validateImage(request);
  if(!validation?.success){
    const responsePayload = {
      success: validation?.success,
      message: validation?.message,
    };
    
    const responseStatus = {
      status: validation?.status,
    };
    return NextResponse.json(responsePayload, responseStatus);
  }
  else{
    return NextResponse.next()
  }
  }
}
