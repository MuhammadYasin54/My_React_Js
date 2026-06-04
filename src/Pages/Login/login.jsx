import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{

    const [userName, setUserName] = useState("")
    const [userPass, setUserPass] = useState("")

    const navigate = useNavigate();

    const handleLogin = ()=>{

            if (!userName || !userPass){
                alert("Please input all Fields")
                return

            }
        localStorage.setItem("user", userName);
        localStorage.setItem("Pass", userPass);

        navigate("/")
        alert("Login Successfully!")
        setUserName("")
            setUserPass("")
        
    }
    return (
        <div>
            <h1>Welcome To My App!</h1>
            <h3>Please click on login</h3>
            <h2>Login Page</h2>
           <label>
            Name:
            <input type="text" placeholder="Enter Your Name" value={userName} onChange={(e)=> setUserName(e.target.value)} autoFocus/>
           </label>
           <br/>
           <br/>
             <label>
            Pass:
            <input type="Pass" placeholder="*****" value={userPass} onChange={(e)=> setUserPass(e.target.value)} />
           </label>
           <br/>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login;