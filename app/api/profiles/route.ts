// pages/api/getData.ts
import { PrismaClient } from '@prisma/client'
import { NextResponse } from "next/server";
const prisma = new PrismaClient();


export async function GET() {
    try {
      const profiles = await prisma.profiles.findMany();
      return NextResponse.json(profiles);
    } catch (error) {
      return NextResponse.json({ error: "Error" + error });
    }
}
