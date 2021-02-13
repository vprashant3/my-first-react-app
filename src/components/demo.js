import React from "react";
import { Link } from "react-router-dom";
import Button from "./button/button";


function componentsDemo() {
    
    return (
        <div>
          <h1>Draggable List Home</h1>
          <h3>
            <Link to="/" className="title">
              Go To Home
            </Link>
          </h3>
          <h3>Components Demo</h3>
          <div>
              <div>
                  <Button>click Me</Button>
              </div>
          </div>
        </div>
      );
}




export default componentsDemo;