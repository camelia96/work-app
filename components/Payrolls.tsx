"use client"

import { calculateFirstDayCurrentPayroll, calculateLastDayCurrentPayroll, calculateTotalMonthsPayroll, fillMonthsPayrollDropdown } from "@/lib/helpers";
import { Button, Dropdown, MenuProps } from "antd"
import { useState } from "react";
import { DateObject } from "react-multi-date-picker";

export default function Payrolls() {
    const [currentMonth, setCurrentMonth] = useState(new DateObject());

    // First payroll date - From where we begin to count every 4 weeks
    const [firstPayrollDate] = useState<DateObject>(new DateObject().setDay(13).setMonth(6).setYear(2024));

    // Total months from first payroll date 
    const [totalMonthsPayroll, setTotalMonthsPayroll] = useState<number>(calculateTotalMonthsPayroll(currentMonth, firstPayrollDate));

    // First day of payroll from current month
    const [firstDayCurrentPayroll, setFirstDayCurrentPayroll] = useState<DateObject>(calculateFirstDayCurrentPayroll(firstPayrollDate, totalMonthsPayroll));

    // Last day of payroll from current month 
    const [lastDayCurrentPayroll, setLastDayCurrentPayroll] = useState<DateObject>(calculateLastDayCurrentPayroll(firstDayCurrentPayroll));

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

    };

    // Dropdown month payroll items
    const items: MenuProps['items'] = []

    // MenuProps for dropdown 
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };


    // Fill dropdown when starting the app
    fillMonthsPayrollDropdown(items, currentMonth);

    


    


    return (<div className="flex flex-col w-full xl:w-3/12">
        <p className="text-left text-sm">Choose your 4 weeks payroll</p>
        <Dropdown menu={{ items, selectable: true, onClick: handleMenuClick }} trigger={['click']} className=" w-full" >
            <Button>
                Payrolls
            </Button>
        </Dropdown>
    </div>)
}
