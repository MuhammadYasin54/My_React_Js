import React from "react";
import { useNavigate } from "react-router";

const Login = () =>{

    const navigate = useNavigate();

    const handleLogin = ()=>{

        localStorage.setItem("token", "abc123");

        navigate("/")
    }
    return (
        <div>
            <h1>Welcome To My App!</h1>
            <h3>Please click on login</h3>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login;