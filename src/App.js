import React, { useEffect, useState} from "react";
import "./App.scss";


let born = false;
function App() {
    const [growth, setGrowth] =  useState(0);
    const [nirvana, setNirvana] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        console.log("i am born");
    },[]);

    useEffect(() => {
      if(!nirvana) {
        if(born) {
          console.log("Make mistake and learn");
        } else {
          born = true;
        }
      }  
      
    },[nirvana,growth]);

    useEffect(() => {
      if( growth === 210) {
        setNirvana(true);
        console.log("Nirvana achived");
        setButtonDisabled(true);
 
       } 
    },[growth]);

    const growthHandle = () => {
      setGrowth(growth + 10);
    };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Use Effect</h2>
        <h3>growth : {growth}</h3>
        <button disabled={buttonDisabled} onClick={growthHandle}>Grow</button>
      </header>
    </div>
  );
}

export default App;
