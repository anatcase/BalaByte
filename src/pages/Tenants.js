import React from 'react';
import UserDB from '../components/UserDB';
import ImageHandler from '../components/ImageHandler'
import InnerNavbar from '../components/InnerNavbar'
import RecordsDisplay from '../components/RecordsDisplay'
import { Container, Row, Col, Button, Modal, Form, Image } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'


class Tenants extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: null, //Get from Parse DB
        hasRecords: null,
        filter: {
            inputFilter:"",
            //selectFilter:"123"
        },
        filteredUsers: null, 
        showModal: false,
        currentUserId: null,
        currentUserName: null,
        currentUserEmail: null,
        currentUserApt: null,
        modalTrigger: null,
        showStatusSelect: "hide",
        validated: false,
        userError: false,
        errorMsg:"",
        sortByPriority: false
    }

    this.onGetAllUsersSuccess = this.onGetAllUsersSuccess.bind(this);
    this.onGetAllUsersError = this.onGetAllUsersError.bind(this);
    // this.checkCurrentUser = this.checkCurrentUser.bind(this);
    this.filterUsers = this.filterUsers.bind(this);
    this.onCreateTenantSuccess = this.onCreateTenantSuccess.bind(this);
    this.onCreateTenantError = this.onCreateTenantError.bind(this);
    this.onImageUploadSuccess = this.onImageUploadSuccess.bind(this);
    this.onImageUploadError = this.onImageUploadError.bind(this);
    this.onImageUploadProgress = this.onImageUploadProgress.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.createTenant = this.createTenant.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.onDeleteUserError = this.onDeleteUserError.bind(this);
    this.onDeleteUserSuccess = this.onDeleteUserSuccess.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.imgChange = this.imgChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.aptInput = React.createRef();
    this.imgInput = React.createRef();

    }
    
    componentDidMount(){
        UserDB.GetAllUsers(this.onGetAllUsersSuccess, this.onGetAllUsersError);
    }

    checkCurrentUser(filter, currentUserName, currentUserEmail, currentUserApt) { //Check if current User matches filter
        if (
                    //Input filter is not empty
                    ((filter.inputFilter !== "") && (currentUserName.indexOf(filter.inputFilter) > -1 || currentUserEmail.indexOf(filter.inputFilter) > -1 || currentUserApt.indexOf(filter.inputFilter) > -1)) ||
                    //Input Filter is empty so accept any
                    (filter.inputFilter === "")
            ) 
        { return true; }
        
        else
        { return false; }
    }

    filterUsers(filter, originalUsers, filteredUsers) {
        //debugger;

        // Loop through all users keys, and add those who match the search query to matches array
        for (var i = 0; i < originalUsers.length; i++) {
                var currentUserName = originalUsers[i].get("username").toUpperCase();
                var currentUserEmail = originalUsers[i].get("email").toUpperCase();
                //var currentUserEmail = "a@a.com";
                var currentUserApt = originalUsers[i].get("apartment").toUpperCase();
                //console.log(originalUsers[i]);
                //console.log(currentUserEmail);

                if (this.checkCurrentUser(filter, currentUserName, currentUserEmail, currentUserApt)) {
                    filteredUsers.push(originalUsers[i]);
                }


         }
    }

    handleFilterChange(e) {
        var input;
        input = e.target;
        var inputFilter = this.state.filter.inputFilter;
        var filteredUsers = [];

        if(input.tagName === "INPUT") {
            inputFilter = input.value.toUpperCase();
        }
        
        const newFilter = {
            inputFilter: inputFilter,
        }

        this.setState({
            filter:newFilter
        });  


            this.filterUsers(newFilter, this.state.users, filteredUsers);

        this.setState({filteredUsers:filteredUsers});
      }

   onImageUploadSuccess(imageId) {
        let currentUserImage = imageId;
        this.setState({currentUserImage: currentUserImage})
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

        let newUserImg = {};
        newUserImg.file = ev.target.files[0];
        if (newUserImg.file) {
            ImageHandler.UploadImage(newUserImg.file, this.onImageUploadProgress, this.onImageUploadSuccess, this.onImageUploadError);

        } else {
            newUserImg.URL = "";
        }

    }
    
    handleSubmit(e) {
        const form = e.target;
        this.setState({validated:true});

        e.preventDefault();
        e.stopPropagation();
        if (form.checkValidity() === true) {
            if(this.state.modalTrigger === "New Tenant"){
                this.createTenant();
            }
            else {
                this.updateUser();
            }
        }
      }


    openModal(e, user) {
        let modalTrigger = e.target.innerHTML;
        let showStatusSelect;
        let currentUserId;
        let currentUserName = "";
        let currentUserEmail = "";
        let currentUserApt = "";
        let currentUserImage = "";

        if(modalTrigger === "Update") {
            modalTrigger = "Update User";
            showStatusSelect = "show";
            currentUserName = user.get("username");
            currentUserEmail = user.get("email");
            currentUserApt = user.get("apartment");
            currentUserImage = user.get("userImage");
            currentUserId = user.id;
        }
        else {
            showStatusSelect = "hide";
        }
        this.setState({ showModal: true, showStatusSelect: showStatusSelect, modalTrigger: modalTrigger, currentUserId: currentUserId, currentUserName: currentUserName, currentUserEmail:currentUserEmail, currentUserApt: currentUserApt, currentUserImage: currentUserImage})
    }

    closeModal() {
        this.setState({ currentUserId: null, currentUserImage:null, showModal: false, validated: false, UserError: false })
    }

    onCreateTenantSuccess(userId, user) {
        // console.log("onCreateTenantSuccess");
        UserDB.GetAllUsers(this.onGetAllUsersSuccess, this.onGetAllUsersError);
    }

    onCreateTenantError(error) {
        
    }
    
    createTenant() {
         const newUser = UserDB.GetUser();
         newUser.set('username', this.nameInput.current.value);
         newUser.set('email', this.emailInput.current.value);
         newUser.set('apartment', this.aptInput.current.value);
         newUser.set('userImage', this.state.currentUserImage);

        UserDB.CreateTenant(newUser, this.onCreateTenantSuccess, this.onCreateTenantError)

        this.closeModal();
    }

    updateUser() {
        const newUser = UserDB.GetUser();
        newUser.set('username', this.nameInput.current.value);
        newUser.set('email', this.emailInput.current.value);
        newUser.set('apartment', this.aptInput.current.value);
        newUser.set('userImage', this.state.currentUserImage);

        UserDB.UpdateUser(this.state.currentUserId, newUser, this.onCreateTenantSuccess, this.onCreateTenantError)
        this.closeModal();
   }

   onDeleteUserSuccess(userId, user) {
    UserDB.GetAllUsers(this.onGetAllUsersSuccess, this.onGetAllUsersError);
    }

    onDeleteUserError(error) {
        
    }


   deleteUser(user) {
    UserDB.DeleteUser(user.id, this.onDeleteUserSuccess, this.onDeleteUserError)
    this.closeModal();
}


    onGetAllUsersSuccess(users) {
        console.log("get all users success");
        console.log(users.length);
        var filteredUsers = []
        var hasRecords = false;
        if (users.length > 0) {
            hasRecords = true;
            console.log(hasRecords);
        }
        
        if(this.state.filter !== null) { //is this really needed considering the initial state value?
            this.filterUsers(this.state.filter, users, filteredUsers);
        }
        this.setState({users:users, filteredUsers:filteredUsers, hasRecords:hasRecords});
    }

    onGetAllUsersError(error) {
    }


    render() {
        let recordsDisplay = null;
        if (this.state.users == null) {
            //loading
            recordsDisplay = "Loading...";
        }
        else {
            recordsDisplay = <RecordsDisplay hasRecords={this.state.hasRecords} recordType="tenants" records={this.state.filteredUsers} openModal={this.openModal} deleteUser={this.deleteUser}/> ;
        }

        const { showModal, currentUserImage } = this.state;
        const currentUserImageUrl = (currentUserImage === ""? "./images/placeholder-square.jpg" : ImageHandler.GetImageUrl(currentUserImage));
        const modalAction = (
            this.state.modalTrigger === "New Tenant" ?  <Button variant="primary" type="submit">Create Tenant</Button>
                                                    :  <Button variant="primary" type="submit">Update Tenant</Button>
        );
      
      return (
        <div className="Tenants h-100">
            <Container className="py-6 px-5 mobile-padding">
                {/* <TenantsNavbar /> */}
                <InnerNavbar filterType="tenants" handleFilterChange={this.handleFilterChange}/>

                <div className="text-right pt-4 pb-1 mobile-center">
                    <Button variant="link" className="new-btn" onClick={this.openModal}>New Tenant</Button>
                </div>
                {recordsDisplay}
            </Container>

            {/* All tenants will have a default password of 1-6 */}
            
            <Modal show={showModal} onHide={this.closeModal} size="lg">
                <Form className="userModalFrm" noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.modalTrigger}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Alert variant="danger" show={this.state.userError}>
                            {this.state.errorMsg}
                        </Alert>
                            <Form.Group as={Row} controlId="formNameTxt">
                                <Form.Label column sm={2}>
                                    Name:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" ref={this.nameInput} defaultValue={this.state.currentUserName} placeholder="Enter tenant's name" pattern="([a-zA-Z0-9]{1,20}\s?){1,10}" required/>

                                    <Form.Control.Feedback type="invalid">
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formEmailTxt">
                                <Form.Label column sm={2}>
                                    Email:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" ref={this.emailInput} defaultValue={this.state.currentUserEmail} placeholder="Enter tenant's email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,}$" required/>
                                    <Form.Control.Feedback type="invalid">
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formAptTxt">
                                <Form.Label column sm={2}>
                                    Apartment:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" ref={this.aptInput} defaultValue={this.state.currentUserApt} placeholder="Enter tenant's apartment" pattern="([a-zA-Z0-9]{1,20}\s?){1,5}" required/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formImgControl" className="align-items-center">
                                <Form.Label column sm={2}>
                                    Image URL:
                                </Form.Label>
                                <Col sm={7}>
                                    <div className="custom-file">
                                        <input ref={this.imgInput} type="file" className="custom-file-input" id="customFile" accept="image/*" onChange={this.imgChange}/>
                                        {/* <Form.Control type="file" placeholder="User image URL" accept="image/*" onChange={this.imgChange}/> */}
                                        <p id="image_progress"></p>
                                        <label className="custom-file-label" htmlFor="customFile">Choose image</label>
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <Image src={currentUserImageUrl} fluid className="thumbnail"/>
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

export default Tenants;
