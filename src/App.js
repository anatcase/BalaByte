import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Home from './Home';
//import SignUp from './SignUp';
//import Login from './Login';
//import Messages from './Messages';
import Tenants from './Tenants';


function App() {
  return (
    <div className="App">
       {/* <Home /> */}
       <Tenants />
    </div>
  );
}

export default App;
