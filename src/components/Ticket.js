import React from "react";
import PropTypes from "prop-types";

// we've added props as an argument to the Ticket component function's method signature (function Ticket(props)) to indicate it should now accept props. Remember that our components are just functions. All we're doing now is passing an argument (props) into our Ticket function.
function Ticket(props){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>  
      {/* As always, JSX JavaScript expressions must be wrapped in curly braces. Content inside curly braces will be evaluated instead of literally rendered. Because props is an object, we access its properties just like we would with any other object. For instance, we access the ticket's location with props.location. */}
      <hr/>
    </React.Fragment>
  )
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;