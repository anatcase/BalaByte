import React from 'react';
//import Nav from 'react-bootstrap/Nav'
//import Navbar from 'react-bootstrap/Navbar'
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import Button from 'react-bootstrap/Button'
//import Container from 'react-bootstrap/Container'
import MessagesNavbar from './components/MessagesNavbar'
import MessagesAccordion from './components/MessagesAccordion'

//import Modal from 'react-bootstrap/Modal'
//import Form from 'react-bootstrap/Form'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'


// function Navigation() {
//   return (
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Navbar.Brand href="#home">BalaByte Holdings</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="#features">Dashboard</Nav.Link>
//             <Nav.Link href="#pricing">Tenants</Nav.Link>
//             <Nav.Link href="#pricing">Messages</Nav.Link>
//             <Nav.Link href="#pricing">Issues</Nav.Link>
//             <Nav.Link href="#pricing">Voting</Nav.Link>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#deets">Logout</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//   );
// }

function Messages() {
  return (
    <div className="Messages">
      <MessagesNavbar />
      <div className="text-right pr-3">
        <a href="#" style={{textDecoration:"underline", fontWeight:"bolder"}}>New Message</a>
      </div>
      <MessagesAccordion />

      {/* <Container>
          <div className="recipes-header">
              <h1>Messages</h1>
          </div>
      </Container>


      <Modal onHide={this.closeModal} size="lg">
          <Modal.Header closeButton>
              <Modal.Title>New Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                          Name
                      </Form.Label>
                      <Col sm={10}>
                          <Form.Control ref={this.nameInput} type="text" placeholder="Recipe name" />
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPassword">
                      <Form.Label column sm={2}>
                          Description
                      </Form.Label>
                      <Col sm={10}>
                          <Form.Control ref={this.descInput} type="text" placeholder="Recipe description" />
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPassword">
                      <Form.Label column sm={2}>
                          Image
                      </Form.Label>
                      <Col sm={6}>
                          <Form.Control type="file" placeholder="Recipe image URL" accept="image/*" onChange={this.imgChange}/>
                      </Col>
                  </Form.Group>

              </Form>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>
                  Close
              </Button>
              <Button variant="primary" onClick={this.createRecipe}>
                  Create Recipe
              </Button>
          </Modal.Footer>
      </Modal> */}
    </div>
  );
}


export default Messages;
