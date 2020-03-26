import { WeekDay, ScheduleData } from "src/types/schedule"

export const initialData: ScheduleData = {
  members: {},
  columns: {
    "1": {
      id: "1",
      weekDay: WeekDay.SUN,
      memberIDs: [],
    },
    "2": {
      id: "2",
      weekDay: WeekDay.MON,
      memberIDs: [],
    },
    "3": {
      id: "3",
      weekDay: WeekDay.TUE,
      memberIDs: [],
    },
    "4": {
      id: "4",
      weekDay: WeekDay.WED,
      memberIDs: [],
    },
    "5": {
      id: "5",
      weekDay: WeekDay.THU,
      memberIDs: [],
    },
    "6": {
      id: "6",
      weekDay: WeekDay.FRI,
      memberIDs: [],
    },
    "7": {
      id: "7",
      weekDay: WeekDay.SAT,
      memberIDs: [],
    },
  },
  columnOrder: ["1", "2", "3", "4", "5", "6", "7"],
}
