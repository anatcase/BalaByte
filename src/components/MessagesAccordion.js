import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class MessagesAccordion extends React.Component {
    constructor(props) {
        super(props);
    }    

    render() {
        return (
           <div className="MessagesAccordion">
               <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="text-left font-weight-bold">
                        Dynamic Message Title
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
                                                <Card.Text className="text-left font-weight-bold">
                                                    <p>Details: <span className="text-left font-weight-normal">**Dynamic Content for message details**</span></p>
                                                    <p>Priority: <span className="text-left font-weight-normal">**Dynamic Content for priority type**</span></p>
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
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="text-left font-weight-bold">
                        Dynamic Message Title
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
                                                <Card.Text className="text-left font-weight-bold">
                                                    <p>Details: <span className="text-left font-weight-normal">**Dynamic Content for message details**</span></p>
                                                    <p>Priority: <span className="text-left font-weight-normal">**Dynamic Content for priority type**</span></p>
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="text-left">
                                        <h6>Comments:</h6>
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