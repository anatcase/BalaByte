import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
//import Container from 'react-bootstrap/Container';

class PaginationNav extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      totalItemsCount: 100 // This will come from the relevant page: Issues\votings\issues etc, where the total number of records will be stored in the page's state.
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }
  
  handlePageChange(e) {
    let val = parseInt(e.target.innerHTML);
    let pageNumber = this.state.activePage;

    if (isNaN(val)) {
      console.log('Not a number ' + val);
      val = e.target.innerText;
      if (val.includes("‹")) {
        console.log("Previous");
        pageNumber--;
      }
      else if (val.includes("›")) {
        console.log("Next");
        pageNumber++;
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
  //   const handlePageChange = props.handlePageChange;
    // const activePage = props.activePage;
    const activePage = this.state.activePage;
    //const totalItemsCount = parseInt(props.totalItemsCount);
    const totalItemsCount = parseInt(this.state.totalItemsCount);
    const itemsCountPerPage = 10;
    
    let pages = Math.ceil(totalItemsCount / itemsCountPerPage);
    let items = []; 
    for (let number = 1; number <= pages; number++) {
    items.push(
        <Pagination.Item key={number} active={number === activePage}>
            {number}
        </Pagination.Item>,
         );
    }

    const paginationBasic = (
                <Pagination size="sm" onClick={this.handlePageChange} className={pages === 1 ? 'hide' : ''}>
                      <Pagination.Prev disabled={activePage === 1 ? true : false}/> 
                      {items}
                      <Pagination.Next disabled={activePage === pages ? true : false}/>
                </Pagination>
            );
  

    return (
      <div className="PaginationNav">
        {paginationBasic}    
      </div>

    );
  }
}

  export default PaginationNav;