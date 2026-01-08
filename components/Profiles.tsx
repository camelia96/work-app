"use client"
import { profiles } from "@/generated/prisma"
import { defaultProfileId } from "@/lib/constants";
import { CheckboxChangeEvent, Flex, Radio } from "antd"
import { useState } from "react";

interface ProfilesProps {
    profiles: profiles[]
}
export default function Profiles({ profiles }: ProfilesProps) {
    const [selectedProfile, setselectedProfile] = useState<number>(defaultProfileId);

    // Selected profile
    const handleselectedProfile = (e: CheckboxChangeEvent) => {
        setselectedProfile(e.target.value);
        console.log(selectedProfile)
    };
    return (
        <div className="w-full xl:w-3/12 ">
            <p className=" text-sm text-left">Choose a profile</p>
            <Flex vertical gap="middle">
                <Radio.Group disabled={profiles.length == 0 ? true : false} block options={profiles.length > 0 ? profiles.map((profile) => { return { label: profile.name, value: profile.id } }) : [{ label: "No profiles available", value: 0 }]} optionType="button" onChange={handleselectedProfile} value={selectedProfile} />
            </Flex>
        </div>
    )
}