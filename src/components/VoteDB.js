var Parse = require('parse');

Initialize();

function Initialize() {
  Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
  Parse.initialize(
    'EjBHB6eHkPYe1zSnuvjLgLnAcimFgedDdkTQKKMp', // This is your Application ID
    'x2qBBi1Ms1YMtws1NreUEgGsmFrrx13zuyZcxLRR' // This is your Javascript key
  );
}

const VoteDB = {
  GetVote: function GetVote() {
    const Vote = Parse.Object.extend('Vote');

    return new Vote();
  },

}

export default VoteDB;
