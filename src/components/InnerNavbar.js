import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { thisExpression } from '@babel/types'


class InnerNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }

        this.onSortChange = this.onSortChange.bind(this);

    }

    onSortChange(changeEvent) {
        var sortByPriority = false;
        if (changeEvent.target.value === "priority") {
            sortByPriority = true;
        } else {
            sortByPriority = false;
        }
        this.props.handleSortChange(sortByPriority);
    }

    render() {
        const placeholder = (
            this.props.filterType === "tenants"?
            "Filter by name, email or apartment" :
            "Filter by title or details"
            );
        
        const filters = (
            this.props.filterType === "messages"?
            <select className="browser-default custom-select mobile-center" onChange={this.props.handleFilterChange}>
                <option value="12">Filter by priority</option>
                <option value="1">Normal</option>
                <option value="2">Important</option>     
            </select>
            : this.props.filterType === "issues"?
            <select className="browser-default custom-select mobile-center" onChange={this.props.handleFilterChange}>
                <option value="123">Filter by priority</option>
                <option value="1">Normal</option>
                <option value="2">Important</option>     
                <option value="3">Urgent</option>     
            </select>

            :null
        );

        const isHidden = (
            (this.props.filterType === "messages") || (this.props.filterType === "issues") ? null
            : "hide"
        );
        
        const colWidth = (
            (this.props.filterType === "tenants") || (this.props.filterType === "voting")? "12"
            : "6"
        );

        return (
            <Container className="NavBar">
                {/* <Row className="border justify-content-center rounded">
                    <Col className="col-auto px-0 d-flex align-items-center">
                        <i className="fas fa-search"></i>
                    </Col>
                    <Col className="col-11 px-0">
                        <Form.Control className="border-0" type="text" placeholder="Filter by text in title and details" onChange={this.handleFilterChange} />
                    </Col>
                </Row> */}
                <Row>
                    <Col lg={colWidth} className="mobile-center pb-2">
                        <Row className="border rounded justify-content-center">
                            <div className="col-auto px-0 d-flex align-items-center">
                                <i className="fas fa-search"></i>
                            </div>
                            <div className="col-11 px-0">
                                <Form.Control className="border-0" type="text" placeholder={placeholder} onChange={this.props.handleFilterChange} />
                            </div>
                        </Row>
                    </Col>
                    <Col lg={3} className="pr-0 select-wrapper mobile-center pb-2">
                        {filters}                           
                    </Col>
                    <Col lg={3} className={"px-0 text-right mobile-center pb-2 " + isHidden}>
                        <h6 className="d-inline-block align-middle mr-3">Sort by:</h6>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="date" defaultChecked onChange={this.onSortChange}/>
                            <label className="form-check-label" htmlFor="inlineRadio1">Date</label>
                            </div>
                            <div className="form-check form-check-inline mr-0">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="priority" onChange={this.onSortChange}/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Priority</label>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}




export default InnerNavbar;