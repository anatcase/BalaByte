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
    let pageNumber =  e.target.text;
    console.log('active page is ' + pageNumber);
    this.setState({activePage:pageNumber});
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
