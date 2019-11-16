import CommentDB from '../components/CommentDB';

var Parse = require('parse');

Initialize();

function Initialize() {
  Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
  Parse.initialize(
    'EjBHB6eHkPYe1zSnuvjLgLnAcimFgedDdkTQKKMp', // This is your Application ID
    'x2qBBi1Ms1YMtws1NreUEgGsmFrrx13zuyZcxLRR' // This is your Javascript key
  );
}

const MessageDB = {
  GetMessage: function GetMessage() {
    const Message = Parse.Object.extend('Message');
    return new Message()
  },

  CreateMessage: function CreateMessage(newMessage, onSuccess, onError){
    newMessage.set('createdBy', Parse.User.current());
    //newMessage.set('comments', []);

    newMessage.save().then(
      (result) => {
        const id = result.id;
        onSuccess(id, result);
        console.log('Message created', result);
      },
      (error) => {
        onError(error);
        console.error('Error while creating Message: ', error);
      }
    );
  },

  GetAllMessages: function GetAllMessages(sortByPriority, onSuccess, onError) {
    const Message = Parse.Object.extend('Message');
    const query = new Parse.Query(Message);

    if (sortByPriority === true) {
      query.descending("priority");
      query.addDescending("updatedAt");
    } else {
      query.descending("updatedAt");
    }
    
    query.find().then((results) => {
      onSuccess(results);
      console.log('Message found', results);
    }, (error) => {
      onError(error);
      console.error('Error while fetching Message', error);
    });
  },

  UpdateMessage: function UpdateMessage(messageId, updatedMessage, onSuccess, onError) {
    const Message = Parse.Object.extend('Message');
    const query = new Parse.Query(Message);
    // here you put the objectId that you want to update
    query.get(messageId).then((object) => {
      object.set('createdBy', Parse.User.current());
      object.set('title', updatedMessage.get('title'));
      object.set('details', updatedMessage.get('details'));
      object.set('priority', updatedMessage.get('priority'));
      object.save().then((response) => {
        onSuccess(response);
        console.log('Updated Message', response);
      }, (error) => {
        onError(error);
        console.error('Error while updating Message', error);
      });
    });
  },

  GetMessageComments: function GetMessageComments(messageId, onSucces, onError) {
    const Message = Parse.Object.extend('Message');
    const query = new Parse.Query(Message);
    query.get(messageId).then((results) => {
      const comments = results.get("comments")
      onSucces(comments);
      console.log('Comments found', comments);
    }, (error) => {
      onError(error)
      console.error('Error while fetching comments', error);
    });

  },

  CommentMessage: function CommentMessage(messageId, commentText, onSuccess, onError) {
    const Message = Parse.Object.extend('Message');
    const query = new Parse.Query(Message);
    // here you put the objectId that you want to update
    query.get(messageId).then((object) => {
      CommentDB.AddCommentToObject(object, commentText);
      object.save().then((response) => {
        onSuccess(response);
        console.log('Updated Message', response);
      }, (error) => {
        onError(error);
        console.error('Error while updating Message', error);
      });
    });
  }
}

export default MessageDB;
