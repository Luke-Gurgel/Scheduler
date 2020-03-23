import sideDrawerState, { SideDrawerState } from "./state"
import { SideDrawerAction, SideDrawerActionType } from "./actions"

export default function themeReducer(
  state = sideDrawerState,
  action: SideDrawerActionType,
): SideDrawerState {
  switch (action.type) {
    case SideDrawerAction.TOGGLE_SIDE_DRAWER:
      return { ...state, open: !state.open }
    default:
      return state
  }
}
