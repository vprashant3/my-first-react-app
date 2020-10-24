import React, { useState } from "react";
import "./App.scss";
import CustomButton from "./components/button";


function App() {
  const [color, setColor] = useState("red");

  function handleOnClick() {
    console.log("handling on click");
    if(color === "red")
      setColor("green");
    else
      setColor("red");  
  };
    
  return (
    <div className="App">
      <header className="App-header">
        <CustomButton color={color} onClick={handleOnClick}></CustomButton>
      </header>
    </div>
  );
}

export default App;
