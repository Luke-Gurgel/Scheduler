import { ScheduleColumn } from "src/types/schedule"

export enum ScheduleAction {
  ON_SINGLE_COLUMN_DRAG = "ON_SINGLE_COLUMN_DRAG",
  ON_DOUBLE_COLUMN_DRAG = "ON_DOUBLE_COLUMN_DRAG",
  GET_NEXT_WEEK = "GET_NEXT_WEEK",
  GET_PREV_WEEK = "GET_PREV_WEEK",
}

export interface OnSingleColumnDrag {
  type: typeof ScheduleAction.ON_SINGLE_COLUMN_DRAG
  updatedCol: ScheduleColumn
}

export interface OnDoubleColumnDrag {
  type: typeof ScheduleAction.ON_DOUBLE_COLUMN_DRAG
  sourceCol: ScheduleColumn
  destCol: ScheduleColumn
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
  | OnSingleColumnDrag
  | OnDoubleColumnDrag
  | GetNextWeekAction
  | GetPrevWeekAction

export const onSingleColumnDrag = (updatedCol: ScheduleColumn): OnSingleColumnDrag => ({
  updatedCol,
  type: ScheduleAction.ON_SINGLE_COLUMN_DRAG,
})

export const onDoubleColumnDrag = (
  sourceCol: ScheduleColumn,
  destCol: ScheduleColumn,
): OnDoubleColumnDrag => ({
  destCol,
  sourceCol,
  type: ScheduleAction.ON_DOUBLE_COLUMN_DRAG,
})

export const getNextWeekAction = (nextWeek: Date[]): GetNextWeekAction => ({
  nextWeek,
  type: ScheduleAction.GET_NEXT_WEEK,
})

export const getPrevWeekAction = (prevWeek: Date[]): GetPrevWeekAction => ({
  prevWeek,
  type: ScheduleAction.GET_PREV_WEEK,
})
