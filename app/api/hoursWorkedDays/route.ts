// pages/api/getData.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import Decimal from "decimal.js";

const prisma = new PrismaClient();

/** Read */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    let whereClause = {};

    const selectedMonth = searchParams.get("month");
    const selectedProfile = searchParams.get("profile");
    const currentYear = new Date().getFullYear();

    if (
      !(
        selectedMonth &&
        selectedMonth != undefined &&
        selectedProfile &&
        selectedProfile != undefined
      )
    ) {
      return NextResponse.json({ error: "Error" });
    }

    const parsedMonth = parseInt(selectedMonth);

    whereClause = {
      gte: new Date(`${currentYear}-${parsedMonth}-01`), // Last day of previous month
      lt:
        parsedMonth == 12
          ? new Date(`${currentYear + 1}-01-01`)
          : new Date(`${currentYear}-${parsedMonth + 1}-01`), // First day of next month
    };

    //Get profile worked days
    const parsedProfile = parseInt(selectedProfile);
    const profileWorkedDays = await prisma.profile_worked_days.findMany({
      where: {
        profile_id: parsedProfile,
        worked_days: {
          date: whereClause,
        },
      },
      include: {
        worked_days: true,
      },
    });
    console.log("AQUI");
    console.log(profileWorkedDays);

    const profileWorkedIds = profileWorkedDays.map(
      (element) => element.worked_day_id
    );

    const idsValid = profileWorkedIds.every(
      (id) => id !== null && id !== undefined
    );

    if (!idsValid) {
      return NextResponse.json({ error: "Error" });
    }

    const hoursWorkedDays = await prisma.hours_worked_days.findMany({
      where: {
        worked_day_id: {
          in: profileWorkedIds,
        },
      },
      include: {
        worked_days: true,
        type_hours: true,
      },
    });

    console.log(hoursWorkedDays);

    /* Calculate total worked hours */
    const totalWorkedHours = hoursWorkedDays.reduce((acc, current) => {
      const validHour = current.hours != null ? current.hours : 0;

      return acc + validHour;
    }, 0);

    console.log(totalWorkedHours);

    /* Calculate base salary */
    const baseSalary = hoursWorkedDays.reduce((acc, current) => {
      if (current.hours == null) {
        throw new Error('Error: "hours" is missing or invalid.');
      }
      if (current.type_hours == null || current.type_hours.price == null) {
        throw new Error(
          'Error: "type_hours" or "price" is missing or invalid.'
        );
      }
      const validHour = current.hours;
      const validPrice = new Decimal(current.type_hours.price);

      // Realiza el cálculo, usando Decimal para asegurar precisión
      return acc.add(new Decimal(validHour).mul(validPrice));
    }, new Decimal(0));

    console.log(baseSalary)

    return NextResponse.json({workedHours:totalWorkedHours, baseSalary: baseSalary});
  } catch (error) {
    return NextResponse.json({ error: "Error" });
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
