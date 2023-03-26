import {createStore} from "redux";
import {applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import {RootReducer} from "./Reducer/RootReducer";

export const store = createStore(RootReducer, applyMiddleware(thunk))
