import React from 'react';
//import Nav from 'react-bootstrap/Nav'
//import Navbar from 'react-bootstrap/Navbar'
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import Button from 'react-bootstrap/Button'
//import DashboardIssuesAccordion from '../components/RecordsDisplay'
import { Container, Row, Col } from 'react-bootstrap'
import RecordsDisplay from '../components/RecordsDisplay';
import Navigation from '../components/Navigation';
import ChartsDisplay from '../components/ChartsDisplay';
import Badge from 'react-bootstrap/Badge';
import PieChart from 'react-minimal-pie-chart'


class TenantDashboard extends React.Component {
  
    render() {
     
      return (
                <div className="Dashboard h-100">
                   <Navigation isLoggedIn={this.props.isLoggedIn} pageName="TenantDashboard"/>

                    <Container fluid className="px-4">
                            <Row className="pb-2">
                                <Col lg={6} className="issue-box">
                                    <h2>New Messages <Badge variant="light">0</Badge></h2> 
                                    {/* Who manages the hasRecords state? */}
                                    <RecordsDisplay hasRecords={true} recordType="new messages" /> 
                                </Col>
                                <Col lg={6}>
                                    <h2>Pending Votings <Badge variant="light">9</Badge></h2>
                                    <RecordsDisplay hasRecords={true} recordType="pending votings" />
                                </Col>
                            </Row>
                           
                            <Row className="pt-3 border-top">
                                <Col className="issue-box">
                                    <h2>Voting Results</h2>
                                    <ChartsDisplay hasRecords={true} recordType="voting results" />                                         
                                </Col>
                              
                                <Col className="issue-box">                   
                                    <h2>New Issues <Badge variant="light">2</Badge></h2>
                                    <RecordsDisplay hasRecords={true} recordType="new issues" />
                                </Col>
                                 <Col>                    
                                    <h2>New Resolved Issues <Badge variant="light">3</Badge></h2>
                                    <RecordsDisplay hasRecords={true} recordType="new resolved issues" />
                                 </Col>
                            </Row>
                        </Container>
            </div>
        );

    }
  }   


export default TenantDashboard;
