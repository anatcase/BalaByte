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
                <Row className="border justify-content-center rounded">
                    <Col className="col-auto px-0 d-flex align-items-center">
                        <i className="fas fa-search"></i>
                    </Col>
                    <Col className="col-11 px-0">
                        <Form.Control className="border-0" type="text" placeholder="Filter by text in title and details" onChange={this.handleChange} />
                    </Col>
                </Row>
            </Container>
        );
    }
}




export default MessagesNavbar;