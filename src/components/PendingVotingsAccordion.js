import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PieChart from 'react-minimal-pie-chart'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'


class PendingVotingsAccordion extends React.Component {
    
    render() {
        const votingAccordion = (
            <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="font-weight-bold">
                        <Row>
                            <Col>Dynamic Voting Title</Col>
                            <Col className="text-right">{this.props.votingStatus === "results"? 'Result: Dynamic record result': null}</Col>
                        </Row>
                        {/* {this.props.votingStatus === "results"? } */}

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Row className="mx-0">
                                    <Col lg={this.props.votingStatus === "results"? 5 : 8} className="px-0 d-flex flex-column justify-content-between">                    
                                        <Row className="mx-0">
                                                <Col className="px-0">
                                                    <Form.Group as={Row} controlId="formPrioritySelect">
                                                        <Form.Label column sm={4}>
                                                            Your vote:
                                                        </Form.Label>
                                                        <Col sm={4}>
                                                            <Form.Control required as="select" className="priority-select">
                                                                <option value="In Favor">In Favor</option>
                                                                <option value="Against">Against</option>
                                                            </Form.Control>
                                                        </Col>
                                                        <Col sm={4}>
                                                            <Button type="submit">Submit Vote</Button>
                                                        </Col>
                                                    </Form.Group>
                                                </Col>
                                        </Row>
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