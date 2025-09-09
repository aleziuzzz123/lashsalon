
import { NextRequest, NextResponse } from "next/server";

// Placeholder: log payload. In production, verify MP signature & update DB (booking status).
export async function POST(req: NextRequest){
  const data = await req.json().catch(()=>null);
  console.log("MP Webhook:", data);
  // TODO: lookup payment -> if approved => confirm booking and send notifications
  return NextResponse.json({ ok: true });
}
