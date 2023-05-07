import { ACTION_TYPES } from "./actionTypes"

export const FetchMovie=()=>{
    return{
        type:ACTION_TYPES.APP_START,
    }
}
export const FetchSucces=(data)=>{
    return{
        type:ACTION_TYPES.FETCHED_DATA,
        payload:data
    }
}
export const FetchError=()=>{
    type:ACTION_TYPES.ERROR_DATA
}