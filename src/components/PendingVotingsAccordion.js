import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'react-datepicker/dist/react-datepicker.css'


class PendingVotingsAccordion extends React.Component {
    
    render() {
        const votingAccordion = (
            <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="font-weight-bold">
                        <Row>
                            <Col>Dynamic Voting Title</Col>
                        </Row>
                        {/* {this.props.votingStatus === "results"? } */}

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Row className="py-1 mx-0 mobile-center">
                                        <Col className="px-0 d-flex align-items-center">
                                        <Form.Group as={Row} controlId="formPrioritySelect" className="vote-form mx-0 mobile-center w-100">
                                                <Form.Label column lg={2}>
                                                    Your Vote:
                                                </Form.Label>
                                                <Col lg={5}>
                                                    <Form.Control required as="select" className="priority-select">
                                                        <option value="In Favor">In Favor</option>
                                                        <option value="Against">Against</option>
                                                    </Form.Control>
                                                </Col>
                                                <Col lg={5} className="mobile-center text-left">
                                                    <Button type="submit" className="ml-2">Submit Vote</Button>
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
        );

        return (
           <div className="PendingVotingsAccordion">
               {votingAccordion}
           </div>
        );
    }
}

export default PendingVotingsAccordion;