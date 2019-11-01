import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages//Login';
import Messages from './pages/Messages';
import Tenants from './pages/Tenants';
import Votings from './pages/Votings';
import Issues from './pages/Issues';
import Dashboard from './pages/Dashboard';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activeUser: null,
      isLoggedIn: true,
      // allUsers: jsonUsers,
  }

  this.handleLogout = this.handleLogout.bind(this);
  // this.handleLogin = this.handleLogin.bind(this);
}

handleLogout() {
  this.setState({isLoggedIn: false, activeUser: null});
}


  render() {
    const { activeUser, allUsers } = this.state;

    return (
      <div className="App">
        test
      </div>
    );
  }
}

export default App;
