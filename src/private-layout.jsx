import React from "react";
import { Outlet } from "react-router";
import Navbar from "./navbar"


const PrivateLayout = ()=>{
    return (
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}
export default PrivateLayout;