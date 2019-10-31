import React from 'react';
//import Nav from 'react-bootstrap/Nav'
//import Navbar from 'react-bootstrap/Navbar'
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import Button from 'react-bootstrap/Button'
//import DashboardIssuesAccordion from '../components/RecordsDisplay'
import { Container, Row, Col } from 'react-bootstrap'
import RecordsDisplay from '../components/RecordsDisplay';
import ChartsDisplay from '../components/ChartsDisplay';
import Navigation from '../components/Navigation';
import Badge from 'react-bootstrap/Badge';
import PieChart from 'react-minimal-pie-chart'


class CommitteeDashboard extends React.Component {
  
    render() {
     
      return (
                <div className="Dashboard h-100">
                    <Navigation isLoggedIn={this.props.isLoggedIn} pageName="CommitteeDashboard"/>

                    <Container fluid className="px-4"> 
                            <Row className="pb-2">
                                <Col className="border-2">
                                    <h2>New Reported Issues <Badge variant="light">0</Badge></h2> 
                                    {/* Who manages the hasRecords state? */}
                                    <RecordsDisplay hasRecords={true} recordType="new issues" /> 
                                </Col>
                                <Col>
                                    <h2>Overdue Issues <Badge variant="light">9</Badge></h2>
                                     {/* Who manages the hasRecords state? */}
                                    <RecordsDisplay hasRecords={true} recordType="overdue issues" />
                                </Col>
                            </Row>
                           
                            <Row className="pt-3 border-top">
                                <Col>                    
                                    <h2>Active Voting Percentage</h2>
                                    {/* Who manages the hasRecords state? */}
                                    <ChartsDisplay hasRecords={true} recordType="active votings" />
                             </Col>
                            </Row>
                        </Container>
                    {/* <Modal show="true" size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>New Issue</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form className="issueModalFrm">
                                <Form.Group as={Row} controlId="formNameTxt">
                                    <Form.Label column sm={2}>
                                        Title:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control required type="text" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formDetailsTxt">
                                    <Form.Label column sm={2}>
                                        Details:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control required as="textarea" rows="3" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPrioritySelect">
                                    <Form.Label column sm={2}>
                                        Priority:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control required as="select" className="priority-select">
                                            <option value="urgent">Urgent</option>
                                            <option value="important">Important</option>
                                            <option value="normal">Normal</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formImgControl" className="align-items-center">
                                    <Form.Label column sm={2}>
                                        Image URL:
                                    </Form.Label>
                                    <Col sm={7}>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="customFile" />
                                            <label className="custom-file-label" for="customFile">Choose image</label>
                                        </div>
                                    </Col>
                                    <Col sm={3}>
                                        <Image src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg" fluid/>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary">
                                Close
                            </Button>
                            <Button variant="primary">
                                Create
                            </Button>
                        </Modal.Footer>
                    </Modal> */}
            </div>
        );

    }
  }   


export default CommitteeDashboard;
