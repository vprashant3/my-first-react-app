import React  from "react";
import "./App.scss";
import { BrowserRouter, Route, Link} from "react-router-dom";
import draggableListHome from "./draggableList/home";
import componentsDemo from "./components/demo";
import HomePage from "./HomePage";

const App = () =>{
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Route path="/" exact component={HomePage}></Route>
  
        <Route path="/draggableList" exact component={draggableListHome}></Route>
        <h3><Link to="/draggableList" className='title'> Go to Draggable List</Link></h3> 

        <Route path="/compoentsDemo" exact component={componentsDemo}></Route>
        <h3><Link to="/compoentsDemo" className='title'> Go to Components Demo</Link></h3> 
       </header>
      </div>
    </BrowserRouter>  
  );
}

export default App;
