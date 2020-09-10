import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";
import TicketDetail from './TicketDetail';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTicketList: [
        {names: 'Sleater and Kinney',
        location: '4B',
        issue: 'Prop types are throwing an error.'}
        ],
        selectedTicket: null,
        editingTicket: false
    };
  }
  // Our first state slice determines whether or not a form should show on the page. It is local state.
  // Our second state slice holds the list of all tickets. It is shared state.
  // Our third state slice will determine whether our TicketDetail component should show or not.

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({masterTicketList: newMasterTicketList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedTicket = (id) => {
    const newSelectedTicket = this.state.masterTicketList.filter(ticket => ticket.id === id)[0];
    // Because filter() returns an array, we need to specify that we want the first (and only element) in that array. We use bracket notation to do that.
    this.setState({selectedTicket: newSelectedTicket})
  }

  handleDeletingTicket = (id) => {
    const newMasterTicketList = this.state.masterTicketList.filter(ticket => ticket.id !== id);
    this.setState({
      masterTicketList: newMasterTicketList,
      selectedTicket: null
    })
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({
      editingTicket: true
    })
  }

 

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} onClickingDelete = {this.handleDeletingTicket} onClickingEdit = { this.handleEditClick}/>
      buttonText = "Return to Ticket List";
  
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket} />
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default TicketControl;