import scheduleState, { ScheduleState } from "./state"
import { ScheduleAction, ScheduleActionType } from "./actions"

export default function scheduleReducer(
  state = scheduleState,
  action: ScheduleActionType,
): ScheduleState {
  switch (action.type) {
    case ScheduleAction.UPDATE_WEEK_DAY_ITEMS:
      return {
        ...state,
        data: {
          ...state.data,
          weekMap: {
            ...state.data.weekMap,
            ...action.updatedItems,
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
