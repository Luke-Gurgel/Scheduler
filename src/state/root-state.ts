import theme, { ThemeState } from "./theme/state"
import sideDrawer, { SideDrawerState } from "./side-drawer/state"
import schedule, { ScheduleState } from "./schedule/state"
import members, { MembersState } from "./members/state"

export interface RootState {
  theme: ThemeState
  members: MembersState
  schedule: ScheduleState
  sideDrawer: SideDrawerState
}

const rootState: RootState = {
  theme,
  members,
  schedule,
  sideDrawer,
}

export default rootState
