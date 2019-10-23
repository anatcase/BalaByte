import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function Login() {
  return (
    <div className="Login">
      <h1>Login to BalaByte</h1>
      <p>or <a href="#/signup">or create an account</a></p>
      {/* <Alert variant="danger" show={props.state.invalidLogin}>
          Invalid email or password!
      </Alert> */}
     <Form>        
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
        </Form.Group>

       
        <Button variant="success" type="button" block>
            Come On In!
        </Button>
    </Form>
</div>
  );
}

export default Login;
