import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PieChart from 'react-minimal-pie-chart'
import DatePicker from "react-datepicker"
import VotingDB from '../components/VotingDB';
import 'react-datepicker/dist/react-datepicker.css'


class VotingsAccordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCardId: null
        } 

        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.handleAccordionToggle = this.handleAccordionToggle.bind(this);
        this.getToggleClass = this.getToggleClass.bind(this);

    }

    handleUpdateClick(e, voting) {
        //this.props.openModal(e, voting);
    }

    getToggleClass(voting) { //Presentation logic
        if(voting.id === this.state.activeCardId) { //User triggered re-rendering
            return "active";
        }
    }

    handleAccordionToggle(voting) { //Business logic
        let activeCardId;
        if(voting.id !== this.state.activeCardId) { //First click on card toggle
            activeCardId = voting.id;
        }
        else {                                   //Second click on card toggle
            activeCardId = null; 
        }
            this.setState({activeCardId: activeCardId}); //Re-render - getToggleClass will be be triggered again
    }

    render() {

        const votings = this.props.records;
        const votingCards = votings.map((voting) => 

                                        <Card key={voting.id}>
                                            <Accordion.Toggle as={Card.Header} eventKey={voting.id} className={this.getToggleClass(voting)} onClick={(e)=>{this.handleAccordionToggle(voting)}}>
                                                {/* <Row>
                                                    <Col lg={6} className="mobile-center">Dynamic Voting Title</Col>
                                                    <Col lg={6} className="text-right mobile-center">{this.props.votingStatus === "results"? <h6>Result: <span className="font-weight-normal">Dynamic record result</span></h6>: null}</Col>
                                                </Row> */}
                                                {voting.get("title")}{Accordion.Toggle.eventKey}
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey={voting.id}>
                                                <Card.Body>
                                                    <Row>
                                                        <Col className="voting-box" lg={6}>
                                                            <Row className="h-100">
                                                                <Col lg={8}>                    
                                                                    <Card.Text>
                                                                        <li className="list-group-item"><span className="font-weight-bold">Details: </span>{voting.get("details")}</li>
                                                                        <li className="list-group-item"><span  className="font-weight-bold">End Date: </span>{voting.get("endDate")}</li>
                                                                    </Card.Text>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col lg={4}>
                                                            <Row>
                                                                <Col>
                                                                    {/* <Comments addComment={this.addCommentHanlder} parentId={voting.id}/> */}
                                                                    {/* {this.getVotingComments(voting)} */}
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col lg={2} className="p-0 d-flex align-items-end justify-content-end pt-3">
                                                            <Row className="w-100 mx-0 text-center">
                                                                <Col lg={6} className="px-0 responsive-btn-wrapper">
                                                                    <Button variant="outline-dark" className="m-0 responsive-btn" onClick={(e)=>{this.handleUpdateClick(e, voting)}}>Update</Button>
                                                                </Col>
                                                                <Col lg={6} className="px-0 responsive-btn-wrapper">
                                                                    <Button variant="danger" className="m-0 responsive-btn" onClick={(e)=>{this.handleDeleteClick(voting)}}>Delete</Button>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>                                                           
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>     
                                    );

        // const votingAccordion = (
        //     <Accordion>
        //             <Card>
        //                 <Accordion.Toggle as={Card.Header} eventKey="0" className="font-weight-bold">
        //                 <Row>
        //                     <Col lg={6} className="mobile-center">Dynamic Voting Title</Col>
        //                     <Col lg={6} className="text-right mobile-center">{this.props.votingStatus === "results"? <h6>Result: <span className="font-weight-normal">Dynamic record result</span></h6>: null}</Col>
        //                 </Row>
        //                 {/* {this.props.votingStatus === "results"? } */}

        //                 </Accordion.Toggle>
        //                 <Accordion.Collapse eventKey="0">
        //                     <Card.Body>
        //                         <Row className="mx-0">
        //                             <Col lg={this.props.votingStatus === "results"? 5 : 8} className="px-0 d-flex flex-column justify-content-between">                    
        //                                 <Row className="py-1 mx-0 mobile-center">
        //                                         <h6 className="mr-1">Details:</h6> <span>*Dynamic Voting Details*</span>
        //                                 </Row>
        //                                 <Row className="py-1 mx-0 mobile-center">
        //                                     <Col className="px-0 d-flex align-items-center">
        //                                         <h6 className="mr-1">{this.props.votingStatus === "active"? 'End Date': 'Ended'}:</h6> <span>*Date &amp; Hour*</span>
        //                                     </Col>
        //                                     {this.props.votingStatus === "results"? null:
                                                
        //                                     <Col className={this.props.userType === "tenant"? "hide" : "px-0"}>
        //                                         <DatePicker placeholderText="Update End Date" withPortal showTimeSelect
        //                                         timeFormat="HH:mm"
        //                                         timeIntervals={30}
        //                                         timeCaption="time"
        //                                         dateFormat="MMMM d, hh:mm"/>
        //                                     </Col>
        //                                     }
        //                                 </Row>
        //                                 <Row className={this.props.votingStatus === "results" || this.props.userType === "admin" ? "hide" : "py-1 mx-0 mobile-center"}>
        //                                      <Col className="px-0 d-flex align-items-center">
        //                                         <Form.Group as={Row} controlId="formPrioritySelect" className="vote-form mx-0 mobile-center w-100">
        //                                                 <Form.Label column lg={3}>
        //                                                     Your Vote:
        //                                                 </Form.Label>
        //                                                 <Col lg={5}>
        //                                                     <Form.Control required as="select" className="priority-select">
        //                                                         <option value="In Favor">In Favor</option>
        //                                                         <option value="Against">Against</option>
        //                                                     </Form.Control>
        //                                                 </Col>
        //                                                 <Col lg={4} className="text-right mobile-center">
        //                                                     <Button type="submit">Submit Vote</Button>
        //                                                 </Col>
        //                                             </Form.Group>
        //                                     </Col>
        //                                 </Row>
        //                             </Col>
        //                             <Col lg={this.props.votingStatus === "results"? 7 : 4}>
        //                                 <Row>

        //                                 {this.props.votingStatus === "results"? 
        //                                     <Col lg={6} className="py-4-mobile">
        //                                         <h6 className="text-center mb-3">Results</h6>
        //                                         <PieChart className="chart"
        //                                             data={[
        //                                                 { title: 'For', value: 80, color: '#90ee90' },
        //                                                 { title: 'Against', value: 20, color: '#a2012c' },
        //                                             ]}
        //                                             />
        //                                     </Col>
        //                                     :null}
        //                                     <Col>
        //                                         <h6 className="text-center mb-3">Voting Precentage</h6>
        //                                         <PieChart className="chart"
        //                                             data={[
        //                                                 { title: 'For', value: 10, color: '#90ee90' },
        //                                                 { title: 'Against', value: 15, color: '#a2012c' },
        //                                             ]}
        //                                             />
        //                                     </Col>    
        //                                 </Row>                                           
        //                             </Col>
        //                         </Row>
        //                     </Card.Body>
        //                 </Accordion.Collapse>
        //             </Card>
        //         </Accordion>
        // );

        return (
           <div className="VotingsAccordion">
              <Accordion>
               {votingCards}
            </Accordion>
           </div>
        );
    }
}

export default VotingsAccordion;