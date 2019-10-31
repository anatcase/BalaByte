import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PaginationNav from './PaginationNav';
import PieChart from 'react-minimal-pie-chart'

class Records extends React.Component {
    
    render () {
        return (
            <Row className="text-center py-3">
                {/* Make reusable comp*/}
                <Col lg={4} className="chartBox">
                    <h6>Voting Title1</h6> 
                    <p className="mb-1 font-weight-normal">By: Date</p>
                    <PieChart className="chart"
                        data={[
                            { title: 'For', value: 80, color: '#90ee90' },
                            { title: 'Against', value: 20, color: '#a2012c' },
                    ]}/>
                </Col>
                <Col lg={4} className="chartBox">
                    <h6>Voting Title1</h6> 
                    <p className="mb-1 font-weight-normal">By: Date</p>
                        <PieChart className="chart"
                            data={[
                                { title: 'For', value: 80, color: '#90ee90' },
                                { title: 'Against', value: 20, color: '#a2012c' },
                            ]}
                            />
                </Col>
                <Col lg={4} className="chartBox">
                    <h6>Voting Title1</h6> 
                    <p className="mb-1 font-weight-normal">By: Date</p>
                        <PieChart className="chart"
                            data={[
                                { title: 'In Favor', value: 80, color: '#90ee90' },
                                { title: 'Against', value: 20, color: '#a2012c' },
                            ]}
                            />
                </Col>
            </Row>
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
class ChartsDisplay extends React.Component {
  
    render() {
        
        return (
            this.props.hasRecords? 
                <div className="chartsDisplay">
                    <Records/>
                    <PaginationNav /> 
                    {/* which class should manage the activePage and totalItemsCount? */}
                    {/* <PaginationNav activePage={this.state.activePage} totalItemsCount={this.state.totalItemsCount}/> */}
                </div>
            : <NoRecords recordType={this.props.recordType}/>
        );
    }
}

export default ChartsDisplay;