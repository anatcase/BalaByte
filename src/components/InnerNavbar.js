import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


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
        const filters = (
            this.props.filterType === "messages"?
            <select className="browser-default custom-select mobile-center">
                <option>Filter by priority</option>
                <option value="1">Info</option>
                <option value="2">Important</option>     
            </select>
            :
            <select className="browser-default custom-select mobile-center">
                <option>Filter by priority</option>
                <option value="1">Normal</option>
                <option value="2">Important</option>     
                <option value="3">Urgent</option>     
            </select>
        );

        return (
            <Container className="NavBar">
                {/* <Row className="border justify-content-center rounded">
                    <Col className="col-auto px-0 d-flex align-items-center">
                        <i className="fas fa-search"></i>
                    </Col>
                    <Col className="col-11 px-0">
                        <Form.Control className="border-0" type="text" placeholder="Filter by text in title and details" onChange={this.handleSearchChange} />
                    </Col>
                </Row> */}
                <Row>
                    <Col lg={6} className="mobile-center pb-2">
                        <Row className="border rounded justify-content-center">
                            <div className="col-auto px-0 d-flex align-items-center">
                                <i className="fas fa-search"></i>
                            </div>
                            <div className="col-11 px-0">
                                <Form.Control className="border-0" type="text" placeholder="Filter by title or details" onChange={this.props.handleSearchChange} />
                            </div>
                        </Row>
                    </Col>
                    <Col lg={3} className="pr-0 select-wrapper mobile-center pb-2">
                        {/* <DropdownButton data-toggle="dropdown" id="dropdown-basic-button" variant="secondary" title="Filter by priority ">
                            <Dropdown.Item as="button">Info</Dropdown.Item>
                            <Dropdown.Item as="button">Important</Dropdown.Item>
                        </DropdownButton> */}

                            {filters}                           
                    </Col>
                    <Col lg={3} className="px-0 text-right mobile-center pb-2">
                        <h6 className="d-inline-block align-middle mr-3">Sort by:</h6>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="date" defaultChecked onChange={this.onSortChange}/>
                            <label className="form-check-label" htmlFor="inlineRadio1">Date</label>
                            </div>
                            <div className="form-check form-check-inline mr-0">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="priority" onChange={this.onSortChange}/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Priority</label>
                        </div>
                        
                        {/* <Form.Check inline label="Date" type="radio" id="inline-radio-1" />
                        <Form.Check inline label="Priority" type="radio" id="inline-radio-2" /> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}




export default InnerNavbar;