import React from 'react';
import Form from 'react-bootstrap/Form'


function SignUp() {
  return (
    <div className="SignUp">
      <h1>Create a Committee Member Account</h1>
      <p>or <a href="#/login">or log in to your account</a></p>
      {/* <Alert variant="danger" show={this.state.invalidLogin}>
          Invalid email or password!
      </Alert> */}
     <Form>
        <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={this.nameInput} type="text" placeholder="Enter name"/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={this.emailInput} type="email" placeholder="Enter email"/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={this.pwdInput}  type="password" placeholder="Password"/>
        </Form.Group>

        <Form.Group controlId="formBasicCommunity">
            <Form.Label>Building Community Name</Form.Label>
            <Form.Control ref={this.communityInput} type="text" placeholder="Enter community name"/>
        </Form.Group>

        <Form.Group controlId="formBasicAddress">
            <Form.Label>Full Address</Form.Label>
            <Form.Control ref={this.addressInput} type="text" placeholder="Enter address"/>
        </Form.Group>
        
        <Button variant="success" type="button" block onClick={this.signup}>
            Create New Account
        </Button>
    </Form>
</div>
  );
}

export default SignUp;
