import React from 'react';
//import Nav from 'react-bootstrap/Nav'
//import Navbar from 'react-bootstrap/Navbar'
//import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import VotingsNavbar from '../components/VotingsNav'
import VotingsAccordion from '../components/VotingsAccordion'
import { Container, Row, Col} from 'react-bootstrap'
import PaginationNav from '../components/PaginationNav';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


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
//             <Nav.Link href="#pricing">Votings</Nav.Link>
//             <Nav.Link href="#pricing">Votings</Nav.Link>
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

class Votings extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activePage: 1,
        totalItemsCount: 14 // This will come from the relevant page: Votings\votings etc, where the total number of records will be stored in the page's state.
      };
      this.handlePageChange = this.handlePageChange.bind(this);
    }
    
    handlePageChange(e) {
      let val = parseInt(e.target.innerHTML);
      let pageNumber = this.state.activePage;
  
      if (isNaN(val)) {
        console.log('Not a number ' + val);
        val = e.target.innerText;
        if (val.includes("‹")) {
          console.log("Previous");
          pageNumber--;
        }
        else if (val.includes("›")) {
          console.log("Next");
          pageNumber++;
        }
        
      }
      else {
        console.log('number ' + val);
        pageNumber =  val;
      }
      console.log('active page is ' + pageNumber);
      //this.state.activePage = pageNumber;
      console.log(this.state.activePage);
      //this.setState(this.state);
      this.setState({activePage:pageNumber});
      console.log(this.state.activePage);
    }
  
    render() {
      
            return (
                    <div className="Votings h-100">
                        <Container fluid className="p-4 h-100">
                            <Row className="h-100">
                                <Col className="border-2">
                                        <h2>Active Votings</h2>
                                        <div className="text-right pt-4 pb-2">
                                            <a href="#" style={{textDecoration:"underline", fontWeight:"bolder"}}>New Voting</a>
                                        </div>
                                    <VotingsAccordion votingStatus="active"/>
                                    <PaginationNav handlePageChange={this.handlePageChange} activePage={this.state.activePage} totalItemsCount={this.state.totalItemsCount}/>
                                </Col>
                                <Col>
                                    <h2>Voting Results</h2>
                                    <VotingsNavbar />
                                    <VotingsAccordion votingStatus="results"/>
                                    <PaginationNav handlePageChange={this.handlePageChange} activePage={this.state.activePage} totalItemsCount={this.state.totalItemsCount}/>
                                </Col>
                            </Row>
                        </Container>
                        {/* <Modal show size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>New Voting</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form className="VotingModalFrm">
                                <Form.Group as={Row} controlId="formNameTxt">
                                    <Form.Label column lg={2}>
                                        Title:
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control required type="text" placeholder="Voting title" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formDetailsTxt">
                                    <Form.Label column lg={2}>
                                        Details:
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control required type="text" placeholder="Voting Details" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPrioritySelect">
                                    <Form.Label column lg={2}>
                                        Options:
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control required type="text" className="mb-2"/>
                                        <Form.Control required type="text" />
                                        <Button variant="link" className="pl-0">+ Add option</Button>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formImgControl" className="align-items-center">
                                    <Form.Label column lg={2}>
                                        End Date:
                                    </Form.Label>
                                    <Col lg={5}>
                                        <Form.Control required type="datetime-local" className="w-50" />     
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary">
                                Close
                            </Button>
                            <Button variant="primary">
                                Create
                            </Button>
                        </Modal.Footer>
                    </Modal> */}
                </div>
                );
    }
}

export default Votings;
