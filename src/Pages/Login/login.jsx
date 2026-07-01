// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () =>{

//     const [userName, setUserName] = useState("")
//     const [userPass, setUserPass] = useState("")

//     const navigate = useNavigate();

//     const handleLogin = ()=>{

//             if (!userName || !userPass){
//                 alert("Please input all Fields")
//                 return

//             }
//         localStorage.setItem("user", userName);
//         localStorage.setItem("Pass", userPass);

//         navigate("/")
//         alert("Login Successfully!")
//         setUserName("")
//             setUserPass("")
        
//     }
//     return (
//         <div>
//             <h1>Welcome To My App!</h1>
//             <h3>Please click on login</h3>
//             <h2>Login Page</h2>
//            <label>
//             Name:
//             <input type="text" placeholder="Enter Your Name" value={userName} onChange={(e)=> setUserName(e.target.value)} autoFocus/>
//            </label>
//            <br/>
//            <br/>
//              <label>
//             Pass:
//             <input type="Pass" placeholder="*****" value={userPass} onChange={(e)=> setUserPass(e.target.value)} />
//            </label>
//            <br/>
//             <button onClick={handleLogin}>Login</button>
//         </div>
//     )
// }
// export default Login;
import { useState } from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}



from 'mdb-react-ui-kit';
import signup from '../SignUp/signup'
import { useLocation, useNavigate } from 'react-router';
const Login=()=> {
    const [formStates, setFormStates] = useState({
        loader: false,
        email: "",
        password: ""
    })
    const navigate=useNavigate()
    const {pathname} = useLocation();
    console.log("Path", pathname)

    const handleLogin = () =>{
        setFormStates({
            ...formStates,
            loader: true
        })
        
        
        const user = JSON.parse(localStorage.getItem("User"))
        
        if (!user){
            alert("Signup Account Firstly")
            clearForm();
            return;
        }
       
        
        if (!formStates.email && !formStates.password){
          alert("Please fillup all fields")
          clearForm();
          return
          
        }
       
          if ( formStates.email !== user.email &&
            !formStates.password !== user.password
         ) 
          {
          alert("Account not found, Please signup Firstly!")
          clearForm();
          return;
          
         }

        if ( formStates.email === user.email &&
            formStates.password === user.password
         ){
            localStorage.setItem("isLoggedin", "true")
            alert("Login Successfully")
            navigate("/")
        }
        else{
            alert("Inavlid email & Password")
        }
        
        setFormStates ({
          loader:false,
          email:"",
          password: ""
        })
      
    }
    const clearForm = () =>{
      setFormStates({
        loader:false,
        email: "",
        password : "",
      })
    }
    const signuphandle = () =>{
      navigate('/signup')
    }
  return (
    <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <h1>Login Page</h1>
            <MDBCardBody>

              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'
              value={formStates.email}
              onChange={(e)=>{
                setFormStates(
                    {
                        ...formStates,
                        email: e.target.value
                    }
                )
              }}
              />
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'
              value={formStates.password}
              onChange={(e)=>{
                setFormStates(
                    {
                        ...formStates,
                        password: e.target.value
                    }
                )
              }}
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href='#'>Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100" onClick={handleLogin}>Login</MDBBtn>
               <MDBBtn className="mb-4 w-100" onClick={signuphandle}>Sign Up</MDBBtn>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}

export default Login;