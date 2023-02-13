import * as types from "./actionTypes"
import axios from "axios"

export const postLoginRequest=()=>{
    return{
        type:types.USER_LOGIN_REQUEST
    }
}

export const postLoginSuccess=()=>{
    return{
        type:types.USER_LOGIN_SUCCESS
    }
}

export const postLoginFailure=()=>{
    return{
        type:types.USER_LOGIN_FAILURE
    }
}

export const login=(payload)=>(dispatch)=>{
    dispatch(postLoginRequest())

    return axios({
        method:"post",
        url:"/api/login",
        baseURL:"https://reqres.in",
        data:payload
    }).then(r=>{
       return dispatch(postLoginSuccess(r.data.token));
    })
    .catch((e)=>{
        dispatch(postLoginFailure())
    })
}