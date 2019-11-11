import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Comments from '../components/Comments'
import IssueDB from '../components/IssueDB';

class IssuesAccordion extends React.Component {
    constructor(props) {
        super(props);

        this.getPriorityIcon = this.getPriorityIcon.bind(this);
        this.handleComment = this.addCommentHanlder.bind(this);
        this.getAllComments = this.getAllComments.bind(this);
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);

    }

    getPriorityIcon(priority) {
        if (priority === "urgent") {
            return "exclamation";
        } else if (priority === "important") {
            return "info";
        } else {
            return "";
        }
    }

    getCardImage(image) {
        if(image == null) {
            return "./images/placeholder-square.jpg";
        }
        else {
            return image;
        }
    }

    getAllComments(issueId, onGetAllCommentsSuccess, onGetAllCommentsError) {
        IssueDB.GetIssueComments(issueId, onGetAllCommentsSuccess, onGetAllCommentsError)
    }

    addCommentHanlder (issueId, commentText, onAddCommentSuccess, onAddCommentError) {
        IssueDB.CommentIssue(issueId, commentText, onAddCommentSuccess, onAddCommentError);
    }

    handleUpdateClick(e, issue) {
        this.props.openModal(e, issue);
    }

    handleDeleteClick () {

    }

    // getIssueComments(issue) {
    //     const issueComments = issue.get("comments");
    //     const issueId = issue.id;
    //     return <Comments comments={issueComments} onCommentAdd={this.onCommentAdd}/>
    // }
    
    render() {
        const issues = this.props.records;
        
        const issueCards = issues.map((issue, index) =>
                                        <Card key={index}>
                                            <Accordion.Toggle as={Card.Header} eventKey={index} className="font-weight-bold">
                                                {issue.get("title")}
                                                <i className={"fas fa-" + this.getPriorityIcon(issue.get("priority")) + "-circle float-right"}></i>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey={index}>
                                                <Card.Body>
                                                    <Row>
                                                        <Col className="issue-box" lg={6}>
                                                            <Row>
                                                                <Col lg={4}>
                                                                    <Card.Img src={this.getCardImage(issue.get("image"))}/>
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
                                                                    <Comments addComment={this.addCommentHanlder} parentId={issue.id}/>
                                                                    {/* {this.getIssueComments(issue)} */}
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col lg={2} className="p-0 d-flex align-items-end justify-content-end pt-3">
                                                            <Row className="w-100 mx-0 text-center">
                                                                <Col lg={6} className="px-0 responsive-btn-wrapper">
                                                                    <Button variant="outline-dark" className="m-0 responsive-btn" onClick={(e)=>{this.handleUpdateClick(e, issue)}}>Update</Button>
                                                                </Col>
                                                                <Col lg={6} className="px-0 responsive-btn-wrapper">
                                                                    <Button variant="danger" className="m-0 responsive-btn" onClick={this.handleDeleteClick}>Delete</Button>
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