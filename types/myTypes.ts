import { ReactNode } from "react";
import { DateObject } from "react-multi-date-picker";

export interface DateTime {
  date: DateObject;
  startHour: string;
  startMin: string;
  endHour: string;
  endMin: string;
  break: boolean;
  sunday: boolean;
}

export interface DefaultHour {
  id: number;
  startHour: string;
  startMin: string;
  endHour: string;
  endMin: string;
  type_shift: string;
}

export interface Profile {
  id: number;
  name: string;
}

export interface OptionsGroup {
  label: ReactNode;
  title: string;
  options: Options[];
}

export interface Options {
  value: string;
  label: string;
}
