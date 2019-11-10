import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
// import Card from 'react-bootstrap/Card'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

class DashboardIssuesAccordion extends React.Component {
    
    render () {
        // const issues = this.props.records;
        //  const priority = (
        //                     issue.priority == "important"? "star" : "exclamation"
        //                  );
        // const issueCards = issues.map(issue =>
        //     <Card>
        //         <Accordion.Toggle as={Card.Header} eventKey="0" className="font-weight-bold">
        //         {issue.title}
        //         <i className={"fas fa-" + issue.priority  + "-circle float-right"}></i>
        //         </Accordion.Toggle>
        //         <Accordion.Collapse eventKey="0">
        //             <Card.Body>
        //                 <Row>
        //                     <Col>
        //                         <Row>
        //                             <Col lg={4}>
        //                                 <Card.Img src={issue.image}/>
        //                             </Col>
        //                             <Col lg={8} className="pl-0">                    
        //                                 <Card.Text>
        //                                     <li className="text-left list-group-item mobile-center"><span className="font-weight-bold">Details: </span>{issue.details}</li>
        //                                 </Card.Text>
        //                             </Col>
        //                         </Row>
        //                     </Col>
        //                 </Row>                             
        //             </Card.Body>
        //         </Accordion.Collapse>
        //     </Card>
        // )

       
    
        return (
            <div className="DashboardNewIssuesAccordion">
                    <Accordion>
                        {/* {issueCards} */}
                        {/* <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="font-weight-bold">
                            {issue.title}
                            <i className={"fas fa-" + priority  + "-circle float-right"}></i>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col lg={4}>
                                                    <Card.Img src={issue.image}/>
                                                </Col>
                                                <Col lg={8} className="pl-0">                    
                                                    <Card.Text>
                                                        <li className="text-left list-group-item mobile-center"><span className="font-weight-bold">Details: </span>{issue.details}</li>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>                             
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>      */}
                </Accordion>
            </div>
        );
    }
}

export default DashboardIssuesAccordion;