import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import { USER_LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const location=useLocation()

  const handleSubmit = (e) => {
    e.preventDefault();


    if (email && password) {
      dispatch(login({email,password})).then((r)=>{
        console.log(r)
        if(r.type===USER_LOGIN_SUCCESS){
          // const comingFrom= location.state.from || "/"
          // navigate(comingFrom,{replace:true})
          navigate("/musicrecords")
        }
      })
      setEmail("");
      setPassword("");
    }
  };



  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Useremail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>UserPasword</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};