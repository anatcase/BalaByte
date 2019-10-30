import React from 'react';
//import Nav from 'react-bootstrap/Nav'
//import Navbar from 'react-bootstrap/Navbar'
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import Button from 'react-bootstrap/Button'
import TenantsNavbar from '../components/TenantsNavbar'
import TenantsAccordion from '../components/TenantsAccordion'
import Container from 'react-bootstrap/Container'

//import { Container, Row, Col, Button, Modal, Form, Image } from 'react-bootstrap'
import PaginationNav from '../components/PaginationNav';


//import Modal from 'react-bootstrap/Modal'
//import Form from 'react-bootstrap/Form'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

class Tenants extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activePage: 1,
        totalItemsCount: 100 // This will come from the relevant page: messages\votings etc, where the total number of records will be stored in the page's state.
      }; //what happens when it's 50 records divided by 10 per page?
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
            {votingAccordion}  
            <Container fluid className="Tenants p-4">
                <TenantsNavbar />
                <div className="text-right pt-4 pb-1">
                    <a href="#" style={{textDecoration:"underline", fontWeight:"bolder"}}>New Tenant</a>
                </div>
                <TenantsAccordion />
                <PaginationNav handlePageChange={this.handlePageChange} activePage={this.state.activePage} totalItemsCount={this.state.totalItemsCount}/>
            </Container>

            {/* All tenants will have a default password of 1-6 */}
            
            {/* <Modal show="true" size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>New Tenant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="tenantModalFrm">
                        <Form.Group as={Row} controlId="formNameTxt">
                            <Form.Label column sm={2}>
                                Name:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Enter tenant's name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formEmailTxt">
                            <Form.Label column sm={2}>
                                Email:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="email" placeholder="Enter tenant's email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formAptTxt">
                            <Form.Label column sm={2}>
                                Appartment:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Enter tenant's appartment" />
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

export default Tenants;
