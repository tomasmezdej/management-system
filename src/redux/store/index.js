import { createStore, applyMiddleware  } from "redux"
import thunk from "redux-thunk"

import cardModeReducer from "../reducers/cardModeReducer"

const store = createStore(
  cardModeReducer
  , applyMiddleware(thunk)
)

export default store


