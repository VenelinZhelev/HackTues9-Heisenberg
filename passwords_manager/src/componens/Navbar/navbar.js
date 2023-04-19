import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css';

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className='marginLeft' href="./"> <img src="https://cdn.discordapp.com/attachments/498216881258496001/1083880181376225390/logo.png" width={30} height={27}></img>  Password Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Articles" menuVariant="dark">
            <NavDropdown.Item href="./Account_Security"> How to protect your online accounts! </NavDropdown.Item>
            <NavDropdown.Item href="./Strong_Passwords"> How to make a strong password </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="./ratePassword">Rate Password</Nav.Link>
          <Nav.Link href="./generatePassword">Generate Password</Nav.Link>
          <Nav.Link href="./about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}