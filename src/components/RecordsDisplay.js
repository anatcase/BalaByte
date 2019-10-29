import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PaginationNav from '../components/PaginationNav';

//Formerly named DashboardIssuesAccordion - create a cond rendering for each type  of accordion (per section use)
class Records extends React.Component {
    
    render () {
        return (
            <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="font-weight-bold">
                        Dynamic Issue Title With Dynamic Icon 2
                        <i className="fas fa-exclamation-circle float-right"></i>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col lg={4}>
                                                <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Backyardpool.jpg"/>
                                            </Col>
                                            <Col lg={8}>                    
                                                <Card.Text>
                                                    <li className="list-group-item"><span className="font-weight-bold">Details: </span>***Dynamic Content for Issue details**</li>
                                                    <li className="list-group-item"><span  className="font-weight-bold">Priority: </span>**Dynamic Content for Issue details**</li>
                                                    <li className="list-group-item"><span  className="font-weight-bold">Status: </span>**Dynamic Status for Issue**</li>
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>                             
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>     
            </Accordion>
        );     
    }
}

class NoRecords extends React.Component {
   
    render() {

        return (
            <p className="noRecordsMsg">There are no {this.props.recordType}. :)</p>
        );
    }
}
class RecordsDisplay extends React.Component {
  
    render() {
        
        return (
            this.props.hasRecords? 
                <div className="recordsDisplay">
                    <Records/>
                    <PaginationNav /> 
                    {/* which class should manage the activePage and totalItemsCount? */}
                    {/* <PaginationNav activePage={this.state.activePage} totalItemsCount={this.state.totalItemsCount}/> */}
                </div>
            : <NoRecords recordType={this.props.recordType}/>
        );
    }
}

export default RecordsDisplay;