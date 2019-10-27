import React from 'react';
//import Nav from 'react-bootstrap/Nav'
//import Navbar from 'react-bootstrap/Navbar'
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import Button from 'react-bootstrap/Button'
import VotingsNavbar from '../components/VotingsNav'
import VotingsAccordion from '../components/VotingsAccordion'
import { Container, Row, Col} from 'react-bootstrap'
import PaginationNav from '../components/PaginationNav';

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
        totalItemsCount: 14 // This will come from the relevant page: messages\votings etc, where the total number of records will be stored in the page's state.
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
                    <div>
                        <Container fluid className="Votings p-4 vh-100">
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
                        {/* <Modal show="true" size="lg">
                            <Modal.Header closeButton>
                                <Modal.Title>New Voting</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form className="VotingModalFrm">
                                    <Form.Group as={Row} controlId="formNameTxt">
                                        <Form.Label column sm={2}>
                                            Name:
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Enter Voting's name" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formEmailTxt">
                                        <Form.Label column sm={2}>
                                            Email:
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="email" placeholder="Enter Voting's email" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formAptTxt">
                                        <Form.Label column sm={2}>
                                            Appartment:
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Enter Voting's appartment" />
                                        </Col>
                                    </Form.Group>


                                    <Form.Group as={Row} controlId="formImgControl" className="align-items-center">
                                        <Form.Label column sm={2}>
                                            Image URL:
                                        </Form.Label>
                                        <Col sm={7}>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="customFile" />
                                                <label class="custom-file-label" for="customFile">Choose image</label>
                                            </div>
                                        </Col>
                                        <Col sm={3}>
                                            <Image src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg" fluid/>
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
