import React from "react";
import PropTypes from 'prop-types';

function TicketDetail(props){
  const { ticket, onClickingDelete, onClickingEdit } = props;
  //  object destructuring to derive the ticket object from our props
  return(
    <React.Fragment>
      <p>Ticket detail</p>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <button onClick={() => onClickingDelete(ticket.id) }>Close Ticket</button>
      <button onClick={() => onClickingEdit(ticket.id) }>Update Ticket</button>
      <hr/>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default TicketDetail;