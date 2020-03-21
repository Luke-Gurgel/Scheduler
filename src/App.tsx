import React from "react"
import Main from "src/pages/main"
import store from "src/state/store"
import { Provider } from "react-redux"

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
