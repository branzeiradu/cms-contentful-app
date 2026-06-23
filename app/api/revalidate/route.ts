import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  console.log("REVALIDATE ROUTE HIT");
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-vercel-reval-key");
  console.log(`request header x-vercel-reval-key: ${secret}`);
  
  const revalidateToken = process.env.CONTENTFUL_REVALIDATE_SECRET;
  console.log(`process.env.CONTENTFUL_REVALIDATE_SECRET: ${revalidateToken}`);
  
  if (secret !== revalidateToken) {
    console.log("Contentful revalidate secret is invalid is invalid");
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  console.log("REVALIDATION ENDPOINT CALLED");
  //revalidateTag("posts");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
