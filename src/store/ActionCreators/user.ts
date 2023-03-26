import {EnumActionTypes, TypeFetchUsersAction} from "../../types";
import axios from "axios";
import {Dispatch} from "react";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<TypeFetchUsersAction>) => {
        try {
            dispatch({type: EnumActionTypes.FETCH_USERS})
            const responsive = await axios(`https://jsonplaceholder.typicode.com/users`)
            dispatch({type: EnumActionTypes.FETCH_USER_SUCCESS, payload: responsive.data})
        } catch (e) {
            dispatch({type: EnumActionTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка!!'})
        }
    }
}