import { Member } from "./member"

export enum WeekDay {
  MON = "Mon",
  TUE = "Tue",
  WED = "Wed",
  THU = "Thu",
  FRI = "Fri",
  SAT = "Sat",
  SUN = "Sun",
}

export interface ScheduleData {
  weekMap: {
    [key: string]: WeekDayItem
  }
  orderedWeekDays: WeekDay[]
}

export interface WeekDayItem {
  id: WeekDay
  weekDay: WeekDay
  members: Member[]
}

export interface ScheduleMemberItem extends Member {
  role?: string
  start?: string
  end?: string
}
