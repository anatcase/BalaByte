var Parse = require('parse');

Initialize();


function Initialize() {
  Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
  Parse.initialize(
    'EjBHB6eHkPYe1zSnuvjLgLnAcimFgedDdkTQKKMp', // This is your Application ID
    'x2qBBi1Ms1YMtws1NreUEgGsmFrrx13zuyZcxLRR' // This is your Javascript key
  );
}

const UserDB = {

  GetUser: function GetUser() {
    return new Parse.User()
  },

  SignUpCommitteeMember: function SignUpCommitteeMember(user, onSuccess, onError){
    var email = user.get('mail');
    user.set('mail', email);
    user.set('isCommitteeMember', true);
    user.signUp().then((user) => {
      onSuccess(user);
    }).catch(error => {
      onError(error);
    });
  },

  CreateTenant: function CreateTenant(user, onSuccess, onError){
    debugger;
    //Check if I'm logged in as a committee member.
    if ((Parse.User.current() == null) || (!Parse.User.current().get("isCommitteeMember"))) {
      onError(new Error("Not logged in as committee member."))
      return;
    }
    
    //I save this user session for use later so I can revert back to who I am.
    var sessionToken = Parse.User.current().get("sessionToken");
    var email = user.get('mail');
    user.set('mail', email);
    user.set('isCommitteeMember', false);
    user.set('password', '#Password123');
    user.signUp().then((user) => {
      Parse.User.become(sessionToken).then((user) => {
        // The current user is now set back to creator.
        onSuccess(user);
      }).catch(error => {
        onError(error);
      });
    }).catch(error => {
      onError(error);
    });
  },

  LogIn: function LogIn(email, password, onSuccess, onError) {
    // Pass the username and password to logIn function
    Parse.User.logIn(email,password).then((user) => {
      // Do stuff after successful login
      onSuccess(user);
      //console.log('Logged in user', user);
    }).catch(error => {
      onError(error);
      //console.error('Error while logging in user', error);
    })
  },

  LogOut: function LogOut(onSuccess, onError) {
    // Pass the username and password to logIn function
    Parse.User.logOut().then(() => {
      // Do stuff after successful login
      onSuccess();
      //console.log('Logged out');
    }).catch(error => {
      onError(error);
      //console.error('Error while logging out user', error);
    })
  },

  GetAllUsers: function GetAllUsers(onSuccess, onError) {

    const UserClass = Parse.Object.extend("User");

    // Creates a new Query object to help us fetch UserClass objects
    const query = new Parse.Query(UserClass);

    // Executes the query, which returns an array of UserClass
    query.find().then(results => {
      onSuccess(results);
    }).catch((error) =>  {
      onError(error);
      //console.error('Error while trying to GetAllUsers', error);

    });
  },

  UpdateUser: function UpdateUser(userId, updatedUser, onSuccess, onError) {
    const User = Parse.Object.extend('User');
    const query = new Parse.Query(User);

    if (Parse.User.current().id === userId) {
      query.get(userId).then((object) => {
        // object.set('createdBy', Parse.User.current());
        object.set('username', updatedUser.get('username'));
        object.set('password', updatedUser.get('password'));
        object.set('mail', updatedUser.get('mail'));
        object.set('apartment', updatedUser.get('apartment'));
        object.set('userImage', updatedUser.get('userImage'));
        object.save().then((response) => {
            onSuccess(response);
        }, (error) => {
          onError(error);
          //console.error('Error while updating Tenant', error);
        });
  
      });      
    } else 
    {
      var sessionToken = Parse.User.current().get("sessionToken");

      // here you put the objectId that you want to update
      query.get(userId).then((object) => {
        //Login as tenantId
        var mail = object.get('mail')
        Parse.User.logIn(mail,"#Password123").then((user) => {
          console.log('Logged in as: ', mail);

          // object.set('createdBy', Parse.User.current());
          object.set('username', updatedUser.get('username'));
          object.set('password', updatedUser.get('password'));
          object.set('mail', updatedUser.get('mail'));
          object.set('apartment', updatedUser.get('apartment'));
          object.set('userImage', updatedUser.get('userImage'));
          object.save().then((response) => {
            Parse.User.become(sessionToken).then((user) => {
              //console.log('back to user: ', Parse.User.current().getEmail());
              onSuccess(response);
            }).catch(error => {
              //console.error('Error while going back to user', error);
            });

          }, (error) => {
            onError(error);
            console.error('Error while updating Tenant', error);
          });
        }).catch(error => {
          onError(error);
          console.error('Error while logging in as user', error);
        })

      });
    }
  },

  FindUserBymail: function FindUserByEmail(email, onSuccess, onError) {

    const UserClass = Parse.Object.extend("User");

    // Creates a new Query object to help us fetch UserClass objects
    const query = new Parse.Query(UserClass);

    query.equalTo("mail", email);

    // Executes the query, which returns an array of UserClass
    query.find().then(results => {
      onSuccess(results);
    }).catch((error) =>  {
      onError(error);
      //console.error('Error while trying to FindUserByEmail', error);

    });
  },

  FindUserById: function FindUserById(userId, onSuccess, onError) {

    const UserClass = Parse.Object.extend("User");

    // Creates a new Query object to help us fetch UserClass objects
    const query = new Parse.Query(UserClass);

    query.equalTo("objectId", userId);

    // Executes the query, which returns an array of UserClass
    query.find().then(results => {
      onSuccess(results);
    }).catch((error) =>  {
      onError(error);
      //console.error('Error while trying to FindUserByEmail', error);

    });
  },

  IsLoggedIn: function IsLoggedIn() {
    return Parse.User.current() != null;
  },

  GetCurrentUser: function GetCurrentUser() {
    return Parse.User.current();
  },

  GetCurrentUserName: function GetCurrentUserName() {
    if (Parse.User.current() != null) {
      return Parse.User.current().get('username');
    } else {
      return "";
    }
  },

  
  GetCurrentUserType: function GetCurrentUserType() {
    const user = Parse.User.current();
    if (user == null) {
      return null;
    } else {
      if (user.get('isCommitteeMember')) {
        return "admin";
      } else {
        return "tenant";
      }
    }
  },

  DeleteUser: function DeleteUser(userId, onSuccess, onError) {
    debugger;
    const User = new Parse.User();
    const query = new Parse.Query(User);
    var sessionToken = Parse.User.current().get("sessionToken");

    // here you put the objectId that you want to update
    query.get(userId).then((object) => {
      //Login as tenantId
      var mail = object.get('mail')
      Parse.User.logIn(mail,"123456").then((user) => {
        //console.log('Logged in as: ', mail);
        object.destroy().then((response) => {
          Parse.User.become(sessionToken).then((user) => {
            //console.log('back to user: ', Parse.User.current().getEmail());
            onSuccess(response);
          }).catch(error => {
            //console.error('Error while going back to user', error);
          });

        }, (error) => {
          onError(error);
          //console.error('Error while updating Tenant', error);
        });
      }).catch(error => {
        onError(error);
        //console.error('Error while logging in as user', error);
      })

    });

















    var originalsession = Parse.User.current().get("sessionToken");
    query.get(userId).then((object) => {
      // Parse.User.become(object.sessionToken).then((user) => {
      //     // user.destroy().then((response) => {
      //     //   //onSuccess(response);
      //     //   console.log('Deleted User', response);
      //     //   Parse.User.become(originalsession).then((user) => {
      //     //     // The current user is now set back to creator.
      //     //     onSuccess(user);
      //     //   }).catch(error => {
      //     //     onError(error);
      //     //   });            
      //     // }, (error) => {
      //     //   console.error('Error while deleting User', error);
      //     // });
      // }).catch(error => {
      //   onError(error);
      // });


    });
  }
  

}


export default UserDB;
