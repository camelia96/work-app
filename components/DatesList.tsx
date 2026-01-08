"use client"
import { worked_days } from "@/generated/prisma";
import { CalendarTwoTone, ClockCircleTwoTone, FrownTwoTone } from "@ant-design/icons"
import dayjs from "dayjs"
import { useState } from "react";

interface DatesListProps {
    dates: worked_days[]
}


export default function DatesList({ dates }: DatesListProps) {
    const [editingIndexes, setEditingIndexes] = useState<number[]>([]);
    // Handle index array when editing
    const handleEditingIndex = (index: number) => {
        setEditingIndexes([...editingIndexes, index])
    }


    return (<div>
        {/** Working days for curreny payroll */}
        <p className="font-semibold mt-4 mb-2 w-full text-center xl:text-left">Worked days for current payroll</p>
        <div className="text-center sm:text-left md:px-10 lg:px-32 xl:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-4 w-full  ">
            {/** If dates exist */}
            {dates.length > 0 ?
                dates.map((d: worked_days, i: number) =>
                    editingIndexes.includes(i) ?
                        (<div key={i} className="text-sm flex flex-col border-b-2 px-1 py-6 hover:bg-blue-100 hover:cursor-pointer hover:transition-all hover:duration-200 " onClick={() => handleEditingIndex(i)}>
                            <p className="font-bold">
                                <CalendarTwoTone twoToneColor={d.holiday ? "#009688" : ""} className=" mr-2 " /> {d.date.toLocaleDateString()}
                            </p>
                            <p className="">
                                <ClockCircleTwoTone twoToneColor={d.holiday ? "#009688" : ""} className=" mr-2" />{`${dayjs().hour(parseInt(d.startHour!)).minute(parseInt(d.startMin!)).format("HH:mm")} to ${dayjs().hour(parseInt(d.endHour!)).minute(parseInt(d.endMin!)).format("HH:mm")}`}
                            </p>
                            <p className={`font-semibold text-${d.holiday ? `green` : `blue`}`}>{`${d.break ? "w/break" : "No break"}`}</p>
                        </div>)
                        /** Edit date */
                        : <div key={i} className="text-sm flex flex-col border-b-2 px-1 py-6 hover:bg-blue-100 hover:cursor-pointer hover:transition-all hover:duration-200 " onClick={() => handleEditingIndex(i)}>
                            <p className="font-bold"><CalendarTwoTone twoToneColor={d.holiday ? "#009688" : ""} className=" mr-2 " />{d.date.toLocaleDateString()}</p>
                            <p className=""><ClockCircleTwoTone twoToneColor={d.holiday ? "#009688" : ""} className=" mr-2" />{`${dayjs().hour(parseInt(d.startHour)).minute(parseInt(d.startMin)).format("HH:mm")} to ${dayjs().hour(parseInt(d.endHour)).minute(parseInt(d.endMin)).format("HH:mm")}`}</p>
                            <p className={`font-semibold text-${d.holiday ? `green` : `blue`}`}>{`${d.break ? "w/break" : "No break"}`}</p>
                        </div>
                )
                :
                /** If dates don't exist */
                (<div><FrownTwoTone /> No data for this payroll</div>)}

        </div>
    </div>

    )
}