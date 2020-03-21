import theme, { ThemeState } from "./theme/state"

export interface RootState {
  theme: ThemeState
}

const rootState: RootState = {
  theme,
}

export default rootState
