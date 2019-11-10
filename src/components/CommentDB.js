var Parse = require('parse');

Initialize();

function Initialize() {
  Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
  Parse.initialize(
    'EjBHB6eHkPYe1zSnuvjLgLnAcimFgedDdkTQKKMp', // This is your Application ID
    'x2qBBi1Ms1YMtws1NreUEgGsmFrrx13zuyZcxLRR' // This is your Javascript key
  );
}

function addCommentToObject(object, commentText) {
  var comments = object.get("comments")
  if (comments == null) {
    comments = [];
  }
  const newComment = CommentDB.GetComment();
  newComment.set('parentId', object.id)
  newComment.set('createdBy', Parse.User.current());
  newComment.set('text', commentText);
  comments.push(newComment)
  object.set('comments', comments);
}

const CommentDB = {
  GetComment: function GetComment() {
    const Comment = Parse.Object.extend('Comment');

    return new Comment();
  },

  // CreateComment: function CreateComment(newComment, onSuccess, onError){
  //
  // },


  GetCommentComments: function GetCommentComments(commentId, onSucces, onError) {
    const Comment = Parse.Object.extend('Comment');
    const query = new Parse.Query(Comment);
    query.get(commentId).then((results) => {
      const comments = results.get("comments")
      onSucces(comments);
      // console.log('Comments found', comments);
    }, (error) => {
      onError(error)
      // console.error('Error while fetching comments', error);
    });
  },

  AddCommentToObject: function AddCommentToObject(object, commentText) {
    addCommentToObject(object, commentText);
  },

  CommentComment: function CommentComment(commentId, comment, onSuccess, onError) {
    const Comment = Parse.Object.extend('Comment');
    const query = new Parse.Query(Comment);
    // here you put the objectId that you want to update
    query.get(commentId).then((object) => {
      addCommentToObject(object, comment);
      object.save().then((response) => {
        onSuccess(response);
        // console.log('Updated Comment', response);
      }, (error) => {
        onError(error);
        // console.error('Error while updating Comment', error);
      });
    });
  },
  GetObjectComments: function GetObjectComments(objectId, onSucces, onError) {
    const Comment = Parse.Object.extend('Comment');
    const query = new Parse.Query(Comment);
    query.equalTo("parentId", objectId);
      query.find().then((results) => {
      onSucces(results);
      // console.log('Comments found', results);
    }, (error) => {
      onError(error)
      // console.error('Error while fetching comments', error);
    });
  },
}

export default CommentDB;
