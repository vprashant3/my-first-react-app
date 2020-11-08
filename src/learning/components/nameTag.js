import React from "react";

function nameTag(props) {
  if (!props.firstName && !props.lastName) {
    return (
      <div>
        <h3 className="name">Invalid User</h3>
      </div>
    );
  }
  return (
    <div>
      <h3 style={props.style} className="name">First Name : {props.firstName}</h3>
      <h3 style={props.style} className="name">Last Name : {props.lastName}</h3>
    </div>
  );
}

export default nameTag;
