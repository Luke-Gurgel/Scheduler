import scheduleState, { ScheduleState } from "./state"
import { ScheduleAction, ScheduleActionType } from "./actions"

export default function scheduleReducer(
  state = scheduleState,
  action: ScheduleActionType,
): ScheduleState {
  switch (action.type) {
    case ScheduleAction.ON_SINGLE_COLUMN_DRAG:
      return {
        ...state,
        data: {
          ...state.data,
          columns: {
            ...state.data.columns,
            [action.updatedCol.id]: action.updatedCol,
          },
        },
      }
    case ScheduleAction.ON_DOUBLE_COLUMN_DRAG:
      return {
        ...state,
        data: {
          ...state.data,
          columns: {
            ...state.data.columns,
            [action.sourceCol.id]: action.sourceCol,
            [action.destCol.id]: action.destCol,
          },
        },
      }
    case ScheduleAction.GET_NEXT_WEEK:
      return { ...state, currentWeek: action.nextWeek }
    case ScheduleAction.GET_PREV_WEEK:
      return { ...state, currentWeek: action.prevWeek }
    default:
      return state
  }
}
