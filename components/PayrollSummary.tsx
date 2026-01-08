"use client"
import { InputNumber, InputNumberProps } from "antd";
import { useState } from "react";

export default function PayrollSummary() {
    /* Hours states */
    const [workedHours, setWorkedHours] = useState<number>(0);
    const [morningHours, setMorningHours] = useState<number>(0);
    const [sundayHours, setSundayHours] = useState<number>(0);

    /* Salary states */
    const [baseSalary, setBaseSalary] = useState<number>(0);
    const [tips, setTips] = useState<number>(0);
    const [totalSalary, setTotalSalary] = useState<number>(0);



    // Tip handling
    const handleTipChange: InputNumberProps['onChange'] = (value) => {
        const tipsParsed = value ? value : 0;

        setTips(Number(tipsParsed))
    };
    return (
        <div>
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
            </div>
        </div>
    )
}