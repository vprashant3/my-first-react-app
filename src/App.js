import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact component={HomePage}></Route>

          <Route path="/about" exact component={AboutPage}></Route>

          <Route
            path="/user/:firstName/:lastName"
            exact
            component={UserPage}
          ></Route>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
