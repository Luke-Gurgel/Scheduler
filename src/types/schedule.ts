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
  members: {
    [key: string]: Member
  }
  lists: {
    [key: string]: ScheduleList
  }
  listOrder: string[]
}

export interface ScheduleList {
  id: string
  weekDay: WeekDay
  memberIDs: string[]
}
