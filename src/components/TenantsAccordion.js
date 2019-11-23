import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ImageHandler from '../components/ImageHandler';

class TenantsAccordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCardId: null,
        }

        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleAccordionToggle = this.handleAccordionToggle.bind(this);
        this.getToggleClass = this.getToggleClass.bind(this);
    }

    getCardImage(imageId) {
        if(imageId === "") {
            return "./images/placeholder-square.jpg";
        }
        else {
            return ImageHandler.GetImageUrl(imageId);
        }
    }

    handleUpdateClick(e, user) {
        this.props.openModal(e, user);
    }

    handleDeleteClick (user) {
        this.props.deleteUser(user);
    }

    getToggleClass(user) { //Presentation logic
        if(user.id === this.state.activeCardId) { //User triggered re-rendering
            return "active";
        }
    }

    handleAccordionToggle(user) { //Business logic
        let activeCardId;
        if(user.id !== this.state.activeCardId) { //First click on card toggle
            activeCardId = user.id;
        }
        else {                                   //Second click on card toggle
            activeCardId = null; 
        }
            this.setState({activeCardId: activeCardId}); //Re-render - getToggleClass will be be triggered again
    }


    render() {
        const users = this.props.records;
        const userCards = users.map((user) => 
            
                                        <Card key={user.id}>
                                            <Accordion.Toggle as={Card.Header} eventKey={user.id} className={this.getToggleClass(user)} onClick={(e)=>{this.handleAccordionToggle(user)}}>
                                                {user.get("username")}{Accordion.Toggle.eventKey}
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey={user.id}>
                                                <Card.Body>
                                                    <Row>
                                                        <Col lg={10} className="user-box">
                                                            <Row className="h-100">
                                                                <Col lg={3} className="col-width-20">
                                                                    <Card.Img className="thumbnail" src={this.getCardImage(user.get("userImage"))}/>
                                                                </Col>
                                                                <Col lg={9}>                    
                                                                    <Card.Text>
                                                                        <li className="list-group-item"><span className="font-weight-bold">Name: </span>{user.get("username")}</li>
                                                                        <li className="list-group-item"><span  className="font-weight-bold">Email: </span>{user.get("mail")}</li>
                                                                        <li className="list-group-item"><span  className="font-weight-bold">Apartment: </span>{user.get("apartment")}</li>
                                                                    </Card.Text>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        
                                                        <Col lg={2} className="p-0 d-flex align-items-end justify-content-end pt-3">
                                                            <Row className="w-100 mx-0 text-center">
                                                                <Col lg={6} className="px-0 responsive-btn-wrapper">
                                                                    <Button variant="outline-dark" className="m-0 responsive-btn" onClick={(e)=>{this.handleUpdateClick(e, user)}}>Update</Button>
                                                                </Col>
                                                                <Col lg={6} className="px-0 responsive-btn-wrapper">
                                                                    <Button disabled={this.props.loggedInUserId === user.id? true : false} variant="danger" className="m-0 responsive-btn" onClick={(e)=>{this.handleDeleteClick(user)}}>Delete</Button>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>                                                           
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>     
                                    );

        return (
        //    <div className="TenantsAccordion">
        //        <Accordion>
        //             <Card>
        //                 <Accordion.Toggle as={Card.Header} eventKey="0" className="font-weight-bold">
        //                 Dynamic Tenant Name
        //                 </Accordion.Toggle>
        //                 <Accordion.Collapse eventKey="0">
        //                     <Card.Body>
        //                         <Row>
        //                             <Col lg={10} className="pb-1">
        //                                 <Row>
        //                                     <Col lg={4}>
        //                                         <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Backyardpool.jpg"/>
        //                                     </Col>
        //                                     <Col lg={8}>                    
        //                                         <Card.Text>
        //                                             <li className="list-group-item"><span className="font-weight-bold">Name: </span>**Dynamic Tenant Name**</li>
        //                                             <li className="list-group-item"><span  className="font-weight-bold">Email: </span>**Dynamic Tenant Email**</li>
        //                                             <li className="list-group-item"><span  className="font-weight-bold">Apt: </span>**Dynamic Apt**</li>
        //                                         </Card.Text>
        //                                     </Col>
        //                                 </Row>
        //                             </Col>
        //                             <Col lg={2} className="p-0 d-flex align-items-end justify-content-end pt-3">
        //                                 <Row className="w-100 mx-0 text-center">
        //                                     <Col lg={6} className="px-0 responsive-btn-wrapper">
        //                                         <Button variant="outline-dark" className="m-0 responsive-btn">Update</Button>
        //                                     </Col>
        //                                     <Col lg={6} className="px-0 responsive-btn-wrapper">
        //                                         <Button variant="danger" className="m-0 responsive-btn">Delete</Button>
        //                                     </Col>
        //                                 </Row>
        //                                 {/* <Button variant="outline-dark" className="mx-2 align-bottom">Update</Button>
        //                                 <Button variant="danger" className="mx-2  align-bottom">Delete</Button> */}
        //                             </Col>
        //                         </Row>
        //                     </Card.Body>
        //                 </Accordion.Collapse>
        //             </Card>
        //         </Accordion>
        //    </div>
            <div className="TenantsAccordion">
                <Accordion>
                    {userCards}
                </Accordion>
            </div>
        );
    }
}

export default TenantsAccordion;