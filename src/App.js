import React  from "react";
import "./App.scss";
import Button from  "./learning/components/button/button";

const App = () =>{
  return (
      <div className="App">
        <header className="App-header">
         <Button label="click me please"></Button>
        </header>
      </div>
  );
}

export default App;
