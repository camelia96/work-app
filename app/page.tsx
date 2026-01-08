
import { prisma } from "@/lib/prisma";
import DatesList from "@/components/DatesList";
import Profiles from "@/components/Profiles";
import Payrolls from "@/components/Payrolls";
import Shifts from "@/components/Shifts";
import ShiftProperties from "@/components/ShiftProperties";
import PayrollSummary from "@/components/PayrollSummary";
import CalendarView from "@/components/CalendarView";



export default async function Home() {

  const profiles = await prisma.profiles.findMany();
  const defaultHours = await prisma.default_hours.findMany();

  const profile = profiles[0];

  const workedDays = await prisma.worked_days.findMany({
    where: {
      profile_worked_days: {
        some: {
          profile_id: profile.id
        },


      }
    },
  })


  /* Statuses state */
  /*const [warning, setWarning] = useState<{ warning: boolean, message: string }>();
  const [error, setError] = useState<{ error: boolean, message: string }>();

  /* Profiles states */
  /* const [profiles, setProfiles] = useState<Profile[]>([]);
  
    /* List of current payroll dates + other dates states */
  /* const [dates, setDates] = useState<DateTime[]>([])
  
 
   /* Defaults states */
  /*  const [defaultHours, setDefaultHours] = useState<DefaultHour[]>([]);
    const [defaultHoursGroup, setDefaultHoursGroup] = useState<OptionsGroup[]>([]);
    const [selectedDefaultHour, setSelectedDefaultHour] = useState<DefaultHour>(defaultHourObject);
    const [currentMonth, setCurrentMonth] = useState(new DateObject());
  
    /* Hour props states */
  /* const [breakExists, setBreakExists] = useState(true);
   const [sunday, setSunday] = useState(false);
   const [holidayMode, setHolidayMode] = useState<boolean>(false);
 
   /* Hours states */
  /*  const [workedHours, setWorkedHours] = useState<number>(0);
    const [morningHours, setMorningHours] = useState<number>(0);
    const [sundayHours, setSundayHours] = useState<number>(0);
  
    /* Salary states */
  /*const [baseSalary, setBaseSalary] = useState<number>(0);
  const [tips, setTips] = useState<number>(0);
  const [totalSalary, setTotalSalary] = useState<number>(0);

  /* First payroll date - From where we begin to count every 4 weeks */
  /*  const [firstPayrollDate] = useState<DateObject>(new DateObject().setDay(13).setMonth(6).setYear(2024));
  
    /* Total months from first payroll date 
    const [totalMonthsPayroll, setTotalMonthsPayroll] = useState<number>(calculateTotalMonthsPayroll(currentMonth, firstPayrollDate));
  
    /* First day of payroll from current month 
    const [firstDayCurrentPayroll, setFirstDayCurrentPayroll] = useState<DateObject>(calculateFirstDayCurrentPayroll(firstPayrollDate, totalMonthsPayroll));
  
    /* Last day of payroll from current month 
    const [lastDayCurrentPayroll, setLastDayCurrentPayroll] = useState<DateObject>(calculateLastDayCurrentPayroll(firstDayCurrentPayroll));
  
    /* Other states 
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
  
  
  
  
  
  
    // Get current payroll dates 
    const fetchProfileWorkedDays = async (firstDay: DateObject, lastDay: DateObject) => {
  
      setIsLoading(true);
      try {
  
        // Fetch data
        const res = await fetch(`/api/profileWorkedDays?profile=${selectedTabProfile}&firstDay=${firstDay}&lastDay=${lastDay}`);
        const data = await res.json();
  
        console.log(data)
  
        if (data.length == 0) {
          setWarning({ warning: true, message: "There are no worked days for the current profile" })
        } else {
          setWarning({ warning: false, message: "" })
        }
  
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
        setError({ error: false, message: '' });
  
      } catch (error) {
        setIsLoading(false)
  
        setError({ error: true, message: "" });
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
      console.log(hoursSalary)
      setWorkedHours(hoursSalary.workedHours)
      setMorningHours(hoursSalary.morningWorkedHours)
      setSundayHours(hoursSalary.sundaysWorkedHours)
      setBaseSalary(hoursSalary.baseSalary)
  
  
      return hoursSalary;
    }

    
  
  
  
    // Selecting/Deselecting a calendar date -> Frontend dates setting (onChange event) -> 1st action 
    
  
    // Selecting/deselecting a calendar date -> Database dates setting (onFocus event)  -> 2nd action
    
  
  
  
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
          setError({ error: false, message: "" })
        } catch (error) {
          setError({ error: true, message: "There's a problem with the profiles" })
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
  
    console.log(totalSalary) 
    
    */

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 xl:py-10 max-w-full ">
      <div className="w-full 2xl:w-380 text-center justify-center flex flex-col gap-10 items-center px-10 xl:px-20">

        {/** TITLE */}
        <p className="text-3xl font-semibold">Worked Hours</p>

        <Profiles profiles={profiles} />
        <Payrolls />
        <Shifts defaultHours={defaultHours} />
        <ShiftProperties />
        <PayrollSummary />
        <DatesList dates={workedDays} />
        <CalendarView dates={workedDays} />
        {/* {error ? (<span className="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 inset-ring inset-ring-red-400/20">{error.message}</span>) : (<></>)}
        {warning ? (<span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 inset-ring inset-ring-yellow-400/20">{warning.message}</span>) : (<></>)}
 */}


      </div >

    </section >
  );
}
