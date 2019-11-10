import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import CommentDB from '../components/CommentDB';


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

        CommentDB.GetObjectComments(this.state.parentId, this.onGetAllCommentsSuccess, this.onGetAllCommentsError)

        this.commentInput = React.createRef();

    }

    componentDidMount(){
        // console.log("Getting All Comments for " + this.state.parentId);
       // CommentDB.GetObjectComments(this.state.parentId, this.onGetAllCommentsSuccess, this.onGetAllCommentsError)
        //this.props.getAllComments(this.state.parentId, this.onGetAllCommentsSuccess, this.onGetAllCommentsError)
    }

    onGetAllCommentsSuccess(comments) {
        //this.state.comments = comments;
        //this.setState(this.state);
        this.setState({comments: comments});
    }

    onGetAllCommentsError(error) {

    }

    onAddCommentSuccess(response) {
      this.commentInput.current.value = "";

        CommentDB.GetObjectComments(this.state.parentId, this.onGetAllCommentsSuccess, this.onGetAllCommentsError);
        // this.props.getAllComments(this.state.parentId, this.onGetAllCommentsSuccess, this.onGetAllCommentsError)
    }

    onAddCommentError(error) {
        
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            const commentText = e.target.value;     
            // console.log(commentText);
            this.props.addComment(this.props.parentId, commentText, this.onAddCommentSuccess, this.onAddCommentError);
            // var newComment = { text: event.target.value };
            // this.state.allTasks.push(newTask);
            // this.state.openCount ++ ;
            // this.setState(this.state);
          }
    }

    getUserImage(comment){
        const image = comment.get('createdByUserImage');
        if(image == null) {
            return "./images/avatar-placeholder.gif";
        }
        else {
            return image;
        }
    }

    getCommentRows(comments) {
        if(comments === null) {
            return null;
        }
        else {
            const commentRows = comments.map((comment,index) =>
                <Row className="Comment mt-4 my-2 mx-0" key={index}>                                            
                    <Col lg={2} sm={2} xs={2} className="p-0">
                        <img className="rounded-circle avatar" src={this.getUserImage(comment)} alt="Avatar"></img>
                    </Col>
                    <Col lg={10} sm={10} xs={10} className="pl-0">
                        <p className="font-weight-bold m-0">{comment.get('createdByUserName')}</p>
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
            <Form.Control as="textarea" rows="3" ref={this.commentInput} placeholder="Add a comment" className="mt-4" onKeyPress={this.handleKeyPress}/>                   
        </div>
    );
  }
}

export default Comments;