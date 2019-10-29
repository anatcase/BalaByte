var Parse = require('parse');

Initialize();

function Initialize() {
  Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
  Parse.initialize(
    'EjBHB6eHkPYe1zSnuvjLgLnAcimFgedDdkTQKKMp', // This is your Application ID
    'x2qBBi1Ms1YMtws1NreUEgGsmFrrx13zuyZcxLRR' // This is your Javascript key
  );
}

const IssueDB = {
  GetIssue: function GetIssue() {
    const Issue = Parse.Object.extend('Issue');

    return new Issue();
  },

  CreateIssue: function CreateIssue(newIssue, onSuccess, onError){
    newIssue.set('createdBy', Parse.User.current());

    newIssue.save().then(
      (result) => {
        const id = result.id;
        onSuccess(id, result);
        console.log('Issue created', result);
      },
      (error) => {
        onError(error);
        console.error('Error while creating Issue: ', error);
      }
    );
  },

  GetAllIssues: function GetAllIssues(onSuccess, onError) {
    const Issue = Parse.Object.extend('Issue');
    const query = new Parse.Query(Issue);
    query.find().then((results) => {
      onSuccess(results);
      console.log('Issues found', results);
    }, (error) => {
      onError(error);
      console.error('Error while fetching Issues', error);
    });
  },

  UpdateIssue: function UpdateIssue(issueId, updatedIssue, onSuccess, onError) {
    const Issue = Parse.Object.extend('Issue');
    const query = new Parse.Query(Issue);
    // here you put the objectId that you want to update
    query.get(issueId).then((object) => {
      object.set('createdBy', Parse.User.current());
      object.set('title', updatedIssue.get('title'));
      object.set('details', updatedIssue.get('details'));
      object.set('image', updatedIssue.get('image'));
      object.set('priority', updatedIssue.get('priority'));
      object.set('status', updatedIssue.get('status'));
      object.save().then((response) => {
        onSuccess(response);
        console.log('Updated Issue', response);
      }, (error) => {
        onError(error);
        console.error('Error while updating Issue', error);
      });
    });
  },

  GetIssueComments: function GetIssueComments(issueId, onSucces, onError) {
    const Issue = Parse.Object.extend('Issue');
    const query = new Parse.Query(Issue);
    query.get(issueId).then((results) => {
      const comments = results.get("comments")
      onSucces(comments);
      console.log('Comments found', comments);
    }, (error) => {
      onError(error)
      console.error('Error while fetching comments', error);
    });
  },

  CommentIssue: function CommentIssue(issueId, commentText, onSuccess, onError) {
    const Issue = Parse.Object.extend('Issue');
    const query = new Parse.Query(Issue);
    // here you put the objectId that you want to update
    query.get(issueId).then((object) => {
      CommentDB.AddCommentToObject(object, commentText);
      object.save().then((response) => {
        onSuccess(response);
        console.log('Updated Issue', response);
      }, (error) => {
        onError(error);
        console.error('Error while updating Issue', error);
      });
    });
  },

  DeleteIssue: function DeleteIssue(issueId, onSuccess, onError) {
    const Issue = Parse.Object.extend('Issue');
    const query = new Parse.Query(Issue);
    query.get(issueId).then((object) => {
      object.destroy().then((response) => {
        onSuccess(response);
        console.log('Deleted Issue', response);
      }, (error) => {
        console.error('Error while deleting Issue', error);
      });
    });
  }
}

export default IssueDB;
