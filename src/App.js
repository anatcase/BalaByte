import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
//import Login from './pages//Login';
//import Messages from './pages/Messages';
//import Tenants from './pages/Tenants';
//import Votings from './pages/Votings';
//import Issues from './pages/Issues';
//import CommitteeDashboard from './pages/CommitteeDashboard';
// import TenantDashboard from './pages/TenantDashboard';
//import TenantDashboard from './pages/TenantDashboard';



class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
  };
}

  render() {
    return (
      <div className="App">
         <Home isLoggedIn={this.state.isLoggedIn}/>
      </div>
    );
  }
}

export default App;
