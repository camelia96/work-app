// pages/api/getData.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();


/** Read */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const profileId = searchParams.get("profile");

    const parseProfileId = profileId ? parseInt(profileId) : null;

    const profileWorkedDays = await prisma.profile_worked_days.findMany({
      include: { worked_days: true },
      where: { profile_id: parseProfileId },
    });

    return NextResponse.json(profileWorkedDays);
  } catch (error) {
    return NextResponse.json({ error: "Error" });
  }
}

/** Create */
export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log(data);

    // Insert a new worked day for a profile
    /*const newProfileWorkedDay = await prisma.profile_worked_days.create({

    })*/

    // Respond with the created profile
    return NextResponse.json("newProfileWorkedDay");
  } catch (error) {
    console.error("Error creating profile:", error);
    return NextResponse.json(
      { error: "Failed to create profile" },
      { status: 500 }
    );
  }
}

/** Update */

/** Delete */

export async function DELETE(req: Request) {
  try {
    const data = await req.json();
    console.log(data);
    // Insert a new worked day for a profile
    /*const newProfileWorkedDay = await prisma.profile_worked_days.create({

    })*/

    // Respond with the created profile
    return NextResponse.json("newProfileWorkedDay");
  } catch (error) {
    console.error("Error creating profile:", error);
    return NextResponse.json(
      { error: "Failed to create profile" },
      { status: 500 }
    );
  }
}