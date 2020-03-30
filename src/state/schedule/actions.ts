import { WeekDayItem, ScheduleMemberItem } from "src/types"

export enum ScheduleAction {
  UPDATE_WEEK_DAY_ITEMS = "UPDATE_WEEK_DAY_ITEMS",

  UPDATE_MEMBER = "UPDATE_MEMBER",
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

export interface UpdateMemberAction {
  type: typeof ScheduleAction.UPDATE_MEMBER
  member: ScheduleMemberItem
}

export type ScheduleActionType =
  | UpdateWeekDayItemsAction
  | GetNextWeekAction
  | GetPrevWeekAction
  | UpdateMemberAction

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

export const updateMemberAction = (
  member: ScheduleMemberItem,
): UpdateMemberAction => ({
  member,
  type: ScheduleAction.UPDATE_MEMBER,
})
