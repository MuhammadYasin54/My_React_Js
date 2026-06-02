import { Link } from 'react-router';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import "./navbar.css"
const NavBar=()=> {
  const [openNav, setOpenNav] = useState(false);

  const hanleLogout = ()=>{
    localStorage.removeItem("token")

    navigate ("/login")
  }

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
          {/* <MDBIcon icon='bars' fas /> */}
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink>
               <Link to={"/"} className='link'>Home</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink> <Link to={"/contact"} className='link'>Contact</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink> <Link to={"/services"} className='link'>Services</Link></MDBNavbarLink>
            </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBNavbarLink> <Link to={"/feedback"} className='link'>FeedBack</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink> <Link to={"/OtherData"} className='link'>Others</Link></MDBNavbarLink>
            </MDBNavbarItem>
             <MDBNavbarItem>
              <MDBNavbarLink> <Link to={"/user"} className='link'>user</Link></MDBNavbarLink>
            </MDBNavbarItem>
             <MDBNavbarItem>
              <MDBNavbarLink> <Link to={"/ApiData"} className='link'>API Data</Link></MDBNavbarLink>
            </MDBNavbarItem>
             <MDBNavbarItem>
              <MDBNavbarLink> <Link to={"/Todo"} className='link'>Todo List</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink> <Link to={"/TodoList"} className='link'>Todo List App</Link></MDBNavbarLink>
            </MDBNavbarItem>
             <MDBNavbarItem>
              <MDBNavbarLink> <Link to={"/ImageSlider"} className='link'>Images</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink> <Link className='link' onClick={hanleLogout}>Logout</Link></MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default NavBar;