import {applyMiddleware,createStore} from "redux"
import thunk from "redux-thunk"
import reducer from "./reducer"

const enhander = applyMiddleware(thunk)
const store = createStore(reducer,enhander)

export default store


