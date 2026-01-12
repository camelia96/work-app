"use client"
import { hours_worked_days, Prisma, type_hours } from "@/generated/prisma";
import { Decimal } from "@/generated/prisma/runtime/library";
import { InputNumber, InputNumberProps } from "antd";
import { useMemo, useState } from "react";

type HoursWorkedDays = Prisma.hours_worked_daysGetPayload<{ include: { type_hours: true } }>

interface PayrollSummaryProps {
    hoursWorkedDays: HoursWorkedDays[]
}
export default function PayrollSummary({ hoursWorkedDays }: PayrollSummaryProps) {
    /* Hours states */
    const [baseHours, setBaseHours] = useState<number>(0);
    const [morningHours, setMorningHours] = useState<number>(0);
    const [sundayHours, setSundayHours] = useState<number>(0);

    /* Salary states */
    const [baseSalary, setBaseSalary] = useState<number>(0);
    const [tips, setTips] = useState<number>(0);
    const [totalSalary, setTotalSalary] = useState<number>(0);


    // Array of type of shift grouped arrays 
    const calculatedHours = hoursWorkedDays.reduce((acc: {
        shift_id: number,
        shift_title: string,
        price: number,
        hours: number,
    }[], hour, i) => {
        const currTypeShift = hour.type_hours?.type_shift;
        const currIndex = acc.findIndex((v) => v.shift_title == currTypeShift)


        if (currIndex >= 0) {
            // If we add a new element to the array group, we also add its hours to the original ones so that we get a total
            acc[currIndex].hours = acc[currIndex].hours + hour.hours;
        } else {
            acc.push({
                shift_id: hour.type_hours_id,
                shift_title: hour.type_hours!.type_shift,
                price: hour.type_hours!.price,
                hours: hour.hours,

            })
        }

        return acc;
    }, [])


    const salary = calculatedHours.map((h) => { return h.hours * h.price }).reduce((acc, total) => acc + total)



    // Tip handling
    const handleTipChange: InputNumberProps['onChange'] = (value) => {
        const tipsParsed = value ? value : 0;
        setTips(Number(tipsParsed) + salary)
    };
    return (
        <div className="flex flex-col w-full">
            <p className="font-semibold w-full text-left">Hours and salary for current payroll</p>

            <div className="flex flex-col gap-5 xl:gap-2 items-start xl:items-start  w-full text-sm text-left py-6">
                <div className="flex flex-col w-full">
                    <p className=" xl:hidden font-semibold underline">Hours</p>
                    <div className="flex gap-2  md:flex-row">
                        {calculatedHours.map((v) => (<p key={v.shift_id}>   <span className="text-blue font-bold">{v.hours}</span>  {v.shift_title} hours /</p>))}
                    </div>
                </div>


                <div className="flex flex-col gap-2">

                    <p className=" xl:hidden font-semibold underline">Salary</p>
                    <div className="flex  sm:flex-row items-center gap-1">
                        <p><span className="text-blue font-bold">{salary}€</span>  </p>
                        <p className="m-0">+</p>
                        <span>Tips</span>
                        <InputNumber
                            <number>
                            style={{ width: "3/12" }}
                            defaultValue={0}
                            min={0}
                            step="0.01"
                            onChange={handleTipChange} /> =
                        <p><span className="text-blue  bg-blueHover font-bold px-2 py-1 rounded-lg">{tips}€</span></p>
                    </div>
                </div>

            </div>
        </div>
    )
}