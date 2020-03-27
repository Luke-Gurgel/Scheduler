import { ScheduleList } from "src/types/schedule"

export enum ScheduleAction {
  ON_SAME_LIST_DRAG = "ON_SAME_LIST_DRAG",
  ON_DIFF_LIST_DRAG = "ON_DIFF_LIST_DRAG",
  GET_NEXT_WEEK = "GET_NEXT_WEEK",
  GET_PREV_WEEK = "GET_PREV_WEEK",
}

export interface OnSameListDrag {
  type: typeof ScheduleAction.ON_SAME_LIST_DRAG
  updatedList: ScheduleList
}

export interface OnDiffListDrag {
  type: typeof ScheduleAction.ON_DIFF_LIST_DRAG
  sourceList: ScheduleList
  destList: ScheduleList
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
  | OnSameListDrag
  | OnDiffListDrag
  | GetNextWeekAction
  | GetPrevWeekAction

export const onSameListDrag = (updatedList: ScheduleList): OnSameListDrag => ({
  updatedList,
  type: ScheduleAction.ON_SAME_LIST_DRAG,
})

export const onDiffListDrag = (
  sourceList: ScheduleList,
  destList: ScheduleList,
): OnDiffListDrag => ({
  destList,
  sourceList,
  type: ScheduleAction.ON_DIFF_LIST_DRAG,
})

export const getNextWeekAction = (nextWeek: Date[]): GetNextWeekAction => ({
  nextWeek,
  type: ScheduleAction.GET_NEXT_WEEK,
})

export const getPrevWeekAction = (prevWeek: Date[]): GetPrevWeekAction => ({
  prevWeek,
  type: ScheduleAction.GET_PREV_WEEK,
})
