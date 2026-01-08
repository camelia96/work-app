"use client"
import { Checkbox, CheckboxChangeEvent } from "antd"
import { useState } from "react";

export default function ShiftProperties() {

    const [breakExists, setBreakExists] = useState(true);
    const [sunday, setSunday] = useState(false);
    const [holidayMode, setHolidayMode] = useState<boolean>(false);

    // Holiday mode
    const handleHolidayMode = (e: CheckboxChangeEvent) => {
        setHolidayMode(e.target.checked)

    }

    return (

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
    )
}