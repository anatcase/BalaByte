import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UserDB from '../components/UserDB';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email:"",
          password: "",
          validated:false,
          loginError:false,
          errorMsg:"",
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Login = this.Login.bind(this);
        this.OnLoginSuccess = this.OnLoginSuccess.bind(this);
        this.OnLoginError = this.OnLoginError.bind(this);
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

    OnLoginSuccess(user) {
        // this.state.signUpError = false;
        // this.state.signUpSuccess = true;
        // this.setState(this.state);
        this.props.handleLogin();
    }

    OnLoginError(error) {
        this.state.errorMsg = error.message;
        this.state.loginError = true;
        this.setState(this.state);
    }

    Login() {
        UserDB.Login(this.state.email, this.state.password, this.OnLoginSuccess, this.OnLoginError);
        // user.set('username', this.state.username);
        // user.set('email', this.state.email);
        // user.set('password', this.state.password);
        // user.set('communityName', this.state.community);
        // user.set('address', this.state.address);
        // UserDB.SignUpCommitteeMember(user, this.OnSignUpSuccess, this.OnSignUpError);
      }

    handleSubmit(e) {
        const form = e.target;
        this.state.validated = true;
        this.setState(this.state);
        e.preventDefault();
        e.stopPropagation();
        if (form.checkValidity() === true) {
            this.Login();
        }
      }

    render() {
                return (
                    <div className="Login">
                    <h1>Login to Homeboy</h1>
                    <p>or <a href="/SignUp">or create an account</a></p>
                    <Alert variant="danger" show={this.state.loginError}>
                        {this.state.errorMsg}
                    </Alert>
                    <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            {/* <Form.Control.Feedback type="invalid">
                                Missing email \ There's no account for this email
                            </Form.Control.Feedback> */}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                            {/* <Form.Control.Feedback type="invalid">
                                Invalid password
                            </Form.Control.Feedback> */}
                        </Form.Group>
                        <Button variant="success" type="button" block>
                            Come On In!
                        </Button>
                    </Form>
                </div>
                );
        }
}

export default Login;
