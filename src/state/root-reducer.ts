import { combineReducers } from "redux"
import theme from "./theme/reducer"
import members from "./members/reducer"
import schedule from "./schedule/reducer"
import sideDrawer from "./side-drawer/reducer"

const rootReducer = combineReducers({
  theme,
  members,
  schedule,
  sideDrawer,
})

export default rootReducer
