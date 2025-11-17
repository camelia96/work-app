"use client"
import { useEffect, useState } from "react";
import { DateObject } from "react-multi-date-picker"
import { Calendar } from "react-multi-date-picker"
import dayjs from "dayjs";
import { Button, Dropdown, Flex, InputNumber, InputNumberProps, MenuProps, Radio, Select, Spin, TimePicker } from 'antd';
import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox";
import { DateTime, DefaultHour, OptionsGroup, Profile } from "@/types/myTypes";
import { CalendarTwoTone, ClockCircleTwoTone, FrownTwoTone } from '@ant-design/icons';

/** Defaults and formats */
const formatHour = 'HH:mm';
const formatDate = 'DD/MM/YYYY'

const defaultHourObject = { id: 1, startHour: "04", startMin: "00", endHour: "12", endMin: "30", type_shift: "morning shift" };
const defaultProfileId = 1;

const defaultHolidayStartHour = "10";
const defaultHolidayStartMin = "00";
const defaultHolidayEndHour = "18";
const defaultHolidayEndMin = "00";


/** Reusable functions */

// DateObject to prisma format date
function prismaFormatDate(date: DateObject) {
  const dateUTC = new Date(Date.UTC(date.year, date.month.number - 1, date.day, 0, 0, 0, 0));
  return dateUTC.toISOString()
}

// Total months from set payroll date
function calculateTotalMonthsPayroll(currentDate: DateObject, firstPayrollDate: DateObject) {
  // Calculate current date and first payroll to time
  const currentTime = new Date(currentDate.year, currentDate.month.number - 1).getTime();
  const firstPayrollTime = new Date(firstPayrollDate.year, firstPayrollDate.month.number - 1).getTime();

  // Calculate day difference
  const differenceDays = (currentTime - firstPayrollTime) / (1000 * 60 * 60 * 24);

  // In this app, a month is 28 days
  return Math.floor(differenceDays / 28);
}

// First day date for specified payroll
function calculateFirstDayCurrentPayroll(firstPayrollDate: DateObject, totalMonthsPayroll: number) {
  return new DateObject(firstPayrollDate).add((28 * totalMonthsPayroll), "days")
}

// Last day date for specified payroll
function calculateLastDayCurrentPayroll(firstDayCurrentPayroll: DateObject) {
  return new DateObject(firstDayCurrentPayroll).add(28, "days")
}




export default function Home() {
  /* Profiles states */
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [selectedTabProfile, setSelectedTabProfile] = useState<number>(defaultProfileId);

  /* List of current payroll dates + other dates states */
  const [dates, setDates] = useState<DateTime[]>([])
  const [editingIndexes, setEditingIndexes] = useState<number[]>([]);

  /* Defaults states */
  const [defaultHours, setDefaultHours] = useState<DefaultHour[]>([]);
  const [defaultHoursGroup, setDefaultHoursGroup] = useState<OptionsGroup[]>([]);
  const [selectedDefaultHour, setSelectedDefaultHour] = useState<DefaultHour>(defaultHourObject);
  const [currentMonth, setCurrentMonth] = useState(new DateObject());

  /* Hour props states */
  const [breakExists, setBreakExists] = useState(true);
  const [sunday, setSunday] = useState(false);
  const [holidayMode, setHolidayMode] = useState<boolean>(false);

  /* Hours states */
  const [workedHours, setWorkedHours] = useState<number>(0);
  const [morningHours, setMorningHours] = useState<number>(0);
  const [sundayHours, setSundayHours] = useState<number>(0);

  /* Salary states */
  const [baseSalary, setBaseSalary] = useState<number>(0);
  const [tips, setTips] = useState<number>(0);
  const [totalSalary, setTotalSalary] = useState<number>(0);

  /* First payroll date - From where we begin to count every 4 weeks */
  const [firstPayrollDate] = useState<DateObject>(new DateObject().setDay(13).setMonth(6).setYear(2024));

  /* Total months from first payroll date */
  const [totalMonthsPayroll, setTotalMonthsPayroll] = useState<number>(calculateTotalMonthsPayroll(currentMonth, firstPayrollDate));

  /* First day of payroll from current month */
  const [firstDayCurrentPayroll, setFirstDayCurrentPayroll] = useState<DateObject>(calculateFirstDayCurrentPayroll(firstPayrollDate, totalMonthsPayroll));

  /* Last day of payroll from current month */
  const [lastDayCurrentPayroll, setLastDayCurrentPayroll] = useState<DateObject>(calculateLastDayCurrentPayroll(firstDayCurrentPayroll));

  /* Other states */
  const [isLoading, setIsLoading] = useState<boolean>(false);



  // Dropdown month payroll items
  const items: MenuProps['items'] = []

  // Fill payroll months dropdown
  function fillMonthsPayrollDropdown(items: MenuProps['items'], year: DateObject) {
    if (items == undefined)
      return false;

    // Get January's changed year difference month from first payroll
    const newYearFirstTotalMonthsPayroll = calculateTotalMonthsPayroll(year, firstPayrollDate);

    // Empty items array
    items.splice(0, items.length);

    // Populate menu dropdown with all year's payroll dates
    /** We fill the array 13 times instead of 12 because a month is only 28 days */
    for (let i = newYearFirstTotalMonthsPayroll; i <= newYearFirstTotalMonthsPayroll + 13; i++) {
      const newFirstPayrollDay = calculateFirstDayCurrentPayroll(firstPayrollDate, i);
      const newLastPayrollDay = calculateLastDayCurrentPayroll(newFirstPayrollDay);

      items.push({ label: `${newFirstPayrollDay.month.name} - ${newFirstPayrollDay.format("DD/MM/YYYY")} to ${newLastPayrollDay.format("DD/MM/YYYY")}`, key: i })
    }

    // Update menuprops items array
    menuProps.items = items;

  }


  // Handle click on dropdown month payroll item
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    // Get total months payroll from item key
    const newTotalMonthsPayroll = parseInt(e.key)

    // Calculate first and last day date payroll
    const newFirstDayCurrentPayroll = calculateFirstDayCurrentPayroll(firstPayrollDate, newTotalMonthsPayroll);
    const newLastDayCurrentPayroll = calculateLastDayCurrentPayroll(newFirstDayCurrentPayroll);

    // Set following states
    setTotalMonthsPayroll(newTotalMonthsPayroll);
    setFirstDayCurrentPayroll(newFirstDayCurrentPayroll);
    setLastDayCurrentPayroll(newLastDayCurrentPayroll);

    // Get list of current payroll dates
    fetchProfileWorkedDays(newFirstDayCurrentPayroll, newLastDayCurrentPayroll);


  };

  // MenuProps for dropdown 
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };


  // Get current payroll dates 
  const fetchProfileWorkedDays = async (firstDay: DateObject, lastDay: DateObject) => {
    setIsLoading(true);
    try {

      // Fetch data
      const res = await fetch(`/api/profileWorkedDays?profile=${selectedTabProfile}&firstDay=${firstDay}&lastDay=${lastDay}`);
      const data = await res.json();

      console.log(data)

      // Map data from database
      const newProfileWorkedDays = data.map((profileWorkedDay: { id: number, profile_id: number, worked_day_id: number, worked_days: DateTime }) => {
        return {
          date: new DateObject({
            date: profileWorkedDay.worked_days.date,
            format: formatDate
          }),
          startHour: profileWorkedDay.worked_days.startHour,
          startMin: profileWorkedDay.worked_days.startMin,
          endHour: profileWorkedDay.worked_days.endHour,
          endMin: profileWorkedDay.worked_days.endMin,
          break: profileWorkedDay.worked_days.break,
          sunday: profileWorkedDay.worked_days.sunday,
          holiday: profileWorkedDay.worked_days.holiday
        }
      })


      // Set data
      setDates(newProfileWorkedDays)
      setIsLoading(false)


    } catch (error) {
      setIsLoading(false)
      // Handle error
      console.error("Error: no vaaa", error);
    }
  }


  // Get salary for selected profile
  const hoursToSalary = async (selectedTabProfile: number) => {
    // Fetch data
    const res = await fetch(`/api/hoursWorkedDays?profile=${selectedTabProfile}&firstDay=${firstDayCurrentPayroll}&lastDay=${lastDayCurrentPayroll}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // Handle error
    if (!res.ok) {
      throw new Error('Failed to show errors');
    }

    // Get and set salary states
    const hoursSalary = await res.json();

    setWorkedHours(hoursSalary.workedHours)
    setMorningHours(hoursSalary.morningWorkedHours)
    setSundayHours(hoursSalary.sundaysWorkedHours)
    setBaseSalary(hoursSalary.baseSalary)


    return hoursSalary;
  }

  // Holiday mode
  const handleHolidayMode = (e: CheckboxChangeEvent) => {
    setHolidayMode(e.target.checked)

  }

  // Selected profile
  const handleSelectedTabProfile = (e: CheckboxChangeEvent) => {
    setSelectedTabProfile(e.target.value);
  };

  // Tip handling
  const handleTipChange: InputNumberProps['onChange'] = (value) => {
    const tipsParsed = value ? value : 0;

    setTips(Number(tipsParsed))
  };



  // Selecting/Deselecting a calendar date -> Frontend dates setting (onChange event) -> 1st action 
  const handleDateChange = (selectedDates: DateObject[]) => {
    //Get only dates property from existing dates array
    const existingDates = dates.map(date => date.date);

    //Filter new selected dates from existing database dates
    const newFilteredDates = selectedDates.filter(filteredDate => !existingDates.includes(filteredDate));


    //Updated dates starting point
    let updatedDates = [...dates];


    //Filter deselected dates to remove them from existing array of dates
    const deselectedDates = existingDates.filter(filteredDate => !selectedDates.includes(filteredDate));


    if (holidayMode) {
      /* If holiday mode is ON, we dont want to deselect a selected day when clicking on it, but to make it a holiday day */
      const newDateHoliday = deselectedDates.map((val) => {
        return updatedDates.find((e) => e.date.format("DD/MM/YYYY") == val.format("DD/MM/YYYY"))

      })

      /* When we get a new holiday value, we also have to update its time and properties as per holiday values on the frontend worked days list */
      newDateHoliday.map((dateHoliday) => {
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
      })

    } else {
      //Remove deselected dates from existing dates
      updatedDates = dates.filter(
        date => !deselectedDates.some(deselectedDate => deselectedDate.format() === date.date.format())
      );
    }

    //Adding default start/end times to new dates because they are only dates, and filling the array with both new and old dates
    const newDates = [...updatedDates, ...newFilteredDates.map((newFilteredDate) => {
      const newSelectedDate =
      {
        /* If holiday mode is ON, all newly created dates will automatically be holiday days */
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


    //Set dates array
    setDates(newDates)

  }

  // Selecting/deselecting a calendar date -> Database dates setting (onFocus event)  -> 2nd action
  const handleClickedDate = async (dateFocused: DateObject, dateClicked: DateObject) => {

    try {

      /* Format dates */
      const dateFocusedFormat = dateFocused?.format(formatDate);
      const dateClickedFormat = dateClicked?.format(formatDate);
      let method = undefined;


      // Check if selected date is sunday (for DateObject, sunday's index is 0) 
      const isSunday = dateClicked.weekDay.index === 0;

      // We need a sundayState since we are inside an asynchronous function 
      setSunday(isSunday)

      // New work day that we will either create or delete 
      const newWorkDay = { profile: selectedTabProfile, date: prismaFormatDate(dateClicked), startHour: selectedDefaultHour.startHour, startMin: selectedDefaultHour.startMin, endHour: selectedDefaultHour.endHour, endMin: selectedDefaultHour.endMin, break: breakExists, sunday: isSunday, holiday: false }

      //If focused and clicked dates don't match, it's deleted
      if (dateFocusedFormat != dateClickedFormat) {

        method = 'DELETE';

        /* If holiday mode is on, its converted to Holiday */
        if (holidayMode) {
          method = 'PUT'
        }

      } else {

        //If focused and clicked dates do match, it's created
        method = 'POST';
      }

      if (holidayMode) {
        // If we click on an existing date, to update the holiday state, we need to know the previous state. We work with the dates we have in the front end setting
        const existingWorkDay = dates.find((date) => date.date.format(formatDate) == dateClicked.format(formatDate));

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
          newWorkDay.startHour = defaultHolidayStartHour;
          newWorkDay.startMin = defaultHolidayStartMin;
          newWorkDay.endHour = defaultHolidayEndHour;
          newWorkDay.endMin = defaultHolidayEndMin;
          newWorkDay.break = false;
          newWorkDay.sunday = false;
          newWorkDay.holiday = true;
        }


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


      }

    } catch (error) {
      // Handle error
      console.error(error);
    }
  }

  // Fill dropdown when starting the app
  fillMonthsPayrollDropdown(items, currentMonth);

  // Handle year change
  const handleYearCalendarChange = (year: DateObject) => {
    fillMonthsPayrollDropdown(items, year)
    setCurrentMonth(year)
  }


  // Handle index array when editing
  const handleEditingIndex = (index: number) => {
    setEditingIndexes([...editingIndexes, index])
  }

  // Handle start time for specific date change
  const handleStartTimeChange = (dateString: string | string[], index: number) => {
    const newDates = [...dates];

    // We get the times from the date string 
    const newStartTime = (dateString as string).split(":");

    newDates[index].startHour = newStartTime[0];
    newDates[index].startMin = newStartTime[1];

    setDates(newDates)
  }

  // Handle end time for specific date change
  const handleEndTimeChange = (dateString: string | string[], index: number) => {
    const newDates = [...dates];

    // We get the times from the date string 
    const newEndTime = (dateString as string).split(":");

    newDates[index].endHour = newEndTime[0];
    newDates[index].endMin = newEndTime[1];

    setDates(newDates)
  }

  // Handle if break exists for a specific date
  const handleBreakChange = (e: CheckboxChangeEvent, index: number) => {
    const newDates = [...dates];

    newDates[index].break = e.target.checked;
    setDates(newDates);
  }

  // Once we changed a date's specific start/end time, update the new changes 
  const handleAcceptButton = async (index: number) => {
    // Updated the editing items on the array
    const newIndexes = editingIndexes.filter((element) => { return element != index })
    setEditingIndexes(newIndexes)

    // Update the date props in the database
    const updatedDate = dates[index];

    const response = await fetch(`/api/profileWorkedDays`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ profile: selectedTabProfile, date: prismaFormatDate(updatedDate.date), startHour: updatedDate.startHour, startMin: updatedDate.startMin, endHour: updatedDate.endHour, endMin: updatedDate.endMin, break: updatedDate.break, sunday: updatedDate.sunday, holiday: updatedDate.holiday }),
    });

    // Handle error 
    if (!response.ok) {
      throw new Error('Failed to update new worked day hours');
    }

    const newSalary = await hoursToSalary(selectedTabProfile);
    console.log(newSalary)

  }

  // Handle the selected default hours
  const handleDefaultHourChange = (value: string) => {
    const newSelectedDefaultHour = defaultHours.find((defaultHour) => defaultHour.id == parseInt(value))

    if (newSelectedDefaultHour) setSelectedDefaultHour(newSelectedDefaultHour);
  }

  // useEffect that runs on a new selected profile. We prepare all the data for the new profile
  useEffect(() => {
    const fetchTypeHours = async () => {
      try {
        const res = await fetch('/api/typeHours');

      } catch (error) {
        console.error("Error:", error);
      }
    };

    const fetchProfiles = async () => {
      try {
        const res = await fetch('/api/profiles');
        const data = await res.json();
        setProfiles(data)
      } catch (error) {
        console.error("Error: no va", error);
      }
    }

    const fetchDefaultHours = async () => {
      try {
        const res = await fetch('/api/defaultHours');
        const data = await res.json();


        //Setting raw state data
        setDefaultHours(data);


        //Setting select options
        const groupedShifts = data.reduce((acc: OptionsGroup[], item: DefaultHour) => {

          const existingShift = acc.find((shift: any) => shift.title === item.type_shift);

          if (existingShift) {

            existingShift.options.push({ value: String(item.id), label: `${item.startHour}:${item.startMin} - ${item.endHour}:${item.endMin}` });
          } else {

            acc.push({
              label: <span>{item.type_shift}</span>,
              title: item.type_shift,
              options: [{ value: String(item.id), label: `${item.startHour}:${item.startMin} - ${item.endHour}:${item.endMin}` }]
            });
          }

          return acc;
        }, []);

        setDefaultHoursGroup(groupedShifts)

        //Setting default hour
        const newDefaultHour = defaultHours.find((defaultHour: DefaultHour) => defaultHour.id == (defaultHourObject.id));
        if (newDefaultHour) setSelectedDefaultHour(newDefaultHour)

      } catch (error) {
        console.error("Error: no va", error);
      }
    }


    // Get/Update the month salary and the worked hours
    const fetchHoursSalary = async () => {
      const hoursSalary = await hoursToSalary(selectedTabProfile);
    }

    fetchTypeHours();
    fetchProfiles();
    fetchProfileWorkedDays(firstDayCurrentPayroll, lastDayCurrentPayroll);
    fetchDefaultHours();
    fetchHoursSalary();

  }, [selectedTabProfile]);

  // useEffect that updates on the base salary and tips
  useEffect(() => {

    setTotalSalary(Number(tips) + Number(baseSalary));

  }, [baseSalary, tips])

  useEffect(() => {
    const fetchHoursSalary = async () => {
      hoursToSalary(selectedTabProfile);
    }
    fetchHoursSalary()
  }, [firstDayCurrentPayroll])



  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 xl:py-10 max-w-full ">
      <div className="w-full 2xl:w-[95rem] text-center justify-center flex flex-col gap-10 items-center px-10 xl:px-20">

        {/** TITLE */}
        <p className="text-3xl font-semibold">Worked Hours</p>

        {/** PROPS */}
        <div className="flex flex-col xl:flex-row xl:items-end items-center xl:text-left text-center justify-center gap-6 w-full">


          {/** PROFILES */}
          <div className="w-full xl:w-3/12 ">
            <p className=" text-sm text-left">Choose a profile</p>
            <Flex vertical gap="middle">
              <Radio.Group block options={profiles.map((profile) => { return { label: profile.name, value: profile.id } })} optionType="button" onChange={handleSelectedTabProfile} value={selectedTabProfile} />
            </Flex>
          </div>
          {/** PAYROLL DROPDOWN */}
          <div className="flex flex-col w-full xl:w-3/12">
            <p className="text-left text-sm">Choose your 4 weeks payroll</p>
            <Dropdown menu={{ items, selectable: true, onClick: handleMenuClick }} trigger={['click']} className=" w-full" >
              <Button>
                Payrolls
              </Button>
            </Dropdown>
          </div>


          <div className="w-full xl:w-3/12 flex flex-col items-start">
            <p className="text-left text-sm">Choose your shift hours</p>
            {/** SHIFT HOURS */}
            <Select
              className="w-full"
              onChange={handleDefaultHourChange}
              options={defaultHoursGroup} defaultValue={String(defaultHourObject.id)} />

          </div>

          <div className="flex flex-col items-center xl:items-start w-full xl:w-3/12">
            <div>
              {/** BREAKS */}
              <Checkbox checked={breakExists} onChange={(e) => { setBreakExists(e.target.checked) }}><span className="">Is there a break in your shift?</span>
              </Checkbox>
            </div>


            <div>
              {/** HOLIDAY*/}
              <Checkbox
                className="holiday-checkbox " checked={holidayMode} onChange={handleHolidayMode}><span className="">Change to Holiday mode</span>
              </Checkbox>
            </div>
          </div>
        </div>

        {/** HOURS */}
        {isLoading ? (<Spin />) : (
          <div className="w-full">


            <div className=" flex flex-col-reverse xl:flex-row gap-12 items-center xl:items-start">
              {/** CALENDAR */}
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
                  /* Holiday days color */
                  let color;
                  const holidayDays = dates.filter(value => value.holiday).map(value => value.date.day);

                  if (holidayDays.includes(date.day)) color = "green";

                  /* Grey days color */
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


              <div className="flex flex-col w-full">
                <div className="flex flex-col items-center w-full">
                  <p className="font-semibold w-full text-center xl:text-left">Hours and salary for current payroll</p>

                  <div className="flex flex-col gap-10 xl:gap-2 items-center xl:items-start  w-full text-sm xl:text-base py-6">
                    <div className="flex flex-col items-center xl:items-start w-full">
                      <p className=" xl:hidden font-semibold">Hours</p>
                      <div className="flex gap-2 flex-col md:flex-row">
                        <p>Total  <span className="text-blue font-bold">{workedHours} hours</span> /</p>
                        <p>Morning  <span className="text-blue font-bold">{morningHours} hours</span> /</p>
                        <p>Sunday  <span className="text-blue font-bold">{sundayHours} hours</span></p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">

                      <p className=" xl:hidden font-semibold">Salary</p>
                      <div className="flex flex-col sm:flex-row items-center gap-1">
                        <p><span className="text-blue font-bold">{baseSalary}€</span>  </p>
                        <p className="m-0">+</p>
                        <span>Tips</span>
                        <InputNumber
                          <number>
                          style={{ width: "3/12" }}
                          defaultValue={0}
                          min={0}
                          step="0.01"
                          onChange={handleTipChange} /> =
                        <p><span className="text-blue  bg-blueHover font-bold px-2 py-1 rounded-lg">{totalSalary}€</span></p>
                      </div>
                    </div>

                  </div>
                </div>
                {/** Working days for curreny payroll */}
                <p className="font-semibold mt-4 mb-2 w-full text-center xl:text-left">Worked days for current payroll</p>
                <div className="text-center sm:text-left md:px-10 lg:px-32 xl:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-4 w-full  ">
                  {dates.length > 0 ?
                    dates.map((date, index) => editingIndexes.includes(index) ?
                      (<div key={index} className="flex flex-col items-center gap-2 border-b-2 p-4 text-sm " >
                        <p className="font-bold"><CalendarTwoTone className=" mr-2" />{date.date.format("DD MMM YYYY")}</p>
                        <div className="flex flex-col items-center gap-1">
                          <TimePicker value={dayjs(`${date.startHour}:${date.startMin}`, formatHour)} changeOnScroll format={formatHour} onChange={(date, dateString) => handleStartTimeChange(dateString, index)} />
                          <TimePicker value={dayjs(`${date.endHour}:${date.endMin}`, formatHour)} changeOnScroll format={formatHour} onChange={(date, dateString) => handleEndTimeChange(dateString, index)} />
                        </div>
                        <Checkbox className="" checked={date.break} onChange={(breakChecked) => handleBreakChange(breakChecked, index)}><span className="">Break</span>
                        </Checkbox>
                        <p onClick={(e) => handleAcceptButton(index)}><Button>Update</Button></p>
                      </div>)
                      :
                      (<div key={index} className="text-sm flex flex-col border-b-2 px-1 py-6 hover:bg-blue-100 hover:cursor-pointer hover:transition-all hover:duration-200 " onClick={() => handleEditingIndex(index)}>
                        <p className="font-bold"><CalendarTwoTone twoToneColor={date.holiday ? "#009688" : ""} className=" mr-2 " />{date.date.format("DD MMM YYYY")}</p>
                        <p className=""><ClockCircleTwoTone twoToneColor={date.holiday ? "#009688" : ""} className=" mr-2" />{`${dayjs().hour(parseInt(date.startHour)).minute(parseInt(date.startMin)).format("HH:mm")} to ${dayjs().hour(parseInt(date.endHour)).minute(parseInt(date.endMin)).format("HH:mm")}`}</p>
                        <p className={`font-semibold text-${date.holiday ? `green` : `blue`}`}>{`${date.break ? "w/break" : "No break"}`}</p>
                      </div>)) : (<div><FrownTwoTone /> No data for this payroll</div>)
                  }
                </div>
              </div>

            </div></div>)}

      </div >

    </section >
  );
}
