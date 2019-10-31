import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class IssuesAccordion extends React.Component {
  
    render() {
        return (
           <div className="IssuesAccordion">
               <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="font-weight-bold">
                        Dynamic Issue Title With Dynamic Icon 2
                        <i className="fas fa-exclamation-circle float-right"></i>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Row>
                                    <Col className="issue-box">
                                        <Row>
                                            <Col lg={4}>
                                                <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Backyardpool.jpg"/>
                                            </Col>
                                            <Col lg={8}>                    
                                                <Card.Text>
                                                    <li className="list-group-item"><span className="font-weight-bold">Details: </span>***Dynamic Content for Issue details**</li>
                                                    <li className="list-group-item"><span  className="font-weight-bold">Priority: </span>**Dynamic Content for Issue details**</li>
                                                    <li className="list-group-item"><span  className="font-weight-bold">Status: </span>**Dynamic Status for Issue**</li>
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col lg={8}>
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
                                                <Row className="Comment mt-4 my-2 mx-0">                                            
                                                    <Col lg={2} className="p-0">
                                                        <img className="rounded-circle avatar" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-10.jpg" alt="Avatar"></img>
                                                    </Col>
                                                    <Col lg={10} className="pl-0">
                                                        <p className="font-weight-bold">Dynamic Tenant Name 2:</p>
                                                        <p>Dynamic comment text 2</p>
                                                        <div className="responses">
                                                            Dynamic responses
                                                            <Row className="Comment mt-4 my-2 mx-0">                                            
                                                                <Col lg={2} className="p-0">
                                                                    <img className="rounded-circle avatar" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-10.jpg" alt="Avatar"></img>
                                                                </Col>
                                                                <Col lg={10} className="pl-0">
                                                                    <p className="font-weight-bold">Dynamic responder Name 1 :</p>
                                                                    <p>Dynamic response text 1</p>
                                                                    <a href="#">Reply</a>
                                                                    <Form.Control as="textarea" rows="3" placeholder="Write your response" className="mt-1"/> 
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                        <a href="#">Reply</a>
                                                        <Form.Control as="textarea" rows="3" placeholder="Write your response" className="mt-1"/> 
                                                    </Col>
                                                </Row>
                                                <Form.Control as="textarea" rows="3" placeholder="Write a comment" className="mt-4"/>                   
                                            </Col>
                                            <Col lg={4} className="p-0 d-flex align-items-end justify-content-end">
                                                <Button variant="outline-dark" className="mx-2 align-bottom">Update</Button>
                                                <Button variant="danger" className="mx-2 align-bottom">Delete</Button>
                                            </Col>
                                        </Row>                                                           
                                    </Col>
                                </Row>                             
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>     
                </Accordion>
           </div>
        );
    }
}

export default IssuesAccordion;