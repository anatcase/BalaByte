import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import Container from 'react-bootstrap/Container';

function PaginationNav(props) {
  const handlePageChange = props.handlePageChange;
  const activePage = props.activePage;
  const totalItemsCount = props.totalItemsCount;
  const itemsCountPerPage = 10;
  let pages = totalItemsCount / itemsCountPerPage;
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