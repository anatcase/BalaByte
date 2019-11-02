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
        const accordion = (
                    <div>
                        {
                            (() => {
                            switch(this.props.recordType) {
                                case 'issues':
                                return <IssuesAccordion records={this.props.records}/>;
                                case 'new issues':
                                return <DashboardIssuesAccordion />;
                                case 'overdue issues':
                                return <DashboardIssuesAccordion />;
                                case 'new resolved issues':
                                return <DashboardIssuesAccordion />;
                                case 'tenants':
                                return <TenantsAccordion />;
                                case 'messasges':
                                return <MessagesAccordion />;
                                case 'new messages':
                                return <DashboardNewMessagesAccordion />;
                                case 'active votings':
                                return <VotingsAccordion votingStatus="active" userType="tenant"/>;
                                case 'pending votings':
                                return <PendingVotingsAccordion />;
                                case 'voting results':
                                return <VotingsAccordion votingStatus="results"/>;
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
        
        return (
            this.props.hasRecords? 
                <div className="recordsDisplay">
                    <Records recordType={this.props.recordType}/>
                    {/* <PaginationNav />  */}
                    {/* which class should manage the activePage and totalItemsCount? */}
                    {/* <PaginationNav activePage={this.state.activePage} totalItemsCount={this.state.totalItemsCount}/> */}
                </div>
            : <NoRecords recordType={this.props.recordType}/>
        );
    }
}

export default RecordsDisplay;