// pages/api/getData.ts
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();


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