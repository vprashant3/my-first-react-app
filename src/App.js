import React  from "react";
import "./App.scss";
import { BrowserRouter, Route, Link} from "react-router-dom";
import TicTacToeHome from "./ticTacToe/Home";

const App = () =>{
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
         <h1>Welcome Home Page</h1>
         <Route path="/ticTacToe" exact component={TicTacToeHome}></Route>
         <h3><Link to="/ticTacToe" className='title'> Go To Tic Tage Toe Game</Link></h3>
        </header>
      </div>
    </BrowserRouter>  
  );
}

export default App;
