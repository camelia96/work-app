// pages/api/getData.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from "next/server";



export async function GET() {
    try {
      const profiles = await prisma.profiles.findMany();
      return NextResponse.json(profiles);
    } catch (error) {
      return NextResponse.json({ error: error });
    }
}
