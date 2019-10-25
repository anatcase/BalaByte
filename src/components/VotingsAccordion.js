import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PieChart from 'react-minimal-pie-chart';


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
                                            <Col lg={8}>                    
                                                <Card.Text>
                                                    <Row>
                                                        <p>
                                                            <h6 className="d-inline">Details: </h6> *Dynamic Voting Details*
                                                        </p>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <p>
                                                              <h6 className="d-inline">End Date: </h6> *Dynamic End Date*
                                                            </p>
                                                        </Col>
                                                        <Col>
                                                            <Button variant="outline-dark" className="mx-2 align-bottom">Update End Date</Button>
                                                        </Col>
                                                    </Row>
                                                </Card.Text>
                                            </Col>
                                            <Col lg={4}>
                                                <h6 className="text-center mb-3">Voting Precentage</h6>
                                                <PieChart
                                                    data={[
                                                        { title: 'One', value: 10, color: '#E38627' },
                                                        { title: 'Two', value: 15, color: '#C13C37' },
                                                        { title: 'Three', value: 20, color: '#6A2135' },
                                                    ]}
                                                    />;                                               
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

export default VotingsAccordion;