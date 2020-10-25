import React from "react";

function UserPage({ match }) {
  return (
    <h1>
      Welcome User {match.params.firstName} {match.params.lastName}
    </h1>
  );
}

export default UserPage;
