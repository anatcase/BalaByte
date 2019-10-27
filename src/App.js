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
//import PaginationNav from './components/PaginationNav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      totalItemsCount: 10
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  
  handlePageChange(e) {
    let val = parseInt(e.target.innerHTML);
    let pageNumber;

    if (isNaN(val)) {
      console.log('Not a number ' + val);
      val = e.target.innerText;
      if (val.includes("‹")) {
        console.log("Previous");
      }
      else if (val.includes("›")) {
        console.log("Next");
      }
      
    }
    else {
      console.log('number ' + val);
      pageNumber =  val;
    }
    console.log('active page is ' + pageNumber);
    //this.state.activePage = pageNumber;
    console.log(this.state.activePage);
    //this.setState(this.state);
    this.setState({activePage:pageNumber});
    console.log(this.state.activePage);
  }

  render() {
    console.log(this.state.activePage);
    return (
      <div className="App">
         {/* <PaginationNav handlePageChange={this.handlePageChange} activePage={this.state.activePage}/> */}
         <Messages/>
      </div>
    );
  }
}

export default App;
