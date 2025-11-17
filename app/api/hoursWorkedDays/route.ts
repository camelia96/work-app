// pages/api/getData.ts
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import Decimal from "decimal.js";

const prisma = new PrismaClient();

/** Read */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    let whereClause = {};

    const selectedProfile = searchParams.get("profile");
    const firstDayCurrentPayroll = searchParams.get("firstDay");
    const lastDayCurrentPayroll = searchParams.get("lastDay");

    if (
      !(
        selectedProfile &&
        selectedProfile != undefined &&
        firstDayCurrentPayroll &&
        firstDayCurrentPayroll != undefined &&
        lastDayCurrentPayroll &&
        lastDayCurrentPayroll != undefined
      )
    ) {
      return NextResponse.json({ error: "Error" });
    }

    const parsedFirstDayCurrentPayroll = new Date(firstDayCurrentPayroll);
    const parsedLastDayCurrentPayroll = new Date(lastDayCurrentPayroll);


    whereClause = {
      gte: parsedFirstDayCurrentPayroll,
      /*new Date(`${parsedYear}-${parsedMonth}-01`), // Last day of previous month*/
      lt: parsedLastDayCurrentPayroll,
      /*parsedMonth == 12
          ? new Date(`${parsedYear + 1}-01-01`)
          : new Date(`${parsedYear}-${parsedMonth + 1}-01`), // First day of next month*/
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

    /* Calculate total worked hours */
    const totalWorkedHours = hoursWorkedDays.reduce((acc, current) => {
      const validHour = current.hours != null ? current.hours : 0;

      return acc + validHour;
    }, 0);

    /* Calculate total MORNING worked hours */
    const totalMorningWorkedHours = hoursWorkedDays
      .filter((hour) => hour.type_hours?.type?.includes("morning"))
      .reduce((acc, current) => {
        const validHour = current.hours != null ? current.hours : 0;

        return acc + validHour;
      }, 0);

    /* Calculate total SUNDAYS worked hours */
    const totalSundaysWorkedHours = hoursWorkedDays
      .filter((hour) => hour.type_hours?.type?.includes("sunday"))
      .reduce((acc, current) => {
        const validHour = current.hours != null ? current.hours : 0;

        return acc + validHour;
      }, 0);

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

    return NextResponse.json({
      workedHours: totalWorkedHours,
      baseSalary: baseSalary,
      morningWorkedHours: totalMorningWorkedHours,
      sundaysWorkedHours: totalSundaysWorkedHours,
    });
  } catch (error) {
    return NextResponse.json({ error: "Error" + error });
  }
}
