import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
//import Pagination from 'react-js-pagination'
//import "bootstrap-less/bootstrap/bootstrap.less";

function PaginationNav(props) {
  const handlePageChange = props.handlePageChange;
  const activePage = props.activePage; //this will be the value of the event.target eg the page number button clicked on the pagination comp
  const totalItemsCount = props.totalItemsCount;
  let pages = 10; //This will be the result of dividing totalItemsCount in itemsCountPerPage
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
              <Pagination size="sm" onClick={handlePageChange}>
                    <Pagination.Prev disabled={activePage === 1 ? true : false}/> 
                    {items}
                    <Pagination.Next disabled={activePage === totalItemsCount ? true : false}/>
              </Pagination>
          );
  
  return (
    <div className="PaginationNav">
      {paginationBasic}    
   </div>
  );
}

// function PaginationNav(props) {
  
//   const activePage = props.activePage;
//   //const totalItemsCount = props.totalItemsCount;
//   const handlePageChange = props.handlePageChange;
  
//   return (
//     <div className="PaginationNav">
//       {/* <Pagination
//           activePage={activePage}
//           itemsCountPerPage={PER_PAGE}
//           totalItemsCount={TOTAL_COUNT} 
//           onChange={this.handlePageChange}
//       /> */}
      
//       <Pagination
//           activePage={activePage}
//           itemsCountPerPage={10}
//           totalItemsCount={450} //This would be the length of the votingsArray which will be stored inside the votingsCount inside App state
//           pageRangeDisplayed={5} //This will be the result of dividing totalItemsCount in itemsCountPerPage
//           onChange={handlePageChange}
//       />
//    </div>
//   );
// }

// class PaginationBar extends React.Component {

//     render() {
//         let active = 2; //this will be the value of the event.target eg the page number button clicked on the pagination comp
//         let pages = 10; //this will be the number of voting records divided by the number of record we would like to display on the page
//         let items = [];
//         for (let number = 1; number <= pages; number++) {
//         items.push(
//             <Pagination.Item key={number} active={number === active}>
//                 {number}
//             </Pagination.Item>,
//         );
//     }

//     const paginationBasic = (
//           <Pagination size="sm">
//                 <Pagination.First />
//                 <Pagination.Prev /> 
//                 {items}
//                 <Pagination.Next />
//                 <Pagination.Last />
//           </Pagination>
//       );
        
//       return (
//             <div className="Pagination">
//                 {paginationBasic}    
//             </div>
//         );
//     }
//   }

  export default PaginationNav;