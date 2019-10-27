import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import Container from 'react-bootstrap/Container';
//import "bootstrap-less/bootstrap/bootstrap.less";

function PaginationNav(props) {
  const handlePageChange = props.handlePageChange;
  const activePage = props.activePage; //this will be the value of the event.target eg the page number button clicked on the pagination comp
  const totalItemsCount = props.totalItemsCount;
  const itemsCountPerPage = 10;
  let pages = totalItemsCount / itemsCountPerPage; //This will be the result of dividing totalItemsCount in itemsCountPerPage
  //let activePage = 1;
  let items = []; 
  for (let number = 1; number <= pages; number++) {
  items.push(
      <Pagination.Item key={number} active={number === activePage}>
          {number}
      </Pagination.Item>,
       );
  }
  const paginationBasic = (
              <Pagination size="sm" onClick={handlePageChange} className={pages === 1 ? 'hide' : ''}>
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

  export default PaginationNav;