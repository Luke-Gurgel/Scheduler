import { combineReducers } from "redux"
import theme from "./theme/reducer"
import sideDrawer from "./side-drawer/reducer"

const rootReducer = combineReducers({
  theme,
  sideDrawer,
})

export default rootReducer
