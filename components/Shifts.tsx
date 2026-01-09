"use client"
import { default_hours } from "@/generated/prisma";
import { defaultHourObject } from "@/lib/constants";
import { OptionsGroup } from "@/lib/types";
import { Select } from "antd";
import { useState } from "react";

interface ShiftsProps {
    defaultHours: default_hours[]
}
export default function Shifts({ defaultHours }: ShiftsProps) {
    const [selectedShiftHours, setSelectedShiftHours] = useState<default_hours>();

    // Handle the selected default hours
    const handleDefaultHourChange = (value: string) => {
        setSelectedShiftHours(defaultHours.find((defaultHour) => defaultHour.id == parseInt(value)));
    }


    // Reduce default hours by type_shift for Select options
    const optionsGroup = defaultHours.reduce((acc: OptionsGroup[], hour, i) => {
        const currShift = hour.type_shift;
        const currOption = `${hour.startHour}:${hour.startMin} - ${hour.endHour}:${hour.endMin}`
        const currIndex = acc.findIndex((value, index) => value.title == currShift);

        // Check if there's an element created for the shift or not
        if (currIndex >= 0) {
            acc[currIndex].options.push({ key: i, label: currOption, value: hour.id });

            // Sort options
            acc[currIndex].options.sort((a, b) => { return a.label.localeCompare(b.label) })
        } else {
            acc.push({
                label: <p>{hour.type_shift}</p>, title: hour.type_shift, options: [
                    { key: i, label: currOption, value: hour.id }
                ]
            })
        }

        return acc;
    }, [])




    return (
        <div className="w-full">
            <p className="text-left text-sm">Choose your shift hours</p>
            <Select
                className="w-full"
                onChange={handleDefaultHourChange}
                options={optionsGroup} placeholder={"Choose a shift"} />
        </div>
    )
}