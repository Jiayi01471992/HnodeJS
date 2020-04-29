import { createStore, applyMiddleware, combineReducers } from "redux"
import logger from "redux-logger"
import CartStore from "./cartStore/index"


let rducter = combineReducers({
    CartStore
})



let store = createStore(rducter, applyMiddleware(logger))
export default store