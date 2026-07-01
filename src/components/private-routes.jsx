import React from "react";
import { Navigate, Outlet,  } from "react-router-dom";
import Navbar from "../navbar"
import Login from "../Pages/Login/login";

const PrivateRoute = ()=>{

    const token = localStorage.getItem("isLoggedin")
    
    return token ? <><Navbar/><Outlet/></> : <Navigate to ="/login" replace/>
}
export default PrivateRoute;