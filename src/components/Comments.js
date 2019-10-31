import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Comments extends React.Component {
    
    render () {

       return (
        <div className="Comments">
            <h6>Comments:</h6>
            <Row className="Comment mt-4 my-2 mx-0">                                            
                <Col lg={2} className="p-0">
                    <img className="rounded-circle avatar" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-10.jpg" alt="Avatar"></img>
                </Col>
                <Col lg={10} className="pl-0">
                    <p className="font-weight-bold">Dynamic Tenant Name:</p>
                    <p>Dynamic comment text</p>
                </Col>
            </Row>
            <Form.Control as="textarea" rows="3" placeholder="Add a comment" className="mt-4"/>                   
        </div>
    );
  }
}

export default Comments;