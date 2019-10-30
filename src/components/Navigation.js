import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Navigation extends React.Component {
    
    render () {

        const isLoggedIn = this.props.isLoggedIn;
        
        return (
            <Navbar fixed="top" collapseOnSelect expand="lg">
            <Navbar.Brand href="#home"><img className="App-logo" src="./images/homeboy.png" alt="Homeboy - Your Buddy In Da Building" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className={isLoggedIn? "mr-auto" : "hide"}>
                <Nav.Link href="#Dashboard">Dashboard</Nav.Link>
                <Nav.Link href="#Tenants">Tenants</Nav.Link>
                <Nav.Link href="#Messages">Messages</Nav.Link>
                <Nav.Link href="#Issues">Issues</Nav.Link>
                <Nav.Link href="#Voting">Voting</Nav.Link>
              </Nav>
              <Nav className={isLoggedIn? "hide" : "ml-auto"}>
                  <Nav.Link href="#Login">Login</Nav.Link>
                  <Nav.Link eventKey={2} href="#SignUp">
                  Sign Up
                  </Nav.Link>
              </Nav>
              <Nav className={isLoggedIn? "ml-auto" : "hide"}>
                  <Nav.Link href="#Logout">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
  
        );     
    }
}


  
export default Navigation;