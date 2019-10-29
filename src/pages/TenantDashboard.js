import React from 'react';
//import Nav from 'react-bootstrap/Nav'
//import Navbar from 'react-bootstrap/Navbar'
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import Button from 'react-bootstrap/Button'
import DashboardIssuesAccordion from '../components/DashboardIssuesAccordion'
import { Container, Row, Col } from 'react-bootstrap'
import PaginationNav from '../components/PaginationNav';
import Badge from 'react-bootstrap/Badge';
import PieChart from 'react-minimal-pie-chart'


//import Modal from 'react-bootstrap/Modal'
//import Form from 'react-bootstrap/Form'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'


// function Navigation() {
//   return (
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Navbar.Brand href="#home">BalaByte Holdings</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="#features">Dashboard</Nav.Link>
//             <Nav.Link href="#pricing">Tenants</Nav.Link>
//             <Nav.Link href="#pricing">Issues</Nav.Link>
//             <Nav.Link href="#pricing">Issues</Nav.Link>
//             <Nav.Link href="#pricing">Voting</Nav.Link>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#deets">Logout</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//   );
// }

class Dashboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activePage: 1,
        totalItemsCount: 100 // This will come from the relevant page: Issues\votings\issues etc, where the total number of records will be stored in the page's state.
      };
      this.handlePageChange = this.handlePageChange.bind(this);
    }
    
    handlePageChange(e) {
      let val = parseInt(e.target.innerHTML);
      let pageNumber = this.state.activePage;
  
      if (isNaN(val)) {
        console.log('Not a number ' + val);
        val = e.target.innerText;
        if (val.includes("‹")) {
          console.log("Previous");
          pageNumber--;
        }
        else if (val.includes("›")) {
          console.log("Next");
          pageNumber++;
        }
        
      }
      else {
        console.log('number ' + val);
        pageNumber =  val;
      }
      console.log('active page is ' + pageNumber);
      //this.state.activePage = pageNumber;
      console.log(this.state.activePage);
      //this.setState(this.state);
      this.setState({activePage:pageNumber});
      console.log(this.state.activePage);
    }
  
    render() {
      
      return (
                <div className="Dashboard h-100">
                    <Container fluid className="p-4 h-100">
                            <Row className="pb-2">
                                <Col className="border-2">
                                        <h2>New Reported Issues <Badge variant="light">0</Badge></h2> 
                                        {/* {this.props.newIssues > 0 ? <> */}
                                            <DashboardIssuesAccordion/> {/*Render issues registered since last login / 7 days only */}
                                            <PaginationNav handlePageChange={this.handlePageChange} activePage={this.state.activePage} totalItemsCount={this.state.totalItemsCount}/>
                                            {/* </>
                                            : 
                                            <p className="noRecordsMsg">Nobody's bichin', bra. All good in da hood :)</p>
                                        } */}
                                </Col>
                                <Col>
                                    <h2>Overdue Issues <Badge variant="light">9</Badge></h2>
                                    {this.props.overdueIssues > 0 ? <>
                                    <DashboardIssuesAccordion/> {/*Render issues with expired end date */}
                                    <PaginationNav handlePageChange={this.handlePageChange} activePage={this.state.activePage} totalItemsCount={this.state.totalItemsCount}/>
                                    </>
                                    : 
                                    <p className="noRecordsMsg">You're always on time, man. Amen!</p>
                                    }
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


export default Dashboard;
