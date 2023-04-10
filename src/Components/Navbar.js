import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../Assets/Styles/navbar.css'
const NavBar = (props) => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#97DEFF" }}>
      <Navbar.Brand style={{ margin: 'auto', fontSize:"30px" , fontFamily:"Futura" , color:"ActiveBorder"}}> {props.title}</Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
