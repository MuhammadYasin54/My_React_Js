import React from "react";
import { Navigate, Outlet  } from "react-router-dom";
import Navbar from "../navbar"


const PublicRoute= ()=>{

    const checkStatus = localStorage.getItem("isLoggedin")
    
    return checkStatus ? <><NavBar/><Navigate to ="/" replace/> </>: <Outlet/>
}
export default PublicRoute;