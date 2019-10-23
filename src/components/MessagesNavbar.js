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
        );
    }
}




export default MessagesNavbar;