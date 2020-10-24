import React, { useState } from "react";
import "./App.scss";
import usePrevious from "./hooks/usePrevious";



function App() {
  const [age, setAge] = useState(21);
  const previousAge =  usePrevious(age);

  return (
    <div className="App">
      <header className="App-header">
        <h2>age : {age}</h2>
        <h2>previousAge : {previousAge.current}</h2>
        <button onClick={() => {setAge(age-1);}}>Make Me Younger</button>
        
      </header>
    </div>
  );
}

export default App;
