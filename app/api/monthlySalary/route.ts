// pages/api/getData.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

/** Read */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

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

/** Create */
export async function POST(req: Request) {
  try {
    /* Get data from request */
    const data = await req.json();
    
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
export async function PUT(req: Request) {
  try {
    // Get request data
    const data = await req.json();

    // Response
    return NextResponse.json("");
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}

/** Delete */

export async function DELETE(req: Request) {
  try {
    // Get request data
    const data = await req.json();
    console.log(data.date);
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
