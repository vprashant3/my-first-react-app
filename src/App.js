import React, { useEffect, useMemo, useState } from "react";
import "./App.scss";
import Child from "./components/child";



function App() {
  const [i, setI] = useState(0); 

  function incrementIHandle() {
    setI(i + 1);
  };

  const memoChild = useMemo(() => {
    return <Child></Child>
  },[i]);

  return (
    <div className="App">
      <header className="App-header">
        <div>Use Memo</div>
        <div>i : {i}</div>
        <button onClick={incrementIHandle}>Increment I</button> 
        <div>Normal Render</div>
        <Child></Child>
        <div>Memo Render</div>
         {memoChild}
      </header>
    </div>
  );
}

export default App;
