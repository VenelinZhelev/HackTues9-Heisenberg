import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './style.css';

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className='marginLeft' href="/">Password Grader</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/ratePassword">Rate Password</Nav.Link>
            <Nav.Link href="/generatePassword">Generate Password</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}