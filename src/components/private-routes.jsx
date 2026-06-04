import React from "react";
import { Navigate, Outlet,  } from "react-router";
import Navbar from "../navbar"

const PrivateRoute = ()=>{

    const token = localStorage.getItem("user") || false
    
    return token ? <><Navbar/><Outlet/></> : <Navigate to ="/login" replace/>
}
export default PrivateRoute;