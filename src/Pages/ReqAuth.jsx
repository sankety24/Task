import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

//To check if user is authenticated , if yes redirect to or navigate to the protectes route/page, else navigate him to login poge

export const ReqAuth = ({children}) => {
    const location=useLocation()
    console.log(location);


 const auth=useSelector((store)=>store.AuthReducer.isAuth)
 if(!auth){
    return <Navigate to="/" state={{from:location.pathname}}replace/>
 }
   return children
}