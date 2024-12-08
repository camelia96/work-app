// pages/api/getData.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { DateTime } from "@/types/myTypes";
import { DateObject } from "react-multi-date-picker";

const prisma = new PrismaClient();

const limitMorningHour = 7;
const limitMorningMinute = 0;

const typeHours = await prisma.type_hours.findMany();

function calculateDifferenceHours(date: DateTime) {
  /* Parse data to make next calculations */
  const startHourParsed = parseInt(date.startHour);
  const startMinParsed = parseInt(date.startMin);
  const endHourParsed = parseInt(date.endHour);
  const endMinParsed = parseInt(date.endMin);

  const diffMinutes =
    endHourParsed * 60 +
    endMinParsed -
    (startHourParsed * 60 + startMinParsed) -
    (date.break ? 30 : 0);

  const diffHours = diffMinutes / 60;

  return diffHours;
}

function calculateTypeHours(
  data: DateTime,
  diffHours: number,
  workedDayId: number
) {
  /* Get type of hours from database */
  const differentWorkedHours = [];
  let typeHourMorningHours = "";
  let typeHourRestHours = "";

  /* If it's a morning shift, start hour will be before the morning limit hour */
  if (parseInt(data.startHour) < limitMorningHour) {
    const morningHours =
      (limitMorningHour * 60 +
        limitMorningMinute -
        (parseInt(data.startHour) * 60 + parseInt(data.startMin))) /
      60;

    /* A morning shift can or cannot be sunday */
    if (data.sunday) {
      typeHourMorningHours = "morning+sundays";
      typeHourRestHours = "sundays";
    } else {
      typeHourMorningHours = "morning";
      typeHourRestHours = "basic";
    }

    if (typeHourMorningHours != undefined && typeHourRestHours != undefined) {
      // We push into worked hours array:

      // Morning hours, either 2 or 3
      differentWorkedHours.push({
        worked_day_id: workedDayId,
        hours: morningHours,
        type_hours_id: typeHours.find(
          (hour) => hour.type === typeHourMorningHours
        )?.id,
      });

      // Rest of the shift hours, either 6 or 5
      differentWorkedHours.push({
        worked_day_id: workedDayId,
        hours: diffHours - morningHours,
        type_hours_id: typeHours.find((hour) => hour.type === typeHourRestHours)
          ?.id,
      });
    }
  } else if (data.sunday) {
    differentWorkedHours.push({
      worked_day_id: workedDayId,
      hours: diffHours,
      type_hours_id: typeHours.find((hour) => hour.type === "sundays")?.id,
    });
  } else {
    differentWorkedHours.push({
      worked_day_id: workedDayId,
      hours: diffHours,
      type_hours_id: typeHours.find((hour) => hour.type === "basic")?.id,
    });
  }

  return differentWorkedHours;
}

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
    /* Get data from request */
    const data = await req.json();

    /* Parse type hours */
    /*   const basicHourPrice = typeHours.find(
      (hour) => hour.type == "basic"
    )?.price;
    const morningHourPrice = typeHours.find(
      (hour) => hour.type == "morning"
    )?.price;
    const sundaysHourPrice = typeHours.find(
      (hour) => hour.type == "sundays"
    )?.price;*/

    // Insert a new worked day for a profile
    const newProfileWorkedDay = await prisma.profile_worked_days.create({
      data: {
        worked_days: {
          create: {
            date: new Date(data.date),
            start_hour: data.startHour,
            start_minute: data.startMin,
            end_hour: data.endHour,
            end_minute: data.endMin,
            break: data.break ? 1 : 0,
            sunday: data.sunday ? 1 : 0,
          },
        },
        profiles: {
          connect: {
            id: data.profile,
          },
        },
      },
      include: {
        worked_days: {
          select: {
            id: true,
          },
        },
      },
    });

    /* Calculate the actual worked hours
     If there's break in the shift, 30 minutes will be substracted from the shift*/
    const diffHours = calculateDifferenceHours(data);
    console.log(diffHours);

    const workedDayId = newProfileWorkedDay.worked_day_id;
    /* Calculate different type of hours for each shift */

    if (!workedDayId) {
      return NextResponse.json(
        { error: "There needs to be a worked day id" },
        { status: 500 }
      );
    }
    const differentWorkedHours = calculateTypeHours(
      data,
      diffHours,
      workedDayId
    );
    const hoursWorkedDays = await prisma.hours_worked_days.createMany({
      data: differentWorkedHours,
    });

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

    // Check if profile id and date both exist
    if (!data.profile || !data.date) {
      return NextResponse.json(
        { error: "ID and/or date is required to update the data" },
        { status: 400 }
      );
    }

    const workedDayToUpdate = await prisma.profile_worked_days.findFirst({
      where: {
        worked_days: {
          date: data.date,
        },
        profile_id: data.profile,
      },
      select: {
        worked_day_id: true,
      },
    });

    if (!workedDayToUpdate?.worked_day_id) {
      return NextResponse.json(
        { error: "Failed to update profile" },
        { status: 500 }
      );
    }

    // Update record
    const updatedProfileWorkedDay = await prisma.worked_days.update({
      where: {
        id: workedDayToUpdate?.worked_day_id, // Suponiendo que el ID del recurso se pasa en `data.id`
      },
      data: {
        date: new Date(data.date),
        start_hour: data.data.startHour,
        start_minute: data.data.startMin,
        end_hour: data.data.endHour,
        end_minute: data.data.endMin,
        break: data.data.break ? 1 : 0,
        sunday: data.data.sunday,
      },
    });

    if (
      !updatedProfileWorkedDay ||
      !updatedProfileWorkedDay ||
      !updatedProfileWorkedDay.date ||
      updatedProfileWorkedDay.start_hour == null ||
      updatedProfileWorkedDay.start_minute == null ||
      updatedProfileWorkedDay.end_hour == null ||
      updatedProfileWorkedDay.end_minute == null
    ) {
      return NextResponse.json(
        { error: "Fallo multiorganico" },
        { status: 500 }
      );
    }

    const newDateTimeObject = {
      date: new DateObject(
        (updatedProfileWorkedDay.date.getFullYear(),
        updatedProfileWorkedDay.date.getMonth() + 1,
        updatedProfileWorkedDay.date.getDate())
      ),
      startHour: updatedProfileWorkedDay.start_hour,
      startMin: updatedProfileWorkedDay.start_minute,
      endHour: updatedProfileWorkedDay.end_hour,
      endMin: updatedProfileWorkedDay.end_minute,
      break: updatedProfileWorkedDay.break === 1,
      sunday: updatedProfileWorkedDay.sunday === 1,
    };

    //Calculate new hour differences
    const newHourDifference = calculateDifferenceHours(newDateTimeObject);

    //Calculate new segmented hours records
    const newTypeHours = calculateTypeHours(
      newDateTimeObject,
      newHourDifference,
      updatedProfileWorkedDay.id
    );

    //Delete old records from hours_worked_days for selected worked_day
    const oldHoursWorkedDays = await prisma.hours_worked_days.deleteMany({
      where: {
        worked_day_id: updatedProfileWorkedDay.id,
      },
    });

    //Create new records from hours_worked_days for selected worked_day
    const newHoursWorkedDays = await prisma.hours_worked_days.createMany({
      data: newTypeHours,
    });

    console.log(newTypeHours);
    // Response
    return NextResponse.json(updatedProfileWorkedDay);
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

    // Check if profile id and date both exist
    if (!data.profile || !data.date) {
      return NextResponse.json(
        { error: "ID and/or date is required to update the data" },
        { status: 400 }
      );
    }

    const workedDayToDelete = await prisma.profile_worked_days.findFirst({
      where: {
        worked_days: {
          date: data.date,
        },
        profile_id: data.profile,
      },
      select: {
        worked_day_id: true,
      },
    });

    if (!workedDayToDelete?.worked_day_id) {
      return NextResponse.json(
        { error: "Failed to create profile" },
        { status: 500 }
      );
    }

    const transaction = await prisma.$transaction([
      prisma.profile_worked_days.deleteMany({
        where: {
          worked_day_id: workedDayToDelete.worked_day_id,
        },
      }),
      prisma.hours_worked_days.deleteMany({
        where: {
          worked_day_id: workedDayToDelete.worked_day_id,
        },
      }),
      prisma.worked_days.delete({
        where: {
          id: workedDayToDelete.worked_day_id,
        },
      }),
    ]);

    console.log(transaction)
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
