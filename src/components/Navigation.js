import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);

}

handleLogout (e) {
  this.props.handleLogout();
}
  

    render () {
        const logo = (this.props.isLoggedIn? "App-logo-inner" : "App-logo");
        const isLoggedIn = this.props.isLoggedIn;
        
        return (
            <Navbar fixed="top" collapseOnSelect expand="lg">
              <Row className="w-100">
                    <Col lg={1} sm= {4} xs={4}>
                      <Navbar.Brand href="/"><img className={logo} src="./images/homeboy.png" alt="Homeboy - Your Buddy In Da Building" /></Navbar.Brand>
                    </Col>
                   
                  <Col lg={11} sm= {4} xs={4} className="px-0">
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={isLoggedIn? "mr-auto" : "hide"}>
                          <Nav.Link href="#/Dashboard">Dashboard</Nav.Link>
                          <Nav.Link href="#/Tenants">Tenants</Nav.Link>
                          <Nav.Link href="#/Messages">Messages</Nav.Link>
                          <Nav.Link href="#/Issues">Issues</Nav.Link>
                          <Nav.Link href="#/Votings">Voting</Nav.Link>
                        </Nav>

                        <Nav className={isLoggedIn? "hide" : "ml-auto"}>
                            <Nav.Link href="#/Login">Login</Nav.Link>
                            <Nav.Link eventKey={2} href="#/SignUp">
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