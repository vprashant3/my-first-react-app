import React, {useRef, useEffect, useState} from "react";
import "./App.scss";

function App() {
    const [growth, setGrowth] =  useState(0);

    useEffect(() => {
        console.log("i am born");
    },[]);

    useEffect(() => {
        console.log("Make mistake and learn");
    });

    const growthHandle = () => {
      setGrowth(growth + 10);
    };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Use Effect</h2>
        <h3>growth : {growth}</h3>
        <button onClick={growthHandle}>Grow</button>
      </header>
    </div>
  );
}

export default App;
