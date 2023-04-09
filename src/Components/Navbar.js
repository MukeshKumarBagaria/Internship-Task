import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" style={{ backgroundColor: '#F8CDCE' }}>
      <Navbar.Brand style={{ margin: 'auto', fontSize:"30px" , fontFamily:"Futura" , color:"ActiveBorder"}}>Respondent Travel Profile</Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
