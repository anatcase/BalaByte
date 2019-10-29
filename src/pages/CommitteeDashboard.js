import React from 'react';
//import Nav from 'react-bootstrap/Nav'
//import Navbar from 'react-bootstrap/Navbar'
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import Button from 'react-bootstrap/Button'
//import DashboardIssuesAccordion from '../components/RecordsDisplay'
import { Container, Row, Col } from 'react-bootstrap'
import RecordsDisplay from '../components/RecordsDisplay';
import Badge from 'react-bootstrap/Badge';
import PieChart from 'react-minimal-pie-chart'


class CommitteeDashboard extends React.Component {
  
    render() {
     
      return (
                <div className="Dashboard h-100">
                    <Container fluid className="p-4 h-100">
                            <Row className="pb-2">
                                <Col className="border-2">
                                    <h2>New Reported Issues <Badge variant="light">0</Badge></h2> 
                                    <RecordsDisplay hasRecords={true} recordType="new issues" handlePageChange={this.handlePageChange}/>
                                </Col>
                                <Col>
                                    <h2>Overdue Issues <Badge variant="light">9</Badge></h2>
                                </Col>
                            </Row>
                           
                            <Row className="pt-3 border-top">
                                <Col>                    
                                    <Row>
                                        <Col><h2>Active Voting Percentage</h2></Col>
                                    </Row>

                                    <Row className="text-center h-100 d-flex align-items-center">
                                        {this.props.activeVotings > 0 ?
                                        <>
                                            <Col>
                                                    <h6>Voting Title1</h6> 
                                                    <p className="mb-1">Voting End Date</p>
                                                    <PieChart className="chart"
                                                        data={[
                                                            { title: 'For', value: 80, color: '#90ee90' },
                                                            { title: 'Against', value: 20, color: '#a2012c' },
                                                    ]}/>
                                            </Col>
                                            <Col>
                                            <h6>Voting Title1</h6> 
                                                <p className="mb-1">Voting End Date</p>
                                                <PieChart className="chart"
                                                    data={[
                                                        { title: 'For', value: 80, color: '#90ee90' },
                                                        { title: 'Against', value: 20, color: '#a2012c' },
                                                    ]}
                                                    />
                                            </Col>
                                            <Col>
                                            <h6>Voting Title1</h6> 
                                                <p className="mb-1">Voting End Date</p>
                                                <PieChart className="chart"
                                                    data={[
                                                        { title: 'For', value: 80, color: '#90ee90' },
                                                        { title: 'Against', value: 20, color: '#a2012c' },
                                                    ]}
                                                    />
                                            </Col>
                                        </>
                                        :
                                        <Col><p className="noRecordsMsg">Ain't nobody voting in this house.</p></Col>
                                       }
                                </Row>
                             </Col>
                            </Row>
                        </Container>
                    {/* <Container fluid className="p-4">
                        <div className="text-right pr-3 pt-4 pb-1">
                            <a href="#" style={{textDecoration:"underline", fontWeight:"bolder"}}>New Issue</a>
                        </div>
                        <DashboardIssuesAccordion /> 
                        <PaginationNav handlePageChange={this.handlePageChange} activePage={this.state.activePage} totalItemsCount={this.state.totalItemsCount}/>
                    </Container> */}
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
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="customFile" />
                                            <label class="custom-file-label" for="customFile">Choose image</label>
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
