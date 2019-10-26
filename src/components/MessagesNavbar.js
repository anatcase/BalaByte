import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class MessagesNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        //const { recipe } = this.props;
        return (
            <Container fluid className="NavBar">
                {/* <Row className="border justify-content-center rounded">
                    <Col className="col-auto px-0 d-flex align-items-center">
                        <i className="fas fa-search"></i>
                    </Col>
                    <Col className="col-11 px-0">
                        <Form.Control className="border-0" type="text" placeholder="Filter by text in title and details" onChange={this.handleChange} />
                    </Col>
                </Row> */}
                <Row>
                    <Col lg={8}>
                        <Row className="border rounded justify-content-center">
                            <div className="col-auto px-0 d-flex align-items-center">
                                <i className="fas fa-search"></i>
                            </div>
                            <div className="col-11 px-0">
                                <Form.Control className="border-0" type="text" placeholder="Filter title or details" onChange={this.handleChange} />
                            </div>
                        </Row>
                    </Col>
                    <Col lg={2} className="pr-0 select-wrapper">
                        {/* <DropdownButton data-toggle="dropdown" id="dropdown-basic-button" variant="secondary" title="Filter by priority ">
                            <Dropdown.Item as="button">Info</Dropdown.Item>
                            <Dropdown.Item as="button">Important</Dropdown.Item>
                        </DropdownButton> */}

                         <select className="browser-default custom-select">
                            <option>Filter by priority</option>
                            <option value="1">Info</option>
                            <option value="2">Important</option>                            
                        </select>
                    </Col>
                    <Col lg={2} className="px-0">
                        <h6 className="d-inline-block align-middle mr-3">Sort by:</h6>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1">Date</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label class="form-check-label" for="inlineRadio2">Priority</label>
                        </div>
                        
                        {/* <Form.Check inline label="Date" type="radio" id="inline-radio-1" />
                        <Form.Check inline label="Priority" type="radio" id="inline-radio-2" /> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}




export default MessagesNavbar;