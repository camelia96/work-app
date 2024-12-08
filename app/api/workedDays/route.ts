// pages/api/getData.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const profileId = searchParams.get("profile");
    const date = searchParams.get("date");

    if (!profileId || !date) {
      return NextResponse.json({ error: "Error 1" });
    }

    const workedDays = await prisma.worked_days.findFirst({
      where: {
        date: date,
        profile_worked_days: {
          some: {
            profile_id: parseInt(profileId),
          },
        },
      },
      select: {
        id: true,
      },
    });

    return NextResponse.json(workedDays);
  } catch (error) {
    return NextResponse.json({ error: "Error 2" });
  }
}
