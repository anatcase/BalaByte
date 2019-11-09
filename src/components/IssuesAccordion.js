import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Comments from '../components/Comments'

class IssuesAccordion extends React.Component {
    constructor(props) {
        super(props);

        this.getPriorityIcon = this.getPriorityIcon.bind(this);

    }
    getPriorityIcon(priority) {
        if (priority == "urgent") {
            return "exclamation";
        } else if (priority == "important") {
            return "info";
        } else {
            return "";
        }
    }
    render() {
        const issues = this.props.records;
        const issueCards = issues.map(issue =>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0" className="font-weight-bold">
                                                {issue.get("title")}
                                                <i className={"fas fa-" + this.getPriorityIcon(issue.get("priority")) + "-circle float-right"}></i>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <Row>
                                                        <Col className="issue-box" lg={6}>
                                                            <Row>
                                                                <Col lg={4}>
                                                                    <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Backyardpool.jpg"/>
                                                                </Col>
                                                                <Col lg={8}>                    
                                                                    <Card.Text>
                                                                        <li className="list-group-item"><span className="font-weight-bold">Details: </span>{issue.get("details")}</li>
                                                                        <li className="list-group-item"><span  className="font-weight-bold">Priority: </span>{issue.get("priority")}</li>
                                                                        <li className="list-group-item"><span  className="font-weight-bold">Status: </span>{issue.get("status")}</li>
                                                                    </Card.Text>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col lg={4}>
                                                            <Row>
                                                                <Col>
                                                                <Comments />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col lg={2} className="p-0 d-flex align-items-end justify-content-end pt-3">
                                                            <Row className="w-100 mx-0 text-center">
                                                                <Col lg={6} className="px-0 responsive-btn-wrapper">
                                                                    <Button variant="outline-dark" className="m-0 responsive-btn">Update</Button>
                                                                </Col>
                                                                <Col lg={6} className="px-0 responsive-btn-wrapper">
                                                                    <Button variant="danger" className="m-0 responsive-btn">Delete</Button>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>                                                           
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>     
                                    );

        return (
           <div className="IssuesAccordion">
               <Accordion>
                   {issueCards}
                </Accordion>
            </div>
            );
        }
    }

 export default IssuesAccordion;