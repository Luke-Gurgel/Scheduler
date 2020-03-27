import { WeekDay, ScheduleData } from "src/types/schedule"

export const initialData: ScheduleData = {
  members: {
    one: { id: "one", name: "Thais", role: "ICU" },
    two: { id: "two", name: "Elman", role: "ICU" },
    three: { id: "three", name: "Si Jung", role: "ICU" },
    four: { id: "four", name: "Moohan", role: "ICU" },
    five: { id: "five", name: "Gary", role: "ICU" },
    six: { id: "six", name: "Kevin", role: "ICU" },
    seven: { id: "seven", name: "Josh", role: "ICU" },
    eight: { id: "eight", name: "Kuljit", role: "ICU" },
    nine: { id: "nine", name: "Tim", role: "ICU" },
    ten: { id: "ten", name: "Leah", role: "ICU" },
  },
  columns: {
    "1": {
      id: "1",
      weekDay: WeekDay.SUN,
      memberIDs: ["one", "two", "three", "four", "five"],
    },
    "2": {
      id: "2",
      weekDay: WeekDay.MON,
      memberIDs: ["six", "seven", "eight"],
    },
    "3": {
      id: "3",
      weekDay: WeekDay.TUE,
      memberIDs: ["nine", "ten"],
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
