import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    console.log(e);
    this.props.changeActivePage(e.target.value);
  }

    render () {
        const logo = (this.props.activePage === "Home"? "App-logo" : "App-logo-inner");
        const isLoggedIn = this.props.isLoggedIn;
        
        return (
            <Navbar fixed="top" collapseOnSelect expand="lg">
              <Row className="w-100">
                    <Col lg={1} sm= {4} xs={4}>
                      <Navbar.Brand href="/" onClick={this.handleClick}><img className={logo} src="./images/homeboy.png" alt="Homeboy - Your Buddy In Da Building" /></Navbar.Brand>
                    </Col>
                   
                  <Col lg={11} sm= {4} xs={4} className="px-0">
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={isLoggedIn? "mr-auto" : "hide"}>
                          <Nav.Link href="/Dashboard" onClick={this.handleClick}>Dashboard</Nav.Link>
                          <Nav.Link href="/Tenants" onClick={this.handleClick}>Tenants</Nav.Link>
                          <Nav.Link href="/Messages" onClick={this.handleClick}>Messages</Nav.Link>
                          <Nav.Link href="/Issues" onClick={this.handleClick}>Issues</Nav.Link>
                          <Nav.Link href="/Votings" onClick={this.handleClick}>Voting</Nav.Link>
                        </Nav>

                        <Nav className={isLoggedIn? "hide" : "ml-auto"}>
                            <Nav.Link href="/Login" onClick={this.handleClick}>Login</Nav.Link>
                            <Nav.Link eventKey={2} href="/SignUp" onClick={this.handleClick}>
                            Sign Up
                            </Nav.Link>
                        </Nav>

                        <Nav className={isLoggedIn? "ml-auto" : "hide"}>
                            <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                  </Col>

                  <Col sm= {4} xs={4} className="text-right px-0">
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  </Col>
                
              </Row>
          </Navbar>
  
        );     
    }
}


  
export default Navigation;