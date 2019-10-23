import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class MessagesAccordion extends React.Component {
    constructor(props) {
        super(props);
    }    

    render() {
        return (
           <div className="MessagesAccordion">
               <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="font-weight-bold">
                        Dynamic Message Title With Dynamic Icon
                        <i class="fas fa-info-circle float-right"></i>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Row>
                                    <Col className="border-2">
                                        <Row>
                                            <Col lg={4}>
                                                <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Backyardpool.jpg"/>
                                            </Col>
                                            <Col lg={8}>                    
                                                <Card.Text>
                                                    <p><h6 className="d-inline">Details:</h6> **Dynamic Content for message details**</p>
                                                    <p><h6 className="d-inline">Priority:</h6> **Dynamic Content for message details**</p>
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                    <h6>Comments:</h6>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>                     
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="font-weight-bold">
                        Dynamic Message Title With Dynamic Icon 2
                        <i class="fas fa-exclamation-circle float-right"></i>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col className="border-2">
                                        <Row>
                                            <Col lg={4}>
                                                <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Backyardpool.jpg"/>
                                            </Col>
                                            <Col lg={8}>                    
                                                <Card.Text>
                                                    <p><h6 className="d-inline">Details:</h6> **Dynamic Content for message details**</p>
                                                    <p><h6 className="d-inline">Priority:</h6> **Dynamic Content for message details**</p>
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
                                                        <img class="rounded-circle avatar" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-10.jpg" alt="Avatar"></img>
                                                    </Col>
                                                    <Col lg={10} className="pl-0">
                                                        <h7 className="font-weight-bold">Dynamic Tenant Name:</h7>
                                                        <p>Dynamic comment text</p>
                                                    </Col>
                                                </Row>
                                                <Row className="Comment mt-4 my-2 mx-0">                                            
                                                    <Col lg={2} className="p-0">
                                                        <img class="rounded-circle avatar" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-10.jpg" alt="Avatar"></img>
                                                    </Col>
                                                    <Col lg={10} className="pl-0">
                                                        <h7 className="font-weight-bold">Dynamic Tenant Name 2:</h7>
                                                        <p>Dynamic comment text 2</p>
                                                    </Col>
                                                </Row>
                                                <Form.Control as="textarea" rows="3" placeholder="Add comment"/>                   
                                            </Col>
                                            <Col lg={4} className="p-0 d-flex align-items-end justify-content-end">
                                                <Button variant="outline-dark" className="mx-2 align-bottom">Update</Button>
                                                <Button variant="danger" className="mx-2  align-bottom">Delete</Button>
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

export default MessagesAccordion;