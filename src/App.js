import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Home from './Home';
//import SignUp from './SignUp';
//import Login from './Login';
import Messages from './Messages';
//import Tenants from './Tenants';
//import Votings from './Votings';

class App extends React.Component {

  render() {
    return (
      <div className="App">
         <Messages/>
      </div>
    );
  }
}

export default App;
