import React, { useState, userEffect } from "react";
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div>
      <h1>Draggable List Home</h1>
      <h3>
        <Link to="/" className="title">
          Go To Home
        </Link>
      </h3>
      <div></div>
    </div>
  );
}

export default HomePage;
