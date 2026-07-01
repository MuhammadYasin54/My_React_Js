import React, { use, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from '../Login/login';


const SignUp = ()=> {

    const [formState, setFormState] = useState({
        loader: false,
        name: "",
        email: "",
        password:""
    })

    const navigate = useNavigate()

    const {pathname} = useLocation()
    console.log("Path", pathname);

    const handleSignup = () =>{
        if (!formState.name || !formState.email || !formState.password) {
            alert("Please fill all input fields")
            return;
        }
        setFormState ({
            ...formState,
            loader: true
        }
        )

    
    const user = {
        name: formState.name,
        email: formState.email,
        password: formState.password
    }

    localStorage.setItem("User", JSON.stringify(user))
    alert("Account Created Successfully!")
    navigate("/login")
}
const handleLogin = () =>{
  navigate("/login")
}
  return (
    <MDBContainer fluid>

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '125px'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(10px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>

          <MDBRow>
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'
              value={formState.name}
              onChange={(e)=>{
                setFormState(
                    {
                        ...formState,
                        name: e.target.value
                    }
                )
              }}
              />
            </MDBCol>

          </MDBRow>
              <br />
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'
           value={formState.email}
              onChange={(e)=>{
                setFormState(
                    {
                        ...formState,
                        email: e.target.value
                    }
                )
              }}
          />
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'
           value={formState.password}
              onChange={(e)=>{
                setFormState(
                    {
                        ...formState,
                        password: e.target.value
                    }
                )
              }}
          />

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
          </div>

          <MDBBtn className='w-100 mb-4' size='md'
          onClick = {handleSignup}
          >sign up</MDBBtn><p>
If you have already signedUp please click on Login!
          </p>
          
<MDBBtn className='w-100 mb-4' size='md' 
          onClick = {handleLogin}
          >Login</MDBBtn>

          <div className="text-center">

            <p>or sign up with:</p>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm"/>
            </MDBBtn>

          </div>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default SignUp;