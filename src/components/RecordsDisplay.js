import React from 'react'
// import PaginationNav from '../components/PaginationNav';
import IssuesAccordion from '../components/IssuesAccordion';
import DashboardIssuesAccordion from '../components/DashboardIssuesAccordion';
import TenantsAccordion from '../components/TenantsAccordion';
import MessagesAccordion from '../components/MessagesAccordion';
import DashboardNewMessagesAccordion from '../components/DashboardNewMessagesAccordion';
import VotingsAccordion from '../components/VotingsAccordion';
import PendingVotingsAccordion from '../components/PendingVotingsAccordion';


class Records extends React.Component {
    
    render () {
        // console.log("rendering records " + this.props.records);
        const accordion = (
                    <div>
                        {
                            (() => {
                            switch(this.props.recordType) {
                                case 'issues':
                                return <IssuesAccordion records={this.props.records} openModal={this.props.openModal} deleteIssue={this.props.deleteIssue}/>;
                                case 'new issues':
                                return <DashboardIssuesAccordion />;
                                case 'overdue issues':
                                return <DashboardIssuesAccordion />;
                                case 'new resolved issues':
                                return <DashboardIssuesAccordion />;
                                case 'tenants':
                                return <TenantsAccordion records={this.props.records} openModal={this.props.openModal} deleteUser={this.props.deleteUser} loggedInUserId={this.props.loggedInUserId}/>;
                                case 'messages':
                                return <MessagesAccordion records={this.props.records} openModal={this.props.openModal} deleteMessage={this.props.deleteMessage} />;
                                case 'new messages':
                                return <DashboardNewMessagesAccordion />;
                                case 'active votings':
                                return <VotingsAccordion records={this.props.records} openModal={this.props.openModal} votingStatus="active" userType={this.props.userType} votesCount={this.props.votesCount}/>;
                                case 'pending votings':
                                return <PendingVotingsAccordion records={this.props.records} votingStatus="active" userType={this.props.userType} votesCount={this.props.votesCount}/>;
                                case 'voting results':
                                return <VotingsAccordion records={this.props.records} openModal={this.props.openModal} votingStatus="results" userType={this.props.userType} calcVotingResult={this.props.calcVotingResult} votesCount={this.props.votesCount}/>;
                                default:
                                return null;
                            }
                            })()
                        }
                  </div>
            
        );

        return (
            //Add a switch for different record types / module name this.props.recordType == "new issues" etc 
            <div className="Records">
                {accordion}
            </div>
        );     
    }
}

class NoRecords extends React.Component {
   
    render() {

        return (
            <p className="noRecordsMsg">There are no {this.props.recordType}. :)</p>
        );
    }
}
class RecordsDisplay extends React.Component {
  
    render() {
        // console.log("rendering RecordsDisplay " + this.props.records);
        return (
            this.props.hasRecords? 
                <div className="recordsDisplay">
                    <Records recordType={this.props.recordType} records={this.props.records} openModal={this.props.openModal} deleteIssue={this.props.deleteIssue} deleteMessage={this.props.deleteMessage} deleteUser={this.props.deleteUser} votingStatus={this.props.votingStatus} userType={this.props.userType} loggedInUserId={this.props.loggedInUserId} calcVotingResult={this.props.calcVotingResult} votesCount={this.props.votesCount} />
                    {/* <PaginationNav />  */}
                    {/* which class should manage the activePage and totalItemsCount? */}
                    {/* <PaginationNav activePage={this.state.activePage} totalItemsCount={this.state.totalItemsCount}/> */}
                </div>
            : <NoRecords recordType={this.props.recordType}/>
        );
    }
}

export default RecordsDisplay;