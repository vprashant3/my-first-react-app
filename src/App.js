import React, { useEffect, useState } from "react";
import "./App.scss";


const initXY = {
  x : null,
  y : null
}
function App() {
  const [time , setTime] = useState(Date);
  const [xy, setInitXY] =  useState(initXY);

  useEffect( () => {
    setInterval(() => {
      setTime(Date);  
    }, 1000);
  });
    
  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandle);
  },[]);

  const mouseMoveHandle = (e) => {
    setInitXY({
      x : e.clientX,
      y : e.clientY
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <div >{time}</div>
        <div>{`${xy.x} ${xy.y}`}</div>
      </header>
    </div>
  );
}

export default App;
