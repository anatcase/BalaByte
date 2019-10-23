import React from 'react'
import { Card } from 'react-bootstrap'


class MessagesNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        //const { recipe } = this.props;
        return (
            <Card className="recipe">
                <Card.Body>
                    <Card.Text>
                     Message search
                    </Card.Text>
                </Card.Body>
            </Card>
        //     <div className="container">
        //         <ReactBootstrap.Navbar className="px-0">
        //         <ReactBootstrap.Form.Control type="text" placeholder="Filter gallery based on actor's name" onChange={this.handleChange} />
        //         </ReactBootstrap.Navbar>
        //         <ReactBootstrap.Row className="justify-content-md-center">
        //         {actorCards}
        //         </ReactBootstrap.Row>
        //   </div>
        );
    }
}




export default MessagesNavbar;