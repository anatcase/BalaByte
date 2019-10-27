import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Home from './Home';
//import SignUp from './SignUp';
//import Login from './Login';
//import Messages from './Messages';
//import Tenants from './Tenants';
//import Votings from './Votings';
import PaginationNav from './components/PaginationNav';

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
    var pageNumber =  parseInt(e.target.innerHTML);
    if (isNaN(pageNumber)) {
      console.log('Not a number' + pageNumber);
    }
      
    console.log('active page is ' + pageNumber);
    this.state.activePage = pageNumber;
    console.log(this.state.activePage);
    this.setState(this.state);
  }

  render() {
    console.log(this.state.activePage);
    return (
      <div className="App">
         <PaginationNav handlePageChange={this.handlePageChange} activePage={this.state.activePage}/>
      </div>
    );
  }
}

export default App;
