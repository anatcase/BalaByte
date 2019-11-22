import VoteDB from '../components/VoteDB';

var Parse = require('parse');

Initialize();

function Initialize() {
  Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
  Parse.initialize(
    'EjBHB6eHkPYe1zSnuvjLgLnAcimFgedDdkTQKKMp', // This is your Application ID
    'x2qBBi1Ms1YMtws1NreUEgGsmFrrx13zuyZcxLRR' // This is your Javascript key
  );
}

function addVoteToVoting(voting, voteText) {

  // var votes = object.get("votes")
  // if (votes == null) {
  //   votes = [];
  // }
  // const newVote = VoteDB.GetVote();
  // newVote.set('votedBy', Parse.User.current());
  // newVote.set('vote', voteText);
  // votes.push(newVote)
  // voting.set('votes', votes);
}

const VotingDB = {
  GetVoting: function GetVoting() {
    const Voting = Parse.Object.extend('Voting');
    return new Voting()
  },

  CreateVoting: function CreateVoting(newVoting, onSuccess, onError){
    newVoting.set('createdBy', Parse.User.current());

    newVoting.save().then(
      (result) => {
        const id = result.id;
        onSuccess(id, result);
        console.log('Voting created', result);
      },
      (error) => {
        onError(error);
        console.error('Error while creating Voting: ', error);
      }
    );
  },

  GetAllVotings: function GetAllVotings(onSuccess, onError) {
    const Voting = Parse.Object.extend('Voting');
    const query = new Parse.Query(Voting);
    query.find().then((results) => {
      onSuccess(results);
      console.log('Votings found', results);
    }, (error) => {
      onError(error);
      console.error('Error while fetching Votings', error);
    });
  },

  UpdateVoting: function UpdateVoting(votingId, updatedVoting, onSuccess, onError) {
    const Voting = Parse.Object.extend('Voting');
    const query = new Parse.Query(Voting);
    // here you put the objectId that you want to update
    query.get(votingId).then((object) => {
      object.set('createdBy', Parse.User.current());
      object.set('title', updatedVoting.get('title'));
      object.set('details', updatedVoting.get('details'));
      object.set('options', updatedVoting.get('options'));
      object.set('dueDate', updatedVoting.get('dueDate'));
      object.save().then((response) => {
        onSuccess(response);
        console.log('Updated Voting', response);
      }, (error) => {
        onError(error);
        console.error('Error while updating Voting', error);
      });
    });
  },

  GetVotingVotes: function GetVotingVotes(votingId, onSucces, onError) {
    const Voting = Parse.Object.extend('Voting');
    const query = new Parse.Query(Voting);
    query.get(votingId).then((results) => {
      const votes = results.get("votes")
      onSucces(votes);
      console.log('Votes found', votes);
    }, (error) => {
      onError(error)
      console.error('Error while fetching votes', error);
    });

  },

  AddVote: function AddVote(votingId, voteText, onSuccess, onError) {
    const Voting = Parse.Object.extend('Voting');
    const query = new Parse.Query(Voting);
    // here you put the objectId that you want to update
    query.get(votingId).then((object) => {
      addVoteToVoting(object, voteText);
      object.save().then((response) => {
        onSuccess(response);
        console.log('Updated Voting', response);
      }, (error) => {
        onError(error);
        console.error('Error while updating Voting', error);
      });
    });
  }
}

export default VotingDB;
