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
          signUpSuccess:false
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
        this.state.signUpError = false;
        this.state.signUpSuccess = true;
        this.props.isLoggedIn = true;
        this.setState(this.state);

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
        if (this.state.signUpSuccess) {
            return <Redirect to={"/Dashboard" + this.props.isLoggedIn}/>
        }

        const destination = (
            <div className="SignUp">
                <h1>Create a Homeboy Account</h1>
                <p>or <a href="#/login">or log in to your account</a></p>
                <Alert variant="danger" show={this.state.signUpError}>
                {this.state.errorMsg}
                </Alert>
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={this.handleNameChange} required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid name.
                        </Form.Control.Feedback>
                    </Form.Group>
        
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange} required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
        
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid password.
                        </Form.Control.Feedback>
                    </Form.Group>
        
                    <Form.Group controlId="formBasicCommunity">
                        <Form.Label>Building Community Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter community name" onChange={this.handleCommunityChange} required/>
                        <Form.Control.Feedback type="invalid">
                            Please choose a name for your building.
                        </Form.Control.Feedback>
                        
                    </Form.Group>
        
                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Full Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" onChange={this.handleAddressChange} required/>
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
