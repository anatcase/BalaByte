import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Comments from '../components/Comments'
import MessageDB from '../components/MessageDB';
import ImageHandler from '../components/ImageHandler';

class MessagesAccordion extends React.Component {
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
        if (priority === "2") {
            return "exclamation";
        } else if (priority === "1") {
            return "info";
        } else {
            return "";
        }
    }

    getPriorityString(priority) {
        if (priority === "1") {
            return "Information";
        }
        else if (priority === "2") {
            return "Important";
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

    getAllComments(messageId, onGetAllCommentsSuccess, onGetAllCommentsError) {
        MessageDB.GetMessageComments(messageId, onGetAllCommentsSuccess, onGetAllCommentsError)
    }

    addCommentHanlder (messageId, commentText, onAddCommentSuccess, onAddCommentError) {
        MessageDB.CommentMessage(messageId, commentText, onAddCommentSuccess, onAddCommentError);
    }

    handleUpdateClick(e, message) {
        this.props.openModal(e, message);
    }

    handleDeleteClick (message) {
        this.props.deleteMessage(message);
    }

    getToggleClass(message) { //Presentation logic
        if(message.id === this.state.activeCardId) { //User triggered re-rendering
            return "active";
        }
    }

    handleAccordionToggle(message) { //Business logic
        let activeCardId;
        if(message.id !== this.state.activeCardId) { //First click on card toggle
            activeCardId = message.id;
        }
        else {                                   //Second click on card toggle
            activeCardId = null; 
        }
            this.setState({activeCardId: activeCardId}); //Re-render - getToggleClass will be be triggered again
    }


    render() {
        const messages = this.props.records;
        const messageCards = messages.map((message) => 
            
                                        <Card key={message.id}>
                                            <Accordion.Toggle as={Card.Header} eventKey={message.id} className={this.getToggleClass(message)} onClick={(e)=>{this.handleAccordionToggle(message)}}>
                                                {message.get("title")}{Accordion.Toggle.eventKey}
                                                <i className={"fas fa-" + this.getPriorityIcon(message.get("priority")) + "-circle float-right"}></i>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey={message.id}>
                                                <Card.Body>
                                                    <Row>
                                                        <Col className="message-box" lg={6}>
                                                            <Row className="h-100">
                                                                <Col lg={4}>
                                                                    <Card.Img className="thumbnail" src={this.getCardImage(message.get("image"))}/>
                                                                </Col>
                                                                <Col lg={8}>                    
                                                                    <Card.Text>
                                                                        <li className="list-group-item"><span className="font-weight-bold">Details: </span>{message.get("details")}</li>
                                                                        <li className="list-group-item"><span  className="font-weight-bold">Priority: </span>{this.getPriorityString(message.get("priority"))}</li>
                                                                    </Card.Text>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col lg={4}>
                                                            <Row>
                                                                <Col>
                                                                    <Comments addComment={this.addCommentHanlder} parentId={message.id}/>
                                                                    {/* {this.getMessageComments(message)} */}
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col lg={2} className="p-0 d-flex align-items-end justify-content-end pt-3">
                                                            <Row className="w-100 mx-0 text-center">
                                                                <Col lg={6} className="px-0 responsive-btn-wrapper">
                                                                    <Button variant="outline-dark" className="m-0 responsive-btn" onClick={(e)=>{this.handleUpdateClick(e, message)}}>Update</Button>
                                                                </Col>
                                                                <Col lg={6} className="px-0 responsive-btn-wrapper">
                                                                    <Button variant="danger" className="m-0 responsive-btn" onClick={(e)=>{this.handleDeleteClick(message)}}>Delete</Button>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>                                                           
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>     
                                    );

        return (
           <div className="MessagesAccordion">
               <Accordion>
                   {messageCards}
                </Accordion>
            </div>
            );
        }

    //     return (
    //        <div className="MessagesAccordion">
    //            <Accordion>
    //                 <Card>
    //                     <Accordion.Toggle as={Card.Header} eventKey="0" className="font-weight-bold">
    //                     Dynamic Message Title With Dynamic Icon 2
    //                     <i className="fas fa-exclamation-circle float-right"></i>
    //                     </Accordion.Toggle>
    //                     <Accordion.Collapse eventKey="0">
    //                         <Card.Body>
    //                             <Row>
    //                                 <Col className="Message-box" lg={6}>
    //                                     <Row>
    //                                         <Col lg={4}>
    //                                             <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Backyardpool.jpg"/>
    //                                         </Col>
    //                                         <Col lg={8}>                    
    //                                             <Card.Text>
    //                                                 <li className="list-group-item"><span className="font-weight-bold">Details: </span>**Dynamic Content for message details**</li>
    //                                                 <li className="list-group-item"><span  className="font-weight-bold">Priority: </span>**Dynamic Content for message priority**</li>
    //                                             </Card.Text>
    //                                         </Col>
    //                                     </Row>
    //                                 </Col>
    //                                 <Col lg={4}>
    //                                     <Row>
    //                                         <Col>
    //                                            <Comments />
    //                                         </Col>
    //                                     </Row>
    //                                 </Col>
    //                                 <Col lg={2} className="p-0 d-flex align-items-end justify-content-end pt-3">
    //                                     <Row className="w-100 mx-0 text-center">
    //                                         <Col lg={6} className="px-0 responsive-btn-wrapper">
    //                                             <Button variant="outline-dark" className="m-0 responsive-btn">Update</Button>
    //                                         </Col>
    //                                         <Col lg={6} className="px-0 responsive-btn-wrapper">
    //                                             <Button variant="danger" className="m-0 responsive-btn">Delete</Button>
    //                                         </Col>
    //                                     </Row>
    //                                 </Col>
    //                             </Row>                                            
    //                         </Card.Body>
    //                     </Accordion.Collapse>
    //                 </Card>     
    //             </Accordion>
    //        </div>
    //     );
    // }
}

export default MessagesAccordion;