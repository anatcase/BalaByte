import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PieChart from 'react-minimal-pie-chart'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'


class VotingsAccordion extends React.Component {
    // constructor(props) {
    //     super(props);
    // }    

    render() {
        const votingAccordion = (
            <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="font-weight-bold">
                        <Row>
                            <Col lg={6}>Dynamic Voting Title</Col>
                            <Col lg={6} className="text-right">{this.props.votingStatus === "results"? 'Result: Dynamic record result': null}</Col>
                        </Row>
                        {/* {this.props.votingStatus === "results"? } */}

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Row className="mx-0">
                                    <Col lg={this.props.votingStatus === "results"? 5 : 8} className="px-0 d-flex flex-column justify-content-between">                    
                                        <Row className="mx-0">
                                                <h6 className="mr-1">Details:</h6> <span>*Dynamic Voting Details*</span>
                                        </Row>
                                        <Row className="mx-0">
                                            <Col className="px-0 d-flex align-items-center">
                                                <h6 className="mr-1">{this.props.votingStatus === "active"? 'End Date': 'Ended'}:</h6> <span>*Date &amp; Hour*</span>
                                            </Col>
                                            {this.props.votingStatus === "results"? null:
                                                
                                            <Col className={this.props.user === "tenant"? "hide" : "px-0"}>
                                                <DatePicker placeholderText="Update End Date" withPortal showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={30}
                                                timeCaption="time"
                                                dateFormat="MMMM d, hh:mm"/>
                                            </Col>
                                            }
                                        </Row>
                                        <Row className={this.props.votingStatus === "results" || this.props.user === "admin" ? "hide" : "mx-0"}>
                                             <Col className="px-0 d-flex align-items-center">
                                                <Form.Group as={Row} controlId="formPrioritySelect" className="vote-form">
                                                        <Form.Label column lg="{3}">
                                                            Your Vote:
                                                        </Form.Label>
                                                        <Col lg="{7}">
                                                            <Form.Control required as="select" className="priority-select">
                                                                <option value="In Favor">In Favor</option>
                                                                <option value="Against">Against</option>
                                                            </Form.Control>
                                                        </Col>
                                                        <Col lg="{2}">
                                                            <Button type="submit">Submit Vote</Button>
                                                        </Col>
                                                    </Form.Group>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={this.props.votingStatus === "results"? 7 : 4}>
                                        <Row>

                                        {this.props.votingStatus === "results"? 
                                            <Col>
                                                <h6 className="text-center mb-3">Results</h6>
                                                <PieChart className="chart"
                                                    data={[
                                                        { title: 'For', value: 80, color: '#90ee90' },
                                                        { title: 'Against', value: 20, color: '#a2012c' },
                                                    ]}
                                                    />
                                            </Col>
                                            :null}
                                            <Col>
                                                <h6 className="text-center mb-3">Voting Precentage</h6>
                                                <PieChart className="chart"
                                                    data={[
                                                        { title: 'For', value: 10, color: '#90ee90' },
                                                        { title: 'Against', value: 15, color: '#a2012c' },
                                                    ]}
                                                    />
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
           <div className="VotingsAccordion">
               {votingAccordion}
           </div>
        );
    }
}

export default VotingsAccordion;