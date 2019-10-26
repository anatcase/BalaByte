import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

class PaginationBar extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {
        let active = 2; //this will be the valu of the event.target eg the page number button clicked on the pagination comp
        let pages = 10; //this will be the number of voting records divided by the number of record we would like to display on the page
        let items = [];
        for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    const paginationBasic = (
          <Pagination size="sm">
                <Pagination.First />
                <Pagination.Prev /> 
                {items}
                <Pagination.Next />
                <Pagination.Last />
          </Pagination>
      );
        
      return (
            <div className="Pagination">
                {paginationBasic}    
            </div>
        
                // <div className="Pagination">
                //     <Pagination>
                //     <Pagination.First />
                //     <Pagination.Prev />
                //     <Pagination.Item>{1}</Pagination.Item>
                //     <Pagination.Ellipsis />

                //     <Pagination.Item>{10}</Pagination.Item>
                //     <Pagination.Item>{11}</Pagination.Item>
                //     <Pagination.Item active>{12}</Pagination.Item>
                //     <Pagination.Item>{13}</Pagination.Item>
                //     <Pagination.Item disabled>{14}</Pagination.Item>

                //     <Pagination.Ellipsis />
                //     <Pagination.Item>{20}</Pagination.Item>
                //     <Pagination.Next />
                //     <Pagination.Last />
                //     </Pagination>
                // </div>
        );
    }
  }

  export default PaginationBar;