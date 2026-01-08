"use client"
import { worked_days } from "@/generated/prisma";
import { formatDate } from "@/lib/constants";
import { calculateFirstDayCurrentPayroll, calculateLastDayCurrentPayroll, calculateTotalMonthsPayroll, fillMonthsPayrollDropdown } from "@/lib/helpers";
import { useState } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";

interface CalendarViewProps {
    dates: worked_days[]
}
export default function CalendarView({ dates }: CalendarViewProps) {
    const [holidayMode, setHolidayMode] = useState<boolean>(false);
    const [sunday, setSunday] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new DateObject());

    const [firstPayrollDate] = useState<DateObject>(new DateObject().setDay(13).setMonth(6).setYear(2024));

    const [totalMonthsPayroll, setTotalMonthsPayroll] = useState<number>(calculateTotalMonthsPayroll(currentMonth, firstPayrollDate));

    // First day of payroll from current month 
    const [firstDayCurrentPayroll, setFirstDayCurrentPayroll] = useState<DateObject>(calculateFirstDayCurrentPayroll(firstPayrollDate, totalMonthsPayroll));

    // Last day of payroll from current month 
    const [lastDayCurrentPayroll, setLastDayCurrentPayroll] = useState<DateObject>(calculateLastDayCurrentPayroll(firstDayCurrentPayroll));

    // List of current payroll dates + other dates states
    const handleDateChange = (selectedDates: DateObject[]) => {
        //Get only dates property from existing dates array
        const existingDates = dates.map(date => date.date);

        //Filter new selected dates from existing database dates
        //const newFilteredDates = selectedDates.filter(filteredDate => !existingDates.includes(filteredDate));


        //Updated dates starting point
        let updatedDates = [...dates];


        //Filter deselected dates to remove them from existing array of dates
        //const deselectedDates = existingDates.filter(filteredDate => !selectedDates.includes(filteredDate));


        if (holidayMode) {
            // If holiday mode is ON, we dont want to deselect a selected day when clicking on it, but to make it a holiday day
            /* const newDateHoliday = deselectedDates.map((val) => {
                return updatedDates.find((e) => e.date.format("DD/MM/YYYY") == val.format("DD/MM/YYYY"))

            }) */

            // When we get a new holiday value, we also have to update its time and properties as per holiday values on the frontend worked days list
            /*  newDateHoliday.map((dateHoliday) => {
                 // Check if it exists
                 if (dateHoliday) {
                     // Change properties according to holiday property's value
                     dateHoliday.startHour = dateHoliday.holiday ? selectedDefaultHour.startHour : defaultHolidayStartHour;
                     dateHoliday.startMin = dateHoliday.holiday ? selectedDefaultHour.startMin : defaultHolidayStartMin;
                     dateHoliday.endHour = dateHoliday.holiday ? selectedDefaultHour.endHour : defaultHolidayEndHour;
                     dateHoliday.endMin = dateHoliday.holiday ? selectedDefaultHour.endMin : defaultHolidayEndMin;
                     dateHoliday.break = dateHoliday.holiday ? breakExists : false;
                     dateHoliday.sunday = dateHoliday.holiday ? sunday : false;
                     dateHoliday.holiday = !dateHoliday.holiday
                 };
             }) */

        } else {
            //Remove deselected dates from existing dates
            /* updatedDates = dates.filter(
                //date => !deselectedDates.some(deselectedDate => deselectedDate.format() === date.date.format())
            ); */
        }

        //Adding default start/end times to new dates because they are only dates, and filling the array with both new and old dates
        /* const newDates = [...updatedDates, ...newFilteredDates.map((newFilteredDate) => {
            const newSelectedDate =
            {
                // If holiday mode is ON, all newly created dates will automatically be holiday days 
                date: newFilteredDate,
                startHour: holidayMode ? defaultHolidayStartHour : selectedDefaultHour?.startHour,
                startMin: holidayMode ? defaultHolidayStartMin : selectedDefaultHour?.startMin,
                endHour: holidayMode ? defaultHolidayEndHour : selectedDefaultHour?.endHour,
                endMin: holidayMode ? defaultHolidayEndMin : selectedDefaultHour?.endMin,
                break: holidayMode ? false : breakExists,
                sunday: holidayMode ? false : sunday,
                holiday: holidayMode 
            };

            return newSelectedDate
        })]
*/

        //Set dates array
        // setDates(newDates)

    }

    const handleClickedDate = async (dateFocused: DateObject, dateClicked: DateObject) => {

        try {

            // Format dates 
            const dateFocusedFormat = dateFocused?.format(formatDate);
            const dateClickedFormat = dateClicked?.format(formatDate);
            let method = undefined;


            // Check if selected date is sunday (for DateObject, sunday's index is 0) 
            const isSunday = dateClicked.weekDay.index === 0;

            // We need a sundayState since we are inside an asynchronous function 
            setSunday(isSunday)

            // New work day that we will either create or delete 
            //const newWorkDay = { profile: selectedTabProfile, date: prismaFormatDate(dateClicked), startHour: selectedDefaultHour.startHour, startMin: selectedDefaultHour.startMin, endHour: selectedDefaultHour.endHour, endMin: selectedDefaultHour.endMin, break: breakExists, sunday: isSunday, holiday: false }

            //If focused and clicked dates don't match, it's deleted
            if (dateFocusedFormat != dateClickedFormat) {

                method = 'DELETE';

                // If holiday mode is on, its converted to Holiday 
                if (holidayMode) {
                    method = 'PUT'
                }

            } else {

                //If focused and clicked dates do match, it's created
                method = 'POST';
            }

            if (holidayMode) {
                // If we click on an existing date, to update the holiday state, we need to know the previous state. We work with the dates we have in the front end setting
                /*const existingWorkDay = dates.find((date) => date.date.format(formatDate) == dateClicked.format(formatDate));
        
                // If we click on a non-existing work day, it will return undefined
                if (existingWorkDay != undefined) {
                  // When the work day we clicked exists, we will change the new propertie's values according to the previous holiday state (if the day was a holiday, we want to change the whole object to no-holiday, and viceversa)
                   newWorkDay.startHour = existingWorkDay.holiday ? defaultHolidayStartHour : selectedDefaultHour.startHour;
                  newWorkDay.startMin = existingWorkDay.holiday ? defaultHolidayStartMin : selectedDefaultHour.startMin;
                  newWorkDay.endHour = existingWorkDay.holiday ? defaultHolidayEndHour : selectedDefaultHour.endHour;
                  newWorkDay.endMin = existingWorkDay.holiday ? defaultHolidayEndMin : selectedDefaultHour.endMin;
                  newWorkDay.break = existingWorkDay.holiday ? false : existingWorkDay.break;
                  newWorkDay.sunday = existingWorkDay.holiday ? false : existingWorkDay.sunday;
                  newWorkDay.holiday = existingWorkDay.holiday;
        
        
                } else {
                  // If it's a new holiday work day, the properties will be the holiday's default
                  /* newWorkDay.startHour = defaultHolidayStartHour;
                  newWorkDay.startMin = defaultHolidayStartMin;
                  newWorkDay.endHour = defaultHolidayEndHour;
                  newWorkDay.endMin = defaultHolidayEndMin;
                  newWorkDay.break = false;
                  newWorkDay.sunday = false;
                  newWorkDay.holiday = true; */
            }


            /* 
          }
          // If a method was selected, we can make the changes to the database
          if (method) {
            // We create/delete worked day
            const response = await fetch('/api/profileWorkedDays', {
              method: method,
              headers: {
                'Content-Type': 'application/json',
              },
              //We will use the default hours when creating a new date
              body: JSON.stringify(newWorkDay),
            });
    
            // Handle error
            if (!response.ok) {
              throw new Error('Failed to create work day');
            }
    
            // Update the month salary
            hoursToSalary(selectedTabProfile);
    
    
          } */

        } catch (error) {
            // Handle error
            console.error(error);
        }
    }
    // Handle year change
    const handleYearCalendarChange = (year: DateObject) => {
        //fillMonthsPayrollDropdown(items, year)
        setCurrentMonth(year)
    }
    return (<>
        <Calendar
            disableMonthPicker={false}
            multiple
            value={dates.sort((a, b) => a.date.valueOf() - b.date.valueOf()).map(date => date.date)}
            onChange={handleDateChange}
            sort
            showOtherDays
            className="rmdp-mobile"
            fullYear
            format="DD/MM/YYYY"
            weekStartDayIndex={4}
            onFocusedDateChange={handleClickedDate}
            onYearChange={handleYearCalendarChange}
            buttons={true}
            mapDays={({ date }) => {
                // Holiday days color
                let color;
                //const holidayDays = dates.filter(value => value.holiday).map(value => value.date.day);

                //if (holidayDays.includes(date.day)) color = "green";

                // Grey days color
                const newFirstDay = new DateObject(firstDayCurrentPayroll)
                const newLastDay = new DateObject(lastDayCurrentPayroll)

                if (date < newFirstDay || date >= newLastDay) {
                    return {
                        disabled: true,
                        style: { color: "#ccc" }
                    }
                }
                if (color) return { className: "highlight highlight-" + color };
            }}
        />
    </>)
}