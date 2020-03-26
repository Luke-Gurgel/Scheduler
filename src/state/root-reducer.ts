import { combineReducers } from "redux"
import theme from "./theme/reducer"
import schedule from "./schedule/reducer"
import sideDrawer from "./side-drawer/reducer"

const rootReducer = combineReducers({
  theme,
  schedule,
  sideDrawer,
})

export default rootReducer
