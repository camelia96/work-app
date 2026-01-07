// pages/api/getData.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";



/** Read */
export async function GET() {
  try {

    const defaultHours = await prisma.default_hours.findMany();
    console.log(defaultHours)
    return NextResponse.json(defaultHours);
  } catch (error) {
    
    return NextResponse.json({ error: "Error" + error });
  }
}