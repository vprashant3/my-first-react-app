import React from "react";
import {Link} from 'react-router-dom';

function HomePage() {
  return <div>
      <h1>Welcome Home</h1>
      <h3><Link to="/about"> Go To About Page</Link></h3>
      </div>;
}

export default HomePage;
