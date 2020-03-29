import { WeekDay, ScheduleData } from "src/types"

export const blankSchedule: ScheduleData = {
  weekMap: {
    [WeekDay.SUN]: {
      id: WeekDay.SUN,
      weekDay: WeekDay.SUN,
      members: [],
    },
    [WeekDay.MON]: {
      id: WeekDay.MON,
      weekDay: WeekDay.MON,
      members: [],
    },
    [WeekDay.TUE]: {
      id: WeekDay.TUE,
      weekDay: WeekDay.TUE,
      members: [],
    },
    [WeekDay.WED]: {
      id: WeekDay.WED,
      weekDay: WeekDay.WED,
      members: [],
    },
    [WeekDay.THU]: {
      id: WeekDay.THU,
      weekDay: WeekDay.THU,
      members: [],
    },
    [WeekDay.FRI]: {
      id: WeekDay.FRI,
      weekDay: WeekDay.FRI,
      members: [],
    },
    [WeekDay.SAT]: {
      id: WeekDay.SAT,
      weekDay: WeekDay.SAT,
      members: [],
    },
  },
  orderedWeekDays: [
    WeekDay.SUN,
    WeekDay.MON,
    WeekDay.TUE,
    WeekDay.WED,
    WeekDay.THU,
    WeekDay.FRI,
    WeekDay.SAT,
  ],
}
