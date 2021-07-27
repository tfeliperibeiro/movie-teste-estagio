import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Provider from "./context/Provider";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <Switch>
      <Provider>
        <Route exact path='/' component={Home} />
        <Route exact path='/details/:id/:title' component={Details} />
      </Provider>
    </Switch>
  );
}

export default App;
