import React from "react";
import "./App.scss";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WithdrawPage from "./pages/Withdraw";
import DespositPage from "./pages/Deposit"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <NavLink className="title" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="title" to="/deposit">Deposit</NavLink>
            </li>
            <li className="title">
              <NavLink className="title" to="/withdraw">Withdraw</NavLink>
            </li>
          </ul>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/deposit" exact component={DespositPage}></Route>
          <Route path="/withdraw" exact component={WithdrawPage}  ></Route>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
