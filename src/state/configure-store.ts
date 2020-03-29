import { createStore } from "redux"
import rootReducer from "./root-reducer"
import rootState from "./root-state"
import { composeWithDevTools } from "redux-devtools-extension"

export function configureStore() {
  const store = createStore(rootReducer, rootState, composeWithDevTools())
  return store
}
