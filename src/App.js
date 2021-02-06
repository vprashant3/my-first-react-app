import React  from "react";
import "./App.scss";
import { BrowserRouter, Route, Link} from "react-router-dom";
import draggableListHome from "./draggableList/home";
import HomePage from "./HomePage";

const App = () =>{
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Route path="/" exact component={HomePage}></Route>
  
        <Route path="/draggableList" exact component={draggableListHome}></Route>
        <h3><Link to="/draggableList" className='title'> Go to Draggable List</Link></h3> 
       </header>
      </div>
    </BrowserRouter>  
  );
}

export default App;
