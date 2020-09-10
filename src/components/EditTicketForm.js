import react from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditTicketForm(props){
  return (
    <React.Fragment>
      <ReusableForm 
        buttonText = "Update Ticket" />
    </React.Fragment>
  )
}

export default EditTicketForm;