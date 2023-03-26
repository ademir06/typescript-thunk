import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootState} from "../store/Reducer/RootReducer";

export const useTypedSelector:TypedUseSelectorHook<rootState> = useSelector