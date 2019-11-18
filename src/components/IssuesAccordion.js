import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Comments from '../components/Comments'
import IssueDB from '../components/IssueDB';
import ImageHandler from '../components/ImageHandler';


class IssuesAccordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCardId: null
        }

        this.getPriorityIcon = this.getPriorityIcon.bind(this);
        this.handleComment = this.addCommentHanlder.bind(this);
        this.getAllComments = this.getAllComments.bind(this);
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleAccordionToggle = this.handleAccordionToggle.bind(this);
        this.getToggleClass = this.getToggleClass.bind(this);
    }

    getPriorityIcon(priority) {
        if (priority === "3") {
            return "exclamation";
        } else if (priority === "2") {
            return "info";
        } else {
            return "";
        }
    }

    getPriorityString(priority) {
        if (priority === "3") {
            return "Urgent";
        } else if (priority === "2") {
            return "Important";
        } else {
            return "Normal";
        }   
    }
    getCardImage(imageId) {
        if(imageId === "") {
            return "./images/placeholder-square.jpg";
        }
        else {
            return ImageHandler.GetImageUrl(imageId);
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

    handleDeleteClick (issue) {
        this.props.deleteIssue(issue);
    }

    getToggleClass(issue) { //Presentation logic
        if(issue.id === this.state.activeCardId) { //User triggered re-rendering
            return "active";
        }
    }

    handleAccordionToggle(issue) { //Business logic
        let activeCardId;
        if(issue.id !== this.state.activeCardId) { //First click on card toggle
            activeCardId = issue.id;
        }
        else {                                   //Second click on card toggle
            activeCardId = null; 
        }
            this.setState({activeCardId: activeCardId}); //Re-render - getToggleClass will be be triggered again
    }

    render() {
        const issues = this.props.records;
        const issueCards = issues.map((issue) => 
            
                                        <Card key={issue.id}>
                                            <Accordion.Toggle as={Card.Header} eventKey={issue.id} className={this.getToggleClass(issue)} onClick={(e)=>{this.handleAccordionToggle(issue)}}>
                                                {issue.get("title")}{Accordion.Toggle.eventKey}
                                                <i className={"fas fa-" + this.getPriorityIcon(issue.get("priority")) + "-circle float-right"}></i>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey={issue.id}>
                                                <Card.Body>
                                                    <Row>
                                                        <Col className="issue-box" lg={6}>
                                                            <Row className="h-100">
                                                                <Col lg={4}>
                                                                    <Card.Img className="thumbnail" src={this.getCardImage(issue.get("image"))}/>
                                                                </Col>
                                                                <Col lg={8}>                    
                                                                    <Card.Text>
                                                                        <li className="list-group-item"><span className="font-weight-bold">Details: </span>{issue.get("details")}</li>
                                                                        <li className="list-group-item"><span  className="font-weight-bold">Priority: </span>{this.getPriorityString(issue.get("priority"))}</li>
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
                                                                    <Button variant="danger" className="m-0 responsive-btn" onClick={(e)=>{this.handleDeleteClick(issue)}}>Delete</Button>
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