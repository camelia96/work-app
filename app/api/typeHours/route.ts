// pages/api/getData.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
import { NextResponse } from "next/server";
const prisma = new PrismaClient();


export async function GET() {
    try {
      const typeHours = await prisma.type_hours.findMany();
      return NextResponse.json(typeHours);
    } catch (error) {
      return NextResponse.json({ error: "Error" });
    }
}
