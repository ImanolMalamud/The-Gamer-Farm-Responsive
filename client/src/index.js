import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { configureStore } from "@reduxjs/toolkit"
// we can import from the "state" folder like this because of our jsonconfig.json file, where whe have set "src" as our baseUrl in the CompilerOptions
import globalReducer from "state"
import { api } from "./state/api"
import { Provider } from "react-redux"
import { setupListeners } from "@reduxjs/toolkit/query"

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefault => getDefault().concat(api.middleware),
})

setupListeners(store.dispatch)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
