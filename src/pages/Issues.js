import React from 'react';
import IssueDB from '../components/IssueDB';
import ImageHandler from '../components/ImageHandler'
import InnerNavbar from '../components/InnerNavbar'
import RecordsDisplay from '../components/RecordsDisplay'
import { Container, Row, Col, Button, Modal, Form, Image } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'

class Issues extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        issues: null, //Get from Parse DB
        hasRecords: null,
        filter: {
            inputFilter:"",
            selectFilter:"123"
        },
        filteredIssues: null, 
        // activeUserIssues: [],
        // activePage: 1,
        showModal: false,
        currentIssueId: null,
        currentIssueTitle: null,
        currentIssueDetails: null,
        currentIssuePriority: null,
        currentIssueImage: null,
        currentIssueStatus: null,
        modalTrigger: null,
        showStatusSelect: "hide",
        //totalItemsCount: null, 
        validated: false,
        issueError: false,
        errorMsg:"",
        sortByPriority: false
    }
      
      this.onGetAllIssuesSuccess = this.onGetAllIssuesSuccess.bind(this);
      this.onGetAllIssuesError = this.onGetAllIssuesError.bind(this);
      this.filterIssues = this.filterIssues.bind(this);
      this.onCreateIssueSuccess = this.onCreateIssueSuccess.bind(this);
      this.onCreateIssueError = this.onCreateIssueError.bind(this);
      this.onImageUploadSuccess = this.onImageUploadSuccess.bind(this);
      this.onImageUploadError = this.onImageUploadError.bind(this);
      this.onImageUploadProgress = this.onImageUploadProgress.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.createIssue = this.createIssue.bind(this);
      this.updateIssue = this.updateIssue.bind(this);
      this.onDeleteIssueError = this.onDeleteIssueError.bind(this);
      this.onDeleteIssueSuccess = this.onDeleteIssueSuccess.bind(this);
      this.deleteIssue = this.deleteIssue.bind(this);
      this.imgChange = this.imgChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFilterChange = this.handleFilterChange.bind(this);
      this.handleSortChange = this.handleSortChange.bind(this);

      this.titleInput = React.createRef();
      this.detailsInput = React.createRef();
      this.priorityInput = React.createRef();
      this.statusInput = React.createRef();
      this.imgInput = React.createRef();

    }

    componentDidMount(){
        IssueDB.GetAllIssues(this.state.sortByPriority, this.onGetAllIssuesSuccess, this.onGetAllIssuesError);
    }

    checkCurrentIssue(filter, currentIssueTitle, currentIssueDetails, currentIssuePriority) { //Check if current issue matches filter
        if (
                // filter by select
                (filter.selectFilter.indexOf(currentIssuePriority) > -1) && 

                //Filter by Input
                (
                    //Input filter is not empty
                    ((filter.inputFilter !== "") && (currentIssueTitle.indexOf(filter.inputFilter) > -1 || currentIssueDetails.indexOf(filter.inputFilter) > -1)) ||
                    //Input Filter is empty so accept any
                    (filter.inputFilter === "")
                )
            ) 
        { return true; }
        
        else
        { return false; }
    }

    filterIssues(filter, originalIssues, filteredIssues) {
        // Loop through all issues keys, and add those who match the search query to matches array
        for (var i = 0; i < originalIssues.length; i++) {
                var currentIssueTitle = originalIssues[i].get("title").toUpperCase();
                var currentIssueDetails = originalIssues[i].get("details").toUpperCase();
                var currentIssuePriority = originalIssues[i].get("priority").toUpperCase();

                if (this.checkCurrentIssue(filter, currentIssueTitle, currentIssueDetails, currentIssuePriority)) {
                    filteredIssues.push(originalIssues[i]);
                }

         }
    }

    handleFilterChange(e) {
        var input;
        input = e.target;
        var inputFilter = this.state.filter.inputFilter;
        var selectFilter = this.state.filter.selectFilter;
        var filteredIssues = [];

        if(input.tagName === "INPUT") {
            inputFilter = input.value.toUpperCase();
        }
        else if (input.tagName === "SELECT") {
            selectFilter = input.value;
        }

        const newFilter = {
            inputFilter: inputFilter,
            selectFilter:selectFilter
        }

        this.setState({
            filter:newFilter
        });  


            this.filterIssues(newFilter, this.state.issues, filteredIssues);

        this.setState({filteredIssues:filteredIssues});
      }



    handleSortChange(sortByPriority) {
        this.setState({sortByPriority: sortByPriority});
        IssueDB.GetAllIssues(sortByPriority, this.onGetAllIssuesSuccess, this.onGetAllIssuesError);

    }


    onImageUploadSuccess(imageId) {
        let currentIssueImage = imageId;
        this.setState({currentIssueImage: currentIssueImage})
    }

    onImageUploadError(error) {
    }

    onImageUploadProgress(progress) {
        if (progress < 100) {
            document.getElementById("image_progress").innerHTML = "Image Uploading: " + progress + "%";
        } else {
            document.getElementById("image_progress").innerHTML = "Image Uploaded Successfully";

        }
    }
    imgChange(ev) {

        let newIssueImg = {};
        newIssueImg.file = ev.target.files[0];
        if (newIssueImg.file) {
            ImageHandler.UploadImage(newIssueImg.file, this.onImageUploadProgress, this.onImageUploadSuccess, this.onImageUploadError);

        } else {
            newIssueImg.URL = "";
        }

    }
    
    handleSubmit(e) {
        const form = e.target;
        this.setState({validated:true});

        e.preventDefault();
        e.stopPropagation();
        if (form.checkValidity() === true) {
            if(this.state.modalTrigger === "New Issue"){
                this.createIssue();
            }
            else {
                this.updateIssue();
            }
        }
      }


    openModal(e, issue) {
        let modalTrigger = e.target.innerHTML;
        let showStatusSelect;
        let currentIssueId;
        let currentIssueTitle = "";
        let currentIssueDetails = "";
        let currentIssuePriority = "";
        let currentIssueStatus = "";
        let currentIssueImage = "";

        if(modalTrigger === "Update") {
            modalTrigger = "Update Issue";
            showStatusSelect = "show";
            currentIssueTitle = issue.get("title");
            currentIssueDetails = issue.get("details");
            currentIssuePriority = issue.get("priority");
            currentIssueStatus = issue.get("status");
            currentIssueImage = issue.get("image");
            currentIssueId = issue.id;
        }
        else {
            showStatusSelect = "hide";
        }
        this.setState({ showModal: true, showStatusSelect: showStatusSelect, modalTrigger: modalTrigger, currentIssueId: currentIssueId, currentIssueTitle: currentIssueTitle, currentIssueDetails:currentIssueDetails, currentIssuePriority: currentIssuePriority, currentIssueStatus: currentIssueStatus, currentIssueImage: currentIssueImage})
    }

    closeModal() {
        this.setState({ currentIssueId: null, currentIssueImage:null, showModal: false, validated: false, issueError: false })
    }

    onCreateIssueSuccess(issueId, issue) {
        IssueDB.GetAllIssues(this.state.sortByPriority, this.onGetAllIssuesSuccess, this.onGetAllIssuesError);
    }

    onCreateIssueError(error) {
        
    }
    
    createIssue() {
         const newIssue = IssueDB.GetIssue();
         newIssue.set('title', this.titleInput.current.value);
         newIssue.set('details', this.detailsInput.current.value);
         newIssue.set('priority', this.priorityInput.current.value);
         newIssue.set('status', this.statusInput.current.value);
         newIssue.set('image', this.state.currentIssueImage);

        IssueDB.CreateIssue(newIssue, this.onCreateIssueSuccess, this.onCreateIssueError)

        this.closeModal();
    }

    updateIssue() {
        const newIssue = IssueDB.GetIssue();
        newIssue.set('title', this.titleInput.current.value);
        newIssue.set('details', this.detailsInput.current.value);
        newIssue.set('priority', this.priorityInput.current.value);
        newIssue.set('status', this.statusInput.current.value);
        newIssue.set('image', this.state.currentIssueImage);

        IssueDB.UpdateIssue(this.state.currentIssueId, newIssue, this.onCreateIssueSuccess, this.onCreateIssueError)
        this.closeModal();
   }

   onDeleteIssueSuccess(issueId, issue) {
    IssueDB.GetAllIssues(this.state.sortByPriority, this.onGetAllIssuesSuccess, this.onGetAllIssuesError);
    }

    onDeleteIssueError(error) {
        
    }


   deleteIssue(issue) {
    IssueDB.DeleteIssue(issue.id, this.onDeleteIssueSuccess, this.onDeleteIssueError)
    this.closeModal();
}


    onGetAllIssuesSuccess(issues) {
        var filteredIssues = []
        var hasRecords = false;
        if (issues.length > 0) {
            hasRecords = true;
        }
        
        if(this.state.filter !== null) {
            this.filterIssues(this.state.filter, issues, filteredIssues);
        }

        this.setState({issues:issues, filteredIssues:filteredIssues, hasRecords:hasRecords});
    }

    onGetAllIssuesError(error) {
    }

    render() {
        let recordsDisplay = null;
        if (this.state.issues == null) {
            //loading
            recordsDisplay = "Loading...";
        }
        else {
            recordsDisplay = <RecordsDisplay hasRecords={this.state.hasRecords} recordType="issues" records={this.state.filteredIssues} openModal={this.openModal} deleteIssue={this.deleteIssue}/> ;
        }

        const { showModal, currentIssueImage } = this.state;
        const currentIssueImageUrl = (currentIssueImage === ""? "./images/placeholder-square.jpg" : ImageHandler.GetImageUrl(currentIssueImage));
        const modalAction = (
            this.state.modalTrigger === "New Issue" ?  <Button variant="primary"                                                             type="submit">Create Issue</Button>
                                                    :  <Button variant="primary" type="submit">Update Issue</Button>
        );

      return (
                <div className="Issues h-100">
                    {/* <Navigation isLoggedIn={this.props.isLoggedIn} pageName="Issues"/> */}

                    <Container className="py-6 px-5 mobile-padding">
                        <InnerNavbar filterType="issues" handleFilterChange={this.handleFilterChange} handleSortChange={this.handleSortChange}/>
                        <div className="text-right pt-4 pb-1 mobile-center">
                            <Button variant="link" className="new-btn" onClick={this.openModal}>New Issue</Button>
                        </div>
                        {recordsDisplay}
                    </Container>
                    
                    <Modal show={showModal} onHide={this.closeModal} size="lg">
                    <Form className="issueModalFrm" noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>

                        <Modal.Header closeButton>
                            <Modal.Title>{this.state.modalTrigger}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Alert variant="danger" show={this.state.issueError}>
                                {this.state.errorMsg}
                            </Alert>
                                <Form.Group as={Row} controlId="formNameTxt">
                                    <Form.Label column sm={2}>
                                        Title:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" ref={this.titleInput} defaultValue={this.state.currentIssueTitle} pattern="([a-zA-Z0-9]{1,20}\s?){1,10}" required/>

                                        <Form.Control.Feedback type="invalid">
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formDetailsTxt">
                                    <Form.Label column sm={2}>
                                        Details:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control ref={this.detailsInput} defaultValue={this.state.currentIssueDetails} as="textarea" rows="3"/>
                                        <Form.Control.Feedback type="invalid">
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPrioritySelect">
                                    <Form.Label column sm={2}>
                                        Priority:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control ref={this.priorityInput} defaultValue={this.state.currentIssuePriority} as="select" className="priority-select" required>
                                            <option value="1">Normal</option>
                                            <option value="2">Important</option>
                                            <option value="3">Urgent</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formImgControl" className="align-items-center">
                                    <Form.Label column sm={2}>
                                        Image URL:
                                    </Form.Label>
                                    <Col sm={7}>
                                        <div className="custom-file">
                                            <input ref={this.imgInput} type="file" className="custom-file-input" id="customFile" accept="image/*" onChange={this.imgChange}/>
                                            {/* <Form.Control type="file" placeholder="Issue image URL" accept="image/*" onChange={this.imgChange}/> */}
                                            <p id="image_progress"></p>
                                            <label className="custom-file-label" htmlFor="customFile">Choose image</label>
                                        </div>
                                    </Col>
                                    <Col sm={3}>
                                        <Image src={currentIssueImageUrl} fluid className="thumbnail"/>
                                    </Col>
                                </Form.Group>
                                
                                <Form.Group as={Row} controlId="formStatusSelect" className={this.state.showStatusSelect}>
                                    <Form.Label column sm={2}>
                                        Status:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control ref={this.statusInput} defaultValue={this.state.currentIssueStatus} as="select" className="status-select">
                                            <option value="open">Open</option>
                                            <option value="closed">Closed</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.closeModal}>
                                Close
                            </Button>
                           {modalAction}
                        </Modal.Footer>
                        </Form>
                    </Modal>
            </div>
        );

    }
  }   


export default Issues;
