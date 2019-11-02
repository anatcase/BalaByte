import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import UserDB from '../components/UserDB';
import Dashboard from './Dashboard';
import { Redirect } from 'react-router-dom'


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          email:"",
          password: "",
          community:"",
          address:"",
          validated:false,
          signUpError:false,
          errorMsg:"",
          //signUpSuccess:false
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleCommunityChange = this.handleCommunityChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.SignUp = this.SignUp.bind(this);
        this.OnSignUpSuccess = this.OnSignUpSuccess.bind(this);
        this.OnSignUpError = this.OnSignUpError.bind(this);
    }

    handleNameChange (e) {
        let value = e.target.value;
        this.state.username = value;
        this.setState(this.state);
    }

    handleEmailChange (e) {
        let value = e.target.value;
        this.state.email = value;
        this.setState(this.state);
    }

    handlePasswordChange (e) {
        let value = e.target.value;
        this.state.password = value;
        this.setState(this.state);
    }

    handleCommunityChange (e) {
        let value = e.target.value;
        this.state.community = value;
        this.setState(this.state);
    }

    handleAddressChange (e) {
        let value = e.target.value;
        this.state.address = value;
        this.setState(this.state);
    }
    
    OnSignUpSuccess(user) {
        // this.state.signUpError = false;
        // this.state.signUpSuccess = true;
        // this.setState(this.state);
        this.props.handleLogin();
    }

    OnSignUpError(error) {
        this.state.errorMsg = error.message;
        this.state.signUpError = true;
        this.setState(this.state);
    }

    SignUp() {
        const user = UserDB.GetUser()
        user.set('username', this.state.username);
        user.set('email', this.state.email);
        user.set('password', this.state.password);
        user.set('communityName', this.state.community);
        user.set('address', this.state.address);
        UserDB.SignUpCommitteeMember(user, this.OnSignUpSuccess, this.OnSignUpError);
      }

    handleSubmit(e) {
        const form = e.target;
        this.state.validated = true;
        this.setState(this.state);
        e.preventDefault();
        e.stopPropagation();
        if (form.checkValidity() === true) {
            this.SignUp();
        }
      }

    render() {
        // if (this.state.signUpSuccess) {
        //     console.log();
        //     this.props.changeActivePage("Dashboard");
        // }

        const destination = (
            <div className="SignUp">
                <h1>Create a Homeboy Account</h1>
                <p>or <a href="#/Login">or log in to your account</a></p>
                <Alert variant="danger" show={this.state.signUpError}>
                {this.state.errorMsg}
                </Alert>
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={this.handleNameChange} pattern="^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$" required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid name.
                        </Form.Control.Feedback>
                    </Form.Group>
        
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,}$" required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
        
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} pattern="(?=.*\d)(?=.*[a-z]).{8,20}" required/>
                        <Form.Control.Feedback type="invalid">
                        Password must be 8-20 characters, contain lowercase letters and numbers, and no spaces, special characters, or emoji.
                        </Form.Control.Feedback>
                    </Form.Group>
        
                    <Form.Group controlId="formBasicCommunity">
                        <Form.Label>Building Community Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter community name" onChange={this.handleCommunityChange} pattern="^[a-z0-9_-]{2,20}$" required/>
                        <Form.Control.Feedback type="invalid">
                            Please choose a name for your building.
                        </Form.Control.Feedback>
                        
                    </Form.Group>
        
                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Full Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" onChange={this.handleAddressChange} pattern="(\d{1,}) [a-zA-Z0-9\s]+(\.)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}" required/>
                        <Form.Control.Feedback type="invalid">
                        Address is a required field.
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Button type="submit" variant="success"  block>
                        Create New Account
                    </Button>
                </Form>
            </div>    
        );
        
        return (
            <div>{destination}</div>
        );
    }
}

export default SignUp;
