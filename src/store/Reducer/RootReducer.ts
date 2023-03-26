import {combineReducers} from "redux";
import {UserReducer} from "./user";
import {MoviesReducer} from "./Movies";

export const RootReducer = combineReducers({
    users: UserReducer,
    movie: MoviesReducer

})

export type rootState = ReturnType<typeof RootReducer>