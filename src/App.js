import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route
            path="/"
            exact
            render={() => {
              return <h1>Welocme Home</h1>;
            }}
          ></Route>

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
