import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'



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
                                <Form.Control className="border-0" type="text" placeholder="Filter by text in title and details" onChange={this.handleChange} />
                            </div>
                        </Row>
                    </Col>
                    <Col lg={2} className="pr-0">
                        <DropdownButton id="dropdown-basic-button" title="Filter by priority">
                            <Dropdown.Item href="#/">Info</Dropdown.Item>
                            <Dropdown.Item href="#">Important</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col lg={2} className="px-0">
                        <h6 className="d-inline mr-3">Sort by:</h6>
                        <Form.Check inline label="Date" type="radio" id="inline-radio-1" />
                        <Form.Check inline label="Priority" type="radio" id="inline-radio-2" />
                    </Col>
                </Row>
            </Container>
        );
    }
}




export default MessagesNavbar;