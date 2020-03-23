export enum SideDrawerAction {
  TOGGLE_SIDE_DRAWER = "TOGGLE_SIDE_DRAWER",
}

export interface ToggleSideDrawerAction {
  type: typeof SideDrawerAction.TOGGLE_SIDE_DRAWER
}

export type SideDrawerActionType = ToggleSideDrawerAction

export const toggleSideDrawerAction = () => ({
  type: SideDrawerAction.TOGGLE_SIDE_DRAWER,
})
