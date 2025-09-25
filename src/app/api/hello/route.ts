// app/api/hello/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      message: "Hello World!",
      timestamp: new Date().toISOString(),
      status: "success",
    });
  } catch (error) {
    console.error("Hello API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
