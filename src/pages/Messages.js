import React from 'react';
import MessageDB from '../components/MessageDB';
import ImageHandler from '../components/ImageHandler'
import InnerNavbar from '../components/InnerNavbar'
import RecordsDisplay from '../components/RecordsDisplay'
import { Container, Row, Col, Button, Modal, Form, Image } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'



class Messages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        messages: null, //Get from Parse DB
        hasRecords: null,
        filter: {
            inputFilter:"",
            selectFilter:"123"
        },
        filteredMessages: null, 
        showModal: false,
        currentMessageId: null,
        currentMessageTitle: null,
        currentMessageDetails: null,
        currentMessagePriority: null,
        currentMessageImage: null,
        modalTrigger: null,
        showStatusSelect: "hide",
        validated: false,
        messageError: false,
        errorMsg:"",
        sortByPriority: false
      }

      this.onGetAllMessagesSuccess = this.onGetAllMessagesSuccess.bind(this);
      this.onGetAllMessagesError = this.onGetAllMessagesError.bind(this);
      this.filterMessages = this.filterMessages.bind(this);
      this.onCreateMessageSuccess = this.onCreateMessageSuccess.bind(this);
      this.onCreateMessageError = this.onCreateMessageError.bind(this);
      this.onImageUploadSuccess = this.onImageUploadSuccess.bind(this);
      this.onImageUploadError = this.onImageUploadError.bind(this);
      this.onImageUploadProgress = this.onImageUploadProgress.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.createMessage = this.createMessage.bind(this);
      this.updateMessage = this.updateMessage.bind(this);
      this.onDeleteMessageError = this.onDeleteMessageError.bind(this);
      this.onDeleteMessageSuccess = this.onDeleteMessageSuccess.bind(this);
      this.deleteMessage = this.deleteMessage.bind(this);
      this.imgChange = this.imgChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFilterChange = this.handleFilterChange.bind(this);
      this.handleSortChange = this.handleSortChange.bind(this);

      this.titleInput = React.createRef();
      this.detailsInput = React.createRef();
      this.priorityInput = React.createRef();
      this.imgInput = React.createRef();
    }
    
    componentDidMount(){
        MessageDB.GetAllMessages(this.state.sortByPriority, this.onGetAllMessagesSuccess, this.onGetAllMessagesError);
    }

    checkCurrentMessage(filter, currentMessageTitle, currentMessageDetails, currentMessagePriority) { //Check if current message matches filter
        if (
                // filter by select
                (filter.selectFilter.indexOf(currentMessagePriority) > -1) && 

                //Filter by Input
                (
                    //Input filter is not empty
                    ((filter.inputFilter !== "") && (currentMessageTitle.indexOf(filter.inputFilter) > -1 || currentMessageDetails.indexOf(filter.inputFilter) > -1)) ||
                    //Input Filter is empty so accept any
                    (filter.inputFilter === "")
                )
            ) 
        { return true; }
        
        else
        { return false; }
    }

    filterMessages(filter, originalMessages, filteredMessages) {
        // Loop through all messages keys, and add those who match the search query to matches array
        for (var i = 0; i < originalMessages.length; i++) {
                var currentMessageTitle = originalMessages[i].get("title").toUpperCase();
                var currentMessageDetails = originalMessages[i].get("details").toUpperCase();
                var currentMessagePriority = originalMessages[i].get("priority").toUpperCase();

                if (this.checkCurrentMessage(filter, currentMessageTitle, currentMessageDetails, currentMessagePriority)) {
                    filteredMessages.push(originalMessages[i]);
                }

         }
    }

    handleFilterChange(e) {
        var input;
        input = e.target;
        var inputFilter = this.state.filter.inputFilter;
        var selectFilter = this.state.filter.selectFilter;
        var filteredMessages = [];

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


            this.filterMessages(newFilter, this.state.messages, filteredMessages);

        this.setState({filteredMessages:filteredMessages});
      }



    handleSortChange(sortByPriority) {
        this.setState({sortByPriority: sortByPriority});
        MessageDB.GetAllMessages(sortByPriority, this.onGetAllMessagesSuccess, this.onGetAllMessagesError);

    }


    onImageUploadSuccess(imageId) {
        let currentMessageImage = imageId;
        this.setState({currentMessageImage: currentMessageImage})
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

        let newMessageImg = {};
        newMessageImg.file = ev.target.files[0];
        if (newMessageImg.file) {
            ImageHandler.UploadImage(newMessageImg.file, this.onImageUploadProgress, this.onImageUploadSuccess, this.onImageUploadError);

        } else {
            newMessageImg.URL = "";
        }

    }
    
    handleSubmit(e) {
        const form = e.target;
        this.setState({validated:true});

        e.preventDefault();
        e.stopPropagation();
        if (form.checkValidity() === true) {
            if(this.state.modalTrigger === "New Message"){
                this.createMessage();
            }
            else {
                this.updateMessage();
            }
        }
      }


    openModal(e, message) {
        let modalTrigger = e.target.innerHTML;
        let showStatusSelect;
        let currentMessageId;
        let currentMessageTitle = "";
        let currentMessageDetails = "";
        let currentMessagePriority = "";
        // let currentMessageStatus = "";
        let currentMessageImage = "";

        if(modalTrigger === "Update") {
            modalTrigger = "Update Message";
            showStatusSelect = "show";
            currentMessageTitle = message.get("title");
            currentMessageDetails = message.get("details");
            currentMessagePriority = message.get("priority");
            // currentMessageStatus = message.get("status");
            currentMessageImage = message.get("image");
            currentMessageId = message.id;
        }
        else {
            showStatusSelect = "hide";
        }
        this.setState({ showModal: true, showStatusSelect: showStatusSelect, modalTrigger: modalTrigger, currentMessageId: currentMessageId, currentMessageTitle: currentMessageTitle, currentMessageDetails:currentMessageDetails, currentMessagePriority: currentMessagePriority, currentMessageImage: currentMessageImage})
    }

    closeModal() {
        this.setState({ currentMessageId: null, currentMessageImage:null, showModal: false, validated: false, messageError: false })
    }

    onCreateMessageSuccess(messageId, message) {
        MessageDB.GetAllMessages(this.state.sortByPriority, this.onGetAllMessagesSuccess, this.onGetAllMessagesError);
    }

    onCreateMessageError(error) {
        
    }
    
    createMessage() {
         const newMessage = MessageDB.GetMessage();
         newMessage.set('title', this.titleInput.current.value);
         newMessage.set('details', this.detailsInput.current.value);
         newMessage.set('priority', this.priorityInput.current.value);
        //  newMessage.set('status', this.statusInput.current.value);
         newMessage.set('image', this.state.currentMessageImage);

        MessageDB.CreateMessage(newMessage, this.onCreateMessageSuccess, this.onCreateMessageError)

        this.closeModal();
    }

    updateMessage() {
        const newMessage = MessageDB.GetMessage();
        newMessage.set('title', this.titleInput.current.value);
        newMessage.set('details', this.detailsInput.current.value);
        newMessage.set('priority', this.priorityInput.current.value);
        // newMessage.set('status', this.statusInput.current.value);
        newMessage.set('image', this.state.currentMessageImage);

        MessageDB.UpdateMessage(this.state.currentMessageId, newMessage, this.onCreateMessageSuccess, this.onCreateMessageError)
        this.closeModal();
   }

   onDeleteMessageSuccess(messageId, message) {
    MessageDB.GetAllMessages(this.state.sortByPriority, this.onGetAllMessagesSuccess, this.onGetAllMessagesError);
    }

    onDeleteMessageError(error) {
        
    }


   deleteMessage(message) {
    MessageDB.DeleteMessage(message.id, this.onDeleteMessageSuccess, this.onDeleteMessageError)
    this.closeModal();
}


    onGetAllMessagesSuccess(messages) {
        var filteredMessages = []
        var hasRecords = false;
        if (messages.length > 0) {
            hasRecords = true;
        }
        
        if(this.state.filter !== null) {
            this.filterMessages(this.state.filter, messages, filteredMessages);
        }

        this.setState({messages:messages, filteredMessages:filteredMessages, hasRecords:hasRecords});
    }

    onGetAllMessagesError(error) {
    }
  
    render() {
        let recordsDisplay = null;
        if (this.state.messages == null) {
            //loading
            recordsDisplay = "Loading...";
        }
        else {
            recordsDisplay = <RecordsDisplay hasRecords={this.state.hasRecords} recordType="messages" records={this.state.filteredMessages} openModal={this.openModal} deleteMessage={this.deleteMessage}/> ;
        }

        const { showModal, currentMessageImage } = this.state;
        const currentMessageImageUrl = (currentMessageImage === ""? "./images/placeholder-square.jpg" : ImageHandler.GetImageUrl(currentMessageImage));
        const modalAction = (
            this.state.modalTrigger === "New Message" ?  <Button variant="primary" type="submit">Create Message</Button>
                                                    :  <Button variant="primary" type="submit">Update Message</Button>
        );

      
      return (
                <div className="Messages h-100">
                    {/* <Navigation isLoggedIn={this.props.isLoggedIn} pageName="Messages"/> */}

                    <Container className="py-6 px-5 mobile-padding">
                        <InnerNavbar filterType="messages" handleFilterChange={this.handleFilterChange} handleSortChange={this.handleSortChange}/>
                        <div className="text-right pt-4 pb-1 mobile-center">
                            <Button variant="link" className="new-btn" onClick={this.openModal}>New Message</Button>
                        </div>
                        {recordsDisplay}
                    </Container>
                    <Modal show={showModal} onHide={this.closeModal} size="lg">
                    <Form className="messageModalFrm" noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>

                        <Modal.Header closeButton>
                            <Modal.Title>{this.state.modalTrigger}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Alert variant="danger" show={this.state.messageError}>
                                {this.state.errorMsg}
                            </Alert>
                                <Form.Group as={Row} controlId="formNameTxt">
                                    <Form.Label column sm={2}>
                                        Title:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" ref={this.titleInput} defaultValue={this.state.currentMessageTitle} pattern="([a-zA-Z0-9!?.,:-#\/]{1,20}\s?){1,10}" required/>
                                        <Form.Control.Feedback type="invalid">
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formDetailsTxt">
                                    <Form.Label column sm={2}>
                                        Details:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control ref={this.detailsInput} defaultValue={this.state.currentMessageDetails} as="textarea" rows="3"/>
                                        <Form.Control.Feedback type="invalid">
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPrioritySelect">
                                    <Form.Label column sm={2}>
                                        Priority:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control ref={this.priorityInput} defaultValue={this.state.currentMessagePriority} as="select" className="priority-select" required>
                                            <option value="1">Information</option>
                                            <option value="2">Important</option>
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
                                            <p id="image_progress"></p>
                                            <label className="custom-file-label" htmlFor="customFile">Choose image</label>
                                        </div>
                                    </Col>
                                    <Col sm={3}>
                                        <Image src={currentMessageImageUrl} fluid className="thumbnail"/>
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


export default Messages;
