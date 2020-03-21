import { createStore } from "redux"
import rootReducer from "./root-reducer"
import rootState from "./root-state"

export function configureStore() {
  const store = createStore(rootReducer, rootState)
  return store
}
