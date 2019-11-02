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
                                    <Col lg={10} className="pb-1">
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
                                    <Col lg={2} className="p-0 d-flex align-items-end justify-content-end pt-3">
                                        <Row className="w-100 mx-0 text-center">
                                            <Col lg={6} className="px-0 responsive-btn-wrapper">
                                                <Button variant="outline-dark" className="m-0 responsive-btn">Update</Button>
                                            </Col>
                                            <Col lg={6} className="px-0 responsive-btn-wrapper">
                                                <Button variant="danger" className="m-0 responsive-btn">Delete</Button>
                                            </Col>
                                        </Row>
                                        {/* <Button variant="outline-dark" className="mx-2 align-bottom">Update</Button>
                                        <Button variant="danger" className="mx-2  align-bottom">Delete</Button> */}
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