import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class TenantsAccordion extends React.Component {
 
    render() {
        return (
           <div className="TenantsAccordion">
               <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="font-weight-bold">
                        Dynamic Tenant Name
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col lg={4}>
                                                <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Backyardpool.jpg"/>
                                            </Col>
                                            <Col lg={8}>                    
                                                <Card.Text>
                                                    <li className="list-group-item"><span className="font-weight-bold">Name: </span>**Dynamic Tenant Name**</li>
                                                    <li className="list-group-item"><span  className="font-weight-bold">Email: </span>**Dynamic Tenant Email**</li>
                                                    <li className="list-group-item"><span  className="font-weight-bold">Apt: </span>**Dynamic Apt**</li>
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="p-0 d-flex align-items-end justify-content-end">
                                        <Button variant="outline-dark" className="mx-2 align-bottom">Update</Button>
                                        <Button variant="danger" className="mx-2  align-bottom">Delete</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="font-weight-bold">
                        Dynamic Tenant Name2
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col lg={4}>
                                                <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Backyardpool.jpg"/>
                                            </Col>
                                            <Col lg={8}>                    
                                                <Card.Text>
                                                    <li className="list-group-item"><span className="font-weight-bold">Name: </span>**Dynamic Tenant Name2**</li>
                                                    <li className="list-group-item"><span  className="font-weight-bold">Email: </span>**Dynamic Tenant Email2**</li>
                                                    <li className="list-group-item"><span  className="font-weight-bold">Apt: </span>**Dynamic Apt2**</li>
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="p-0 d-flex align-items-end justify-content-end">
                                        <Button variant="outline-dark" className="mx-2 align-bottom">Update</Button>
                                        <Button variant="danger" className="mx-2  align-bottom">Delete</Button>
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

export default TenantsAccordion;