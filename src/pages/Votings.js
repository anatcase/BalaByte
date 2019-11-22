import React from 'react';
import VotingDB from '../components/VotingDB';
import InnerNavbar from '../components/InnerNavbar'
import RecordsDisplay from '../components/RecordsDisplay'
import { Container, Row, Col, Button, Modal, Form, Image } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'

class Votings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          votings: null, //Get from Parse DB
          hasRecords: null,
          filter: {
              inputFilter:"",
          },
          filteredVotings: null, 
          showModal: false,
          currentVotingId: null,
          currentVotingTitle: null,
          currentVotingDetails: null,
          currentVotingEndDate: null,
          currentVotingOptions: null,
          currentVotingResult: null,
          //currentVotingPrecentage: null,
        // currentVotingPros: null,
        //   currentVotingAgainst: null,
          validated: false,
          votingError: false,
          errorMsg:""
      }
        
        this.onGetAllVotingsSuccess = this.onGetAllVotingsSuccess.bind(this);
        this.onGetAllVotingsError = this.onGetAllVotingsError.bind(this);
        this.filterVotings = this.filterVotings.bind(this);
        this.onCreateVotingSuccess = this.onCreateVotingSuccess.bind(this);
        this.onCreateVotingError = this.onCreateVotingError.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.createVoting = this.createVoting.bind(this);
        this.updateVoting = this.updateVoting.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
  
        this.titleInput = React.createRef();
        this.detailsInput = React.createRef();
        this.endDateInput = React.createRef();
        this.optionsInput = React.createRef();
        this.optionInput1 = React.createRef();
        this.optionInput2 = React.createRef();
        this.endDateInput = React.createRef();
      }
      
      componentDidMount(){
        VotingDB.GetAllVotings(this.onGetAllVotingsSuccess, this.onGetAllVotingsError);
    }

    checkCurrentVoting(filter, currentVotingTitle, currentVotingDetails) { //Check if current voting matches filter
        if (
            //Input filter is not empty
            ((filter.inputFilter !== "") && (currentVotingTitle.indexOf(filter.inputFilter) > -1 || currentVotingDetails.indexOf(filter.inputFilter) > -1)) ||
            //Input Filter is empty so accept any
            (filter.inputFilter === "")
            
            ) 
        { return true; }
        
        else
        { return false; }
    }

    filterVotings(filter, originalVotings, filteredVotings) {
        // Loop through all votings keys, and add those who match the search query to matches array
        for (var i = 0; i < originalVotings.length; i++) {
                var currentVotingTitle = originalVotings[i].get("title").toUpperCase();
                var currentVotingDetails = originalVotings[i].get("details").toUpperCase();

                if (this.checkCurrentVoting(filter, currentVotingTitle, currentVotingDetails)) {
                    filteredVotings.push(originalVotings[i]);
                }

         }
    }

    handleFilterChange(e) {
        var input;
        input = e.target;
        var inputFilter = this.state.filter.inputFilter;
        var filteredVotings = [];

        if(input.tagName === "INPUT") {
            inputFilter = input.value.toUpperCase();
        }

        const newFilter = {
            inputFilter: inputFilter
        }

        this.setState({
            filter:newFilter
        });  


            this.filterVotings(newFilter, this.state.votings, filteredVotings);

        this.setState({filteredVotings:filteredVotings});
      }

    
    handleSubmit(e) {
        const form = e.target;
        this.setState({validated:true});

        e.preventDefault();
        e.stopPropagation();
        if (form.checkValidity() === true) {
            // if(this.state.modalTrigger === "New Voting"){
                this.createVoting();
            // }
            // else {
            //     this.updateVoting();
            // }
        }
      }


    openModal(e) {
        //let modalTrigger = e.target.innerHTML;
        //let showStatusSelect;
        // let currentVotingId;
        // let currentVotingTitle = "";
        // let currentVotingDetails = "";
        // let currentVotingEndDate = "";
        // let currentVotingOptions = "";
        // let currentVotingResult = "";

        // if(modalTrigger === "Update") {
        //     modalTrigger = "Update Voting";
        //     showStatusSelect = "show";
        //     currentVotingTitle = voting.get("title");
        //     currentVotingDetails = voting.get("details");
        //     currentVotingPriority = voting.get("priority");
        //     currentVotingStatus = voting.get("status");
        //     currentVotingImage = voting.get("image");
        //     currentVotingId = voting.id;
        // }
        // else {
            //showStatusSelect = "hide";
        // }
        this.setState({ showModal: true})
    }

    closeModal() {
        this.setState({ currentVotingId: null, showModal: false, validated: false, votingError: false })
    }

    onCreateVotingSuccess(votingId, voting) {
        VotingDB.GetAllVotings(this.onGetAllVotingsSuccess, this.onGetAllVotingsError);
    }

    onCreateVotingError(error) {
        
    }
    
    createVoting() {
         const newVoting = VotingDB.GetVoting();
         newVoting.set('title', this.titleInput.current.value);
         newVoting.set('details', this.detailsInput.current.value);
         newVoting.set('options', [this.optionInput1.current.value, this.optionInput2.current.value]);
         newVoting.set('dueDate', this.endDateInput.current.value);

        VotingDB.CreateVoting(newVoting, this.onCreateVotingSuccess, this.onCreateVotingError)

        this.closeModal();
    }

    updateVoting() {
        const newVoting = VotingDB.GetVoting();
        // newVoting.set('title', this.titleInput.current.value);
        // newVoting.set('details', this.detailsInput.current.value);
        // newVoting.set('options', this.optionsInput.current.value);
        newVoting.set('dueDate', this.endDateInput.current.value);

        VotingDB.updateVoting(this.state.currentVotingId, newVoting, this.onCreateVotingSuccess, this.onCreateVotingError)
        this.closeModal();
   }

    onGetAllVotingsSuccess(votings) {
        var filteredVotings = []
        var hasRecords = false;
        if (votings.length > 0) {
            hasRecords = true;
        }
        
        if(this.state.filter !== null) {
            this.filterVotings(this.state.filter, votings, filteredVotings);
        }

        this.setState({votings:votings, filteredVotings:filteredVotings, hasRecords:hasRecords});
    }

    onGetAllVotingsError(error) {
    }

  
    render() {
        let recordsDisplayActive = null;
        let recordsDisplayResults = null;

        if (this.state.votings == null) {
            //loading
            recordsDisplayActive = "Loading...";
        }
        else {
            recordsDisplayActive = <RecordsDisplay hasRecords={this.state.hasRecords} recordType="active votings" records={this.state.votings} openModal={this.openModal}/> ;
        }

        
        if (this.state.votings == null) {
            //loading
            recordsDisplayResults = "Loading...";
        }
        else {
            recordsDisplayResults = <RecordsDisplay hasRecords={this.state.hasRecords} recordType="voting results" records={this.state.votings} openModal={this.openModal}/> ;
        }

        const { showModal } = this.state;
        // const modalAction = (
        //     this.state.modalTrigger === "New Voting" ?  <Button variant="primary" type="submit">Create Voting</Button>
        //                                             :  <Button variant="primary" type="submit">Update Voting</Button>
        // );

      
            return (
                    <div className="Votings h-100">
                        <Container fluid className="py-6 px-5 mobile-padding">
                            <Row>
                                <Col lg={6} className="Voting-box">
                                        <h2>Active Votings</h2>
                                         <div className="text-right pt-4 pb-1 mobile-center">
                                            <Button variant="link" className="new-btn" onClick={this.openModal}>New Voting</Button>
                                        </div>
                                        {recordsDisplayActive}
                                </Col>
                                <Col lg={6}>
                                    <h2>Voting Results</h2>
                                    <InnerNavbar filterType="voting" handleFilterChange={this.handleFilterChange}/>
                                    {recordsDisplayResults}
                                </Col>
                            </Row>
                        </Container>
                        <Modal show={showModal} onHide={this.closeModal} size="lg">
                            <Form className="votingModalFrm" noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>

                            <Modal.Header closeButton>
                                <Modal.Title>New Voting</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Alert variant="danger" show={this.state.votingError}>
                                    {this.state.errorMsg}
                                </Alert>
                                    <Form.Group as={Row} controlId="formNameTxt">
                                        <Form.Label column lg={2}>
                                            Title:
                                        </Form.Label>
                                        <Col lg={10}>
                                            <Form.Control type="text" ref={this.titleInput} pattern="([a-zA-Z0-9]{1,20}\s?){1,10}" required/>
                                            <Form.Control.Feedback type="invalid">
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formDetailsTxt">
                                        <Form.Label column sm={2}>
                                            Details:
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control ref={this.detailsInput} as="textarea" rows="3"/>
                                            <Form.Control.Feedback type="invalid">
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formOptionsTxt">
                                        <Form.Label column sm={2}>
                                            Options:
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control ref={this.optionInput1} type="text" className="mb-2" required pattern="([a-zA-Z0-9]{1,20}\s?){1,10}" />
                                            <Form.Control ref={this.optionInput2} type="text" required pattern="([a-zA-Z0-9]{1,20}\s?){1,10}" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formDateControl" className="align-items-center">
                                        <Form.Label column sm={2}>
                                            End Date:
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control ref={this.endDateInput} required type="datetime-local" className="w-50" />     
                                        </Col>
                                    </Form.Group>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary">
                                        Close
                                    </Button>
                                    <Button variant="primary" type="submit">
                                        Create Voting
                                    </Button>
                                </Modal.Footer>
                                </Form>
                        </Modal>
                </div>
                );
    }
}

export default Votings;
