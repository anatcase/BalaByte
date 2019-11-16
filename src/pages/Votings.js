import React from 'react';
//import Nav from 'react-bootstrap/Nav'
//import Navbar from 'react-bootstrap/Navbar'
//import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import VotingsNavbar from '../components/VotingsNav'
import InnerNavbar from '../components/InnerNavbar'

import RecordsDisplay from '../components/RecordsDisplay'
import { Container, Row, Col} from 'react-bootstrap'
// import Navigation from '../components/Navigation';
// import Modal from 'react-bootstrap/Modal'
// import Form from 'react-bootstrap/Form'
// import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'

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
                        {/* <Navigation isLoggedIn={this.props.isLoggedIn} pageName="Votings"/> */}

                        <Container fluid className="py-6 px-5 mobile-padding">
                            <Row>
                                <Col lg={6} className="issue-box">
                                        <h2>Active Votings</h2>
                                         <div className="text-right pt-4 pb-1 mobile-center">
                                            <Button variant="link" className="new-btn">New Voting</Button>
                                        </div>
                                    <RecordsDisplay hasRecords={true} recordType="active votings" /> 
                                </Col>
                                <Col lg={6}>
                                    <h2>Voting Results</h2>
                                    {/* <VotingsNavbar /> */}
                                    <InnerNavbar filterType="voting" handleFilterChange={this.handleFilterChange}/>

                                    <RecordsDisplay hasRecords={true} recordType="voting results" /> 
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
