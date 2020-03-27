import {
  addWeeks,
  subWeeks,
  endOfWeek,
  startOfWeek,
  eachDayOfInterval,
} from "date-fns"

export const getCurrentWeek = (): Date[] => {
  const start = startOfWeek(new Date())
  const end = endOfWeek(new Date())
  return eachDayOfInterval({ start, end })
}

export const getNextWeek = (start: Date, end: Date): Date[] => {
  const nextStart = addWeeks(start, 1)
  const nextEnd = addWeeks(end, 1)
  return eachDayOfInterval({ start: nextStart, end: nextEnd })
}

export const getPrevWeek = (start: Date, end: Date): Date[] => {
  const prevStart = subWeeks(start, 1)
  const prevEnd = subWeeks(end, 1)
  return eachDayOfInterval({ start: prevStart, end: prevEnd })
}
