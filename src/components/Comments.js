import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import CommentDB from '../components/CommentDB';
import ImageHandler from '../components/ImageHandler';
import UserDB from '../components/UserDB';



class Comments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments : null,
            parentId : this.props.parentId,
            users: null
        }

        this.getUserName = this.getUserName.bind(this);
        this.getUserImage = this.getUserImage.bind(this);
        this.getCommentRows = this.getCommentRows.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.onGetAllCommentsSuccess = this.onGetAllCommentsSuccess.bind(this);
        this.onGetAllCommentsError = this.onGetAllCommentsError.bind(this);
        this.onAddCommentSuccess = this.onAddCommentSuccess.bind(this);
        this.onAddCommentError = this.onAddCommentError.bind(this);

        this.onGetAllUsersSuccess = this.onGetAllUsersSuccess.bind(this);
        this.onGetAllUsersError = this.onGetAllUsersError.bind(this);
        
        CommentDB.GetObjectComments(this.state.parentId, this.onGetAllCommentsSuccess, this.onGetAllCommentsError)

        this.commentInput = React.createRef();


    }

    onGetAllUsersSuccess(users) {
        var userMap = new Map();

        users.map((user) => userMap.set(user.id, user));

        this.setState({users: userMap});


    }

    onGetAllUsersError(error) {
    }


    componentDidMount(){
        // console.log("Getting All Comments for " + this.state.parentId);
       // CommentDB.GetObjectComments(this.state.parentId, this.onGetAllCommentsSuccess, this.onGetAllCommentsError)
        //this.props.getAllComments(this.state.parentId, this.onGetAllCommentsSuccess, this.onGetAllCommentsError)
        UserDB.GetAllUsers(this.onGetAllUsersSuccess, this.onGetAllUsersError);

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

    getUserName(comment){
        const commentUserId = comment.get('createdBy').id;
        const commentUserName = comment.get('createdByUserName');
        const user = this.state.users.get(commentUserId);
        var userName = null;
        if (user !== null && user !== undefined) {
            userName = user.get('username');
        }
        if(userName == null) {
            return commentUserName;
        }
        else {
            return userName;
        }
    }

    getUserImage(comment){

        const user = this.state.users.get(comment.get('createdBy').id);
        var image = null;
        if (user !== null && user !== undefined) {
            image = user.get('userImage');
        }
            //const image = null;//user.get('userImage');//comment.get('createdByUserImage');
        if(image == null || image == undefined || image == "") {
            return "./images/avatar-placeholder.gif";
        }
        else {
            return ImageHandler.GetImageUrl(image);
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
                        <p className="font-weight-bold m-0">{this.getUserName(comment)}</p>
                        <p>{comment.get('text')}</p>
                    </Col>
                </Row>
            );
            return commentRows;
        }
    }

    render () {
        if (this.state.users === null) {
            return <p>Loading</p>;
        }
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