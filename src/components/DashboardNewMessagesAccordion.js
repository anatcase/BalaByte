import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

class DashboardNewMessagesAccordion extends React.Component {
   
    render() {
        return (
           <div className="DashboardNewMessagesAccordion">
               <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="font-weight-bold">
                        Dynamic Message Title With Dynamic Icon
                        <i className="fas fa-info-circle float-right"></i>
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
                                                    <li className="list-group-item"><span className="font-weight-bold">Details: </span>**Dynamic Content for message details**</li>
                                                    <li className="list-group-item"><span  className="font-weight-bold">Priority: </span>**Dynamic Content for message details**</li>
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
                        <i className="fas fa-exclamation-circle float-right"></i>
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
                                </Row>                             
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>     
                </Accordion>
           </div>
        );
    }
}

export default DashboardNewMessagesAccordion;