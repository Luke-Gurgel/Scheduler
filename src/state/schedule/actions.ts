import { WeekDayItem } from "src/types"

export enum ScheduleAction {
  UPDATE_WEEK_DAY_ITEMS = "UPDATE_WEEK_DAY_ITEMS",

  ADD_MEMBER = "ADD_MEMBER",
  REMOVE_MEMBER = "REMOVE_MEMBER",

  GET_NEXT_WEEK = "GET_NEXT_WEEK",
  GET_PREV_WEEK = "GET_PREV_WEEK",
}

export interface UpdateWeekDayItemsAction {
  type: typeof ScheduleAction.UPDATE_WEEK_DAY_ITEMS
  updatedItems: {
    [key: string]: WeekDayItem
  }
}

export interface GetNextWeekAction {
  type: typeof ScheduleAction.GET_NEXT_WEEK
  nextWeek: Date[]
}

export interface GetPrevWeekAction {
  type: typeof ScheduleAction.GET_PREV_WEEK
  prevWeek: Date[]
}

export type ScheduleActionType =
  | UpdateWeekDayItemsAction
  | GetNextWeekAction
  | GetPrevWeekAction

export const updateWeekDayItemsAction = (updatedItems: {
  [key: string]: WeekDayItem
}): UpdateWeekDayItemsAction => ({
  updatedItems,
  type: ScheduleAction.UPDATE_WEEK_DAY_ITEMS,
})

export const getNextWeekAction = (nextWeek: Date[]): GetNextWeekAction => ({
  nextWeek,
  type: ScheduleAction.GET_NEXT_WEEK,
})

export const getPrevWeekAction = (prevWeek: Date[]): GetPrevWeekAction => ({
  prevWeek,
  type: ScheduleAction.GET_PREV_WEEK,
})

/*

  1 - drag member to a different position in the same list => {
    reorderList()
  }

  2 - drag member from a list into another list => {
    removeMemberFromSourceList()
    addMemberToDestList()
    dedupDestList()
  }

  3 - drag member out of a list => {
    removeMemberFromList()
  }

  4 - drag member from members list into a schedule list => {
    addMemberToDestList()
    // leave members list unchanged
  }

  5 - drag member to a different position in members list => {
    reorderList()
  }

*/
