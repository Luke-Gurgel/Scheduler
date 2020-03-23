import theme, { ThemeState } from "./theme/state"
import sideDrawer, { SideDrawerState } from "./side-drawer/state"

export interface RootState {
  theme: ThemeState
  sideDrawer: SideDrawerState
}

const rootState: RootState = {
  theme,
  sideDrawer,
}

export default rootState
