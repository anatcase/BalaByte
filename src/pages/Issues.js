import React from 'react';
//import Nav from 'react-bootstrap/Nav'
//import Navbar from 'react-bootstrap/Navbar'
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import Button from 'react-bootstrap/Button'
import IssueDB from '../components/IssueDB';
import InnerNavbar from '../components/InnerNavbar'
import RecordsDisplay from '../components/RecordsDisplay'
// import IssuesAccordion from '../components/IssuesAccordion'
// import Navigation from '../components/Navigation'
import { Container, Row, Col, Button, Modal, Form, Image } from 'react-bootstrap'
// import PaginationNav from '../components/PaginationNav';

//import Modal from 'react-bootstrap/Modal'
//import Form from 'react-bootstrap/Form'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

class Issues extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // activeUser: null,
        activeUser:   {
                "id": 1,
                "fname": "Nir",
                "lname": "Channes",
                "email": "nir@nir.com",
                "pwd": "123"
        },
        issues: null, //Get from Parse DB
        activeUserIssues: [],
        activePage: 1,
        showModal: false,
        totalItemsCount: 100, // This will come from the relevant page: Issues\votings\issues etc, where the total number of records will be stored in the page's state.
        newIssueImg: {
            file: null,
            URL: ""
        }
    }
      
      this.handlePageChange = this.handlePageChange.bind(this);
      this.onGetAllIssuesSuccess = this.onGetAllIssuesSuccess.bind(this);
      this.onGetAllIssuesError = this.onGetAllIssuesError.bind(this);
      
      this.onCreateIssueSuccess = this.onCreateIssueSuccess.bind(this);
      this.onCreateIssueError = this.onCreateIssueError.bind(this);


      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.createIssue = this.createIssue.bind(this);
      this.imgChange = this.imgChange.bind(this);
      this.addIssue = this.addIssue.bind(this);
      this.titleInput = React.createRef();
      this.detailsInput = React.createRef();
      this.priorityInput = React.createRef();
    //   IssueDB.GetAllIssues(this.onGetAllIssuesSuccess, this.onGetAllIssuesError);

    }

    componentDidMount(){
        // console.log("Getting All Issues");
        IssueDB.GetAllIssues(this.onGetAllIssuesSuccess, this.onGetAllIssuesError);
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

    // getAllIssues() {
    //     const issues = IssueDB.GetAllIssues();
    //     this.state.issues = issues;
    //     this.setState(this.state);
    // }
    onCreateIssueSuccess(issueId, issue) {
        // console.log("Getting All Issues");
        IssueDB.GetAllIssues(this.onGetAllIssuesSuccess, this.onGetAllIssuesError);
    }

    onCreateIssueError(error) {
        
    }
    
    createIssue() {
         const newIssue = IssueDB.GetIssue();
         newIssue.set('title', this.titleInput.current.value);
         newIssue.set('details', this.detailsInput.current.value);
         newIssue.set('priority', this.priorityInput.current.value);
         //newIssue.set('image', this.state.newIssueImg.URL);

        // const newIssue = {
        //     title: this.titleInput.value,
        //     details: this.detailsInput.value,
        //     priority: this.priorityInput.value,
        //     img: this.state.newIssueImg.URL
        // }

        // this.addIssue(newIssue);
        IssueDB.CreateIssue(newIssue, this.onCreateIssueSuccess, this.onCreateIssueError)

        this.closeModal();
    }

    addIssue(newIssue) {
        // //const {activeUser, allIssues, activeUserIssues} this.state.activeUser
        // // 1) add id and user to the Issue
        // newIssue.createdBy = this.state.activeUser.id;
        // // newIssue.id = this.state.allIssues[this.state.allIssues.length - 1].id + 1;
        // // newIssue.createdAt = this.state.allIssues[this.state.allIssues.length - 1].id + 1;

        // // 2) update all Issues and active user Issues
        // const allIssues = this.state.allIssues.concat(newIssue);
        // const activeUserIssues = this.state.activeUserIssues.concat(newIssue);
    
        //IssueDB.CreateIssue(newIssue, null, null)
        //this.setState({allIssues, activeUserIssues});
      }
    
    
    handlePageChange(e) {
      let val = parseInt(e.target.innerHTML);
      let pageNumber = this.state.activePage;
  
      if (isNaN(val)) {
        // console.log('Not a number ' + val);
        val = e.target.innerText;
        if (val.includes("‹")) {
        //   console.log("Previous");
          pageNumber--;
        }
        else if (val.includes("›")) {
        //   console.log("Next");
          pageNumber++;
        }
        
      }
      else {
        // console.log('number ' + val);
        pageNumber =  val;
      }
    //   console.log('active page is ' + pageNumber);
      //this.state.activePage = pageNumber;
    //   console.log(this.state.activePage);
      //this.setState(this.state);
      this.setState({activePage:pageNumber});
    //   console.log(this.state.activePage);
    }

    onGetAllIssuesSuccess(issues) {
        // console.log("onGetAllIssuesSuccess");
    // this.state.issues = issues;
    // this.setState(this.state);

    this.setState({issues:issues});
}

    onGetAllIssuesError(error) {
        // console.log("printing "+ error);
    }

    render() {
        let recordsDisplay = null;
        if (this.state.issues == null) {
            //loading
            recordsDisplay = "Loading...";
        }
        else {
            recordsDisplay = <RecordsDisplay hasRecords={true} recordType="issues" records={this.state.issues} /> ;
        }


        // console.log("rendering issues " + this.state.issues);

        const { showModal, newIssueImg } = this.state;

      return (
                <div className="Issues h-100">
                    {/* <Navigation isLoggedIn={this.props.isLoggedIn} pageName="Issues"/> */}

                    <Container className="py-6 px-5 mobile-padding">
                        <InnerNavbar filterType="issues"/>
                        <div className="text-right pt-4 pb-1 mobile-center">
                            <Button variant="link" className="new-btn" onClick={this.openModal}>New Issue</Button>
                        </div>
                        {recordsDisplay}
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
