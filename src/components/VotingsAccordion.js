import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class VotingsAccordion extends React.Component {
    constructor(props) {
        super(props);
    }    

    render() {
        return (
           <div className="VotingsAccordion">
               <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="font-weight-bold">
                        Dynamic Voting Title
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
                                                    <p><h6 className="d-inline">Name: </h6>**Dynamic Voting Name**</p>
                                                    <p><h6 className="d-inline">Email: </h6>**Dynamic Voting Email**</p>
                                                    <p><h6 className="d-inline">Apt: </h6>**Dynamic Apt**</p>
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
                        Dynamic Voting Name2
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
                                                    <p><h6 className="d-inline">Name: </h6>*Dynamic Voting Name2*</p>
                                                    <p><h6 className="d-inline">Email: </h6>*Dynamic Voting Email2*</p>
                                                    <p><h6 className="d-inline">Apt: </h6>*Dynamic Apt2*</p>
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

export default VotingsAccordion;