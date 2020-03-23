export enum ThemeAction {
  TOGGLE_THEME = "TOGGLE_THEME",
}

export interface ToggleThemeAction {
  type: typeof ThemeAction.TOGGLE_THEME
}

export type ThemeActionType = ToggleThemeAction

export const toggleThemeAction = () => ({
  type: ThemeAction.TOGGLE_THEME,
})
