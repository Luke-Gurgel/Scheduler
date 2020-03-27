import scheduleState, { ScheduleState } from "./state"
import { ScheduleAction, ScheduleActionType } from "./actions"

export default function scheduleReducer(
  state = scheduleState,
  action: ScheduleActionType,
): ScheduleState {
  switch (action.type) {
    case ScheduleAction.ON_SAME_LIST_DRAG:
      return {
        ...state,
        data: {
          ...state.data,
          lists: {
            ...state.data.lists,
            [action.updatedList.id]: action.updatedList,
          },
        },
      }
    case ScheduleAction.ON_DIFF_LIST_DRAG:
      return {
        ...state,
        data: {
          ...state.data,
          lists: {
            ...state.data.lists,
            [action.sourceList.id]: action.sourceList,
            [action.destList.id]: action.destList,
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
