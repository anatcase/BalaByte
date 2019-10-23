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
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                     Desc
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}




export default MessagesNavbar;