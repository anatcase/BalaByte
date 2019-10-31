import React from 'react';
//import Nav from 'react-bootstrap/Nav'
//import Navbar from 'react-bootstrap/Navbar'
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import Button from 'react-bootstrap/Button'
import InnerNavbar from '../components/InnerNavbar'
import RecordsDisplay from '../components/RecordsDisplay'
import IssuesAccordion from '../components/IssuesAccordion'
import Navigation from '../components/Navigation'
import { Container, Row, Col, Button, Modal, Form, Image } from 'react-bootstrap'
import PaginationNav from '../components/PaginationNav';

//import Modal from 'react-bootstrap/Modal'
//import Form from 'react-bootstrap/Form'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

class Issues extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activePage: 1,
        showModal: false,
        totalItemsCount: 100, // This will come from the relevant page: Issues\votings\issues etc, where the total number of records will be stored in the page's state.
        newIssueImg: {
            file: null,
            URL: ""
        }
    }
      
      this.handlePageChange = this.handlePageChange.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.createIssue = this.createIssue.bind(this);
      this.imgChange = this.imgChange.bind(this);

      this.nameInput = React.createRef();
      this.detailsInput = React.createRef();
      this.priorityInput = React.createRef();


    }

    imgChange(ev) {

        let newIssueImg = {};
        newIssueImg.file = ev.target.files[0];
        if (newIssueImg.file) {
            newIssueImg.URL = URL.createObjectURL(newIssueImg.file);
        } else {
            newIssueImg.URL = "";
        }

        this.setState({newIssueImg});
    }

    openModal() {
        this.setState({ showModal: true })
    }

    closeModal() {
        this.setState({ showModal: false })
    }
    
    createIssue() {
        const newIssue = {
            title: this.titleInput.value,
            details: this.detailsInput.value,
            priority: this.priorityInput.value,
            img: this.state.newIssueImg.URL
        }

        this.props.addIssue(newIssue);
        this.closeModal();
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
    const { showModal, newIssueImg } = this.state;

      return (
                <div className="Issues h-100">
                    <Navigation isLoggedIn={this.props.isLoggedIn} pageName="Issues"/>

                    <Container className="py-6 px-5">
                        <InnerNavbar />
                        <div className="text-right pt-4 pb-1 mobile-center">
                            <Button variant="link" className="new-btn" onClick={this.openModal}>New Issue</Button>
                        </div>
                        <RecordsDisplay hasRecords={true} recordType="issues" /> 
                    </Container>
                    
                    <Modal show={showModal} onHide={this.closeModal} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>New Issue</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form className="issueModalFrm">
                                <Form.Group as={Row} controlId="formNameTxt">
                                    <Form.Label column sm={2}>
                                        Title:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control required type="text" ref={this.titleInput}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formDetailsTxt">
                                    <Form.Label column sm={2}>
                                        Details:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control ref={this.detailsInput} required as="textarea" rows="3" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPrioritySelect">
                                    <Form.Label column sm={2}>
                                        Priority:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control ref={this.priorityInput} required as="select" className="priority-select">
                                            <option value="urgent">Urgent</option>
                                            <option value="important">Important</option>
                                            <option value="normal">Normal</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formImgControl" className="align-items-center">
                                    <Form.Label column sm={2}>
                                        Image URL:
                                    </Form.Label>
                                    <Col sm={7}>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="customFile" accept="image/*" onChange={this.imgChange}/>
                                            {/* <Form.Control type="file" placeholder="Issue image URL" accept="image/*" onChange={this.imgChange}/> */}
                                            <label className="custom-file-label" for="customFile">Choose image</label>
                                        </div>
                                    </Col>
                                    <Col sm={3}>
                                        <Image src={newIssueImg.URL} fluid/>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.closeModal}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={this.createIssue}>
                                Create Issue
                            </Button>
                        </Modal.Footer>
                    </Modal>
            </div>
        );

    }
  }   


export default Issues;
