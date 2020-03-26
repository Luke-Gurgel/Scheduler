import theme, { ThemeState } from "./theme/state"
import sideDrawer, { SideDrawerState } from "./side-drawer/state"
import schedule, { ScheduleState } from "./schedule/state"

export interface RootState {
  theme: ThemeState
  schedule: ScheduleState
  sideDrawer: SideDrawerState
}

const rootState: RootState = {
  theme,
  schedule,
  sideDrawer,
}

export default rootState
