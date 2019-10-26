import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

function Navigation() {
  return (
    <Pagination
        activePage={this.state.activePage}
        itemsCountPerPage={PER_PAGE}
        totalItemsCount={TOTAL_COUNT}
        onChange={this.handlePageChange}
    />
  );
}

// class PaginationBar extends React.Component {

//     render() {
//         let active = 2; //this will be the valu of the event.target eg the page number button clicked on the pagination comp
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

  export default PaginationBar;