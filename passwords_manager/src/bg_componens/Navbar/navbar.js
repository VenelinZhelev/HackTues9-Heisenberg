import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className='marginLeft' href="./"> <img src="https://cdn.discordapp.com/attachments/498216881258496001/1083880181376225390/logo.png" width={30} height={27}></img>  Password Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="bg-BG/articles">Статии</Nav.Link>
            <Nav.Link href="bg-BG/ratePassword">Оцени парола</Nav.Link>
            <Nav.Link href="bg-BG/generatePassword">Генерирай парола</Nav.Link>
            <Nav.Link href="bg-BG/about">Относно</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <img id="heisenberg" src="https://cdn.discordapp.com/attachments/498216881258496001/1083886099220402336/heisenberg.png" width={40} height={50} />
    </Navbar>
  );
}