// pages/api/getData.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();


/** Read */
export async function GET(req: Request) {
  try {

    const defaultHours = await prisma.default_hours.findMany();
    console.log(defaultHours)
    return NextResponse.json(defaultHours);
  } catch (error) {
    return NextResponse.json({ error: "Error" });
  }
}