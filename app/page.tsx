"use client"
import { Key, ReactNode, useEffect, useMemo, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker"
import { Calendar } from "react-multi-date-picker"
import { Time } from "@internationalized/date";
import dayjs, { Dayjs } from "dayjs";

import { Flex, Radio, Select, TimePicker, type TimePickerProps } from 'antd';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox";
import { DateTime, DefaultHour, OptionsGroup, Profile } from "@/types/myTypes";

const formatHour = 'HH:mm';
const formatDate = 'DD/MM/YYYY'

const defaultHourObject = { id: 1, startHour: "04", startMin: "00", endHour: "12", endMin: "30", type_shift: "morning shift" };
const defaultProfileId = 1;

function prismaFormatDate(date: DateObject) {
  const dateUTC = new Date(Date.UTC(date.year, date.month.number - 1, date.day, 0, 0, 0, 0));
  return dateUTC.toISOString()
}
export default function Home() {
  /** States */
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [dates, setDates] = useState<DateTime[]>([])
  const [editingIndexes, setEditingIndexes] = useState<number[]>([]);
  const [selectedTabProfile, setSelectedTabProfile] = useState<number>(defaultProfileId);
  const [defaultHours, setDefaultHours] = useState<DefaultHour[]>([]);
  const [defaultHoursGroup, setDefaultHoursGroup] = useState<OptionsGroup[]>([]);
  /**Mistake --> see if we can put by default the fetched default hour */
  const [selectedDefaultHour, setSelectedDefaultHour] = useState<DefaultHour>(defaultHourObject);
  const [breakExists, setBreakExists] = useState(true);
  const [sunday, setSunday] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new DateObject());

  //console.log(currentMonth.month)

  const handleSelectedTabProfile = (e: CheckboxChangeEvent) => {
    setSelectedTabProfile(e.target.value);
  };


  /** Selecting/deselecting a calendar date -> Database dates setting (onFocus event) */
  const handleClickedDate = async (dateFocused: DateObject, dateClicked: DateObject) => {

    try {

      const dateFocusedFormat = dateFocused?.format(formatDate);
      const dateClickedFormat = dateClicked?.format(formatDate);

      /* Check if selected date is sunday (for DateObject, sunday's index is 0) */
      const isSunday = dateClicked.weekDay.index === 0;

      /* We need a sundayState since we are inside an asynchronous function */
      setSunday(isSunday)
      let method = undefined;

      //If focused and clicked dates don't match, it's deleted
      if (dateFocusedFormat != dateClickedFormat) {
        console.log("se ha deseleccionado " + dateClickedFormat)
        method = 'DELETE';
      } else {
        //If focused and clicked dates do match, it's created
        console.log("se ha seleccionado " + dateClickedFormat)
        console.log(dates)


        method = 'POST';
      }

      if (method) {
        const response = await fetch('/api/profileWorkedDays', {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
          //We will use the default hours when creating a new date
          body: JSON.stringify({ profile: selectedTabProfile, date: dateClicked.format("YYYY-MM-DD"), startHour: selectedDefaultHour.startHour, startMin: selectedDefaultHour.startMin, endHour: selectedDefaultHour.endHour, endMin: selectedDefaultHour.endMin, break: breakExists, sunday: isSunday }),
        });

        if (!response.ok) {
          throw new Error('Failed to create profile');
        }

        const newProfile = await response.json();
        console.log('Profile created:', newProfile);
      }



    } catch (error) {
      console.error(error);
    }
  }


  /** Selecting/Deselecting a calendar date -> Frontend dates setting (onChange event)*/
  const handleDateChange = (selectedDates: DateObject[]) => {

    //Get only dates property from existing dates array
    const existingDates = dates.map(date => date.date);

    //Filter new selected dates from existing database dates
    const newFilteredDates = selectedDates.filter(filteredDate => !existingDates.includes(filteredDate));

    //Filter deselected dates to remove them from existing array of dates
    const deselectedDates = existingDates.filter(filteredDate => !selectedDates.includes(filteredDate));

    //Remove deselected dates from existing dates
    const updatedDates = dates.filter(
      date => !deselectedDates.some(deselectedDate => deselectedDate.format() === date.date.format())
    );

    //Adding default start/end times to new dates and filling the array with both new and old dates
    const newDates = [...updatedDates, ...newFilteredDates.map((newFilteredDate) => {
      const newSelectedDate = { date: newFilteredDate, startHour: selectedDefaultHour?.startHour, startMin: selectedDefaultHour?.startMin, endHour: selectedDefaultHour?.endHour, endMin: selectedDefaultHour?.endMin, break: breakExists, sunday: sunday };

      return newSelectedDate
    })]


    //Set dates array
    setDates(newDates)

  }

  /* Changing calendar month display */
  const handleMonthCalendarChange = (month: DateObject) => {
    setCurrentMonth(new DateObject(month))
  }
  const handleEditingIndex = (index: number) => {
    setEditingIndexes([...editingIndexes, index])
  }

  const handleStartTimeChange = (date: Dayjs, dateString: string | string[], index: number) => {
    const newDates = [...dates];

    /* Possible error -> Not sure if dateString won't ever be string[] */
    const newStartTime = (dateString as string).split(":");

    newDates[index].startHour = newStartTime[0];
    newDates[index].startMin = newStartTime[1];
    setDates(newDates)
  }

  const handleEndTimeChange = (date: Dayjs, dateString: string | string[], index: number) => {
    const newDates = [...dates];

    /* Possible error -> Not sure if dateString won't ever be string[] */
    const newEndTime = (dateString as string).split(":");

    newDates[index].endHour = newEndTime[0];
    newDates[index].endMin = newEndTime[1];
    setDates(newDates)
  }

  const handleBreakChange = (e: CheckboxChangeEvent, index: number) => {
    const newDates = [...dates];

    newDates[index].break = e.target.checked;
    setDates(newDates);
  }

  const handleAcceptButton = async (index: number) => {
    const newIndexes = editingIndexes.filter((element) => { return element != index })
    setEditingIndexes(newIndexes)

    /* Search database for updated date that belongs to current profile */
    const updatedDate = dates[index];

    const response = await fetch(`/api/profileWorkedDays`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({profile:selectedTabProfile, data: updatedDate, date: prismaFormatDate(updatedDate.date)} ),
    });
console.log(dates)

    if (!response.ok) {
      throw new Error('Failed to create profile');
    }

    const newProfile = await response.json();
    console.log('Profile created:', newProfile);

  }

  const handleDefaultHourChange = (value: string) => {
    //    console.log(`selected ${value}`);

    const newSelectedDefaultHour = defaultHours.find((defaultHour) => defaultHour.id == parseInt(value))

    if (newSelectedDefaultHour) setSelectedDefaultHour(newSelectedDefaultHour);
  }

  useEffect(() => {
    const fetchTypeHours = async () => {
      try {
        const res = await fetch('/api/typeHours');
        const data = await res.json();
        console.log(data)
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

    const fetchProfileWorkedDays = async () => {
      try {

        const res = await fetch('/api/profileWorkedDays?profile=' + selectedTabProfile);
        const data = await res.json();


        const newProfileWorkedDays = data.map((profileWorkedDay: any) => {
          return {
            date: new DateObject({
              date: profileWorkedDay.worked_days.date,
              format: formatDate
            }),
            startHour: profileWorkedDay.worked_days.start_hour,
            startMin: profileWorkedDay.worked_days.start_minute,
            endHour: profileWorkedDay.worked_days.end_hour,
            endMin: profileWorkedDay.worked_days.end_minute,
            break: profileWorkedDay.worked_days.break,
            sunday: profileWorkedDay.worked_days.sunday
          }
        })

        setDates(newProfileWorkedDays)

      } catch (error) {
        console.error("Error: no vaaa", error);
      }
    }
    fetchTypeHours();
    fetchProfiles();
    fetchProfileWorkedDays();
    fetchDefaultHours();

  }, [selectedTabProfile]);


  return (

    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

      <div className="inline-block max-w-xl text-center justify-center flex flex-col">
        {/** TÍTULO */}
        <p>Worked <span>Hours</span></p>

        <div>

          <Flex vertical gap="middle">
            <Radio.Group block options={profiles.map((profile) => { return { label: profile.name, value: profile.id } })} optionType="button" onChange={handleSelectedTabProfile} value={selectedTabProfile} />
          </Flex>


        </div>
        <div>
          <Select
            style={{ width: 200 }}
            onChange={handleDefaultHourChange}
            options={defaultHoursGroup} defaultValue={String(defaultHourObject.id)} />

          <Checkbox checked={breakExists} onChange={(e) => { setBreakExists(e.target.checked) }}><span className="text-white">Break</span>
          </Checkbox>
        </div>
        <div className="flex gap-5">
          {/** Calendario */}
          <Calendar multiple
            value={dates.map(date => date.date)}
            onChange={handleDateChange}
            sort
            format="DD/MM/YYYY"
            weekStartDayIndex={4}
            onFocusedDateChange={handleClickedDate}
            onMonthChange={handleMonthCalendarChange} />


        </div>
        {/*<Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" onPress={handleSubmit}>Save changes</Button>*/}
        <div className="flex flex-col">

          {/** Lista con días trabajados */}
          <p className="font-bold">Días trabajados</p>
          {dates.map((date, index) => editingIndexes.includes(index) ?
            (<div className="flex gap-5" key={index}>
              <p>{date.date.format()}</p>
              <TimePicker value={dayjs(`${date.startHour}:${date.startMin}`, formatHour)} changeOnScroll format={formatHour} onChange={(date, dateString) => handleStartTimeChange(date, dateString, index)} />
              <TimePicker value={dayjs(`${date.endHour}:${date.endMin}`, formatHour)} changeOnScroll format={formatHour} onChange={(date, dateString) => handleEndTimeChange(date, dateString, index)} />
              <Checkbox checked={date.break} onChange={(breakChecked) => handleBreakChange(breakChecked, index)}><span className="text-white">Break</span>
              </Checkbox>
              <p onClick={(e) => handleAcceptButton(index)}>ok</p>
            </div>)
            :
            (<p key={index} onClick={() => handleEditingIndex(index)}>{date.date.format()} {`${(new Time(parseInt(date.startHour), parseInt(date.startMin)).toString())} - ${new Time(parseInt(date.endHour), parseInt(date.endMin))} - ${date.break ? "With Break" : "No Break"}`}</p>)
          )}
        </div>


      </div>

      <div className="flex gap-x-4">

      </div>
      {/*
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>*/}
    </section>
  );
}
