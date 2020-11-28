import React  from "react";
import "./App.scss";
import { BrowserRouter, Route, Link} from "react-router-dom";
import TicTacToeHome from "./ticTacToe/Home";
import HomePage from "./HomePage";

const App = () =>{
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Route path="/" exact component={HomePage}></Route>
  
        <Route path="/ticTacToe" exact component={TicTacToeHome}></Route>
         <h3><Link to="/ticTacToe" className='title'> Go To Tic Tage Toe Game</Link></h3>
        </header>
      </div>
    </BrowserRouter>  
  );
}

export default App;
