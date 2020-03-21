export enum ThemeAction {
  TOGGLE = "TOGGLE",
}

export interface ToggleAction {
  type: typeof ThemeAction.TOGGLE
}

export type ThemeActionType = ToggleAction

export const toggleAction = () => ({
  type: ThemeAction.TOGGLE,
})
