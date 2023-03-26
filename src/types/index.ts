export enum EnumActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',

}

interface IFetchUsersAction {
    type: EnumActionTypes. FETCH_USERS
}

interface IFetchUsersSuccessAction {
    type: EnumActionTypes.FETCH_USER_SUCCESS
    payload: any[]
}

interface IFetchUsersErrorAction {
    type: EnumActionTypes.FETCH_USERS_ERROR
    payload: string
}


export interface IUserState {
    users: any[]
    loading: boolean
    error: null | string
}

export type TypeFetchUsersAction = IFetchUsersAction | IFetchUsersErrorAction | IFetchUsersSuccessAction

