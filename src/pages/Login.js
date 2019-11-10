import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UserDB from '../components/UserDB'
import Alert from 'react-bootstrap/Alert'

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
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange (e) {
        let value = e.target.value;
        //this.state.email = value;
        //this.setState(this.state);
        this.setState({email:value});
    }

    handlePasswordChange (e) {
        let value = e.target.value;
        this.setState({password:value});
        // this.state.password = value;
        // this.setState(this.state);
    }

    OnLoginSuccess(user) {
        // this.state.signUpError = false;
        // this.state.signUpSuccess = true;
        // this.setState(this.state);
        this.props.handleLogin();
    }

    OnLoginError(error) {
        let errorMsg = error.message.replace("username", "email");
        this.setState({
                        errorMsg:errorMsg,
                        loginError:true
                      });

        // this.state.errorMsg = errorMsg;
        // this.state.loginError = true;
        // this.setState(this.state);
    }

    Login() {
        UserDB.LogIn(this.state.email, this.state.password, this.OnLoginSuccess, this.OnLoginError);
      }

    handleSubmit(e) {
        const form = e.target;
        // this.state.validated = true;
        // this.setState(this.state);
        this.setState({validated:true});

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
                    <p>or <a href="#/SignUp">or create an account</a></p>
                    <Alert variant="danger" show={this.state.loginError}>
                        {this.state.errorMsg}
                    </Alert>
                    <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" autoComplete="username" onChange={this.handleEmailChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,}$" required/>
                            <Form.Control.Feedback type="invalid">
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" autoComplete="current-password" onChange={this.handlePasswordChange} pattern="(?=.*\d)(?=.*[a-z]).{8,20}" required/>
                             <Form.Control.Feedback type="invalid">
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="success" type="submit" block>
                            Come On In!
                        </Button>
                    </Form>
                </div>
                );
        }
}

export default Login;
