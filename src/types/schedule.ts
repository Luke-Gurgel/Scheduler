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
    [key: string]: MemberColumnItem
  }
  columns: {
    [key: string]: ScheduleColumn
  }
  columnOrder: string[]
}

export interface ScheduleColumn {
  id: string
  weekDay: WeekDay
  memberIDs: string[]
}

export interface MemberColumnItem {
  id: string
  name: string
  role: string
}
