import { getElementError } from "@testing-library/react";
import React, { useState } from "react";
import "./App.scss";
import useCustomFetch from "./hooks/useCustomFetch";


function App() {
  const [url, setUrl] = useState(null);
  function getFollowers(e) {
    if(e.key === 'Enter')
     setUrl("https://api.github.com/user/"+e.target.value);
  }

  useCustomFetch(url);
  
  return (
    <div className="App">
      <header className="App-header">
       <h2>
         Get ID:
         <input onKeyPress={getFollowers}></input>
       </h2>
       
        
      </header>
    </div>
  );
}

export default App;
