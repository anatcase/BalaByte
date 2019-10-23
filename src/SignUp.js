import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function SignUp() {
  return (
    <div className="SignUp">
      <h1>Create a BalaByte Account</h1>
      <p>or <a href="#/login">or log in to your account</a></p>
      {/* <Alert variant="danger" show={props.state.invalidLogin}>
          Invalid email or password!
      </Alert> */}
     <Form>
        <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name"/>
        </Form.Group>

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

        <Form.Group controlId="formBasicCommunity">
            <Form.Label>Building Community Name</Form.Label>
            <Form.Control type="text" placeholder="Enter community name"/>
        </Form.Group>

        <Form.Group controlId="formBasicAddress">
            <Form.Label>Full Address</Form.Label>
            <Form.Control type="text" placeholder="Enter address"/>
        </Form.Group>
        
        <Button variant="success" type="button" block>
            Create New Account
        </Button>
    </Form>
</div>
  );
}

export default SignUp;
