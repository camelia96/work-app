// pages/api/getData.ts
import { prisma } from "@/lib/prisma";;
import { NextResponse } from "next/server";



export async function GET() {
    try {
      const typeHours = await prisma.type_hours.findMany();
      return NextResponse.json(typeHours);
    } catch (error) {
      return NextResponse.json({ error: "Error" + error });
    }
}
