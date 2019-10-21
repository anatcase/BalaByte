import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Navigation() {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">BalaByte Holdings</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Dashboard</Nav.Link>
            <Nav.Link href="#pricing">Tenants</Nav.Link>
            <Nav.Link href="#pricing">Messages</Nav.Link>
            <Nav.Link href="#pricing">Issues</Nav.Link>
            <Nav.Link href="#pricing">Voting</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

function Main() {
  return (
    <div className="Home">
     Main
    </div>
  );
}

function Home() {
  return (
    <div className="Home">
       <Navigation />
       <Main />
    </div>
  );
}

export default Home;
