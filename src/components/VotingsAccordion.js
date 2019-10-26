import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PieChart from 'react-minimal-pie-chart';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PaginationBar from './PaginationNav';


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
                                <Row className="mx-0">
                                    <Col lg={8} className="px-0">                    
                                        <Card.Text className="d-flex flex-column h-100 justify-content-between">
                                            <Row className="mx-0">
                                                <p>
                                                    <h6 className="d-inline">Details: </h6> *Dynamic Voting Details*
                                                </p>
                                            </Row>
                                            <Row className="mx-0">
                                                <Col className="px-0 d-flex align-items-center">
                                                    <p className="m-0">
                                                        <h6 className="d-inline">End Date: </h6> *Date &amp; Hour*
                                                    </p>
                                                </Col>
                                                <Col className="px-0">
                                                    <DatePicker placeholderText="Update End Date" withPortal showTimeSelect
                                                    timeFormat="HH:mm"
                                                    timeIntervals={30}
                                                    timeCaption="time"
                                                    dateFormat="MMMM d, hh:mm"/>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Col>
                                    <Col lg={4}>
                                        <h6 className="text-center mb-3">Voting Precentage</h6>
                                        <PieChart
                                            data={[
                                                { title: 'For', value: 10, color: '#90ee90' },
                                                { title: 'Against', value: 15, color: '#a2012c' },
                                            ]}
                                            />                                              
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                         
                </Accordion>
                <PaginationNav />
           </div>
        );
    }
}

export default VotingsAccordion;