import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Comments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments : null,
            parentId : this.props.parentId
        }

        this.getUserImage = this.getUserImage.bind(this);
        this.getCommentRows = this.getCommentRows.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.onGetAllCommentsSuccess = this.onGetAllCommentsSuccess.bind(this);
        this.onGetAllCommentsError = this.onGetAllCommentsError.bind(this);
        this.onAddCommentSuccess = this.onAddCommentSuccess.bind(this);
        this.onAddCommentError = this.onAddCommentError.bind(this);
    }

    componentDidMount(){
        console.log("Getting All Comments for " + this.state.parentId);
        this.props.getAllComments(this.state.parentId, this.onGetAllCommentsSuccess, this.onGetAllCommentsError)
    }

    onGetAllCommentsSuccess(comments) {
        this.state.comments = comments;
        this.setState(this.state);
    }

    onGetAllCommentsError(error) {

    }

    onAddCommentSuccess(response) {
        this.props.getAllComments(this.state.parentId, this.onGetAllCommentsSuccess, this.onGetAllCommentsError)
    }

    onAddCommentError(error) {
        
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            const commentText = e.target.value;     
            console.log(commentText);
            this.props.addComment(this.props.parentId, commentText, this.onAddCommentSuccess, this.onAddCommentError);
            // var newComment = { text: event.target.value };
            // this.state.allTasks.push(newTask);
            // this.state.openCount ++ ;
            // this.setState(this.state);
          }
    }

    getUserImage(user){
        //console.log(user);
        return null;
    }

    getCommentRows(comments) {
        if(comments === null) {
            return null;
        }
        else {
            const commentRows = comments.map(comment =>
                <Row className="Comment mt-4 my-2 mx-0">                                            
                    <Col lg={2} sm={2} xs={2} className="p-0">
                        <img className="rounded-circle avatar" src={this.getUserImage(comment.get("createdBy"))} alt="Avatar"></img>
                    </Col>
                    <Col lg={10} sm={10} xs={10} className="pl-0">
                        {/* <p className="font-weight-bold m-0">{UserDB.getUserName(userId)}</p> */}
                        <p>{comment.get('text')}</p>
                    </Col>
                </Row>
            );
            return commentRows;
        }
    }

    render () {
        const comments = this.state.comments;
        

       return (
        <div className="Comments">
            <h6>Comments:</h6>
            {this.getCommentRows(comments)}
            <Form.Control as="textarea" rows="3" placeholder="Add a comment" className="mt-4" onKeyPress={this.handleKeyPress}/>                   
        </div>
    );
  }
}

export default Comments;