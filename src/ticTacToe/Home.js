import React from "react";
import {Link} from "react-router-dom";


function HomePage() {
  return (
    <div>
      <h1>Tic Tac Home</h1>
      <h3><Link to="/" className='title'>Go To Home</Link></h3>
      </div>
  );
}

export default HomePage;
