import React, { useReducer } from "react";
import "./App.scss";

const initState = {
  count : 0
}

function reducerFunction(state, aciton) {
  switch(aciton.type) {
  case "INCREMENT":
    return {count : state.count + 1};
  case "DECREMENT":
    return {count : state.count - 1};
  default :
    return state;  
}  

}
function App() {
const [state, dispatch] = useReducer(reducerFunction, initState);

  return (
      <div className="App">
        <header className="App-header">
          <h2>Use Reducer</h2>
          <h3>Count : {state.count}</h3>
          <button onClick={() => dispatch({type : "INCREMENT"})}>Increment</button>
          <button onClick={() => dispatch({type : "DECREMENT"})}>Decrement</button>

          </header>
      </div>
  );
}

export default App;
