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

class CommitteeDashboard extends React.Component {
    
    render() {
      
      return (
                
                    <Container fluid className="px-4"> 
                            <Row className="pb-2">
                                <Col lg={6} className="issue-box">
                                    <h2>New Reported Issues <Badge variant="light">0</Badge></h2> 
                                    {/* Who manages the hasRecords state? */}
                                    <RecordsDisplay hasRecords={true} recordType="new issues" /> 
                                </Col>
                                <Col lg={6}>
                                    <h2>Overdue Issues <Badge variant="light">9</Badge></h2>
                                     {/* Who manages the hasRecords state? */}
                                    <RecordsDisplay hasRecords={true} recordType="overdue issues" />
                                </Col>
                            </Row>
                           
                            <Row className="pt-3 border-top">
                                <Col>                    
                                    <h2>Active Voting Percentage</h2>
                                    {/* Who manages the hasRecords state? */}

                                    <ChartsDisplay hasRecords={true} recordType="active votings" pageName="CommitteeDashboard"/>
                                    
                                   
                                </Col>
                            </Row>
                        </Container>
            

    }
  }   


class TenantDashboard extends React.Component {
  
    render() {
     
      return (
               

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
                                <Col className="issue-box" lg={4}>
                                    <h2 className="mb-4">Voting Results</h2>
                                    <ChartsDisplay hasRecords={true} recordType="voting results" pageName="TenantDashboard"/>
                                </Col>
                              
                                <Col className="issue-box" lg={4}>                   
                                    <h2>New Issues <Badge variant="light">2</Badge></h2>
                                    <RecordsDisplay hasRecords={true} recordType="new issues" />
                                </Col>
                                 <Col lg={4}>                    
                                    <h2>New Resolved Issues <Badge variant="light">3</Badge></h2>
                                    <RecordsDisplay hasRecords={true} recordType="new resolved issues" />
                                 </Col>
                            </Row>
                        </Container>
           
        );

    }
  }   

  class Dashboard extends React.Component {
    
    render() {
      const Dashboard = (
        this.props.activeUser === "admin"? <CommitteeDashboard /> : <TenantDashboard />
      );

      return (
        <div className="Dashboard h-100">
            <Navigation isLoggedIn={this.props.isLoggedIn} pageName="Dashboard"/>
            {Dashboard}
        </div>
        );

    }
}   


export default Dashboard;
