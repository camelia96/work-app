import { MenuProps } from "antd";
import { DateObject } from "react-multi-date-picker";

// DateObject to prisma format date
export function prismaFormatDate(date: DateObject) {
  const dateUTC = new Date(
    Date.UTC(date.year, date.month.number - 1, date.day, 0, 0, 0, 0)
  );
  return dateUTC.toISOString();
}

// Total months from set payroll date
export function calculateTotalMonthsPayroll(
  currentDate: DateObject,
  firstPayrollDate: DateObject
) {
  // Calculate current date and first payroll to time
  const currentTime = new Date(
    currentDate.year,
    currentDate.month.number - 1
  ).getTime();
  const firstPayrollTime = new Date(
    firstPayrollDate.year,
    firstPayrollDate.month.number - 1
  ).getTime();

  // Calculate day difference
  const differenceDays =
    (currentTime - firstPayrollTime) / (1000 * 60 * 60 * 24);

  // In this app, a month is 28 days
  return Math.floor(differenceDays / 28);
}

// First day date for specified payroll
export function calculateFirstDayCurrentPayroll(
  firstPayrollDate: DateObject,
  totalMonthsPayroll: number
) {
  return new DateObject(firstPayrollDate).add(28 * totalMonthsPayroll, "days");
}

// Last day date for specified payroll
export function calculateLastDayCurrentPayroll(
  firstDayCurrentPayroll: DateObject
) {
  return new DateObject(firstDayCurrentPayroll).add(28, "days");
}

// Fill payroll months dropdown
export function fillMonthsPayrollDropdown(
  items: MenuProps["items"],
  year: DateObject
) {
  if (items == undefined) return false;

  // Get January's changed year difference month from first payroll
  const newYearFirstTotalMonthsPayroll = calculateTotalMonthsPayroll(
    year,
    new DateObject().setDay(13).setMonth(6).setYear(2024)
  );

  // Empty items array
  items.splice(0, items.length);

  // Populate menu dropdown with all year's payroll dates
  // We fill the array 13 times instead of 12 because a month is only 28 days
  for (
    let i = newYearFirstTotalMonthsPayroll;
    i <= newYearFirstTotalMonthsPayroll + 13;
    i++
  ) {
    const newFirstPayrollDay = calculateFirstDayCurrentPayroll(
      new DateObject().setDay(13).setMonth(6).setYear(2024),
      i
    );
    const newLastPayrollDay =
      calculateLastDayCurrentPayroll(newFirstPayrollDay);

    items.push({
      label: `${newFirstPayrollDay.month.name} - ${newFirstPayrollDay.format(
        "DD/MM/YYYY"
      )} to ${newLastPayrollDay.format("DD/MM/YYYY")}`,
      key: i,
    });
  }

  // Update menuprops items array
  items = items;
}
