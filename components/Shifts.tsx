"use client"
import { default_hours } from "@/generated/prisma";
import { defaultHourObject } from "@/lib/constants";
import { OptionsGroup } from "@/lib/types";
import { Select } from "antd";
import { useState } from "react";

interface ShiftsProps {
    defaultHours: default_hours[]
}
export default function Shifts({defaultHours}: ShiftsProps) {
    const [selectedDefaultHour, setSelectedDefaultHour] = useState<default_hours>();
    const [defaultHoursGroup, setDefaultHoursGroup] = useState<OptionsGroup[]>([]);

    // Handle the selected default hours
    const handleDefaultHourChange = (value: string) => {
        const newSelectedDefaultHour = defaultHours.find((defaultHour) => defaultHour.id == parseInt(value))

        if (newSelectedDefaultHour) setSelectedDefaultHour(newSelectedDefaultHour);
    }

    return (
        <Select
            className="w-full"
            onChange={handleDefaultHourChange}
            options={defaultHoursGroup} defaultValue={String(defaultHourObject.id)} />
    )
}