import themeState, { ThemeState } from "./state"
import { ThemeAction, ThemeActionType } from "./actions"

export default function themeReducer(state = themeState, action: ThemeActionType): ThemeState {
  switch (action.type) {
    case ThemeAction.TOGGLE:
      return { ...state, darkMode: !state.darkMode }
    default:
      return state
  }
}
