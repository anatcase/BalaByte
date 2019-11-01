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
import Navigation from './components/Navigation'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activeUser: null,
      isLoggedIn: false,
      activePage: "Home"
      // allUsers: jsonUsers,
  }
  this.changeActivePage = this.changeActivePage.bind(this);
  this.handleLogout = this.handleLogout.bind(this);
  // this.handleLogin = this.handleLogin.bind(this);
}

handleLogout() {
  this.setState({isLoggedIn: false, activeUser: null});
}

changeActivePage(pageName){
this.state.activePage = pageName;
this.setState(this.state);
}

  render() {
    const { activeUser, allUsers } = this.state;
    const navigation = (
      this.state.activePage !== "Login" || "SignUp" ?
      <Navigation isLoggedIn={this.state.isLoggedIn} activePage={this.state.activePage} changeActivePage={this.changeActivePage}/>
      : null
    );

    return (
      <div className="App">
          {navigation}
          <Router>
            <Switch>
            <Route exact path="/">
              <Home activeUser={activeUser} handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
            </Route>
            <Route path="/Login">
              <Login users={allUsers} handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn}/>
            </Route>
            <Route path="/Issues">
              <Issues activeUser={activeUser} handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
            </Route>
            <Route path="/Messages">
              <Messages activeUser={activeUser} handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
            </Route>
            <Route path="/SignUp">
              <SignUp activeUser={activeUser} handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
            </Route>
            <Route path="/Dashboard">
              <Dashboard activeUser={activeUser} handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
            </Route>
            <Route path="/Tenants">
              <Tenants activeUser={activeUser} handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
            </Route>
            <Route path="/Votings">
              <Votings activeUser={activeUser} handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
